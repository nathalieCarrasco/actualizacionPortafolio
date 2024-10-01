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
        destacado:'#E2cdcc',
        primary: '#a78976',  // Color principal para las letras
        secondary: '#D4B2A7',  // Color secundario para las letras
        black: '#000000',  // Fondo negro
        gris:'#0a0a0a', // banner 
      },
    },
  },
  plugins: [],
};
export default config;
