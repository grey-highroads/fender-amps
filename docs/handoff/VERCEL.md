# Vercel hosting

Established November 20, 2026 at the user's request. Later the same day the user
authorized GitHub auto-deployment and public custom-domain publication. The existing owner-private ChatGPT Sites prototype is retained
unchanged; its source history and publishing workflow remain separate.

## Deployment record

- Public address: https://fendertubeamps.com; `www` redirects to the apex (308).
- Vercel address: https://amplifier-observatory.vercel.app
- Team: `grey-7947s-projects` (`team_kE5IeTW9aCbn1MPmGTKpvirV`), existing Pro account.
- Project: `amplifier-observatory` (`prj_5u5TGxLdxA9hbYHxNSdxqE8DBaL7`).
- Initial CLI production deployment: `dpl_FhrSvVJ4KVnUMepcQ3crtnL2yLpe`, READY.
- Initial immutable address: https://amplifier-observatory-icgdo7yk2-grey-7947s-projects.vercel.app
- Source: GitHub `491485624aaa04a497c68e406a38516d6b81d457`, uploaded through
  authenticated Vercel CLI 66.6.0 from a staging copy of tracked files with
  hydrated LFS assets. No ignored backups or credentials were copied.
- Framework: Other; no dependency installation; build command `npm test`;
  output `dist`. Node project setting: 24.x. `vercel.json` records the build.
- Current protection: `ssoProtection.deploymentType: "all_except_custom_domains"`.
  The production custom domain is public by the user's explicit instruction;
  generated deployment/preview URLs remain protected. The original private
  Sites prototype remains unchanged.
- Git LFS retrieval is enabled for the connected Git repository. Source exposure
  and directory listing are disabled. GitHub itself remains public.

## Validation and limits

All five checks passed locally and again in the final Vercel build logs,
including the catalog mapping and hydrated Blender GLB check. The final
deployment is READY with Vercel Authentication reported by the CLI.

The initial static-file deployment (`dpl_HdUrnopeUoSUDrrHredgktcYs85U`) was
verified through authenticated connector requests: HTML, component inspector,
explorer, shared parts, both Three.js modules and a speaker photograph returned
200 with appropriate content types. Anonymous access returned 302; Chrome
displayed the Vercel sign-in page. The final full-source deployment supersedes
that upload and serves the same runtime files.

After the final deployment, an authenticated request to the main address with
the Deluxe query returned 200 and the expected application HTML. Anonymous
requests to both the main alias and final immutable address returned 302;
project inspection reconfirmed protection remains enabled for `all` URLs.

Local Chrome review of those runtime files confirmed the Deluxe bright-cap
hotspot opens and the Twin front/rear model and markers render. This was local
visual review, not a signed-in production browser review. No runtime geometry,
content, camera, lighting or interface changed. Tests do not establish historical
or photographic fidelity.

## Publishing updates

Automatic GitHub deployment is **connected** to `grey-highroads/fender-amps`.
The user approved adding this repository to the existing Vercel GitHub app's
selected-repository list; the other three selections were preserved. CLI
`vercel git connect` subsequently returned Connected. Pushes to `main` should
publish production after the five checks pass. Keep the repository root, LFS
retrieval and `vercel.json` settings intact. Verify the resulting deployment
rather than assuming a successful push means a successful release.

The following manual CLI workflow is retained as a fallback:

1. Start from the canonical GitHub checkout. Run `git lfs pull`, `npm test` and
   appropriate browser checks. Commit/push source and note the exact SHA.
2. Prepare an ignored staging directory from `git ls-files`, copying actual
   working file bytes, not an archive containing LFS pointers. Exclude ignored
   maintenance backups, publishing checkouts and credentials. The first run's
   staging directory is `.maintenance/vercel-deploy/`; rebuild it cleanly for
   each later publication so removed files cannot survive.
3. Link the staging copy to the existing project. Its ignored
   `.vercel/project.json` contains only the project ID, team ID and project name
   listed above. Never commit CLI authentication state.
4. Inspect the target with `vercel project inspect amplifier-observatory
   --scope grey-7947s-projects --non-interactive`. Reconfirm the intended protection
   through project settings before release (custom domains public; previews protected).
5. From that staged root run `vercel deploy --prod --yes --scope
   grey-7947s-projects --non-interactive --meta sourceCommit=<checked-SHA>`.
   `vercel.json` runs all five checks remotely and serves only `dist`.
6. Verify READY, inspect build logs, check protected access and served content,
   and record the deployment ID and source SHA here. Keep temporary authenticated
   review links and credentials out of source, screenshots and handoff prose.

## Public domain and DNS record

GoDaddy remains registrar and authoritative DNS provider (`ns43` / `ns44.domaincontrol.com`).
Only two website records changed; NS, SOA, `_domainconnect` and `_dmarc` were preserved.

| Record | Before | After | TTL |
| --- | --- | --- | --- |
| A `@` | Parked (resolved to 3.33.130.190 / 15.197.148.33) | 76.76.21.21 | 600 seconds |
| CNAME `www` | fendertubeamps.com. | d44c676f1a1b8755.vercel-dns-016.com. | 1 hour |

Values came from this project's live Vercel domain configuration. The apex uses
Vercel's supported rank-2 single-address option; automated review rejected an
incomplete first attempt at the rank-1 pair before any DNS write. The supported
single-address alternative was saved successfully. Both domain configurations
subsequently reported `misconfigured: false`.

Anonymous HTTPS returned 200 at the apex and 308 from `www` to the apex, with
certificate validation enabled. The generated deployment address still returned
302 to authentication. Live Chrome review loaded the timeline and Deluxe model,
and opened its bright-cap hotspot. All five local checks passed; no runtime
geometry, copy, lighting or interaction changed. DNS caches may update at different
times. Registration was not transferred and no email records were changed.


## Automatic deployment verification

Pushing `0f6bf162f1600d95301bbd74d4fb2f7902ce94ab` to `main` automatically
created `dpl_7dzbFBWZsZPszLe8tRwZVCgxV1iQ` (source `git`), READY, aliased to
both custom domains. Build logs confirm GitHub cloning, all five checks including
the materialized GLB, and successful publication. Immutable URL:
https://amplifier-observatory-lidcrrfus-grey-7947s-projects.vercel.app

The Git build selected Node 26.x because package.json specifies `>=20`, overriding
the project's 24.x setting. All checks passed; the package currently allows future
major upgrades. This hosting task did not change that engine range. This record
is the last inspected release, not a promise that later commits are verified.

## First amp expansion publication

The 22-entry timeline / six-assembly runtime was published from main at
`1cad27e`: deployment `dpl_ZkxAX2DJYdihb2feiKEnmk3zcioy`, READY, Git source.
See [small-amp build and validation](SMALL_AMPS.md). Live browser routes and a
SHA-256 match of the served model factory were checked. Later documentation
updates do not change this inspected runtime baseline.

## 5E3 explorer publication

Main runtime `24f5828` automatically produced READY Git deployment
`dpl_6AYd728esRSnyAsvx9xZToqEj7Lq`. All five build checks passed. Live browser
cards/photo and byte-for-byte public runtime files were verified. See
[5E3 publication and evidence](5E3_EXPLORER.md). No hosting protection, DNS or
original private Sites settings changed.

## Princeton and brown Deluxe rear publication

Main runtime `11e5869` auto-deployed READY as
`dpl_vFE8bgZA5pxE52LWs3D64gpaNbJW`, Git source. All five checks passed remotely.
Public runtime bytes and live model routes were checked. See
[construction evidence and validation](PRINCETON_BROWN_REAR.md). The original
private Sites prototype and hosting access settings were preserved.

## Faceplate typography publication

Main runtime `b2783c4` produced READY Git production deployment
`dpl_HunN6UyrunDLptQWCk2prMWfVVXX`. All five checks passed remotely. Six public
runtime files matched the tested source bytes; live Princeton, Twin and 5E3
routes rendered without page errors. See [artwork, visual review and evidence
limits](FACEPLATE_TYPOGRAPHY.md). Private Sites and hosting settings are unchanged.
