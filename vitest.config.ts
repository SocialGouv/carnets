import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "vitest.setup.ts",
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
});
