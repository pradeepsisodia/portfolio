import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const envPath = resolve(root, ".env");

/** Load `.env` into process.env (local builds; Vercel uses dashboard env). */
function loadDotEnv() {
  try {
    const text = readFileSync(envPath, "utf8");
    for (const line of text.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (!(key in process.env) || !process.env[key]) {
        process.env[key] = value;
      }
    }
  } catch {
    /* no .env — OK on CI when env vars are set in the host */
  }
}

loadDotEnv();

const keys = [
  "VITE_CONTACT_EMAIL",
  "VITE_WHATSAPP_URL",
  "VITE_LINKEDIN_URL",
  "VITE_GITHUB_URL",
];

const config = {
  email: process.env.VITE_CONTACT_EMAIL?.trim() || "",
  whatsapp: process.env.VITE_WHATSAPP_URL?.trim() || "",
  linkedin: process.env.VITE_LINKEDIN_URL?.trim() || "",
  github: process.env.VITE_GITHUB_URL?.trim() || "",
};

const hasAny = Object.values(config).some(Boolean);
if (!hasAny) {
  console.warn(
    "[generate-contact] No contact env vars found. Set VITE_CONTACT_* in .env (local) or Vercel → Settings → Environment Variables, then redeploy."
  );
}

mkdirSync(resolve(root, "src/generated"), { recursive: true });

writeFileSync(
  resolve(root, "src/generated/contact.ts"),
  `/** Auto-generated — do not edit. Run \`npm run dev\` / \`npm run build\`. */
export const contactConfig = ${JSON.stringify(config, null, 2)} as const;
`,
  "utf8"
);

writeFileSync(
  resolve(root, "public/contact.json"),
  JSON.stringify(config, null, 2),
  "utf8"
);

console.log(
  "[generate-contact] Wrote src/generated/contact.ts and public/contact.json"
);
