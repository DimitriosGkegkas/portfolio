"""Reference-inspired cannon. Run in the generated Blender scene after build_robotics_scene.py."""
import bpy,math,json,pathlib
from mathutils import Vector
REPO=pathlib.Path('/Users/dimitrisgkegkas/Personal/portfolio')
OUT=pathlib.Path('/Users/dimitrisgkegkas/Documents/Codex/2026-09-06/how-to-delete-things-from-my/outputs')
s=bpy.context.scene
info=json.loads((REPO/'public/robotics/model-info.json').read_text());top=info['bodyTop']
c=bpy.data.collections['Cannon payload — illustrative']
# Replace only the previous generated payload, leaving all source M20 geometry intact.
for o in list(c.objects):bpy.data.objects.remove(o,do_unlink=True)
def xyz(p):return Vector((p[0],-p[2],p[1]))
def material(name,col,metal=.5,rough=.35):
 m=bpy.data.materials.get(name) or bpy.data.materials.new(name);m.use_nodes=True;m.diffuse_color=(*col,1)
 p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*col,1);p.inputs['Metallic'].default_value=metal;p.inputs['Roughness'].default_value=rough
 return m
black=material('Cannon | anodized graphite',(.045,.055,.063),.6,.3)
steel=material('Cannon | machined collars',(.16,.19,.21),.78,.26)
silver=material('Cannon | stainless supports',(.38,.43,.46),.75,.34)
red=material('Cannon | red identification band',(.42,.035,.021),.25,.5)
face=material('Cannon | pressure dial',(.63,.67,.63),.1,.55)
def link(o,name,m):
 o.name=name
 for old in list(o.users_collection):old.objects.unlink(o)
 c.objects.link(o);o.data.materials.append(m);return o
def box(name,p,size,m,bevel=.01):
 bpy.ops.mesh.primitive_cube_add(size=1,location=xyz(p));o=bpy.context.object;o.dimensions=(size[0],size[2],size[1]);bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);link(o,name,m)
 if bevel:
  mod=o.modifiers.new('Small edge radius','BEVEL');mod.width=bevel;mod.segments=2;bpy.ops.object.modifier_apply(modifier=mod.name)
 return o
def cyl(name,a,b,r,m,r2=None,verts=24):
 a,b=xyz(a),xyz(b);d=b-a
 bpy.ops.mesh.primitive_cone_add(vertices=verts,radius1=r,radius2=r if r2 is None else r2,depth=d.length,location=(a+b)/2)
 o=bpy.context.object;o.rotation_euler=d.to_track_quat('Z','Y').to_euler();link(o,name,m)
 for p in o.data.polygons:p.use_smooth=True
 return o
def tube(name,pts,r,m):
 cu=bpy.data.curves.new(name,'CURVE');cu.dimensions='3D';cu.resolution_u=12;cu.bevel_depth=r;cu.bevel_resolution=2
 sp=cu.splines.new('POLY');sp.points.add(len(pts)-1)
 for p,v in zip(sp.points,pts):p.co=(*xyz(v),1)
 o=bpy.data.objects.new(name,cu);c.objects.link(o);cu.materials.append(m);return o
for x in [-.22,.22]:
 box('Mounting rail',[x,top+.035,.12],[.055,.055,.88],silver)
 for z in [-.18,.44]:
  box('Mounting standoff',[x,top+.09,z],[.06,.11,.09],steel)
  cyl('Mount fastener',[x,top+.146,z],[x,top+.156,z],.021,black,verts=6)
for z in [-.18,.44]:box('Crossmember',[0,top+.115,z],[.5,.06,.08],black)
y=top+.24
cyl('Main water manifold',[0,y,-.18],[0,y,.82],.077,black)
for z,r,length,m in [(.65,.09,.05,steel),(.76,.105,.1,black),(.87,.115,.075,steel),(.94,.088,.1,black)]:
 cyl('Rear hose coupling',[0,y,z-length/2],[0,y,z+length/2],r,m)
for z in [.73,.77,.82,.875,.91]:cyl('Coupling grip ring',[0,y,z],[0,y,z+.015],.116,black)
cyl('Inlet inner bore',[0,y,.988],[0,y,.995],.066,steel)
cyl('Inlet dark opening',[0,y,.996],[0,y,1.001],.052,black)
pts=[]
for i in range(13):
 t=i/12*math.pi/4;pts.append([0,y+.23*(1-math.cos(t)),-.18-.23*math.sin(t)])
tube('Forward curved elbow',pts,.081,steel)
start=Vector(pts[-1]);axis=Vector((0,math.sin(math.pi/4),-math.cos(math.pi/4)))
def along(t,x=0):
 v=start+axis*t;v.x=x;return list(v)
cyl('Monitor lower swivel',along(0),along(.16),.115,black)
cyl('Elevation joint axle',[-.17,start.y+.07,start.z-.07],[.17,start.y+.07,start.z-.07],.105,steel)
for x in [-.18,.18]:
 cyl('Side servo cap',[x-.025,start.y+.07,start.z-.07],[x+.025,start.y+.07,start.z-.07],.085,black)
 cyl('Side actuator',along(.15,x),along(.39,x),.051,black)
 for t in [.16,.19,.22,.25,.28,.31,.34,.37]:cyl('Actuator cooling fin',along(t,x),along(t+.012,x),.061,steel)
 tube('Actuator cable',[along(.38,x),along(.48,x),[x*1.05,y+.2,.12],[x*.7,y+.08,.36]],.012,black)
cyl('Monitor barrel',along(.13),along(.55),.087,black)
for t in [.17,.22,.43,.48]:cyl('Barrel collar',along(t),along(t+.028),.099,steel)
cyl('Flared nozzle',along(.53),along(.68),.09,black,r2=.133)
for t in [.61,.645,.675]:cyl('Nozzle adjustment ring',along(t),along(t+.018),.139,steel)
cyl('Nozzle lip',along(.689),along(.709),.141,black)
cyl('Nozzle inset',along(.710),along(.712),.112,steel)
cyl('Nozzle opening',along(.713),along(.715),.082,black)
for x in [-.135,.135]:
 tube('Bypass pipe',[[x,y+.045,-.21],[x,y+.17,-.17],[x,y+.17,.43],[x,y+.08,.5]],.019,silver)
for z in [-.16,.43]:cyl('Bypass union',[-.155,y+.17,z],[-.115,y+.17,z],.029,steel)
box('Valve block',[0,y+.13,.25],[.16,.16,.14],steel)
cyl('Valve stem',[0,y+.2,.25],[0,y+.29,.25],.027,silver)
box('Valve actuator',[0,y+.34,.25],[.10,.11,.09],black)
cyl('Pressure gauge neck',[.08,y+.06,.49],[.08,y+.19,.49],.018,silver)
cyl('Pressure gauge rim',[.08,y+.19,.49],[.08,y+.23,.49],.061,black)
cyl('Pressure dial',[.08,y+.231,.49],[.08,y+.234,.49],.049,face)
tube('Gauge needle',[[.08,y+.236,.49],[.058,y+.236,.46]],.003,black)
box('Control enclosure',[.235,top+.22,.12],[.14,.23,.31],black,.018)
box('Control enclosure lid',[.31,top+.22,.12],[.015,.18,.25],steel,.008)
for z in [.015,.225]:cyl('Enclosure screw',[.319,top+.285,z],[.325,top+.285,z],.012,silver,verts=8)
cyl('Identification collar',[0,y,.57],[0,y,.605],.079,red)
# Five material meshes keep the browser draw-call count low.
for o in list(c.objects):
 if o.type=='CURVE':
  bpy.ops.object.select_all(action='DESELECT');o.select_set(True);bpy.context.view_layer.objects.active=o;bpy.ops.object.convert(target='MESH')
for m in [black,steel,silver,red,face]:
 obs=[o for o in c.objects if o.type=='MESH' and o.data.materials[0]==m]
 if not obs:continue
 bpy.ops.object.select_all(action='DESELECT')
 for o in obs:o.select_set(True)
 bpy.context.view_layer.objects.active=obs[0];bpy.ops.object.join();obs[0].name=m.name
bpy.ops.object.select_all(action='DESELECT')
for o in c.objects:o.select_set(True)
bpy.ops.export_scene.gltf(filepath=str(REPO/'public/robotics/cannon-payload.glb'),use_selection=True,use_active_scene=True,export_texcoords=False,export_format='GLB',export_animations=False,export_cameras=False,export_lights=False)
info['cannonNozzleLocal']=along(.716);info['cannonInletLocal']=[0,y,1.001];info['nozzleHeight']=along(.716)[1]
(REPO/'public/robotics/model-info.json').write_text(json.dumps(info,indent=2)+'\n')
(REPO/'src/Routes/robotics/payload.json').write_text(json.dumps({'nozzle':info['cannonNozzleLocal'],'inlet':info['cannonInletLocal'],'direction':[0,.70710678,-.70710678]},indent=2)+'\n')
for o in c.objects:o.parent=bpy.data.objects['SUPPRESSION ROBOT']
s.frame_set(1)
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'Pavlou_Warehouse.blend'),compress=True)
(REPO/'scripts/cannon-refinement.log').write_text('COMPLETE: '+str(sum(len(o.data.polygons) for o in c.objects if o.type=='MESH'))+' faces')
