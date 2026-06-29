import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
    rollupOptions: {
      output: {
        // Group stable vendor libraries into long-lived, cacheable chunks.
        // Anything not matched here keeps Rollup's default chunking, so the
        // per-section and lazy-modal splits (incl. react-markdown) stay intact.
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (
            id.includes("react-dom") ||
            /node_modules\/(react|scheduler)\//.test(id)
          ) {
            return "react";
          }
          if (id.includes("i18next")) return "i18n";
          if (id.includes("@fortawesome")) return "fontawesome";
        },
      },
    },
  },
  server: {
    host: true,
    open: true,
    port: 3000,
  },
  plugins: [
    react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler", {}],
          ["@babel/plugin-proposal-decorators", { version: "2023-05" }],
          "@babel/plugin-transform-class-properties",
          "@babel/plugin-transform-class-static-block",
        ],
      },
    }),
    tailwindcss(),
  ],
});
