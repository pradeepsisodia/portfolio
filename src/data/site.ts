/**
 * Stable public URL — copied to dist/resume/ on every build (see scripts/copy-resume.mjs).
 * Uses Vite BASE_URL so GitHub Pages / subfolder deploys work.
 */
export const RESUME_FILENAME = "Pradeep_Resume.pdf";

export const RESUME_PDF_URL = `${
  import.meta.env.BASE_URL
}resume/${RESUME_FILENAME}`.replace(/\/{2,}/g, "/");
