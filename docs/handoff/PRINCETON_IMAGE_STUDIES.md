# Princeton image comparison trial

November 20, 2026. Local, unpublished review requested by the user. No geometry,
catalog, assembly selection, other amp layouts or hosting settings changed.

The revised Princeton trial preserves the original desktop arrangement: model well
on the left, amp name/story/details in the right side panel. Two stacked front/rear
image thumbnails are pinned inside the left edge of the model well; the model
viewport reserves space for them. On phones the thumbnail rail remains beside the
model and the story follows below. Clicking either thumbnail directly opens that
image in a modal with Previous/Next, zoom/fit, Close, arrow-key navigation and native Escape.
Escape closes only the image viewer, returning focus to the image button.

`dist/amp-images.js` mounts this Princeton-only trial; `collection.js` invokes it
when opening an amp. The image section is moved inside the shared stage once at
initialization and remains hidden for other amps. The existing focus loop yields
to the native modal. Styles
are scoped to `.has-image-studies` and the viewer. Production assets are JPEGs
converted from the earlier generated PNGs, without further generative edits.

## Provenance and limits

Both images were generated with the built-in image generation tool from local
RetroFret A-05948 references (November 1965); front also used its panel close-up.
Source: https://retrofret.com/products/fender-princeton-reverb-aa-764-tube-amplifier-1965-13238

Generated outputs: `dist/assets/studies/princeton/{front,rear}.jpg`. They are
illustrations, not reference photographs or renders exported from our 3D model.
Small text, textures and component details contain generated approximations;
the rear manufacturer line is visibly inaccurate. Speaker originality was not
established. The model independently uses an Oxford-style speaker study based on
other evidence. The UI identifies AI generation, specimen and interpretive limits.
Original dealer photographs are not copied into dist or committed.

Original PNGs, generation prompts and an interface screenshot remain under ignored
`outputs/princeton-photoreal-review/`. No publication or commit occurred in this task.

## Current-task validation

All five npm checks pass, as do changed JavaScript syntax and whitespace checks.
Initial browser inspection covered the desktop split, phone stacking, loaded images,
front/rear selection, modal navigation, zoom/fit, native Escape preserving amp
detail, and a Deluxe Reverb regression with its image section absent and existing
hotspots present. Phone document width equaled scroll width (354 CSS pixels under
the browser's 390-wide override). Desktop was reviewed under a 1440 × 1000 override.
No browser error logs were captured in the regression tab. These are interface
checks, not validation of image historical accuracy.

Next: user review of the layout and image fidelity before expanding this treatment
or publishing. Princeton hotspot content remains pending as before this trial.

User-directed layout correction: all five checks, syntax and whitespace passed again.
Desktop 1440 × 1000 and phone 390 × 844 visually reviewed with stacked thumbnails
inside the model well. Rear thumbnail opened the rear image directly; Escape
returned to the amp. Decorative caption is hidden on phone to avoid the rail.
Updated screenshot: ignored outputs/princeton-photoreal-review/interface-thumbnail-rail.jpg.
