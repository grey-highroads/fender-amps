# Git LFS migration and recovery

Status: current-file LFS conversion prepared as an ordinary forward commit.
Published historical rewrite requires explicit user approval. No new amps may be
added until this maintenance is completed.

## Scope

- `*.blend`
- `*.glb`
- `docs/handoff/images/**`

There are 47 current matching files. Their real content stays in the working
checkout; Git stores LFS pointers. The existing private Site's separate repository,
Site ID, audience and live deployment are outside the history rewrite.

## Contributor setup

Install Git LFS from https://git-lfs.com/ or the official release, then:

```sh
git lfs install
git clone https://github.com/grey-highroads/fender-amps.git
cd fender-amps
git lfs pull
npm test
```

`npm test` runs library (including 19-entry catalog mapping), knob, surface,
identification and Blender master checks. All five must pass. A pointer file is
not a model: the Blender check reports a missing LFS download explicitly.
Use `git lfs fsck` to verify downloaded objects. Never publish pointer text as
an image or model.

On the current Mac, verified Git LFS 3.8.1 was installed in
`/Users/greygarner/.local/bin/git-lfs` from the official darwin-arm64 release.
SHA-256 of the downloaded archive:
`0ba10e897e0496412cd86eacaed4ed554c97ddc29bc5c709d28faa5eaaa2222c`.
This checkout has local absolute filter commands, a local `git lfs` alias and a
pre-push PATH entry because ~/.local/bin is not on the session's default PATH.
Global Git configuration was not changed. Other checkouts should install/configure
Git LFS normally; these machine-local settings are not repository content.

## Backups made before migration

Local directory (ignored; do not delete):
`/Users/greygarner/Documents/ChatGPT/Fender Amps/.maintenance/backups/pre-lfs-20261120/`

- `repository.bundle`: complete original reachable history and refs.
- `tracked-files.tar.gz`: original tracked working tree at
  `00ff059c391cfe83b49972f31de3bce47cdae600`.
- `refs.txt` and `published-refs.txt`: recorded local/published reference state.
- `backup-manifest.json`: file sizes, SHA-256 and restore verification.
- `restore-check/`: independent test restore; git fsck passed and all 134 tracked
  files matched the archive byte for byte.

This is a separate local recovery copy, not an off-device backup. It includes
original model/image bytes, so restoration does not depend on the LFS service.
For recovery, clone the bundle into a new directory and verify before replacing
any working checkout. Do not overwrite someone else's local work.

## Approval boundary and planned cleanup

First publish the reviewed mapping/check/LFS conversion as an ordinary forward
commit and verify a fresh remote clone downloads all current LFS objects.
Then rehearse `git lfs migrate import` in an isolated checkout with no push remote,
limited to the published main history and the patterns above. Record old/new
commit IDs, size comparison, object checks and byte-for-byte tree comparisons.
Keep a fresh bundle of the completed maintenance commit before that rehearsal.

Only after user approval: check main has not advanced, upload all required
historical LFS objects, and update main with an explicit expected-old-SHA lease.
Never use a broad mirror push. Coordinate fresh clones or deliberate branch
rebases; old checkouts can otherwise reintroduce the old large-file history.
Retain the commit map so historic handoff SHAs can be translated.

## Publishing check

No app output changed in this maintenance pass. dist/ contains no LFS-tracked
assets currently. The existing Sites publisher copies the hydrated dist/ tree,
not GitHub pointer blobs or the repository archive. Before a future publication,
run tests in the canonical hydrated checkout, compare copied runtime bytes and
reject pointer text among packaged assets. Do not copy .gitattributes or GitHub
Git metadata into the separate Sites source history as a shortcut.

A GitHub checkout/archive used directly by another deployment system must be
configured to download LFS objects. The supported private Sites workflow remains
separate, using actual working files and its existing static manifest.
