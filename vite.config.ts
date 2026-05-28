import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (
            id.includes("react") ||
            id.includes("zustand") ||
            id.includes("react-router-dom") ||
            id.includes("framer-motion")
          ) {
            return "vendor-react";
          }
          if (id.includes("swiper")) {
            return "vendor-swiper";
          }
          return "vendor";
        },
      },
    },
  },
});
