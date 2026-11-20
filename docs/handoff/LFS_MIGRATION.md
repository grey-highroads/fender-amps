# Git LFS migration and recovery

Completed November 20, 2026 after explicit user approval. Catalog mapping,
all-five-check test coverage and LFS history migration are complete. No new amps
or runtime/UI changes were included.

## Published result

Only GitHub `refs/heads/main` was rewritten, using an exact expected-old-SHA
lease. The branch had not advanced since the approved rehearsal.

- Previous main: `9bafe1a9ac0a7ddc95434c5f335675159cf7e5a7`
- Migrated main: `fcb31728d3e017e1a984f4b47299f02342e320d7`
- Historical commits migrated: 34
- Current LFS files: 47 (46 unique current objects)
- Historical LFS objects: 66, totaling 100,135,548 bytes
- Patterns: `*.blend`, `*.glb`, `docs/handoff/images/**`

[Old-to-new commit map](LFS_COMMIT_MAP.csv) translates the original handoff SHAs.
Historical journal entries retain their original identifiers; use this map to
resolve them in the migrated history. Ordinary follow-up documentation commits
come after the migrated main above.

A fresh GitHub clone downloaded current files and all historical LFS objects.
All 138 tracked files at the migrated head matched the pre-rewrite working tree
byte for byte; all 66 historical object hashes and sizes matched the backup.
All five npm checks and Git LFS fsck passed. Rehearsal also compared every
historical non-asset blob, file mode, author/date/message and parent relationship.

Packed ordinary Git history in the fresh remote clone was 10,832 KiB (about
10.6 MiB), versus 72,242 KiB (70.5 MiB) before migration: approximately 85% less.
LFS preserves the binary data separately. This is a clone/history comparison,
not a promise that server caches or local recovery objects disappear immediately.

## Working copies

The canonical working checkout was clean, backed up and aligned to the migrated
main. Its ignored backups and local recovery refs/objects were retained; no
original-checkout garbage collection was performed.

Other pre-migration working copies should preserve any uncommitted work and then
use a fresh clone. Deliberately transfer needed changes; do not merge the old
history back into main. Future history rewrites require fresh approval.

For a new clone, install Git LFS from https://git-lfs.com/ and run:

```sh
git lfs install
git clone https://github.com/grey-highroads/fender-amps.git
cd fender-amps
git lfs pull
npm test
git lfs fsck
```

All five checks run: library (including 19-entry catalog mapping), knob, surface,
identification and Blender master. A pointer is not a model; the Blender check
explicitly reports missing LFS content and asks for `git lfs pull`.

## Retained, verified backups

All paths below are local and ignored. These are recovery copies on this Mac,
not off-device backups. Keep them until the migration is fully settled.

`/Users/greygarner/Documents/ChatGPT/Fender Amps/.maintenance/backups/pre-lfs-20261120/`

- `repository.bundle`: complete original history and refs.
- `tracked-files.tar.gz`: original tracked tree at
  `00ff059c391cfe83b49972f31de3bce47cdae600`.
- `backup-manifest.json`, recorded refs and independent `restore-check/`.
  Restore fsck passed; all 134 original tracked files matched byte for byte.
- Original model/image bytes are in this backup, so recovery does not depend
  on the LFS service.

`/Users/greygarner/Documents/ChatGPT/Fender Amps/.maintenance/backups/pre-rewrite-20261120/`

- `repository-final.bundle`: complete history/refs immediately before rewrite.
- `tracked-files-final.tar.gz`: hydrated tracked tree at old main `9bafe1a`.
- `lfs-objects/`: all 66 historical objects, checked by SHA-256 and size.
- `backup-manifest-final.json`: exact commit, artifact hashes and object ledger.

Restore a bundle into a new directory, verify it, and restore the associated LFS
objects/materialized files if needed. Do not overwrite somebody else's work.
Local `.maintenance/completed-migration-report.json` records final verification;
`approval-plan.json`, rehearsal reports, commit maps and earlier rehearsal copies
are retained as the operational audit trail.

## Git LFS installation on this Mac

Verified Git LFS 3.8.1 is at `/Users/greygarner/.local/bin/git-lfs`. Official
Apple Silicon release archive SHA-256:
`0ba10e897e0496412cd86eacaed4ed554c97ddc29bc5c709d28faa5eaaa2222c`.
This checkout has local absolute filter commands, a local `git lfs` alias and
local Git hook PATH entries because ~/.local/bin is not on the default session
PATH. Global Git configuration was not changed. Other checkouts should install
and configure Git LFS normally.

## Private publishing remains separate

The existing owner-private Sites repository, project ID, audience and live
prototype were untouched. No republication was needed: dist/ did not change and
contains no LFS-tracked assets currently. A smoke archive verified byte-identical
materialized dist/ content, no pointer text, and the existing private Site binding.

Before future publication, run all checks in the hydrated canonical checkout,
copy and compare actual runtime files, and reject pointer text in assets. Do not
copy GitHub Git metadata or LFS pointers into the separate Sites source history.
Any deployment system using a GitHub checkout/archive directly must be configured
to download LFS objects.
