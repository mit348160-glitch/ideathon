import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        surface: 'rgba(255,255,255,0.08)'
      },
      boxShadow: {
        glow: '0 0 30px rgba(139, 92, 246, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
