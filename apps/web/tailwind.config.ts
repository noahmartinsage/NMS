import type { Config } from "tailwindcss";
import preset from "@repo/config/tailwind/preset.js";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  presets: [preset]
} satisfies Config;
