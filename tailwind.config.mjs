import typography from '@tailwindcss/typography';
import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Urbanist', 'sans-serif'],
			},
			colors: {
				// Acomodar colores acorde a aeroturex especiales
				primary: '#BAD302',
				secondary: '#01589B',
				// tertiary: '#2B308B',
				// black: '#0D0D0E',
				// white: '#FEFEFE',
				// background: '#0D0D0E',
				// content1: '#18181B',
				// content2: '#3F3F46',
				// content3: '#52525B',
				// content4: '#71717A',
			},
			animation: {
				vibrate: 'vibrate 0.3s linear infinite both',
			},
			keyframes: {
				vibrate: {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
				},
			},
		},
	},
	darkMode: 'class',
	plugins: [typography, heroui()],
};
