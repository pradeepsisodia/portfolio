import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  // GitHub Pages project site: set VITE_BASE=/your-repo-name/ in .env.production
  const base = env.VITE_BASE || "/";

  const fromEnv = (key: string) =>
    (env[key] || process.env[key] || "").trim();

  const contactConfig = {
    email: fromEnv("VITE_CONTACT_EMAIL"),
    whatsapp: fromEnv("VITE_WHATSAPP_URL"),
    linkedin: fromEnv("VITE_LINKEDIN_URL"),
    github: fromEnv("VITE_GITHUB_URL"),
  };

  return {
    plugins: [react()],
    base,
    define: {
      __CONTACT_CONFIG__: JSON.stringify(contactConfig),
    },
  };
});
