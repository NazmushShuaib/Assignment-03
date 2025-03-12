/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        adlam: ["ADLaM Display", "system-ui"],
      },
    },
  },
  plugins: [],
};
