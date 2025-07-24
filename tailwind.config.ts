import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        'glancyr-thin': ['GlancyrThin', 'sans-serif'],
        'glancyr-extralight': ['GlancyrExtraLight', 'sans-serif'],
        'glancyr-light': ['GlancyrLight', 'sans-serif'],
        'glancyr-regular': ['GlancyrRegular', 'sans-serif'],
        'glancyr-medium': ['GlancyrMedium', 'sans-serif'],
        'glancyr-semibold': ['GlancyrSemiBold', 'sans-serif'],
        'glancyr-bold': ['GlancyrBold', 'sans-serif'],

        'geist-thin': ['GeistThin', 'sans-serif'],
        'geist-extralight': ['GeistExtraLight', 'sans-serif'],
        'geist-light': ['GeistLight', 'sans-serif'],
        'geist-regular': ['GeistRegular', 'sans-serif'],
        'geist-medium': ['GeistMedium', 'sans-serif'],
        'geist-semibold': ['GeistSemiBold', 'sans-serif'],
        'geist-bold': ['GeistBold', 'sans-serif'],
        'geist-extrabold': ['GeistExtraBold', 'sans-serif'],
        'geist-black': ['GeistBlack', 'sans-serif'],
      },
    },
  },
  safelist: [
    'font-glancyr-thin',
    'font-glancyr-extralight',
    'font-glancyr-light',
    'font-glancyr-regular',
    'font-glancyr-medium',
    'font-glancyr-semibold',
    'font-glancyr-bold',
    'font-geist-thin',
    'font-geist-extralight',
    'font-geist-light',
    'font-geist-regular',
    'font-geist-medium',
    'font-geist-semibold',
    'font-geist-bold',
    'font-geist-extrabold',
    'font-geist-black',
  ],
  plugins: [],
}

export default config
