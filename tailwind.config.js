/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#07080B",
        panel: "#111318",
        muted: "#A3AAB8",
        accent: "#74B9FF",
        accent2: "#8A7DFF",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(116, 185, 255, 0.15), 0 12px 32px rgba(8, 17, 40, 0.45)",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
