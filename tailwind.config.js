/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'tilt-n-move-shaking': {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(5px, 5px) rotate(5deg)' },
          '50%': { transform: 'translate(0, 0) rotate(0deg)' },
          '75%': { transform: 'translate(-5px, 5px) rotate(-5deg)' },
          '100%': { transform: 'translate(0, 0) rotate(0deg)' },
        },
        'left-text-appear': {
          '0%': { transform: 'translateX(0)', opacity: 0 },
          '100%': { transform: 'translateX(-10px)', opacity: 1 },
        },
      },
      animation: {
        'tilt-n-move-shaking': 'tilt-n-move-shaking 1s infinite',
        'left-text-appear': 'left-text-appear 0.3s ease-out forwards',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(19deg, black 19%, grey 77%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.slick-dots li button:before': {
          color: 'white', // Set the dots color to orange
        },
      };
      addUtilities(newUtilities, ['before']);
    },
  ],
};
