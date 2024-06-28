import path from "path";
import { defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      // setupFiles: "./",
      // environment: 'jsdom' // emular tiempos
      alias: {
        "@src": path.resolve(__dirname, "/src"),
      },
      coverage: {
        thresholds: {
          lines: 80,
          functions: 80,
          branches: 80,
          statements: 80,
        },
        include: ["src/**/*"],
      },
    },
  })
);
