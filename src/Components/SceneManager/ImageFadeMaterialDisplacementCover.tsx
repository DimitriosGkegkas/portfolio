// @ts-nocheck
import React, { forwardRef, type JSX } from 'react'
import { shaderMaterial } from '@react-three/drei'
import { Color, Matrix4, Object3D, ShaderMaterial, Texture } from 'three'
import { extend } from '@react-three/fiber'

const o = new Object3D()
o.position.set(0, 0.05, 0)
o.scale.set(0.5, 0.5, 0.5)
o.updateMatrixWorld()

/**
 *
 * TODO Clean up the code
 * Add commendation
 *
 * */
const ImageFadeMaterialDisplacement = shaderMaterial(
    {
        effectFactor: 1.2,
        dispFactor: 0,
        tex: null,
        disp: null,
        binary: false,
        useHole: false,
        solid: false,
        binaryThreshold: 0.5,
        darkColor: [0, 0, 0],
        lightColor: [1, 1, 1],
        backColor: [1, 1, 1],
        background: false,
        transparent: true,
        hole: 0.0,
        matrix: o.matrixWorld,
        inverseHole: true,
        holeSmoothEdges: 0.0,
        noiseIntensity: 1.0,
        time: 0.0, // Add time uniform
        toneMapped: false,
    },
    /*glsl*/ `
    varying vec2 vUv;
    varying vec3 custom_vPosition;
    void main() {
      vUv = uv;
      custom_vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
    
    
    `,
    /*glsl*/ ` 
    varying vec2 vUv;
    uniform sampler2D tex;
    uniform sampler2D disp;
    uniform float dispFactor;
    uniform float effectFactor;
    uniform bool binary;
    uniform bool solid;
    uniform bool useHole;
    uniform float binaryThreshold;
    uniform vec3 darkColor;
    uniform vec3 lightColor; 
    uniform vec3 backColor;
    uniform bool background;
    uniform float hole;
    uniform mat4 matrix;
    uniform bool inverseHole;
    uniform float holeSmoothEdges;
    uniform float noiseIntensity;
    uniform float time; // Add time uniform

    varying vec3 custom_vPosition;
    
    float sdfBox(vec3 p, float b) {
      vec3 q = abs(p) - vec3(b);
      // return length(max(q,0.0)) + min(max(q.z,q.x),0.0);
      return length(max(vec2(q.x,q.y),0.0)) + min(max(q.y,q.x),0.0);

    }
    vec3 transform(vec3 p) {
      return (inverse(matrix)  *vec4(p, 1.0)).xyz/(hole+0.0001);
    }

    void main() {
      float dispFactor = exp(dispFactor * dispFactor * dispFactor * dispFactor) - 1.0;
      vec2 uv = vUv; // Apply time-based offset to uv coordinates
      vec2 texSize = vec2(textureSize(tex, 0));
      vec2 dispSize = vec2(textureSize(disp, 0));
      
      
      vec4 disp = texture2D(disp, texSize * (uv+ vec2(-time * 0.01, -time * 0.05)) / (dispSize * 2.0));
      float noise = smoothstep(0.0, 1.0, disp.g);
      vec4 _texture = texture2D(tex, uv);

      // _texture = vec4( mix( pow( _texture.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), _texture.rgb * 0.0773993808, vec3( lessThanEqual( _texture.rgb, vec3( 0.04045 ) ) ) ), _texture.w );

      gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      gl_FragColor.a = _texture.a;

      if (useHole && hole >= 0.0) {
        vec3 transformed = transform(custom_vPosition);
        if (inverseHole) {
          float alpha = smoothstep(hole, max(hole - holeSmoothEdges, 0.0), sdfBox(transformed, hole - noiseIntensity * noise));
          if (_texture.a > alpha)
            gl_FragColor.a = alpha;          
        } else {
          float alpha = smoothstep(max(hole - holeSmoothEdges, 0.0), hole, sdfBox(transformed, hole - noiseIntensity * noise));
          gl_FragColor.a = alpha;   
        }
      }

      if (noise < dispFactor && _texture.a > 0.1) {
        if (solid) { 
          gl_FragColor.rgb = darkColor;
        } else if (binary) {
          if (_texture.r < binaryThreshold && _texture.a > 0.1) {
            gl_FragColor.rgb = darkColor;
          } else {
            gl_FragColor.rgb = lightColor;
          }
        } else {
          gl_FragColor.rgb = _texture.rgb;
        }
      } else {
        gl_FragColor.rgb = backColor;
        if (!background) {
          gl_FragColor.a = 0.0;
        }
      }
    }`
)

extend({
    ImageFadeMaterialDisplacement,
})

declare module '@react-three/fiber' {
  interface ThreeElements {
    imageFadeMaterialDisplacement: JSX.IntrinsicElements['shaderMaterial'] & {
      ref?: React.Ref<ShaderMaterial>
      // Add any props you want to type explicitly:
      effectFactor?: number
      dispFactor?: number
      time?: number
      tex?: Texture
      disp?: Texture
      binary?: boolean
      solid?: boolean
      useHole?: boolean
      binaryThreshold?: number
      darkColor?: Color | [number, number, number]
      lightColor?: Color | [number, number, number]
      backColor?: Color | [number, number, number]
      background?: boolean
      transparent?: boolean
      hole?: number
      matrix?: Matrix4
      inverseHole?: boolean
      holeEdgeFade?: number
      noiseIntensity?: number
      holeSmoothEdges?: number
      
    }
  }
}

interface ImageFadeMaterialDisplacementProps {
    effectFactor?: number
    dispFactor?: number
    tex?: Texture
    disp?: Texture
    binary?: boolean
    solid?: boolean
    useHole?: boolean
    binaryThreshold?: number
    darkColor?: Color
    lightColor?: Color
    backColor?: Color
    background?: boolean
    transparent?: boolean
    hole?: number
    matrix?: Matrix4
    inverseHole?: boolean
    holeEdgeFade?: number
    noiseIntensity?: number
    holeSmoothEdges?: number
    time?: number
}

function ImageFadeMaterialDisplacementCover(
    props: ImageFadeMaterialDisplacementProps,
    ref: React.Ref<
        typeof ImageFadeMaterialDisplacement &
            ImageFadeMaterialDisplacementProps
    >
) {
    return <imageFadeMaterialDisplacement {...props} ref={ref} />
}

export { ImageFadeMaterialDisplacement, type ImageFadeMaterialDisplacementProps }
export default forwardRef(ImageFadeMaterialDisplacementCover)
