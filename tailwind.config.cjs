/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        heading: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        script: ["Caveat", "cursive"],
      },
      colors: {
        primary: {
          50: "#f0f7ff",
          100: "#e0efff",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        sage: {
          50: "#f6f8f6",
          100: "#e8f2e8",
          400: "#7fb87f",
          500: "#5a9b5a",
          600: "#438043",
        },
        terracotta: {
          50: "#fff7ed",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
        },
        warmGray: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
        cream: "#fdfbf7",
        blush: "#fff5f5",
        mint: "#f0fdf9",
        sky: "#f0f9ff",
      },
    },
  },
  plugins: [],
};
