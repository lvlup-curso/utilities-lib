import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path, { resolve } from "path";

const config = defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "utilities-lib",
    },
    minify: false,
    sourcemap: true,
    target: "ESNext",
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "/src"),
    },
  },
  plugins: [
    dts({
      outDir: "dist",
      exclude: ["**/*.test.ts", "tests/", "vitest.config.*"],
    }),
  ],
});

export default config;
