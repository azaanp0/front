/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#c6aad0",
          dark: "#a084aa",
          light: "#ecd0f6",
          50: "#f5eef8",
        },
        secondary: {
          DEFAULT: "#6B3D7A",
          dark: "#4A2657",
        },
        accent: "#D4A853",
        sale: "#E63946",
        success: "#2D9B5A",
      },
      fontFamily: {
        arabic: ["Tajawal", "Cairo", "Noto Kufi Arabic", "sans-serif"],
        english: ["Montserrat", "Poppins", "sans-serif"],
      },
      screens: {
        "2xl": "1400px",
      },
      maxWidth: {
        content: "1320px",
      },
      spacing: {
        header: "64px",
        announcement: "36px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(200, 171, 209, 0.15)",
        "card-hover": "0 8px 30px rgba(200, 171, 209, 0.30)",
        modal: "0 20px 60px rgba(0, 0, 0, 0.20)",
        header: "0 2px 20px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-rtl"),
  ],
};
