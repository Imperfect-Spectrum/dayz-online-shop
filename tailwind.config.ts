import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('https://i.postimg.cc/BJ9V5Ktc/bg.jpg')",
        'test-mp-bg': "url('https://i.ibb.co/K2pjGbW/MP-153mod.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
