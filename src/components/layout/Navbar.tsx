import { useEffect, useState, type MouseEvent } from "react";
import { Menu, X } from "react-feather";
import { AnimatePresence, motion } from "framer-motion";
import { scroller } from "react-scroll";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Experience", to: "experience" },
  { label: "Contact", to: "contact" },
];

const SCROLL_OFFSET = -80;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const goToSection = (sectionId: string) => {
    setOpen(false);

    requestAnimationFrame(() => {
      scroller.scrollTo(sectionId, {
        duration: 600,
        smooth: true,
        offset: SCROLL_OFFSET,
        isDynamic: true,
      });
    });
  };

  const onNavActivate = (
    e: MouseEvent<HTMLButtonElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    goToSection(sectionId);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[200] transition-all duration-500 pointer-events-auto ${
        scrolled
          ? "backdrop-blur-xl bg-[#050816]/85 border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          : "bg-[#050816]/40 md:bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[4.5rem] flex items-center justify-between">
        <button
          type="button"
          className="group flex items-center gap-2.5 text-left touch-manipulation"
          onClick={(e) => onNavActivate(e, "home")}
          aria-label="Go to home"
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl overflow-hidden bg-[#0a1020] ring-1 ring-cyan-500/35 shadow-[0_0_24px_rgba(34,211,238,0.35)] group-active:scale-95 transition-transform">
            <img
              src="/plogo.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover scale-[1.45]"
            />
          </span>
          <span className="text-xl font-bold tracking-tight text-white">
            Pradeep
          </span>
        </button>

        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Primary"
        >
          {navLinks.map((item) => (
            <button
              key={item.to}
              type="button"
              onClick={(e) => onNavActivate(e, item.to)}
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 touch-manipulation"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={(e) => onNavActivate(e, "contact")}
            className="ml-3 px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-[#050816] hover:shadow-[0_0_28px_rgba(34,211,238,0.45)] transition-shadow touch-manipulation"
          >
            Hire me
          </button>
        </nav>

        <button
          type="button"
          className="md:hidden p-2.5 rounded-lg border border-white/10 hover:bg-white/5 active:bg-white/10 transition-colors touch-manipulation"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 top-[4.5rem] z-[199] bg-black/50 touch-manipulation"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="md:hidden relative z-[201] border-t border-white/10 bg-[#0a1020] shadow-2xl"
              aria-label="Mobile navigation"
            >
              {navLinks.map((item) => (
                <button
                  key={item.to}
                  type="button"
                  onClick={(e) => onNavActivate(e, item.to)}
                  className="block w-full text-left px-6 py-4 text-base text-gray-100 border-b border-white/5 active:bg-cyan-500/15 touch-manipulation"
                >
                  {item.label}
                </button>
              ))}
              <div className="p-4">
                <button
                  type="button"
                  onClick={(e) => onNavActivate(e, "contact")}
                  className="w-full py-3.5 text-center text-base font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-[#050816] touch-manipulation"
                >
                  Hire me
                </button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
