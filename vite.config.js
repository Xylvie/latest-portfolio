import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: '/latest-portfolio/',
  plugins: [tailwindcss()],
});
