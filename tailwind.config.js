/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",

      // // Or if using `src` directory:
      // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
        fontFamily: {
          playfair: ['"Playfair Display"', 'serif'],
          radley: ['"Radley"', 'serif'],
        },
        colors: {
          'primary': '#9B4819', // Custom brown color
          'secondary': '#1f2937', // Custom dark gray
        },
      },
  },
  plugins: [],
}