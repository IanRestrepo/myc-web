/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  animation: {
			'up-down': 'upDown 2s ease-in-out infinite',
		  },
		  keyframes: {
			upDown: {
			  '0%, 100%': { transform: 'translateY(0)' },
			  '50%': { transform: 'translateY(-10px)' },
			},
		  },
		},
	  },
	plugins: [],
}
