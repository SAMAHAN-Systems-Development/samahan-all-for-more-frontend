import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

const config: Config = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		fontFamily: {
  			inter: ['var(--font-inter)']
  		},
  		fontSize: {
  			title: '50px',
  			main: '16px',
  			'footer-main': '14px',
  			thin: '30px',
  			bold: '40px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
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
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
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
  		}
  	},
  	fontFamily: {
  		inter: ['var(--font-inter)']
  	},
  	colors: {
  		blue: 'rgb(var(--color-blue) / <alpha-value>)',
  		white: 'rgb(var(--color-white) / <alpha-value>)'
  	},
  	screens: {
  		xsm: '0px',
  		sm: '576px',
  		md: '768px',
  		lg: '992px',
  		xl: '1200px',
  		'2xl': '1400px'
  	}
  },
  plugins: [
    plugin(function ({
      matchUtilities,
      theme,
      addUtilities,
    }: {
      addUtilities: Function;
      matchUtilities: Function;
      theme: Function;
    }) {
      matchUtilities(
        {
          'text-shadow': (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
      addUtilities({
        '.container-xs': {
          '@apply container max-w-[22] mx-auto xsm:px-0': {},
        },
        '.container-sm': {
          '@apply container max-w-[33rem] mx-auto sm:px-0': {},
        },
        '.container-md': {
          '@apply container max-w-[45rem] mx-auto md:px-0': {},
        },
        '.container-lg': {
          '@apply container max-w-[58rem] mx-auto lg:px-0': {},
        },
        '.container-xl': {
          '@apply container max-w-[71rem] mx-auto xl:px-0': {},
        },
        '.container-2xl': {
          '@apply container max-w-[81.5rem] mx-auto 2xl:px-0': {},
        },
      });
    }),
      require("tailwindcss-animate")
],
} satisfies Config;
export default config;
