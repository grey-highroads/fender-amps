"""Inspect the saved master in background Blender; no mutations or saving."""
import bpy, json, math
from pathlib import Path
from mathutils import Vector
root=Path(__file__).resolve().parents[2]
scene=bpy.context.scene
assert scene.unit_settings.scale_length==1
assert scene.unit_settings.system=='METRIC'
shell=next(o for o in scene.objects if o.name.startswith('Cabinet shell'))
points=[shell.matrix_world@Vector(p)for p in shell.bound_box]
dims=[(max(p[a]for p in points)-min(p[a]for p in points))*1000 for a in range(3)]
assert all(abs(a-b)<.1 for a,b in zip(dims,[666.75,260.35,508]))
knobs=[o for o in scene.objects if o.name.startswith('Knob ')]
assert len(knobs)==11
assert sum(o.name.startswith('Cabinet glide') for o in scene.objects)==4
assert not any(o.name.startswith('Caster ') for o in scene.objects)
bodies=[next(c for c in o.children_recursive if c.name.startswith('knob-molded-body'))for o in knobs]
assert len({o.data.as_pointer()for o in bodies})==1
missing=[im.name for im in bpy.data.images if im.users and im.source=='FILE' and not im.packed_file and not Path(bpy.path.abspath(im.filepath)).exists()]
assert not missing,missing
report={'scene':scene.name,'metres_per_blender_unit':1,'cabinet_xyz_mm':dims,'configuration':'factory JBL option with glides','glides':4,'casters':0,'knobs':len(knobs),'linked_knob_body_meshes':1,'missing_images':missing,'packed_images':sum(1 for im in bpy.data.images if im.users and im.packed_file),'font_files':[f.filepath for f in bpy.data.fonts if f.users]}
(root/'models/twin-1968/validation-blender.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report))
