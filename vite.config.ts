import { defineConfig } from "vite";
import dts from "vite-plugin-dts"; // definition types plugin
import { resolve } from "path";

const config = defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "utilities-lib"
    },
    sourcemap: true,
    target: "ESNext"
  },
  plugins: [
    dts()
  ]
});

export default config;
