import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "src/assets/resume/Pradeep_Resume.pdf");
const destDir = join(root, "public/resume");
const dest = join(destDir, "Pradeep_Resume.pdf");

mkdirSync(destDir, { recursive: true });
copyFileSync(src, dest);
console.log("Resume copied to public/resume/ for deploy");
