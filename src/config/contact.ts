import { contactConfig as generatedContact } from "../generated/contact";

export type ContactValues = {
  email: string;
  whatsapp: string;
  linkedin: string;
  github: string;
};

function pick(...values: (string | undefined)[]): string {
  for (const value of values) {
    const trimmed = value?.trim();
    if (trimmed) return trimmed;
  }
  return "";
}

function mergedRaw(): ContactValues {
  const fromDefine =
    typeof __CONTACT_CONFIG__ !== "undefined" ? __CONTACT_CONFIG__ : null;

  return {
    email: pick(
      import.meta.env.VITE_CONTACT_EMAIL,
      fromDefine?.email,
      generatedContact.email
    ),
    whatsapp: pick(
      import.meta.env.VITE_WHATSAPP_URL,
      fromDefine?.whatsapp,
      generatedContact.whatsapp
    ),
    linkedin: pick(
      import.meta.env.VITE_LINKEDIN_URL,
      fromDefine?.linkedin,
      generatedContact.linkedin
    ),
    github: pick(
      import.meta.env.VITE_GITHUB_URL,
      fromDefine?.github,
      generatedContact.github
    ),
  };
}

let runtimeOverride: Partial<ContactValues> | null = null;

/** Client fetch from /contact.json when build had no env (e.g. after fixing Vercel vars + redeploy). */
export async function hydrateContactFromPublicJson(): Promise<void> {
  if (typeof window === "undefined") return;
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}contact.json`, {
      cache: "no-store",
    });
    if (!res.ok) return;
    runtimeOverride = (await res.json()) as Partial<ContactValues>;
  } catch {
    /* ignore */
  }
}

export function getContactValues(): ContactValues {
  const base = mergedRaw();
  if (!runtimeOverride) return base;
  return {
    email: pick(runtimeOverride.email, base.email),
    whatsapp: pick(runtimeOverride.whatsapp, base.whatsapp),
    linkedin: pick(runtimeOverride.linkedin, base.linkedin),
    github: pick(runtimeOverride.github, base.github),
  };
}

export function mailtoHref(): string | null {
  const email = getContactValues().email;
  return email ? `mailto:${email}` : null;
}

export function whatsappHref(): string | null {
  const url = getContactValues().whatsapp;
  return url || null;
}

export function linkedinHref(): string | null {
  const url = getContactValues().linkedin;
  return url || null;
}

export function githubHref(): string | null {
  const url = getContactValues().github;
  return url && url !== "#" ? url : null;
}
