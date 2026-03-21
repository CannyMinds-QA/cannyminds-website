import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					'50': '#f2f7fb',
					'100': '#e4eef7',
					'200': '#c2dbed',
					'300': '#94bddf',
					'400': '#5f99cf',
					'500': '#3b73b3',
					'600': '#2e5d95',
					'700': '#264b79',
					'800': '#224065',
					'900': '#203755',
					DEFAULT: '#3b73b3',
					foreground: '#ffffff'
				},
				secondary: {
					'50': '#f0f4f8',
					'100': '#dae5f0',
					'200': '#bbd0e5',
					'300': '#8eb1d3',
					'400': '#5c8bbd',
					'500': '#3b73b3',
					'600': '#2e5d95',
					'700': '#264b79',
					'800': '#224065',
					'900': '#203755',
					DEFAULT: '#264b79',
					foreground: '#ffffff'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				sans: [
					'var(--font-geist-sans)',
					'system-ui',
					'sans-serif'
				],
				mono: [
					'var(--font-geist-mono)',
					'monospace'
				]
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
				'slide-in-right': 'slideInRight 0.8s ease-out forwards',
				'scale-in': 'scaleIn 0.6s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'cookie-slide-up': 'cookieSlideUp 0.4s ease-out forwards',
				'cookie-fade-in': 'cookieFadeIn 0.3s ease-out forwards',
			},
			keyframes: {
				fadeInUp: {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				fadeIn: {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				},
				slideInLeft: {
					'0%': {
						opacity: '0',
						transform: 'translateX(-60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				slideInRight: {
					'0%': {
						opacity: '0',
						transform: 'translateX(60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				scaleIn: {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				float: {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				cookieSlideUp: {
					'0%': { transform: 'translateY(40px) scale(0.97)', opacity: '0' },
					'100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
				},
				cookieFadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			backgroundSize: {
				'size-200': '200% 100%'
			},
			backgroundPosition: {
				'pos-0': '0% 0%',
				'pos-100': '100% 0%'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;
