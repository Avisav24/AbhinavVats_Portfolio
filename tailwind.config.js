/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: "#F5F3EF",
        surface: "#FFFFFF",
        surfaceRaised: "#EDEDEA",
        textPrimary: "#0F0F0D",
        textSecondary: "#6B6860",
        accentDark: "#1A1908",
        gold: "#C8A96E",
        border: "#E2DED8",
        darkContrast: "#0F0F0D",
      },
      fontFamily: {
        display: ["var(--font-cormorant)"],
        body: ["var(--font-dm-sans)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
    },
  },
  plugins: [],
};
