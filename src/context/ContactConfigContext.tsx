import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  getContactValues,
  hydrateContactFromPublicJson,
  type ContactValues,
} from "../config/contact";

type ContactContextValue = {
  contact: ContactValues;
  refresh: () => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function ContactConfigProvider({ children }: { children: ReactNode }) {
  const [tick, setTick] = useState(0);

  const refresh = useCallback(() => setTick((n) => n + 1), []);

  useEffect(() => {
    void hydrateContactFromPublicJson().then(() => setTick((n) => n + 1));
  }, []);

  const value = useMemo(
    () => ({
      contact: getContactValues(),
      refresh,
    }),
    [refresh, tick]
  );

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
}

export function useContact() {
  const ctx = useContext(ContactContext);
  if (!ctx) {
    return { contact: getContactValues(), refresh: () => {} };
  }
  return ctx;
}
