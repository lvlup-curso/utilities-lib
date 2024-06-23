import { defineConfig } from "vite";
import { resolve } from "path";

const config = defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "utilities-lib",
    },
  },

});

export default config;


