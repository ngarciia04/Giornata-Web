// HEADER → Elementor: Header Template (Theme Builder)
// Menu principal con las 6 páginas: Inicio / Sobre Nosotros / Servicios / Galería / Blog / Contacto
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CONTACT, NAV } from "../data/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-bone/85 backdrop-blur-xl shadow-[0_1px_0_rgba(20,18,15,0.1)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-5 md:px-10 py-4">
          <Link to="/" className="flex items-baseline gap-1 leading-none">
            <span className="font-display text-2xl md:text-3xl font-medium tracking-tight">
              Giornata<span className="text-clay">.</span>
            </span>
            <span className="hidden sm:block text-[10px] tracking-[0.28em] uppercase text-ink/60 ml-2">
              Taller de arte
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-[12px] tracking-[0.16em] uppercase">
            {NAV.map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                className={({ isActive }) =>
                  `link-line ${isActive ? "text-clay" : "text-ink/80 hover:text-ink"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contacto"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-ink text-bone text-sm px-6 py-3 hover:bg-clay transition-colors duration-300"
            >
              Diagnóstico gratis ↗
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Abrir menú"
              className="lg:hidden w-11 h-11 rounded-full border border-ink/20 grid place-items-center text-xl"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-ink text-bone flex flex-col justify-center px-8 pt-20"
          >
            {NAV.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * i }}
              >
                <NavLink
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `font-display text-4xl sm:text-5xl py-3 border-b border-bone/10 italic font-light transition-colors flex items-baseline gap-4 ${
                      isActive ? "text-ochre" : "hover:text-ochre"
                    }`
                  }
                >
                  <span className="text-sm not-italic font-sans text-bone/40">0{i + 1}</span>
                  {l.label}
                </NavLink>
              </motion.div>
            ))}
            <p className="mt-8 text-bone/50 text-sm tracking-widest uppercase">
              {CONTACT.email} · {CONTACT.phoneFull}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
