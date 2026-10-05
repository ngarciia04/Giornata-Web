// PageHero — cabecera editorial común a todas las páginas internas.
// ELEMENTOR: Section > Breadcrumb + Heading gigante + Text + Marquee.
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Marquee } from "./ui";

export default function PageHero({ tag, title, accent, desc, crumbs = [], marquee = [] }) {
  return (
    <section className="relative bg-bone overflow-hidden pt-28 md:pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-ochre/25 blur-[120px]" />
        <div className="absolute top-1/3 -left-32 w-[380px] h-[380px] rounded-full bg-clay/15 blur-[120px]" />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10">
        <nav className="flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-ink/50">
          <Link to="/" className="hover:text-ink">Inicio</Link>
          {crumbs.map((c) => (
            <span key={c} className="flex items-center gap-2">
              <span className="text-clay">/</span>
              <span className="text-ink/80">{c}</span>
            </span>
          ))}
        </nav>
        <p className="mt-6 text-[11px] tracking-[0.35em] uppercase text-ink/60">
          <span className="inline-block w-2 h-2 rounded-full bg-clay mr-3 animate-pulse" />
          {tag}
        </p>
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="font-display font-medium leading-[0.9] tracking-[-0.03em] text-[13vw] md:text-[7.5vw] mt-4"
        >
          {title} {accent && <em className="italic font-light text-clay">{accent}</em>}
        </motion.h1>
        {desc && <p className="mt-6 text-lg text-ink/70 max-w-2xl leading-relaxed">{desc}</p>}
      </div>
      {marquee.length > 0 && (
        <div className="mt-10 border-y border-ink/15 bg-cream/60">
          <Marquee items={marquee} />
        </div>
      )}
    </section>
  );
}
