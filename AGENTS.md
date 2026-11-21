# Fender Amps agent entry point

This file is the single starting point for every agent. Read it first, then the
file it sends you to for your task. Everything below is on `main`.

## Where everything lives

| What | Where | Read it when |
| --- | --- | --- |
| Project state, priorities, decisions, architecture, publishing | [docs/handoff/README.md](docs/handoff/README.md) | Always, before changing anything |
| Amp research: one brief per amp, with sources, dimensions, photo references and proposed hotspots | [docs/research/README.md](docs/research/README.md), briefs in [docs/research/amps/](docs/research/amps/) | Before modeling, writing copy or hotspots for any amp |
| Open and resolved research questions | [docs/research/QUESTIONS.md](docs/research/QUESTIONS.md) | Before treating any figure as settled |
| Research status per amp (readiness, blockers, catalog row) | [docs/research/manifest.json](docs/research/manifest.json) | To see what is ready to build |
| Modeling packets and rechecked hotspot drafts | [docs/research/packets/](docs/research/packets/) | Princeton model, 5E3 hotspots, checks on Champ, Tremolux, brown Deluxe |
| Photo sets for composites (lists only; files are on the owner's Mac) | [docs/research/images/](docs/research/images/) | When collecting or using photos |
| Small-amp build notes | [docs/handoff/SMALL_AMPS.md](docs/handoff/SMALL_AMPS.md) | When working on Champ, Tremolux or brown Deluxe |
| Catalog (source of truth) | [data/catalog/](data/catalog/README.md) | When mapping an amp to a catalog row |
| Site code and copy (published) | `dist/` | Only for site changes |

**Do not redo research that exists.** Check the amp's brief and the packets first.
If something is missing or looks wrong, add to the brief or QUESTIONS.md rather
than starting a parallel study. Research follows the source order in
[docs/research/README.md](docs/research/README.md): Fender's own material first,
dealer listings last.

## Branches

- Only `dist/` is published to fendertubeamps.com. Documentation, research and
  handoff notes go straight to `main` in the folders above.
- Use a branch only for changes to the site itself (`dist/`, models) that need the
  owner's review before going live. Merge or delete it when done. Do not keep
  long-lived branches as storage; anything another agent needs must be on `main`.
- When you finish substantive work, update the relevant file above so the next
  agent finds it from here.

## Project rules

- The current priority is an educational construction explorer: use 3D for
  proportions and component relationships, with clearly attributed real photos.
  Photorealism is deferred. The explorer now covers the 1968 Twin, blackface Deluxe Reverb and tweed 5E3 Deluxe. Use
  one assembled model with hotspots across front/rear features; separate Cabinet
  and Inside modes were superseded. Keep improvements in the shared library so they reach the timeline and
  detail views. Collection expansion is now authorized in reviewed batches. The first additions are the Champ 5F1, early Tremolux 5E9 and brown Deluxe 6G3; see docs/handoff/SMALL_AMPS.md. The Princeton Reverb construction study is also authorized and mapped; see docs/handoff/PRINCETON_BROWN_REAR.md. Other additions still require review.
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
