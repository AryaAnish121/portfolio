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
          "linear-gradient(45deg, hsla(139, 11%, 28%, 1) 0%, hsla(27, 28%, 50%, 1) 100%)",
      },
    },
  },
  plugins: [],
};
