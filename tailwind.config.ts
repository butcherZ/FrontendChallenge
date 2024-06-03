import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{tsx,mdx}", "./src/ui/**/*.{tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#F6F6F6",
        background: "#E4E4F0",
        backgroundDark: "#DBDBDB",
      },
    },
  },
  plugins: [],
};
export default config;
