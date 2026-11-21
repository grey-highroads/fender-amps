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
| Copy voice direction, copy-pass log and parked drafts | [docs/handoff/COPY_VOICE.md](docs/handoff/COPY_VOICE.md), drafts in [docs/handoff/copy-drafts/](docs/handoff/copy-drafts/) | Before writing or editing any site copy or hotspot text |
| Build notes for each batch of modeled amps (small amps, three combos, Princeton, explorers, faceplates) | `docs/handoff/*.md`, linked from [docs/handoff/README.md](docs/handoff/README.md) | When changing an amp that is already built |
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
- Commit to `main` by default. For changes to the site itself (`dist/`, models),
  run `npm test` and check the change in the browser before pushing, because a
  push to `main` goes live.
- Use a branch only when the owner asks to review a change before it goes live.
  Merge it as soon as it is approved and delete it in the same step. Do not keep
  branches as storage; anything another agent needs must be on `main`.
- When you finish substantive work, update the relevant file above so the next
  agent finds it from here.

## Who owns what

Agents split the work by job so two agents never edit the same text at once.

| Job | Owns | Does not touch |
| --- | --- | --- |
| Builder | Models, layout, code, hotspot placement and the facts on each card (what the part is, which circuit, which source) | Card and story wording beyond a first factual draft |
| Copy | All site wording: timeline stories, hotspot card text, interface text. Voice rules are in [docs/handoff/COPY_VOICE.md](docs/handoff/COPY_VOICE.md). | Geometry, hotspot positions, code logic, the facts themselves |
| Research | The briefs, packets, QUESTIONS.md and manifest in `docs/research/`. Other agents may add findings to a brief or QUESTIONS.md; they do not start parallel studies. | `dist/` |

- The copy agent always starts from the current `main`. Before rewriting a file,
  pull `main` again; if the builder has changed it since, work on top of that.
- The builder adds new hotspots with plain factual text and leaves the wording to
  the copy agent. If a fact in the copy is wrong, the builder corrects the fact
  and says so in the commit message; the copy agent then rewords it.
- If a job needs the other's file, finish and merge your change first, then hand
  off. Do not edit the same file on two branches.

## Project rules

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
