import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://cristiansep0293.github.io/weather-react",
  server: {
    port: 5500,
    https: false,
    host: "127.0.0.1",
  },
});
