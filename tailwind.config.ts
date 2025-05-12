import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        screens: {
          s: { min: '220px', max: '315px' },
          xs: { min: '316px', max: '413px' },
          xxs: { min: '414px', max: '639px' },
          sm: { min: '640px', max: '767px' },
          md: { min: '768px', max: '1023px' },
          lg: { min: '1024px', max: '1279px' },
          xl: { min: '1280px', max: '1535px' },
          xxl: { min: '1536px', max: '2563px' },
        },
        colors: {
          primarytext: '#bb8732',
          bgcolor: '#ffffff',
          secondarytext: '#6a6a6a',
          dovegray: '#6c6c6c',           // Headings, body text, navbar text, footer background
          dustygray: '#9c9c9c',         // Subheadings
          goldengrass: '#dcbc23',       // Links, play button/icon
          whiterock: '#ebe6d3',         // Navbar background, footer text
          sunflower: '#e4bc24',          // Banner/hero section
          confetti: '#e8cc53',           // Course categories background
          ronchi: '#e6c34a',             // Music player background
          tuliptree: '#e4be38',         // Music player progress bar
        },
        fontFamily: {
          head: ['Bungee Tint', 'sans-serif'],
          sans: ['Roboto', 'sans-serif'],
          heading: ['Squada One', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
        },
    },
  },
  plugins: [],
} satisfies Config;
