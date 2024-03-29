import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: "v8",
      reporter: ["lcov"],
    },
    environment: "jsdom",
    setupFiles: "vitest.setup.ts",
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
});
