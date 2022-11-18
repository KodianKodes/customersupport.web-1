import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "@rollup/plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
  },
  plugins: [
    react(),
    {
      ...eslint({
        include: "src/**/*.+(js|jsx|ts|tsx)",
      }),
      enforce: "pre",
      apply: "build",
    },
  ],
});
