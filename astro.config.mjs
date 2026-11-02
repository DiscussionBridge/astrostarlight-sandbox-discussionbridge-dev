import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import discussionBridge from 'astro-discussion-bridge';
import { bridgeOptions } from './discussionbridge.server.mjs';

export default defineConfig({
  site: 'https://astrostarlight.sandbox.discussionbridge.dev',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    discussionBridge(bridgeOptions),
    starlight({
      title: 'DiscussionBridge V4 — Astro + Starlight',
      components: {
        MarkdownContent: './src/components/MarkdownContent.astro',
        PageTitle: './src/components/PageTitle.astro',
      },
      sidebar: [
        { label: 'Sandbox home', link: '/' },
        { label: 'Starlight-authored article', link: '/starlight-to-discourse-v4-workflow-check/' },
        { label: 'Published from Discourse', items: [{ autogenerate: { directory: 'articles' } }] },
        { label: 'Sandbox forum', link: 'https://sandbox-forum.discussionbridge.dev/' },
      ],
    }),
  ],
});
