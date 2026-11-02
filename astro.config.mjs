import { defineConfig } from 'astro/config';
import discussionBridge from 'astro-discussion-bridge';
import { bridgeOptions, nativeStarlight } from './discussionbridge.server.mjs';

export default defineConfig({
  site: 'https://astrostarlight.sandbox.discussionbridge.dev',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    discussionBridge(bridgeOptions),
    nativeStarlight.integration,
  ],
});
