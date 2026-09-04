// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import discussionBridge from 'astro-discussion-bridge';

// https://astro.build/config
export default defineConfig({
	site: 'https://astrostarlight.sandbox.discussionbridge.dev',
	integrations: [
		discussionBridge({
			discourseUrl: 'https://sandbox-forum.discussionbridge.dev',
			siteUrl: 'https://astrostarlight.sandbox.discussionbridge.dev',
			comments: {
				enabled: true,
				display: 'full',
				credit: { enabled: true },
			},
		}),
		starlight({
			title: 'DiscussionBridge Astro + Starlight Sandbox',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/DiscussionBridge' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Sandbox guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
