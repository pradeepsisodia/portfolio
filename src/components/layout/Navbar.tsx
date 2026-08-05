import { useEffect, useState, type MouseEvent } from "react";
import { Menu, X } from "react-feather";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const NAV_SCROLL_OFFSET = 76;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (href: string) => {
    const id = href.replace(/^#/, "");
    const el = document.getElementById(id);
    if (!el) return;

    setOpen(false);
    document.body.style.overflow = "";

    const top =
      el.getBoundingClientRect().top + window.scrollY - NAV_SCROLL_OFFSET;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });

    if (history.replaceState) {
      history.replaceState(null, "", href);
    } else {
      window.location.hash = href;
    }
  };

  const onNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#050816]/80 border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[4.5rem] flex items-center justify-between relative z-[101]">
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          onClick={(e) => onNavClick(e, "#home")}
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl overflow-hidden bg-[#0a1020] ring-1 ring-cyan-500/35 shadow-[0_0_24px_rgba(34,211,238,0.35)] group-hover:scale-105 transition-transform">
            <img
              src="/plogo.png"
              alt="Pradeep logo"
              className="absolute inset-0 h-full w-full object-cover scale-[1.45]"
            />
          </span>
          <span className="text-xl font-bold tracking-tight text-white">
            Pradeep
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => onNavClick(e, item.href)}
              className="relative px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => onNavClick(e, "#contact")}
            className="ml-3 px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-[#050816] hover:shadow-[0_0_28px_rgba(34,211,238,0.45)] transition-shadow"
          >
            Hire me
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden relative z-[102] p-2.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors touch-manipulation"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden relative z-[101] overflow-hidden border-t border-white/10 bg-[#0a1020]/98 backdrop-blur-xl"
            aria-label="Mobile navigation"
          >
            {navLinks.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="block px-6 py-4 text-base text-gray-200 border-b border-white/5 active:bg-white/10 hover:text-cyan-400 touch-manipulation"
                onClick={(e) => onNavClick(e, item.href)}
              >
                {item.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={(e) => onNavClick(e, "#contact")}
              className="block mx-4 my-4 py-3.5 text-center text-base font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-[#050816] touch-manipulation"
            >
              Hire me
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
