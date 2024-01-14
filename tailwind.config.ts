import type { Config } from "tailwindcss";
import theme from "./config/theme.json";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        text: theme.colors.default.text_color.default,
        light: theme.colors.default.text_color.light,
        dark: theme.colors.default.text_color.dark,
        primary: theme.colors.default.theme_color.primary,
		secondary: theme.colors.default.theme_color.secondary,
        body: theme.colors.default.theme_color.body,
        border: theme.colors.default.theme_color.border,
        "theme-light": theme.colors.default.theme_color.theme_light,
        "theme-dark": theme.colors.default.theme_color.theme_dark,
        darkmode: {
          text: theme.colors.darkmode.text_color.default,
          light: theme.colors.darkmode.text_color.light,
          dark: theme.colors.darkmode.text_color.dark,
          primary: theme.colors.darkmode.theme_color.primary,
          secondary: theme.colors.darkmode.theme_color.secondary,
          body: theme.colors.darkmode.theme_color.body,
          border: theme.colors.darkmode.theme_color.border,
          "theme-light": theme.colors.darkmode.theme_color.theme_light,
          "theme-dark": theme.colors.darkmode.theme_color.theme_dark,
        },
      },
      fontSize: {
        xxs: "0.625rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.375rem",
        "3xl": "1.5rem",
        "4xl": "1.875rem",
        "5xl": "2.25rem",
        "6xl": "3rem",
        "7xl": "4rem",
        "8xl": "5rem",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
export default config;
