"""Run in Blender 4.5. Generates editable mission scene and web GLBs.
Camera/cannon mounts and test bay are illustrative. M20 source: supplied URDF/DAE.
"""
import bpy, math, json, pathlib, traceback
from mathutils import Vector, Matrix, Euler
REPO=pathlib.Path('/Users/dimitrisgkegkas/Personal/portfolio')
OUT=pathlib.Path('/Users/dimitrisgkegkas/Documents/Codex/2026-09-06/how-to-delete-things-from-my/outputs')
LOG=REPO/'scripts/scene-build.log'
def run():
 scene=bpy.data.scenes.new('PAVLOU — Warehouse mission')
 bpy.context.window.scene=scene
 def collection(name):
  c=bpy.data.collections.new(name);scene.collection.children.link(c);return c
 env=collection('01 | Warehouse'); robots=collection('02 | M20 robots'); paths=collection('03 | Mission paths'); lights=collection('04 | Lighting and camera')
 def move(o,c):
  for old in list(o.users_collection):old.objects.unlink(o)
  c.objects.link(o);return o
 def mat(name,c,metal=0,rough=.7,emission=0):
  m=bpy.data.materials.new(name);m.diffuse_color=(*c,1);m.use_nodes=True
  p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*c,1);p.inputs['Metallic'].default_value=metal;p.inputs['Roughness'].default_value=rough
  if emission:p.inputs['Emission Color'].default_value=(*c,1);p.inputs['Emission Strength'].default_value=emission
  return m
 floor=mat('Basalt floor',(.075,.085,.095),.2,.78)
 steel=mat('Graphite steel',(.055,.067,.078),.55,.45)
 wall=mat('Charcoal walls',(.035,.044,.052))
 crate=mat('Storage grey',(.14,.16,.175),.15,.7)
 white=mat('Porcelain markings',(.52,.57,.6),.1,.55)
 amber=mat('Safety amber',(.8,.21,.035),.2,.55)
 strip=mat('Overhead soft white',(.68,.82,1),0,.4,4)
 red=mat('Response red',(.5,.045,.025),.3,.38)
 black=mat('Robot rubber',(.022,.028,.035),.1,.8)
 shell=mat('M20 shell',(.52,.57,.60),.42,.42)
 alloy=mat('M20 mechanism',(.1,.13,.15),.65,.45)
 lens=mat('Camera glass',(.035,.36,.42),.5,.2,1)
 def xyz(p):return (p[0],-p[2],p[1])
 def box(name,p,size,m,c=env,bevel=0):
  bpy.ops.mesh.primitive_cube_add(size=1,location=xyz(p));o=bpy.context.object;o.name=name;o.dimensions=(size[0],size[2],size[1]);bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(m);move(o,c)
  if bevel:
   mod=o.modifiers.new('Soft edges','BEVEL');mod.width=bevel;mod.segments=2
   bpy.context.view_layer.objects.active=o;bpy.ops.object.modifier_apply(modifier=mod.name)
  return o
 def tube(name,pts,r,m,c=env):
  cu=bpy.data.curves.new(name,'CURVE');cu.dimensions='3D';cu.resolution_u=16;cu.bevel_depth=r;cu.bevel_resolution=2
  sp=cu.splines.new('POLY');sp.points.add(len(pts)-1)
  for a,b in zip(sp.points,pts):a.co=(*xyz(b),1)
  o=bpy.data.objects.new(name,cu);c.objects.link(o);o.data.materials.append(m);return o
 box('Foundation', [0,-.15,-4.5],[18,.3,29],floor)
 box('Rear wall',[0,3,-18],[18,6,.2],wall)
 # Side walls are low so the camera can follow unobstructed; high structure reads as a warehouse.
 for x in [-8.8,8.8]:box('Perimeter wall',[x,1.1,-4.5],[.16,2.2,27],wall)
 for z in [7,2,-3,-8,-13,-18]:
  for x in [-8,8]:
   box('Portal column',[x,3,z],[.24,6,.32],steel)
   box('Column foot',[x,.16,z],[.54,.32,.6],alloy)
   box('Safety band',[x,.75,z],[.25,.12,.33],amber)
  box('Roof portal',[0,5.9,z],[16,.24,.32],steel)
  box('Light housing',[0,5.7,z],[6,.12,.3],alloy)
  box('Luminous strip',[0,5.62,z],[5.8,.035,.16],strip)
 for x in [-3.25,3.25]:box('Aisle boundary',[x,.009,-3],[.035,.012,23],white)
 for z in range(-16,8,2):box('Center lane dash',[0,.009,z],[.045,.012,.55],amber)
 # Sparse industrial racking. Leave the rear test bay open.
 for x in [-5.7,5.7]:
  for bay,z in enumerate([3,-2,-7]):
   for dx in [-1.3,1.3]:
    for dz in [-1.65,1.65]:box('Rack upright',[x+dx,1.9,z+dz],[.09,3.8,.09],steel)
   for y in [.18,1.5,2.85]:
    box('Rack shelf',[x,y,z],[2.8,.09,3.6],alloy)
    for j in [-1,1]:
     h=.7 if y>2 else .95
     box('Cargo container',[x,y+h/2+.06,z+j*.88],[2.05,h,1.35],crate,bevel=.045)
     box('Cargo seam',[x+1.035,y+h/2+.06,z+j*.88],[.015,h*.65,.025],white)
     box('Cargo tag',[x+1.045,y+.22,z+j*.88],[.018,.09,.25],amber)
 # Shutter and quiet rear-wall detail.
 box('Loading door',[0,2.2,-17.85],[5,4.4,.08],steel)
 for y in range(1,14):box('Shutter slat',[0,y*.3,-17.79],[4.9,.025,.03],alloy)
 for x in [-2.7,2.7]:box('Door frame',[x,2.25,-17.65],[.14,4.5,.14],white)
 for z in [-10,-13]:box('Test bay line',[0,.014,z],[5,.016,.045],amber)
 box('Burn tray',[.2,.12,-11.4],[1.25,.24,1.2],black,bevel=.07)
 for x in [-.16,.28,.55]:box('Test fuel block',[x,.3,-11.4],[.23,.3,.65],crate,bevel=.03)
 # Merge the environment by material for low draw-call count.
 for o in list(env.objects):
  if o.type=='CURVE':
   bpy.ops.object.select_all(action='DESELECT');o.select_set(True);bpy.context.view_layer.objects.active=o;bpy.ops.object.convert(target='MESH')
 for m in [floor,steel,wall,crate,white,amber,strip,alloy,black]:
  obs=[o for o in env.objects if o.type=='MESH' and o.data.materials and o.data.materials[0]==m]
  if not obs:continue
  bpy.ops.object.select_all(action='DESELECT')
  for o in obs:o.select_set(True)
  bpy.context.view_layer.objects.active=obs[0];bpy.ops.object.join();obs[0].name='Warehouse_'+m.name.replace(' ','_')
 def export(c,file):
  bpy.ops.object.select_all(action='DESELECT')
  for o in c.all_objects:o.select_set(True)
  bpy.ops.export_scene.gltf(filepath=str(REPO/'public/robotics'/file),use_selection=True,use_active_scene=True,export_texcoords=False,export_format='GLB',export_animations=False,export_cameras=False,export_lights=False,export_extras=True)
 export(env,'warehouse.glb')
 # Assemble the actual supplied M20 using URDF transforms.
 import xml.etree.ElementTree as ET
 urdf=ET.parse(REPO/'public/M20/urdf/M20_high_res.urdf').getroot()
 trans={'base_link':Matrix.Identity(4)}
 for j in urdf.findall('joint'):
  ori=j.find('origin');v=[float(x) for x in ori.get('xyz','0 0 0').split()];r=[float(x) for x in ori.get('rpy','0 0 0').split()]
  axis=Vector([float(x) for x in j.find('axis').get('xyz').split()]) if j.find('axis') is not None else Vector((0,0,1))
  name=j.get('name');angle=.65 if 'hipy' in name else (-1.3 if 'knee' in name else 0)
  trans[j.find('child').get('link')]=trans[j.find('parent').get('link')]@Matrix.Translation(v)@Euler(r,'XYZ').to_matrix().to_4x4()@Matrix.Rotation(angle,4,axis)
 imported=[]
 for link in urdf.findall('link'):
  name=link.get('name');mesh=link.find('visual/geometry/mesh')
  if mesh is None:continue
  before=set(bpy.data.objects)
  bpy.ops.wm.collada_import(filepath=str((REPO/'public/M20/urdf'/mesh.get('filename')).resolve()))
  obs=list(set(bpy.data.objects)-before)
  parts=[]
  for o in obs:
   if o.type!='MESH':bpy.data.objects.remove(o,do_unlink=True);continue
   
   while len(o.data.uv_layers):o.data.uv_layers.remove(o.data.uv_layers[0])
   world=o.matrix_world.copy();o.parent=None;o.matrix_world=trans[name]@world
   # Consolidate neutral CAD materials while preserving the shell/mechanism contrast.
   for i,m in enumerate(o.data.materials):
    brightness=sum(m.diffuse_color[:3])/3 if m else .4
    o.data.materials[i]=black if brightness<.15 else (alloy if brightness<.4 else shell)
   if not o.data.materials:o.data.materials.append(shell)
   move(o,robots);parts.append(o)
  bpy.ops.object.select_all(action='DESELECT')
  for o in parts:o.select_set(True)
  bpy.context.view_layer.objects.active=parts[0];bpy.ops.object.join();o=parts[0];o.name='M20_'+name
  bpy.ops.object.transform_apply(location=True,rotation=True,scale=True)
  if len(o.data.polygons)>1500:
   d=o.modifiers.new('Web simplification','DECIMATE');d.ratio=.28;bpy.ops.object.modifier_apply(modifier=d.name)
  for p in o.data.polygons:p.use_smooth=True
  imported.append(o)
 bpy.context.view_layer.update()
 low=min((o.matrix_world@Vector(v)).z for o in imported for v in o.bound_box)
 rot=Matrix.Rotation(math.pi/2,4,'Z')
 for o in imported:
  o.matrix_world=Matrix.Scale(1.7,4)@Matrix.Translation((0,0,-low))@rot@o.matrix_world
  bpy.context.view_layer.objects.active=o;o.select_set(True)
  bpy.ops.object.transform_apply(location=True,rotation=True,scale=True)
  o.select_set(False)
 bpy.context.view_layer.update()
 top=max((o.matrix_world@Vector(v)).z for o in imported for v in o.bound_box)
 export(robots,'m20.glb')
 # Camera and cannon are deliberately schematic payloads, each exported separately.
 cameraPayload=collection('Camera payload — illustrative')
 box('Camera mounting plate',[0,top+.025,0],[.48,.05,.4],alloy,cameraPayload,.025)
 box('Camera pedestal',[0,top+.14,-.08],[.13,.2,.14],black,cameraPayload,.02)
 box('Dual light housing',[0,top+.3,-.08],[.43,.22,.28],shell,cameraPayload,.035)
 for x in [-.105,.105]:
  bpy.ops.mesh.primitive_cylinder_add(vertices=24,radius=.064,depth=.035,location=xyz([x,top+.31,-.235]),rotation=(math.pi/2,0,0));o=bpy.context.object;o.name='RGB lens' if x<0 else 'Thermal lens';move(o,cameraPayload);o.data.materials.append(lens if x<0 else amber)
 export(cameraPayload,'camera-payload.glb')
 cannon=collection('Cannon payload — illustrative')
 box('Cannon mounting plate',[0,top+.02,0],[.55,.08,.6],alloy,cannon,.03)
 box('Cannon turret',[0,top+.17,0],[.32,.23,.32],red,cannon,.07)
 tube('Water cannon barrel',[[0,top+.22,.08],[0,top+.42,-.1],[0,top+.5,-.62]],.082,red,cannon)
 tube('Cannon nozzle',[[0,top+.5,-.61],[0,top+.52,-.78]],.06,alloy,cannon)
 tube('Water inlet',[[0,top+.16,.1],[0,top+.12,.5],[0,top-.2,.6]],.05,red,cannon)
 for o in list(cannon.objects):
  if o.type=='CURVE':
   bpy.ops.object.select_all(action='DESELECT');o.select_set(True);bpy.context.view_layer.objects.active=o;bpy.ops.object.convert(target='MESH')
 export(cannon,'cannon-payload.glb')
 # Parent variants for a fully editable timeline scene.
 def empty(name):
  o=bpy.data.objects.new(name,None);robots.objects.link(o);return o
 detector=empty('DETECTION ROBOT');responder=empty('SUPPRESSION ROBOT')
 for o in imported:
  clone=o.copy();clone.data=o.data;robots.objects.link(clone);clone.parent=responder;o.parent=detector
 for o in cameraPayload.objects:o.parent=detector
 for o in cannon.objects:o.parent=responder
 mission=json.loads((REPO/'src/Routes/robotics/mission.json').read_text())
 for field,root in [('robot',detector),('responder',responder)]:
  pts=[f[field] for f in mission['frames']]
  path=tube(field.upper()+' • scroll path',[[v[0],.03,v[2]] for v in pts],.018,lens if field=='robot' else amber,paths);path.hide_render=True
  for f in mission['frames']:
   frame=1+round(f['p']*300);root.location=xyz(f[field]);root.keyframe_insert(data_path='location',frame=frame)
 for f,label in zip(mission['frames'],['01 Enter','02 Verify','03 Localize','04 Transfer','05 Suppress','06 Engineering']):scene.timeline_markers.new(label,frame=1+round(f['p']*300))
 hose=tube('Supply hose • final approach',[[3.1,.055,8],[3.1,.055,5.4],[2.3,.055,1],[1.6,.055,-2.7],[1.5,.055,-6.9]],.05,red,paths)
 bpy.ops.object.camera_add();cam=move(bpy.context.object,lights);cam.name='Scroll camera';scene.camera=cam;cam.data.lens=35
 for f in mission['frames']:
  cam.location=xyz(f['camera']);direction=Vector(xyz(f['target']))-cam.location;cam.rotation_euler=direction.to_track_quat('-Z','Y').to_euler();fr=1+round(f['p']*300);cam.keyframe_insert(data_path='location',frame=fr);cam.keyframe_insert(data_path='rotation_euler',frame=fr)
 for z in [5,0,-5,-10,-15]:
  bpy.ops.object.light_add(type='AREA',location=xyz([0,5.5,z]));o=move(bpy.context.object,lights);o.data.energy=950;o.data.shape='DISK';o.data.size=7
 scene.world=bpy.data.worlds.new('Dark warehouse world');scene.world.use_nodes=True;scene.world.node_tree.nodes['Background'].inputs[0].default_value=(.13,.17,.21,1);scene.world.node_tree.nodes['Background'].inputs[1].default_value=.35
 scene.render.engine='CYCLES';scene.cycles.samples=24;scene.render.resolution_x=1440;scene.render.resolution_y=900;scene.render.resolution_percentage=100
 scene.frame_end=301;scene.frame_set(1)
 scene['README']='Stylized portfolio mission. Scrub frames 1–301. Blue/orange curves are route guides (hidden in render). Payload mounts are illustrative. Web timeline: src/Routes/robotics/mission.json. Source assets: public/M20.'
 bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'Pavlou_Warehouse.blend'),compress=True)
 (REPO/'public/robotics/model-info.json').write_text(json.dumps({'bodyTop':top,'nozzleHeight':top+.52,'robotTriangles':sum(len(o.data.polygons) for o in imported)},indent=2))
 LOG.write_text('COMPLETE\n'+json.dumps({'bodyTop':top,'objects':len(scene.objects)}))
try:
 run()
 exec(compile((REPO/'scripts/refine_cannon.py').read_text(), 'refine_cannon.py', 'exec'))
 exec(compile((REPO/'scripts/finalize_robotics_scene.py').read_text(), 'finalize_robotics_scene.py', 'exec'))
except:LOG.write_text(traceback.format_exc())
