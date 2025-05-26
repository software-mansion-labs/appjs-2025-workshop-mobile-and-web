// nativewind setup
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/_layout.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./solutions/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        surfaceActive: "var(--color-surface-active)",
        surfaceHighlight: "var(--color-surface-highlight)",
        typography: "var(--color-typography)",
        typographySecondary: "var(--color-typography-secondary)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
