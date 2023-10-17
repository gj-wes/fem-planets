/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        mercury: '#419EBB',
        venus: '#EDA249',
        earth: '#6F2ED6',
        mars: '#D14C32',
        jupiter: '#D83A34',
        saturn: '#CD5120',
        uranus: '#1EC2A4',
        neptune: '#2D68F0',
      },
      fontFamily: {
        antonio: ["'Antonio'", "sans-serif"],
        spartan: ["'Spartan'", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      animation: {
        fadein: "fadeIn 0.3s linear forwards",
      }
    }
  },
  safelist: [
    'bg-mercury',
    'bg-venus',
    'bg-earth',
    'bg-mars',
    'bg-jupiter',
    'bg-saturn',
    'bg-uranus',
    'bg-neptune',
    'decoration-mercury',
    'decoration-venus',
    'decoration-earth',
    'decoration-mars',
    'decoration-jupiter',
    'decoration-saturn',
    'decoration-uranus',
    'decoration-neptune',
  ]
}