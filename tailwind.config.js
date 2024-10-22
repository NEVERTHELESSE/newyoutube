/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bgcolor: "var(--bgcolor)",
        fgcolor: "var(--fgcolor)",
        primarycolor: "var(--primarycolor)",
        shadow: "box-shadow: 10px 10px 3px orange",
      },
    },
  },
  plugins: [],
};
