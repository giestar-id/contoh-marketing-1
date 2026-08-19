import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: '#FF5722',
          dark: '#111111',
          blue: '#007BFF',
        }
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
};
export default config;
