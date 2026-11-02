// Server-only native consumer configuration. Run native commands from this project root.
import path from 'node:path';
import { pathToFileURL } from 'node:url';

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

