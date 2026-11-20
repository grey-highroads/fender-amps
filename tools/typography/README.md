# Typography review helpers

Serve the repository root on localhost port 4178 (not only dist). The helpers
use Playwright and installed Chrome; point PLAYWRIGHT_MODULE to an existing
installation and CHROME_PATH to another Chrome path if needed. No dependency is
added to the buildless application.

Before/after helpers expect an ignored baseline tree under
`outputs/typography-before/dist/`, copied from main `0f0e901` before editing.
Recreate it from that commit in an isolated directory when comparing later.
Never replace working runtime files with this baseline.

- `node tools/typography/proofs.mjs`: regenerate nine tracked SVG proofs.
- `capture.cjs`: flat maps extracted from the actual shared factories.
- `mounted.cjs`: matching inspector front/angle views for all seven amps/plates;
  export actual panels. Fresh page navigation is required between hashes.
- `finish-review.cjs`: component close-ups, GLTFLoader re-import and rear views.
- `regression.cjs`: final 5E3/Champ corrections, detail routes and mobile.
- `check-glb.mjs`: validate downloaded binaries and retained 4096-pixel maps.
- `final-qa.cjs`: corrected exports, source-linked sheet, assembly exports,
  5E3 hotspot, timeline and scroll restoration.

`reference-sheet.html` is the owner-facing annotated visual review; it links
vintage dealer photos without copying their pixels. `review.html` needs the local
baseline. `glb-review.html` needs ignored exports produced by the helpers.
Captured review PNGs are tracked under Git LFS, not normal Git blobs.
