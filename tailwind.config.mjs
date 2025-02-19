/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        customGradient:
          "linear-gradient(45deg, rgb(87, 64, 82) 0%, rgb(177, 72, 72) 100%)",
      },
    },
  },
  plugins: [],
};
