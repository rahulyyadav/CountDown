import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Use '/' if deploying to the root domain; adjust if deploying to a subfolder
  plugins: [react()],
});
