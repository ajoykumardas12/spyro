/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: "#FF4601",
        primaryBg: "#18171A",
        secondaryBg: "#050505",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        orbitron: ["var(--font-orbitron)"],
      }
    },
  },
  plugins: [],
}
