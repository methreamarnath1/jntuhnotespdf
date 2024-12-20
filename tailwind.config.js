/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#001f3f", // Custom deep blue color
        "light-blue": "#1e90ff", // Complementary lighter blue
        "gray-dark": "#2d3748", // Dark gray for backgrounds or borders
        "gray-light": "#edf2f7", // Light gray for subtle text
        primary: "#4caf50", // Green for buttons or highlights
        accent: "#ff5722", // Vibrant orange for accentuating elements
      },
      boxShadow: {
        "2xl": "0 10px 20px rgba(0, 0, 0, 0.5)", // Deeper shadow for modals/cards
        "lg-blue": "0 8px 15px rgba(0, 31, 63, 0.5)", // Subtle blue shadow
      },
      borderRadius: {
        xl: "1rem", // Larger rounding for modern designs
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // A clean and modern font
      },
    },
  },
  plugins: [],
};
