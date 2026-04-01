// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: vercel(),
	site: 'https://aeroturextransportes.com',
	env: {
		// Example: env variables config
		// schema: {
		// 	API_URL: envField.string({ context: 'server', access: 'public' }),
		// 	GOOGLE_MAPS_API_KEY: envField.string({ context: 'server', access: 'secret' }),
		// 	GOOGLE_MAPS_API_LIBRARIES: envField.string({ context: 'server', access: 'public' }),
		// },
	},
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: 'es',
				locales: {
					es: 'es-CO',
					en: 'en-US',
				},
			},
			// Custom sitemap configuration
			lastmod: new Date(),
			changefreq: 'weekly',
			priority: 0.7,
			// Custom filter for better SEO
			filter: (page) => {
				// Include all pages except admin/private ones
				return (
					!page.includes('/admin/') &&
					!page.includes('/private/') &&
					!page.includes('/api/') &&
					!page.includes('/_astro/') &&
					!page.includes('/.vercel/')
				);
			},
		}),
		react({
			include: ['**/react/*'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				'@/*': './src/*',
			},
		},
	},
});
