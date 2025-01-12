import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import esliint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), esliint()],
});