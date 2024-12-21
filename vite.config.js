// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Ensure this is the same port Electron will connect to
  },
  base: "./",
  build: {
    outDir: "dist_electron", // Build folder for Vite output
    assetsDir: "assets", // Ensure assets like JS, CSS, and images are placed in 'assets' directory
    // rollupOptions: {
    //   input: "index.html", // Point to the root index.html
    // },
  },
});
