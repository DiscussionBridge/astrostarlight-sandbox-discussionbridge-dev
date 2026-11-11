# DiscussionBridge Astro and Starlight Sandbox

Source for the [sandbox](https://astrostarlight.sandbox.discussionbridge.dev/). Use this environment to test the Astro adapter with Starlight.

This repository provides the stock Starlight starting point. Verify the
adapter and configuration of the deployed build before using it as evidence.

## Local commands

```sh
npm ci
npm run dev
npm run build
npm run deploy:dry-run
```

Cloudflare Workers serves the generated site. Keep connection secrets in
protected configuration. Record the package and commit used by a test build.

[Sandbox chooser](https://sandbox.discussionbridge.dev/) · [Astro adapter](https://github.com/DiscussionBridge/astro-discussion-bridge) · [Starlight documentation](https://starlight.astro.build/)
