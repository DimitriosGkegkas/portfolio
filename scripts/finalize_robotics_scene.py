import bpy,json,pathlib,math
from mathutils import Vector
s=bpy.context.scene
repo=pathlib.Path('/Users/dimitrisgkegkas/Personal/portfolio')
mission=json.loads((repo/'src/Routes/robotics/mission.json').read_text())
cam=s.camera
cam.data.sensor_fit='VERTICAL';cam.data.sensor_height=24;cam.data.lens=24/(2*math.tan(math.radians(22)))
name='Scroll camera target'
target=bpy.data.objects.get(name)
if not target:
 target=bpy.data.objects.new(name,None);bpy.data.collections['04 | Lighting and camera'].objects.link(target)
con=cam.constraints.get('Follow mission target') or cam.constraints.new('TRACK_TO');con.name='Follow mission target';con.target=target;con.track_axis='TRACK_NEGATIVE_Z';con.up_axis='UP_Y'
for f in mission['frames']:
 fr=1+round(f['p']*300)
 cam.location=(f['camera'][0],-f['camera'][2],f['camera'][1]);cam.keyframe_insert(data_path='location',frame=fr)
 target.location=(f['target'][0],-f['target'][2],f['target'][1]);target.keyframe_insert(data_path='location',frame=fr)
 for name,angle in [('DETECTION ROBOT',-.26 if f['p']>=.4 else 0),('SUPPRESSION ROBOT',.32 if f['p']>=.8 else 0)]:
  o=bpy.data.objects[name];o.rotation_euler.z=angle;o.keyframe_insert(data_path='rotation_euler',frame=fr)
# Hold the first pose through the LiDAR introduction (12% of the scroll).
f=mission['frames'][0]
cam.location=(f['camera'][0],-f['camera'][2],f['camera'][1]);cam.keyframe_insert(data_path='location',frame=37)
target.location=(f['target'][0],-f['target'][2],f['target'][1]);target.keyframe_insert(data_path='location',frame=37)
for name,field in [('DETECTION ROBOT','robot'),('SUPPRESSION ROBOT','responder')]:
 o=bpy.data.objects[name];v=f[field];o.location=(v[0],-v[2],v[1]);o.keyframe_insert(data_path='location',frame=37)
# Remove unused CAD UV maps from these newly imported presentation meshes.
seen=set()
for o in s.objects:
 if o.type=='MESH' and o.data not in seen:
  seen.add(o.data)
  while len(o.data.uv_layers):o.data.uv_layers.remove(o.data.uv_layers[0])
for o in [cam,target,bpy.data.objects['DETECTION ROBOT'],bpy.data.objects['SUPPRESSION ROBOT']]:
 if o.animation_data and o.animation_data.action:
  for fc in o.animation_data.action.fcurves:
   pts=fc.keyframe_points
   for i,k in enumerate(pts):
    k.interpolation='BEZIER';k.handle_left_type='FREE';k.handle_right_type='FREE';left=(k.co.x-pts[i-1].co.x)/3 if i else 20;right=(pts[i+1].co.x-k.co.x)/3 if i<len(pts)-1 else 20;k.handle_left=(k.co.x-left,k.co.y);k.handle_right=(k.co.x+right,k.co.y)
s.frame_set(1);s.view_settings.exposure=-1.2
s.render.resolution_x=1200;s.render.resolution_y=750;s.cycles.samples=12
s.render.filepath='/Users/dimitrisgkegkas/Documents/Codex/2026-09-06/how-to-delete-things-from-my/outputs/Warehouse_Preview.png'
bpy.ops.wm.save_as_mainfile(filepath='/Users/dimitrisgkegkas/Documents/Codex/2026-09-06/how-to-delete-things-from-my/outputs/Pavlou_Warehouse.blend',compress=True)
bpy.ops.render.render(write_still=True)
