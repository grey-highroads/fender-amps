# Private Vercel hosting

Established November 20, 2026 at the user's request. No custom domain or DNS
change was made. The existing owner-private ChatGPT Sites prototype is retained
unchanged; its source history and publishing workflow remain separate.

## Deployment record

- Address: https://amplifier-observatory.vercel.app
- Team: `grey-7947s-projects` (`team_kE5IeTW9aCbn1MPmGTKpvirV`), existing Pro account.
- Project: `amplifier-observatory` (`prj_5u5TGxLdxA9hbYHxNSdxqE8DBaL7`).
- Production deployment: `dpl_FhrSvVJ4KVnUMepcQ3crtnL2yLpe`, READY.
- Immutable address: https://amplifier-observatory-icgdo7yk2-grey-7947s-projects.vercel.app
- Source: GitHub `491485624aaa04a497c68e406a38516d6b81d457`, uploaded through
  authenticated Vercel CLI 66.6.0 from a staging copy of tracked files with
  hydrated LFS assets. No ignored backups or credentials were copied.
- Framework: Other; no dependency installation; build command `npm test`;
  output `dist`. Node project setting: 24.x. `vercel.json` records the build.
- Vercel Authentication is enabled with `ssoProtection.deploymentType: "all"`.
  This covers production aliases, generated deployment addresses and previews.
  Visitors need a Vercel account with project access. Do not disable protection
  or add public exceptions when connecting the eventual custom domain.
- Git LFS retrieval is enabled for a future Git connection. Source exposure
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

Automatic GitHub deployment is **not connected**. The connector rejected linking
`grey-highroads/fender-amps` because GitHub integration access is needed. Do not
create another Vercel project to work around this. Connect the repository to
this existing project when that access is available; keep `main` as production,
root directory at the repository root, LFS enabled and all-URL protection on.

Until then, deploy explicitly using the authenticated CLI:

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
   --scope grey-7947s-projects --non-interactive`. Reconfirm all-URL protection
   through project settings before release.
5. From that staged root run `vercel deploy --prod --yes --scope
   grey-7947s-projects --non-interactive --meta sourceCommit=<checked-SHA>`.
   `vercel.json` runs all five checks remotely and serves only `dist`.
6. Verify READY, inspect build logs, check protected access and served content,
   and record the deployment ID and source SHA here. Keep temporary authenticated
   review links and credentials out of source, screenshots and handoff prose.

Domain connection is deferred until the user chooses to proceed. It does not
require moving the domain registration to Vercel.
