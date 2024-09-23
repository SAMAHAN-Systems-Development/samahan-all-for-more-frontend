import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      fontSize: {
        'title': '50px',
        'main': '16px',
        'footer-main': '14px',
        'thin': '30px', //changed from 40px
        'bold': '40px', //changed from 50px
      },
    },
    fontFamily: {
      inter: ['var(--font-inter)'],
    },
    colors: {
      blue: 'rgb(var(--color-blue) / <alpha-value>)',
      white: 'rgb(var(--color-white) / <alpha-value>)',
    },
    screens: {
      xsm: '0px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
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
  ],
} satisfies Config;
export default config;