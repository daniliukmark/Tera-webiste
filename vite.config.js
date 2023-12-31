import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  base: "",
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  rewrites() {
    return [
      {
        source: "/*",
        destination: "",
      },
    ];
  },
});
