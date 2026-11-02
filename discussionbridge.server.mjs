// Server-only native consumer configuration. Run native commands from this project root.
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createNativeStarlightPublication } from 'astro-discussion-bridge/starlight';

const projectRoot = path.resolve(process.cwd());
export const nativeProjectRoot = pathToFileURL(projectRoot + path.sep);
const privateRoot = path.join(projectRoot, '.discussionbridge');
const credentials = {
  connectionId: 'dbc_eab2791e59c69b4f6fefbb96',
  secretFile: path.join(privateRoot, 'connection-secret'),
};
export const publicationOptions = {
  docsDir: path.join(projectRoot, 'src/content/docs'),
  stateFile: path.join(privateRoot, 'astro-to-state.json'),
  siteUrl: 'https://astrostarlight.sandbox.discussionbridge.dev',
  discourseUrl: 'https://sandbox-forum.discussionbridge.dev',
  routeBase: '',
  controlledCreation: credentials,
};
export const bridgeOptions = {
  discourseUrl: publicationOptions.discourseUrl,
  siteUrl: publicationOptions.siteUrl,
  publishOnBuild: {
    enabled: true,
    ...credentials,
    docsDir: publicationOptions.docsDir,
    stateFile: publicationOptions.stateFile,
    routeBase: publicationOptions.routeBase,
  },
  fromDiscourse: {
    enabled: false,
    ...credentials,
    docsDir: path.join(projectRoot, 'src/content/docs'),
    stateFile: path.join(privateRoot, 'astro-from-state.json'),
    routeBase: 'articles',
  },
  comments: { display: 'interactive' },
};

// The actual native constructor is shared by config and native Content capture.
// Keep Starlight's own heading buttons and all existing native options intact.
export const nativeStarlight = await createNativeStarlightPublication({
  source: publicationOptions,
  native: {
    title: 'DiscussionBridge V4 — Astro + Starlight',
    components: {
      MarkdownContent: './src/components/MarkdownContent.astro',
      PageTitle: './src/components/PageTitle.astro',
    },
    sidebar: [
      { label: 'Sandbox home', link: '/' },
      { label: 'Starlight-authored article', link: '/starlight-to-discourse-v4-workflow-check/' },
      { label: 'Comments modes', items: [
        { label: 'Simple comments', link: '/simple-comments/' },
        { label: 'Full comments', link: '/full-comments/' },
      ] },
      { label: 'Published from Discourse', items: [{ autogenerate: { directory: 'articles' } }] },
      { label: 'Sandbox forum', link: 'https://sandbox-forum.discussionbridge.dev/' },
    ],
  },
});

