import { tokens } from "./tokens.js";

/** @type {import('tailwindcss').Config} */
const preset = {
  theme: {
    extend: {
      colors: {
        brand: tokens.colors.brand,
        background: tokens.colors.background,
        foreground: tokens.colors.foreground,
        muted: tokens.colors.muted,
        accent: tokens.colors.accent,
        danger: tokens.colors.danger
      },
      borderRadius: tokens.radii,
      spacing: tokens.spacing
    }
  }
};

export default preset;
