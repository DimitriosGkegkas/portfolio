import { useEffect, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const surfaceVertex = `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    vUv = uv;
    float ripples = sin(uv.x * 135.0 - uTime * 31.0 + uv.y * 17.0)
                  * sin(uv.x * 79.0 - uTime * 23.0);
    vec3 displaced = position + normal * ripples * 0.006 * smoothstep(0.0, 0.15, uv.x);
    vec4 mv = modelViewMatrix * vec4(displaced, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vView = -mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`;
const surfaceFragment = `
  uniform float uTime;
  uniform float uFlow;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    float rim = pow(1.0 - abs(dot(normalize(vNormal), normalize(vView))), 1.4);
    float streak = pow(0.5 + 0.5 * sin(vUv.y * 56.55 + sin(vUv.x * 19.0 - uTime * 6.0)), 6.0);
    float pulse = 0.5 + 0.5 * sin(vUv.x * 155.0 - uTime * 34.0 + vUv.y * 12.0);
    vec3 water = mix(vec3(0.37,0.61,0.72), vec3(0.88,0.97,1.0), rim * 0.55 + streak * 0.3 + pulse * 0.1);
    float alpha = (0.26 + rim * 0.28 + streak * 0.22) * uFlow;
    alpha *= 1.0 - smoothstep(0.86, 1.0, vUv.x);
    gl_FragColor = vec4(water, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;
const particleVertex = `
  uniform float uTime;
  uniform float uFlow;
  uniform float uDpr;
  uniform float uSplash;
  uniform vec3 p0;
  uniform vec3 p1;
  uniform vec3 p2;
  uniform vec3 p3;
  attribute vec4 aParticle;
  varying float vAlpha;
  varying float vShade;
  vec3 curve(float t) {
    float s = 1.0-t;
    return s*s*s*p0 + 3.0*s*s*t*p1 + 3.0*s*t*t*p2 + t*t*t*p3;
  }
  vec3 tangent(float t) {
    float s = 1.0-t;
    return normalize(3.0*s*s*(p1-p0) + 6.0*s*t*(p2-p1) + 3.0*t*t*(p3-p2));
  }
  void main() {
    float age = fract(aParticle.x + uTime * mix(1.15,0.85,uSplash));
    float angle = aParticle.y;
    vec3 pos;
    if (uSplash < 0.5) {
      vec3 direction = tangent(age);
      vec3 side = normalize(cross(direction, vec3(0.0,1.0,0.0)));
      vec3 up = normalize(cross(side,direction));
      float radius = (0.025 + pow(age,1.8)*0.24) * aParticle.z;
      pos = curve(age) + radius * (cos(angle)*side + sin(angle)*up);
      pos.y -= age*age*aParticle.z*0.07;
      vAlpha = (0.22 + aParticle.w*0.65) * smoothstep(0.0,0.1,age);
    } else {
      // Short ballistic droplets expand from the impact point, then fall to the floor.
      float speed = 0.4 + aParticle.z*1.5;
      pos = p3 + vec3(cos(angle)*speed*age, (0.8+aParticle.w*1.8)*age-2.9*age*age, sin(angle)*speed*age);
      vAlpha = (1.0-age)*(1.0-age)*0.8;
      vAlpha *= smoothstep(0.02,0.12,pos.y);
    }
    vAlpha *= uFlow;
    vShade = aParticle.w;
    vec4 mv = modelViewMatrix * vec4(pos,1.0);
    gl_Position = projectionMatrix * mv;
    float size = mix(1.3,3.5,aParticle.w) * (uSplash > 0.5 ? 1.15 : 1.0);
    gl_PointSize = clamp(size * uDpr * 7.0 / max(1.0,-mv.z),1.0,6.0*uDpr);
  }
`;
const particleFragment = `
  varying float vAlpha;
  varying float vShade;
  void main() {
    vec2 p = gl_PointCoord * 2.0 - 1.0;
    float shape = 1.0 - smoothstep(0.35,1.0,dot(p,p));
    if (shape < 0.02) discard;
    gl_FragColor = vec4(mix(vec3(0.61,0.79,0.86),vec3(0.96,1.0,1.0),vShade),shape*vAlpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

function seed(i: number) {
  const x = Math.sin(i * 127.1 + 43.2) * 43758.5453;
  return x - Math.floor(x);
}
function particles(count: number) {
  const geometry = new THREE.BufferGeometry();
  const data = new Float32Array(count * 4);
  for (let i = 0; i < count; i++) data.set([seed(i+1),seed(i+500)*Math.PI*2,seed(i+1000),seed(i+1500)],i*4);
  geometry.setAttribute('position',new THREE.BufferAttribute(new Float32Array(count*3),3));
  geometry.setAttribute('aParticle',new THREE.BufferAttribute(data,4));
  return geometry;
}

export default function WaterJet({ curve, progress, reduced }: { curve: THREE.CubicBezierCurve3; progress: number; reduced: boolean }) {
  const { gl } = useThree();
  const flow = THREE.MathUtils.smoothstep(progress,.735,.77) * (1-THREE.MathUtils.smoothstep(progress,.895,.93));
  const tube = useMemo(() => {
    const geometry = new THREE.TubeGeometry(curve,80,1,10,false);
    const positions = geometry.attributes.position;
    const point = new THREE.Vector3();
    for (let ring = 0; ring <= 80; ring++) {
      const t = ring/80, center = curve.getPointAt(t);
      const radius = .038 + Math.pow(t,1.3)*.082;
      for (let side = 0; side <= 10; side++) {
        const i = ring*11+side;
        point.fromBufferAttribute(positions,i).sub(center).multiplyScalar(radius).add(center);
        positions.setXYZ(i,point.x,point.y,point.z);
      }
    }
    geometry.computeVertexNormals();geometry.computeBoundingSphere();
    return geometry;
  },[curve]);
  useEffect(() => () => tube.dispose(),[tube]);
  const resources = useMemo(() => {
    const uniforms = {
      uTime:{value:0},uFlow:{value:0},uDpr:{value:1},
      p0:{value:new THREE.Vector3()},p1:{value:new THREE.Vector3()},p2:{value:new THREE.Vector3()},p3:{value:new THREE.Vector3()},
    };
    const surface = new THREE.ShaderMaterial({uniforms,vertexShader:surfaceVertex,fragmentShader:surfaceFragment,transparent:true,depthWrite:false,side:THREE.DoubleSide});
    const spray = new THREE.ShaderMaterial({uniforms:{...uniforms,uSplash:{value:0}},vertexShader:particleVertex,fragmentShader:particleFragment,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending});
    const splash = new THREE.ShaderMaterial({uniforms:{...uniforms,uSplash:{value:1}},vertexShader:particleVertex,fragmentShader:particleFragment,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending});
    return {uniforms,surface,spray,splash,droplets:particles(720),impact:particles(240)};
  },[]);
  useEffect(() => () => {
    resources.surface.dispose();resources.spray.dispose();resources.splash.dispose();resources.droplets.dispose();resources.impact.dispose();
  },[resources]);
  useFrame(({clock}) => {
    const u=resources.uniforms;
    u.uTime.value=reduced ? 1.5 : clock.elapsedTime;
    u.uFlow.value=flow;u.uDpr.value=gl.getPixelRatio();
    u.p0.value.copy(curve.v0);u.p1.value.copy(curve.v1);u.p2.value.copy(curve.v2);u.p3.value.copy(curve.v3);
  });
  return <group>
    <mesh geometry={tube} material={resources.surface} renderOrder={2} />
    <points geometry={resources.droplets} material={resources.spray} frustumCulled={false} renderOrder={3} />
    <points geometry={resources.impact} material={resources.splash} frustumCulled={false} renderOrder={3} />
    <mesh position={[curve.v3.x,.022,curve.v3.z]} rotation={[-Math.PI/2,0,0]} scale={[1.1,1.35,1]}>
      <circleGeometry args={[.63,40]} />
      <meshStandardMaterial color="#2b4853" metalness={.45} roughness={.16} transparent opacity={flow*.3} depthWrite={false} />
    </mesh>
  </group>;
}
