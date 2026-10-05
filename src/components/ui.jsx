// UI compartida — piezas 100% visuales, sin lógica de negocio.
// ELEMENTOR: SectionTag → widget Heading (etiqueta) | Reveal → Motion Effects > Entrance Animation

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Reveal({ children, delay = 0, y = 36, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.19, 1, 0.22, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTag({ index, label, dark = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`font-sans text-[11px] tracking-[0.3em] uppercase px-3 py-1.5 rounded-full border ${
          dark ? "border-bone/25 text-bone/80" : "border-ink/20 text-ink/70"
        }`}
      >
        ({index}) — {label}
      </span>
      <span className={`h-px flex-1 ${dark ? "bg-bone/15" : "bg-ink/10"}`} />
    </div>
  );
}

// ELEMENTOR: → Button widget. Si href es ruta ("/...") usa Menu/Link; si es "#..." es ancla.
export function MagneticButton({ children, href = "/contacto", tone = "clay" }) {
  const styles =
    tone === "clay"
      ? "bg-clay text-cream hover:bg-ink"
      : tone === "ghost"
        ? "border border-ink/25 hover:bg-ink hover:text-bone"
        : "bg-bone text-ink hover:bg-ochre hover:text-ink";
  const cls = `group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium tracking-wide transition-all duration-500 hover:gap-5 hover:-translate-y-0.5 hover:shadow-xl ${styles}`;
  const inner = (
    <>
      <span>{children}</span>
      <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5">
        ↗
      </span>
    </>
  );
  if (href.startsWith("/")) {
    return (
      <Link to={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {inner}
    </a>
  );
}

// ELEMENTOR: → 2 Headings en marquee. En Elementor: Container + CSS animation marquee.
export function Marquee({ items, dark = false, slow = false }) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden whitespace-nowrap py-4 ${dark ? "text-bone" : "text-ink"}`}>
      <div
        className={`inline-flex items-center gap-8 pr-8 ${slow ? "animate-marquee-slow" : "animate-marquee"}`}
        style={{ animationName: "marquee" }}
      >
        {row.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-8">
            <span className="font-display italic text-2xl md:text-4xl font-light">{t}</span>
            <span className="text-clay text-xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
