# Fender Amps agent entry point

Read [docs/handoff/README.md](docs/handoff/README.md) before changing this project.
It links the current state, user priorities, decisions, architecture, references,
and the separate GitHub and private-site publishing workflows.

- Current work is hotspot content and placement across the ten active amps.
  The user accepted the Princeton / brown Deluxe / Champ hotspot information
  and placement, but rejected their generated renders as unrealistic. Do not
  treat those images as accepted realistic assets. Image generation and realism
  work are deferred; the remaining-active-amp batch is hotspots only. See
  docs/handoff/ACTIVE_HOTSPOTS.md for current scope and evidence limits.
  Preserve one assembled model and keep anchors in shared factories so timeline,
  detail, inspector and exports use the same model. Do not restore Cabinet/Inside
  modes. Additional collection assemblies still require reviewed authorization.
- Write for experienced musicians: clear, conversational, and technical only
  where the detail earns its place. Lead with what changes under the pick or
  in the sound, with deeper circuit notes available. Hotspots should reveal a distinctive
  circuit, construction or collector insight and its consequences, not teach
  basic control functions. Scope schematic facts to their circuit revision;
  distinguish measured behavior, engineering inference and specimen attribution.
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
  before applying grouped rows to selected-year assemblies. Every timeline entry
  must have a reviewed row in `data/catalog/timeline-map.json`; preserve explicit
  differences and update the mapping before adding another explorer.
- GitHub is the source of truth for code and project records. Its repository is public; the existing hosted
  prototype is owner-private. Preserve those audiences and the existing Site ID.
- Never commit credentials or unlicensed third-party reference photographs.
  Source links and our own rendered review screenshots can be kept in the repo.
- Update the handoff after substantive changes: current revision, rationale,
  validation, remaining uncertainty, and the next useful action. Keep historical
  evidence distinguishable from checks performed during the current task.

- Install Git LFS and run `git lfs pull` before checks in a fresh clone. Keep
  `*.blend`, `*.glb` and `docs/handoff/images/**` under LFS; confirm real files
  are materialized before exporting or publishing.
- The November 20 LFS history migration is complete and was user-approved. Read
  `docs/handoff/LFS_MIGRATION.md` before using an older clone; translate historic
  SHAs with `LFS_COMMIT_MAP.csv`. Preserve verified local recovery backups.
  Any future published-history rewrite requires fresh user approval.
