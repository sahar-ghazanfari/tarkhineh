/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        Tint: {
          1: "var(--color-Tint-1)",
          2: "var(--color-Tint-2)",
          3: "var(--color-Tint-3)",
          4: "var(--color-Tint-4)",
          5: "var(--color-Tint-5)",
          6: "var(--color-Tint-6)",
          7: "var(--color-Tint-7)",
        },
        shade: {
          1: "var(--color-shade-1)",
          2: "var(--color-shade-2)",
          3: "var(--color-shade-3)",
          4: "var(--color-shade-4)",
          5: "var(--color-shade-5)",
          6: "var(--color-shade-6)",
          7: "var(--color-shade-7)",
        },
        Gray: {
          1: "var(--color-Gray-1)",
          2: "var(--color-Gray-2)",
          3: "var(--color-Gray-3)",
          4: "var(--color-Gray-4)",
          5: "var(--color-Gray-5)",
          6: "var(--color-Gray-6)",
          7: "var(--color-Gray-7)",
          8: "var(--color-Gray-8)",
        },
        error: "var(--color-error)",
        error_light: "var(--color-error-light)",
        error_extra_light: "var(--color-error-extra-light)",
        success: "var(--color-success)",
        success_light: "var(--color-success-light)",
        success_extra_light: "var(--color-success-extra-light)",
        warning: "var(--color-warning)",
        warning_light: "var(--color-warning-light)",
        warning_extra_light: "var(--color-warning-extra-light)",
        white: "var(--color-white)",
        black: "var(--color-black)",
      },
      fontFamily: {
        sans: ["var(--font-estedad)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
