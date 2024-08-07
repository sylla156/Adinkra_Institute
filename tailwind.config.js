/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
      hind: ["Hind", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
});
