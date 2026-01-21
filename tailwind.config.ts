import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1128',
        gold: '#C9A961',
        sand: '#F5F0E8',
        white: '#FFFFFF',
        border: '#E5DCC8',
      },
      fontFamily: {
        vibes: ['Great Vibes', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
