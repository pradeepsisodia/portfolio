import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  // GitHub Pages project site: set VITE_BASE=/your-repo-name/ in .env.production
  const base = env.VITE_BASE || "/";

  return {
    plugins: [react()],
    base,
  };
});
