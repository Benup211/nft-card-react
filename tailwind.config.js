/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mentor-soft-blue':'hsl(215, 51%, 70%)',
        'mentor-cyan':'hsl(178, 100%, 50%)',
        'mentor-cyan-dim':'hsla(178, 100%, 50%,0.5)',
        'mentor-mdark-blue':'hsl(217, 54%, 11%)',
        'mentor-cdark-blue':'hsl(216, 50%, 16%)',
        'mentor-ldark-blue':'hsl(215, 32%, 27%)',
        'mentor-white':'hsl(0, 0%, 100%)',
        'mentor-anchor-color':'hsl(228, 45%, 44%)',
      },
      fontFamily:{
        outfit:['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}