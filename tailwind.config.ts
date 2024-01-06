import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      transparent: '#00000000',
      gray: {
        50: '#F9FAFB',
        100: '#F2F4F6',
        300: '#CBD0D5',
        500: '#838991',
        700: '#565C64',
        900: '#192028',
      },
      primary: {
        50: '#F8F2EA',
        100: '#FFEDE9',
        300: '#FF896F',
        500: '#FF4A22',
      },
      system: {
        kakaoYellow: '#FAE100',
        kakaoBrown: '#371D1E',
        error: '#FF2A2A',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-nanum-square-round)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'white-gradient':
          'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, e }) => {
      addUtilities({
        [`.${e('?')}`]: {
          animation: `${e('?')}wobble 0.5s ease-in-out alternate infinite`,
        },
        [`@keyframes ${e('?')}wobble`]: {
          '0%': {
            'box-shadow':
              'inset 4px 4px rgb(236, 15, 170), inset -4px -4px rgb(236, 15, 170)',
          },
          '100%': {
            'box-shadow':
              'inset 8px 8px rgb(236, 15, 170), inset -8px -8px rgb(236, 15, 170)',
          },
        },
      });
    }),
  ],
};
export default config;
