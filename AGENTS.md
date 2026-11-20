# Fender Amps agent entry point

Read [docs/handoff/README.md](docs/handoff/README.md) before changing this project.
It links the current state, user priorities, decisions, architecture, references,
and the separate GitHub and private-site publishing workflows.

- The current priority is an educational construction explorer: use 3D for
  proportions and component relationships, with clearly attributed real photos.
  Photorealism is deferred. The first interaction pilot is the 1968 Twin. Keep improvements in the shared library so they reach the timeline and
  detail views. Collection expansion is deferred.
- Model Fender factory production for the selected year. Use period Fender
  documentation for configuration, label factory options, and do not treat a
  dealer originality claim as proof of factory fitment.
- Separate vintage specimen evidence, modern replacements, measured dimensions,
  and modeling estimates. Passing tests does not establish visual or historical
  accuracy. The latest knob revision has not been accepted as photorealistic.
- This is a buildless static Three.js app. Run `npm test`; review changed visuals
  in the browser, including the part close up and mounted on its reference amps.
- The corrected spreadsheet identified in [data/catalog/source.json](data/catalog/source.json)
  is the catalog source of truth; its three-tab snapshot is tracked in the repo.
  Read [catalog reconciliation notes](docs/handoff/CATALOG_RECONCILIATION.md)
  before applying grouped rows to selected-year assemblies.
- GitHub is the source of truth for code and project records. Its repository is public; the existing hosted
  prototype is owner-private. Preserve those audiences and the existing Site ID.
- Never commit credentials or unlicensed third-party reference photographs.
  Source links and our own rendered review screenshots can be kept in the repo.
- Update the handoff after substantive changes: current revision, rationale,
  validation, remaining uncertainty, and the next useful action. Keep historical
  evidence distinguishable from checks performed during the current task.
