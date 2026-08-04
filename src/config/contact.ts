/**
 * Contact URLs from env — never render these strings in the UI.
 * Add to `.env` (see `.env.example`).
 */
export const contactLinks = {
  email: import.meta.env.VITE_CONTACT_EMAIL as string | undefined,
  whatsapp: import.meta.env.VITE_WHATSAPP_URL as string | undefined,
  linkedin: import.meta.env.VITE_LINKEDIN_URL as string | undefined,
  github: import.meta.env.VITE_GITHUB_URL as string | undefined,
};

export function mailtoHref(): string | null {
  const email = contactLinks.email?.trim();
  return email ? `mailto:${email}` : null;
}

export function whatsappHref(): string | null {
  const url = contactLinks.whatsapp?.trim();
  return url || null;
}

export function linkedinHref(): string | null {
  const url = contactLinks.linkedin?.trim();
  return url || null;
}

/** GitHub profile URL from env */
export function githubHref(): string | null {
  const url = contactLinks.github?.trim();
  return url && url !== "#" ? url : null;
}
