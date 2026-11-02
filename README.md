# DiscussionBridge V4 sandbox — Astro + Starlight

This separate `site-v4` worktree uses Astro 7.3.8, Starlight 0.42.0, Sharp 0.35.5 and Wrangler 4.156.0. Phil approved these isolated native dependency updates on November 1, 2026. The old `site` worktree, source branch, installed adapter/state and public deployment are retained separately.

The public hostname and Cloudflare Worker remain the existing Astro + Starlight sandbox. No deployment is implied by this local preparation. DiscussionBridge V4 is an unreleased development candidate; installation and workflow results are tracked in the controlling DiscussionBridge V4 completion plan.

This project's native Starlight dependency graph requires Node 22.23.4 or newer. The sandbox uses the already-available portable Node 22.23.4 without changing global Node. This is a consumer requirement, not a change to DiscussionBridge's adapter minimum. Run ordinary native commands from this worktree using that runtime:

```sh
npm ci
npm run build
```

The exact ordinary `astro-discussion-bridge` 0.4.0-alpha.1 archive from development commit `e75977b45b5a8bf3286514381bf1c73ffb4d1c95` is installed (archive SHA-256 `8bf30b592cae3b9793044db0b879a2f55c15edb3036f4f50298a9d4e34040eda`). It has passed its bounded independent source/artifact review; that is not installed-profile or release acceptance. The lock references the selected local development archive, not a published npm release.

The isolated V4 connection is configured through `discussionbridge.server.mjs`. Its credential and native journals live only in ignored, access-protected `.discussionbridge/` files; they must not be committed or deployed. Normal builds authenticate to the sandbox receiver. The meaningful source article is still explicitly opted out (`discussionSync: false`), and From Discourse intake is disabled until its source selection is deliberately enabled. The configured native build currently generates three pages, with normal Starlight navigation, search and sitemap output, without publishing a topic.

`wrangler.jsonc` names only the existing Starlight sandbox Worker and hostname, with `dist/` as the public asset boundary. It preserves the old deployment configuration; its presence is not proof of a deployment. Old source and Worker rollback identities are retained separately. No credentials belong in this repository or public output.
