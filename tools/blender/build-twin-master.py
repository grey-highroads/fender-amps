"""Build a separate, metre-scale first factory-configuration Twin master.
Run with Blender --background --factory-startup --python this_file.
All detail dimensions except the reported cabinet envelope are estimates.
This does not modify an interactive Blender session or the production app.
"""
import bpy, math, json
from pathlib import Path
from mathutils import Vector
ROOT=Path(__file__).resolve().parents[2]
OUT=ROOT/'models/twin-1968'
D=json.loads((OUT/'dimensions.json').read_text())
SURF=json.loads((OUT/'surface-settings.json').read_text())
E=D['estimates']; W,H,DEP=[D['cabinet'][k] for k in ('width','height','depth')]
mm=lambda v:v*.001
scene=bpy.context.scene
# Background process gets a new scene; no existing scene is edited or deleted.
scene=bpy.data.scenes.new('Twin 1968 — factory JBL option — master 0.3')
bpy.context.window.scene=scene
scene.unit_settings.system='METRIC';scene.unit_settings.scale_length=1;scene.unit_settings.length_unit='MILLIMETERS'
scene['specimen']=D['specimen'];scene['dimension_basis']=D['cabinet']['basis'];scene['status']='First assembly study; not a completed faithful replica'
collections={}
for name in ['01 Cabinet','02 Front and grille','03 Chassis and controls','04 Speakers JBL option','05 Hardware','90 Review studio']:
 c=bpy.data.collections.new(name);scene.collection.children.link(c);collections[name]=c
active='01 Cabinet'
def link(obj):
 for c in list(obj.users_collection):c.objects.unlink(obj)
 collections[active].objects.link(obj)
 return obj
root=bpy.data.objects.new('Twin_1968_Factory_JBL_Option',None);collections[active].objects.link(root)
root['revision']=D['revision'];root['units']='metres';root['reference_url']=D['source'];root['support_configuration']=D['configuration']['support'];root['speaker_configuration']='Documented JBL D120F factory option';root['accuracy']='Reported cabinet envelope; estimated subdimensions. JBL factory option; specimen photographs do not establish standard equipment.'
def material(name,color,metal=0,rough=.5):
 m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True
 bs=m.node_tree.nodes.get('Principled BSDF');bs.inputs['Base Color'].default_value=(*color,1);bs.inputs['Metallic'].default_value=metal;bs.inputs['Roughness'].default_value=rough
 return m
black=material('Black molded plastic',(.012,.014,.015),0,.33)
chrome=material('Nickel plated hardware',(.57,.59,.56),.95,.25)
aluminum=material('Brushed aluminum',(.56,.58,.56),.85,.33)
wood=material('Unfinished dark cabinet interior',(.10,.065,.035),0,.85)
cone=material('JBL paper cone',(.033,.029,.025),0,.92)
cast=material('JBL cast aluminum basket',(.28,.29,.27),.6,.5)
magnet=material('JBL gray brown motor',(.21,.18,.15),.35,.65)
ivory=material('Ivory lettering',(.78,.76,.66),0,.65)
blue=material('Silverface blue ink',(.004,.26,.30),0,.55)
red=material('Ruby pilot glass',(.23,.003,.008),.1,.18)
red.node_tree.nodes.get('Principled BSDF').inputs['Coat Weight'].default_value=.8

def image_material(name,file,metal=0,rough=.5,alpha=False):
 m=material(name,(1,1,1),metal,rough);nt=m.node_tree;bs=nt.nodes.get('Principled BSDF');im=nt.nodes.new('ShaderNodeTexImage');im.image=bpy.data.images.load(str(OUT/'textures'/file),check_existing=True);nt.links.new(im.outputs['Color'],bs.inputs['Base Color'])
 if alpha:nt.links.new(im.outputs['Alpha'],bs.inputs['Alpha'])
 return m
cover=image_material('Black Tolex — generated 32 mm tile','tolex-color.png',0,.56)
nt=cover.node_tree;bs=nt.nodes.get('Principled BSDF')
n=nt.nodes.new('ShaderNodeTexImage');n.image=bpy.data.images.load(str(OUT/'textures/tolex-normal.png'));n.image.colorspace_settings.name='Non-Color';nm=nt.nodes.new('ShaderNodeNormalMap');nm.inputs['Strength'].default_value=SURF['tolex-black']['normalScale'];nt.links.new(n.outputs['Color'],nm.inputs['Color']);nt.links.new(nm.outputs['Normal'],bs.inputs['Normal'])
r=nt.nodes.new('ShaderNodeTexImage');r.image=bpy.data.images.load(str(OUT/'textures/tolex-roughness.png'));r.image.colorspace_settings.name='Non-Color';nt.links.new(r.outputs['Color'],bs.inputs['Roughness'])
cloth=image_material('Silver aqua woven grille — photographic study','grille-color.png',1,1)
nt=cloth.node_tree;bs=nt.nodes.get('Principled BSDF')
for file,socket in [('grille-roughness.png','Roughness'),('grille-metallic.png','Metallic')]:
 im=nt.nodes.new('ShaderNodeTexImage');im.image=bpy.data.images.load(str(OUT/'textures'/file));im.image.colorspace_settings.name='Non-Color';nt.links.new(im.outputs['Color'],bs.inputs[socket])
n=nt.nodes.new('ShaderNodeTexImage');n.image=bpy.data.images.load(str(OUT/'textures/grille-normal.png'));n.image.colorspace_settings.name='Non-Color';nm=nt.nodes.new('ShaderNodeNormalMap');nm.inputs['Strength'].default_value=SURF['cloth-silver-blue']['normalScale'];nt.links.new(n.outputs['Color'],nm.inputs['Color']);nt.links.new(nm.outputs['Normal'],bs.inputs['Normal'])
frontart=image_material('Early silverface panel — interpretive artwork','panel-color.png',.75,.32)
logo=image_material('Fender badge — existing vector silhouette','fender-badge.png',.75,.27,True)
jbl=image_material('JBL corner badge — interpretive artwork','jbl-badge.png',.35,.45)

def finish(o,mat,parent=True):
 link(o)
 if mat:o.data.materials.append(mat)
 if parent:o.parent=root
 o['dimension_basis']='Photographic modeling estimate; see dimensions.json'
 return o

def uv_physical(o,tile):
 me=o.data;uv=me.uv_layers.new(name='Physical scale UV');uv.active_render=True
 for poly in me.polygons:
  normal=poly.normal;axis=max(range(3),key=lambda a:abs(normal[a]));axes=[a for a in range(3) if a!=axis]
  for li in poly.loop_indices:
   p=me.vertices[me.loops[li].vertex_index].co;uv.data[li].uv=(p[axes[0]]/mm(tile),p[axes[1]]/mm(tile))

def bevel(o,width=1,segments=3):
 mod=o.modifiers.new('Soft manufactured edges','BEVEL');mod.width=mm(width);mod.segments=segments
 norm=o.modifiers.new('Weighted surface normals','WEIGHTED_NORMAL');norm.keep_sharp=True
 return o

def box(name,dims,loc,mat,edge=1,tile=None):
 bpy.ops.mesh.primitive_cube_add(size=1,location=tuple(mm(v) for v in loc));o=bpy.context.object;o.name=name;o.dimensions=tuple(mm(v) for v in dims)
 bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);finish(o,mat)
 if tile:uv_physical(o,tile)
 if edge:bevel(o,edge)
 return o

def cylinder(name,r,depth,loc,mat,axis='Z',vertices=48):
 bpy.ops.mesh.primitive_cylinder_add(vertices=vertices,radius=mm(r),depth=mm(depth),location=tuple(mm(v)for v in loc));o=bpy.context.object;o.name=name
 if axis=='Y':o.rotation_euler.x=math.pi/2
 if axis=='X':o.rotation_euler.y=math.pi/2
 finish(o,mat);bevel(o,.35,2)
 for p in o.data.polygons:p.use_smooth=len(p.vertices)==4
 return o

def sphere(name,dims,loc,mat):
 bpy.ops.mesh.primitive_uv_sphere_add(segments=32,ring_count=16,location=tuple(mm(v)for v in loc));o=bpy.context.object;o.name=name;o.scale=tuple(mm(v)/2 for v in dims);finish(o,mat)
 for p in o.data.polygons:p.use_smooth=True
 return o

def mesh(name,verts,faces,mat,tile=None):
 me=bpy.data.meshes.new(name);me.from_pydata([tuple(mm(v)for v in p)for p in verts],[],faces);me.update();o=bpy.data.objects.new(name,me);finish(o,mat)
 if tile:uv_physical(o,tile)
 return o

def front_y(z):return -DEP/2+E['frontSetbackAtTop']*z/H
# Continuous open shell: rounded XZ rings, tapered front, straight rear.
def ring(w,h,r,z0):
 pts=[]
 for cx,cz,start in [(w/2-r,z0+r,-90),(w/2-r,z0+h-r,0),(-w/2+r,z0+h-r,90),(-w/2+r,z0+r,180)]:
  for k in range(9):
   a=math.radians(start+k*90/8);pts.append((cx+r*math.cos(a),cz+r*math.sin(a)))
 return pts
T=E['wallThickness'];outer=ring(W,H,E['cornerRadius'],0);inner=ring(W-2*T,H-2*T,4,T);count=len(outer);verts=[]
for pts,back in [(outer,False),(inner,False),(outer,True),(inner,True)]:
 for x,z in pts:verts.append((x,DEP/2 if back else front_y(z),z))
faces=[]
for i in range(count):
 j=(i+1)%count
 faces.extend([(i,j,count+j,count+i),(2*count+j,2*count+i,3*count+i,3*count+j),(j,i,2*count+i,2*count+j),(count+i,count+j,3*count+j,3*count+i)])
shell=mesh('Cabinet shell — reported 666.75 × 508 × 260.35 mm',verts,faces,cover,32);bevel(shell,1.5,3)
shell['dimension_basis']=D['cabinet']['basis']
# Rear removable panels and internal cleats.
for name,z,h in [('Upper rear panel',E['rearUpperPanelBottom'],E['rearUpperPanelHeight']),('Lower rear panel',E['rearLowerPanelBottom'],E['rearLowerPanelHeight'])]:
 box(name,(W-2*T-2,9,h),(0,DEP/2-7,z+h/2),cover,1,32)
for x in [-W/2+25,W/2-25]:box('Rear panel mounting cleat',(15,15,H-36),(x,DEP/2-18,H/2),wood,1)
active='02 Front and grille'
# Baffle holes are real, visible when viewed from behind.
baffle=box('Speaker baffle — two real apertures',(W-2*T-4,12,421),(0,-90,232),wood,1)
for x in E['speakerCentersX']:
 bpy.ops.mesh.primitive_cylinder_add(vertices=96,radius=mm(141),depth=mm(40),location=(mm(x),mm(-90),mm(E['speakerCenterHeight'])),rotation=(math.pi/2,0,0));cut=bpy.context.object
 mod=baffle.modifiers.new('12 inch speaker opening','BOOLEAN');mod.operation='DIFFERENCE';mod.object=cut;bpy.context.view_layer.objects.active=baffle;bpy.ops.object.modifier_apply(modifier=mod.name);bpy.data.objects.remove(cut,do_unlink=True)

def front_plane(name,w,h,bottom,mat,offset=0,tile=None):
 y0=front_y(bottom)+offset;y1=front_y(bottom+h)+offset
 o=mesh(name,[(-w/2,y0,bottom),(w/2,y0,bottom),(w/2,y1,bottom+h),(-w/2,y1,bottom+h)],[(0,1,2,3)],mat)
 uv=o.data.uv_layers.new(name='Surface UV')
 vals=[(0,0),(w/tile if tile else 1,0),(w/tile if tile else 1,h/tile if tile else 1),(0,h/tile if tile else 1)]
 for i in range(4):uv.data[i].uv=vals[i]
 return o
front_plane('Woven grille cloth',E['grilleWidth'],E['grilleHeight'],E['grilleBottom'],cloth,1,SURF['cloth-silver-blue']['tileMm'])
# Drip edge is a rounded thin metal channel rather than a broad silver frame.
for x in [-315,315]:
 o=box('Vertical aluminum drip edge',(4.5,5,423),(x,front_y(232)-.7,232),aluminum,1.9);o.rotation_euler.x=-math.atan(E['frontSetbackAtTop']/H)
for z in [20,445]:box('Horizontal aluminum drip edge',(626,5,4.5),(0,front_y(z)-.7,z),aluminum,1.9)
# Raised badge face cards preserve existing artwork without embedding a reference photo.
def badge(name,x,z,w,h,mat):
 o=front_plane(name,w,h,z,mat,-3);o.location.x=mm(x);return o
badge('Raised Fender script — silhouette study',-222,357,118,45,logo)
badge('Factory JBL option corner emblem',247,38,57,42,jbl)
for x,z in [(221,43),(273,43),(221,76),(273,76)]:sphere('JBL badge pin',(2.4,1.6,2.4),(x,front_y(z)-3.3,z),chrome)
active='03 Chassis and controls'
front_plane('Silverface control panel',E['faceplateWidth'],E['faceplateHeight'],E['faceplateBottom'],frontart,-.5)
box('Steel chassis tray',(610,188,43),(0,24,465),aluminum,1.4)
# Front group follows the estimated front setback; each part remains separate.
control_z=466
for x in [24,47,219,244]:
 xx=x-311;yy=front_y(control_z)
 cylinder('Input jack nickel washer',6.6,1.4,(xx,yy-1.3,control_z),chrome,'Y')
 cylinder('Input jack hex nut',5.1,2,(xx,yy-2.5,control_z),chrome,'Y',6)
 cylinder('Input jack dark bore',3.175,.5,(xx,yy-3.7,control_z),black,'Y')
for x in [65,263]:
 box('Bright switch black bezel',(6,1.5,11),(x-311,front_y(469)-1.7,469),black,.7)
 box('Bright switch actuator',(4,2.8,5),(x-311,front_y(469)-3.3,470),black,.4)
# Import the accepted shared knob GLB, retain its actual geometry and artwork.
before=set(bpy.data.objects);bpy.ops.import_scene.gltf(filepath=str(OUT/'source/knob-skirted-v04.glb'));imported=[o for o in bpy.data.objects if o not in before]
for o in imported:link(o)
knobroot=next(o for o in imported if o.parent is None)
knobroot.name='Shared knob v0.4 — master linked instance';knobroot.parent=root
settings=[3,5.5,5,4.5,3.5,5,5.5,4,2.5,3,4];centers=[88,119,151,183,287,319,350,382,413,445,477]
for i,(x,setting) in enumerate(zip(centers,settings)):
 mapping={o:o.copy() for o in imported} if i else {o:o for o in imported}
 if i:
  for old,new in mapping.items():collections[active].objects.link(new);new.parent=mapping.get(old.parent,root)
 anchor=mapping[knobroot];anchor.name=f'Knob {i+1:02d} — shared skirted 0.4';anchor.location=(mm(x-311),mm(front_y(control_z)-1.2),mm(control_z));anchor['setting']=setting
 # Root retains glTF orientation; additional rotation is about the front axis.
 from mathutils import Quaternion
 anchor.rotation_mode='QUATERNION';anchor.rotation_quaternion=Quaternion((0,1,0),-math.radians((setting-5)*290/9)) @ anchor.rotation_quaternion
# Pilot and front screws.
y=front_y(control_z)
cylinder('Pilot lamp nickel bezel',8,4,(286,y-2,control_z),chrome,'Y');sphere('Ruby pilot jewel',(12,7,12),(286,y-5,control_z),red)
for x in [-246,-42]:
 for z in [450,482]:sphere('Faceplate screw head',(3.7,2,3.7),(x,front_y(z)-1.6,z),chrome)
# Rear controls, restrained printed labels; circuitry remains a later detail pass.
rear=box('Rear chassis black instruction strip',(388,.8,37),(-18,DEP/2-4,467),black,.3)
# Text curves use Blender's bundled default font; no external font is packed.
def rear_text(text,x,z,size=2.4):
 cu=bpy.data.curves.new('Rear printed label','FONT');cu.body=text;cu.size=mm(size);cu.align_x='CENTER'
 o=bpy.data.objects.new(text,cu);finish(o,ivory);o.location=(mm(x),mm(DEP/2-3.4),mm(z));o.rotation_euler=(math.pi/2,0,math.pi)
for x,label in [(-175,'GROUND'),(-117,'FUSE'),(-71,'ON'),(-47,'STANDBY'),(8,'SPEAKER'),(34,'EXT. SPKR'),(115,'VIBRATO'),(141,'REVERB')]:
 rear_text(label,x,456)
 cylinder('Rear control retaining nut',4.4,2,(x,DEP/2-2,466),chrome,'Y')
 if x in [-175,-71,-47]:cylinder('Rear toggle bat',1.4,10,(x,DEP/2+2,470),chrome)
 elif x==-117:cylinder('Fuse cap',5,8,(x,DEP/2+2,466),black,'Y')
 else:cylinder('Rear jack opening',2.5,.8,(x,DEP/2-.7,466),black,'Y')
active='04 Speakers JBL option'
# Provisional D120F construction study. No exact motor/frame measurement is claimed.
def lathe_y(name,profile,cx,cz,mat,segments=96):
 vs=[]
 for r,y in profile:
  for i in range(segments):
   a=2*math.pi*i/segments;vs.append((cx+r*math.cos(a),y,cz+r*math.sin(a)))
 fs=[]
 for row in range(len(profile)-1):
  for i in range(segments):
   j=(i+1)%segments;a=row*segments;b=(row+1)*segments;fs.append((a+i,a+j,b+j,b+i))
 o=mesh(name,vs,fs,mat)
 for p in o.data.polygons:p.use_smooth=True
 return o
for num,x in enumerate(E['speakerCentersX']):
 z=E['speakerCenterHeight']
 lathe_y(f'JBL {num+1} frame flange',[(142,-83),(155,-83),(155,-79),(141,-79)],x,z,cast)
 lathe_y(f'JBL {num+1} paper cone',[(143,-81),(137,-77),(113,-56),(71,-27),(37,-13),(0,-13)],x,z,cone)
 # Aluminum dust dome specific to JBL option.
 sphere(f'JBL {num+1} aluminum dust dome',(74,23,74),(x,-20,z),aluminum)
 for i in range(6):
  a=i*math.pi/3+.15
  vs=[]
  for r,y in [(148,-78),(90,30)]:
   for da in [-.11,.11]:vs.append((x+r*math.cos(a+da),y,z+r*math.sin(a+da)))
  arm=mesh(f'JBL {num+1} cast basket arm {i+1}',vs,[(0,1,3,2)],cast);solid=arm.modifiers.new('Cast wall thickness','SOLIDIFY');solid.thickness=.004;bevel(arm,1.4)
 cylinder(f'JBL {num+1} motor cover',88,53,(x,36,z),magnet,'Y',96)
 cylinder(f'JBL {num+1} rear label disc',38,.5,(x,63,z),ivory,'Y',64)
 cylinder(f'JBL {num+1} label yellow field',36,.4,(x,63.4,z),material(f'JBL {num+1} label ochre',(.56,.41,.02),0,.65),'Y',64)
 cylinder(f'JBL {num+1} vent',13,.5,(x,63.9,z),black,'Y')
 for a in [math.pi*.25,math.pi*.75,math.pi*1.25,math.pi*1.75]:
  sphere('Speaker flange screw',(4,2,4),(x+148*math.cos(a),-79,z+148*math.sin(a)),chrome)
 # Terminal tabs and a provisional cable route.
 for dz in [-7,7]:box('JBL speaker terminal',(8,5,4),(x+86,24,z+dz),chrome,.4)
active='05 Hardware'
# Strap handle: flat webbing shape and two metal end caps.
handleverts=[]
for i in range(33):
 x=-90+i*180/32;z=H+4+11*(math.cos(x/90*math.pi/2)**2)
 for y in [-13,13]:handleverts.append((x,y,z))
handle=mesh('Black strap handle',handleverts,[(2*i,2*i+1,2*i+3,2*i+2)for i in range(32)],black);solid=handle.modifiers.new('Strap thickness','SOLIDIFY');solid.thickness=.004;bevel(handle,1.5)
for x in [-96,96]:
 box('Handle nickel cap',(29,34,5),(x,0,H+3),chrome,3)
 for y in [-10,10]:sphere('Handle screw',(4,4,2),(x,y,H+6),chrome)
for x in [-285,285]:
 box('Chassis mounting strap',(16,118,2),(x,20,H+1),chrome,1)
 for y in [-29,69]:sphere('Chassis strap screw',(5,5,2),(x,y,H+3),chrome)
# Side tilt-back legs with functional pivot/stop as separate reusable pieces.
for sign in [-1,1]:
 leg=box('16 inch tilt-back leg — photographic length estimate',(3,16,392),(sign*(W/2+2),13,215),chrome,1.4)
 cylinder('Tilt-back leg pivot washer',8,2,(sign*(W/2+4),13,410),chrome,'X')
 cylinder('Tilt-back leg pivot screw',3,3,(sign*(W/2+6),13,410),chrome,'X')
 cylinder('Tilt-back leg stop',4,5,(sign*(W/2+3),33,400),chrome,'X')
# Protective metal bottom corners, represented as separate folded faces.
for x in [-W/2,W/2]:
 for y in [-DEP/2,DEP/2]:
  sx=1 if x<0 else -1;sy=1 if y<0 else -1
  box('Bottom corner metal front-back face',(27,1.2,18),(x+sx*13.5,y,10),chrome,2)
  box('Bottom corner metal side face',(1.2,30,18),(x,y+sy*15,10),chrome,2)
  box('Bottom corner metal underside',(27,30,1.2),(x+sx*13.5,y+sy*15,.5),chrome,2)
# Baseline uses glides. Caster geometry is available only for an explicitly
# specimen-specific build, never silently attributed to 1968 Fender production.
if D['configuration']['support']=='casters':
 for x in [-258,258]:
  for y in [-85,85]:
   cylinder('Caster swivel bearing',16,6,(x,y,-5),chrome)
   cylinder('Caster wheel rubber',24,19,(x,y+9,-38),black,'X',64)
   cylinder('Caster axle',4,27,(x,y+9,-38),chrome,'X')
   for dx in [-12,12]:
    fork=box('Caster plated fork',(2.5,21,31),(x+dx,y+4,-24),chrome,2);fork.rotation_euler.x=.2
else:
 for x in [-278,278]:
  for y in [-89,89]:
   # Individual glide form/dimensions are estimates, not a measured vintage part.
   o=sphere('Cabinet glide — estimated metal foot',(E['glideDiameter'],E['glideDiameter'],E['glideHeight']*2),(x,y,0),chrome)
   o['configuration_basis']='1968 catalog photograph shows no casters; glide form remains estimated'
# Rear-panel screws and discreet wiring visible through opening.
for x in [-306,306]:
 for z in [37,118,356,413]:sphere('Rear panel fixing screw',(4,2,4),(x,DEP/2-1,z),chrome)
active='90 Review studio'
# Review studio is excluded from the GLB export.
world=bpy.data.worlds.new('Neutral photographic studio');world.use_nodes=True;world.node_tree.nodes['Background'].inputs[0].default_value=(.10,.12,.14,1);world.node_tree.nodes['Background'].inputs[1].default_value=.45;scene.world=world
floor=box('Review floor',(6000,6000,5),(0,0,-E['glideHeight']-2.5),material('Studio gray',(.16,.17,.18),0,.82),1);floor.parent=None
for name,loc,power,size in [('Large softbox',(-900,-900,1300),85,1.0),('Side fill',(1000,-100,750),60,.8),('Rear strip',(-400,700,1000),95,.7)]:
 data=bpy.data.lights.new(name,'AREA');data.energy=power;data.shape='DISK';data.size=size;o=bpy.data.objects.new(name,data);collections[active].objects.link(o);o.location=tuple(mm(v)for v in loc);o.rotation_euler=(Vector((0,0,.24))-o.location).to_track_quat('-Z','Y').to_euler()
camdata=bpy.data.cameras.new('Review camera');camera=bpy.data.objects.new('Review camera',camdata);collections[active].objects.link(camera);scene.camera=camera;camdata.type='ORTHO';camdata.ortho_scale=1.02
scene.render.engine='CYCLES';scene.cycles.samples=32;scene.cycles.use_denoising=True
scene.render.resolution_x=1500;scene.render.resolution_y=1200;scene.render.resolution_percentage=100
scene.view_settings.view_transform='AgX';scene.view_settings.exposure=-2;scene.render.image_settings.file_format='PNG'
def camera_view(name,loc):
 camera.location=tuple(mm(v)for v in loc);camera.rotation_euler=(Vector((0,0,.24))-camera.location).to_track_quat('-Z','Y').to_euler();camera.name='Review camera — '+name
camera_view('front three-quarter',(900,-1800,620))
# Pack generated images and loaded font; third-party photographs are never loaded.
bpy.ops.file.pack_all()
bpy.context.view_layer.update()
# Export only the asset hierarchy, with reusable names/materials and actual metres.
bpy.ops.object.select_all(action='DESELECT')
asset=[]
for c in collections.values():
 if c==collections['90 Review studio']:continue
 for o in c.objects:o.select_set(True);asset.append(o)
bpy.context.view_layer.objects.active=root
bpy.ops.export_scene.gltf(filepath=str(OUT/'twin-1968-master.glb'),export_format='GLB',use_selection=True,export_apply=True,export_extras=True,export_cameras=False,export_lights=False)
# Open the editable file with the amp framed, materials visible, and no mesh selection clutter.
bpy.ops.object.select_all(action='DESELECT');root.select_set(True);root.empty_display_size=.03
for screen in bpy.data.screens:
 for area in screen.areas:
  if area.type=='VIEW_3D':
   area.spaces.active.shading.type='MATERIAL'
   area.spaces.active.region_3d.view_location=(0,0,.24)
   area.spaces.active.region_3d.view_rotation=camera.matrix_world.to_quaternion()
   area.spaces.active.region_3d.view_distance=1.2
   area.spaces.active.region_3d.view_perspective='PERSP'
# Save editable master after export without applying its adjustable modifiers.
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'twin-1968-master.blend'))
# Initial render; fixed front/rear views generated by the validation helper later.
scene.render.filepath=str(ROOT/'outputs/twin-master-angle.png');bpy.ops.render.render(write_still=True)
report={'revision':D['revision'],'objects':len(asset),'units':'metres','cabinet_mm':[W,H,DEP],'blend':str(OUT/'twin-1968-master.blend'),'glb':str(OUT/'twin-1968-master.glb'),'images':[i.name for i in bpy.data.images if i.users and i.source=='FILE']}
(ROOT/'outputs/twin-master-build.json').write_text(json.dumps(report,indent=2))
print(json.dumps(report))
