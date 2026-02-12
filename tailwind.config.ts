/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          copper: '#8B5E3C',
          charcoal: '#121416',
          sandstone: '#E5E0D8',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)'],
      },
    },
  },
  plugins: [],
}

