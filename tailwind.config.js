/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
    darkMode: ["class"],
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
  	extend: {
  		fontFamily: {
  			display: ["var(--font-sf)", "system-ui", "sans-serif"],
  			default: ["var(--font-inter)", "system-ui", "sans-serif"]
  		},
  		animation: {
  			'fade-up': 'fade-up 0.5s',
  			'fade-down': 'fade-down 0.5s',
  			'slide-up-fade': 'slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  			'slide-down-fade': 'slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
  		},
  		keyframes: {
  			'fade-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'80%': {
  					opacity: '0.6'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0px)'
  				}
  			},
  			'fade-down': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(-10px)'
  				},
  				'80%': {
  					opacity: '0.6'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0px)'
  				}
  			},
  			'slide-up-fade': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(6px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'slide-down-fade': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(-6px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
      require("tailwindcss-animate")
],
};
