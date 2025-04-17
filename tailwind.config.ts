
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Cosmic Krishna Forge Theme Colors
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Krishna cosmic theme colors
				'cosmic-black': '#1A1F2C',
				'cosmic-dark': '#221F26',
				'divine-gold': '#FFD700',
				'divine-amber': '#FFBF00',
				'neon-blue': '#00BFFF',
				'neon-azure': '#007FFF',
				'glow-white': '#F8F9FA',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1',
						filter: 'brightness(1)'
					},
					'50%': {
						opacity: '0.8',
						filter: 'brightness(1.5)'
					}
				},
				'repulsor-glow': {
					'0%': {
						boxShadow: '0 0 5px 2px rgba(0, 191, 255, 0.3), 0 0 10px 5px rgba(0, 127, 255, 0.1)'
					},
					'50%': {
						boxShadow: '0 0 10px 5px rgba(0, 191, 255, 0.5), 0 0 20px 10px rgba(0, 127, 255, 0.2)'
					},
					'100%': {
						boxShadow: '0 0 5px 2px rgba(0, 191, 255, 0.3), 0 0 10px 5px rgba(0, 127, 255, 0.1)'
					}
				},
				'gradient-shift': {
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					},
					'100%': {
						backgroundPosition: '0% 50%'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'spin-slow': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'blur-in': {
					'0%': {
						filter: 'blur(12px)',
						opacity: '0'
					},
					'100%': {
						filter: 'blur(0)',
						opacity: '1'
					}
				},
				'rotate-slow': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'slide-up-fade': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-1000px 0',
					},
					'100%': {
						backgroundPosition: '1000px 0',
					},
				},
				'spotlight': {
					'0%': {
						opacity: '0',
						transform: 'translate(-72%, -62%) scale(0.5)',
					},
					'100%': {
						opacity: '1',
						transform: 'translate(-50%,-40%) scale(1)',
					},
				},
				'ripple': {
					'0%': {
						transform: 'scale(0.8)',
						opacity: '1',
					},
					'100%': {
						transform: 'scale(2.4)',
						opacity: '0',
					},
				},
				'tilt': {
					'0%, 50%, 100%': {
						transform: 'rotate(0deg)',
					},
					'25%': {
						transform: 'rotate(2deg)',
					},
					'75%': {
						transform: 'rotate(-2deg)',
					},
				},
				'hologram-flicker': {
					'0%, 100%': { 
						opacity: '1',
						filter: 'brightness(1) blur(0px)'
					},
					'8%, 92%': { 
						opacity: '0.9',
						filter: 'brightness(1.1) blur(0.5px)'
					},
					'10%, 90%': { 
						opacity: '1',
						filter: 'brightness(1) blur(0px)'
					},
					'50%': { 
						opacity: '0.8',
						filter: 'brightness(1.2) blur(1px)'
					}
				},
				'levitate': {
					'0%, 100%': {
						transform: 'translateY(0) rotate(0deg)'
					},
					'25%': {
						transform: 'translateY(-5px) rotate(1deg)'
					},
					'50%': {
						transform: 'translateY(0) rotate(0deg)'
					},
					'75%': {
						transform: 'translateY(5px) rotate(-1deg)'
					}
				},
				'orbit': {
					'0%': {
						transform: 'rotate(0deg) translateX(10px) rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg) translateX(10px) rotate(-360deg)'
					}
				},
				'galaxy-spin': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'repulsor-glow': 'repulsor-glow 3s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 10s ease infinite',
				'scale-in': 'scale-in 0.3s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'spin-slow': 'spin-slow 15s linear infinite',
				'blur-in': 'blur-in 0.7s ease-out',
				'rotate-slow': 'rotate-slow 10s linear infinite',
				'slide-up-fade': 'slide-up-fade 0.7s ease-out',
				'shimmer': 'shimmer 2s infinite linear',
				'spotlight': 'spotlight 2s ease 0.5s 1 forwards',
				'ripple': 'ripple 2s cubic-bezier(0, 0.5, 0.5, 1) infinite',
				'tilt': 'tilt 10s ease-in-out infinite',
				'hologram-flicker': 'hologram-flicker 8s infinite',
				'levitate': 'levitate 8s ease-in-out infinite',
				'orbit': 'orbit 12s linear infinite',
				'galaxy-spin': 'galaxy-spin 120s linear infinite',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif']
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-orange': 'linear-gradient(90deg, hsl(25, 95%, 53%) 0%, hsl(15, 95%, 53%) 100%)',
				'gradient-green': 'linear-gradient(90deg, hsl(170, 75%, 41%) 0%, hsl(150, 75%, 41%) 100%)',
				'gradient-pink': 'linear-gradient(90deg, hsl(320, 70%, 60%) 0%, hsl(340, 70%, 60%) 100%)',
				'gradient-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
				'gradient-conic': 'conic-gradient(from 225deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)), hsl(var(--primary)))',
				'shimmer': 'linear-gradient(to right, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0))',
				'spotlight': 'radial-gradient(circle at center, hsl(var(--primary) / 0.15) 0%, transparent 80%)',
				'cosmic-gradient': 'linear-gradient(135deg, rgba(26, 31, 44, 0.8) 0%, rgba(34, 31, 38, 0.95) 100%)',
				'divine-gradient': 'linear-gradient(to right, #FFD700, #FFBF00)',
				'neon-gradient': 'linear-gradient(to right, #00BFFF, #007FFF)',
				'cosmic-grid': 'linear-gradient(to right, rgba(0, 191, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 191, 255, 0.1) 1px, transparent 1px)',
				'galaxy-spiral': 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(26, 31, 44, 0.5) 100%), conic-gradient(from 180deg at 50% 50%, rgba(255, 215, 0, 0.1) 0deg, rgba(0, 127, 255, 0.1) 180deg, rgba(255, 215, 0, 0.1) 360deg)',
				'holographic': 'linear-gradient(135deg, rgba(0, 191, 255, 0.2) 0%, rgba(0, 127, 255, 0.1) 50%, rgba(255, 215, 0, 0.2) 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
