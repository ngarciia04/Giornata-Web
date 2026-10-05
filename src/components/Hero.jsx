// HERO → Elementor: Section (min-height 100vh, fondo bone)
// Container > Heading gigante + Imagen arco + badges + stats + marquee.
// Todo es layout + parallax: en Elementor usa Motion Effects > Scrolling Effects.
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMAGES } from "../data/content";
import { MagneticButton, Marquee } from "./ui";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section id="inicio" ref={ref} className="relative bg-bone overflow-hidden pt-28 md:pt-32">
      {/* fondo editorial */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-ochre/25 blur-[120px]" />
        <div className="absolute top-1/3 -left-32 w-[420px] h-[420px] rounded-full bg-clay/15 blur-[120px]" />
        <span className="absolute top-24 left-6 text-[11px] tracking-[0.35em] uppercase text-ink/40 [writing-mode:vertical-lr]">
          Est. 1997 — Logroño
        </span>
        <span className="absolute top-24 right-6 text-[11px] tracking-[0.35em] uppercase text-ink/40 [writing-mode:vertical-lr]">
          Taller propio + in situ
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10">
        {/* etiqueta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-ink/60"
        >
          <span className="w-2 h-2 rounded-full bg-clay animate-pulse" />
          Taller de arte & restauración — patrimonio · mural · mueble
        </motion.div>

        {/* titular gigante */}
        <motion.h1
          style={{ y: yTitle }}
          className="font-display font-medium leading-[0.85] tracking-[-0.04em] mt-6 text-[19vw] md:text-[15.5vw] select-none"
        >
          <motion.span
            className="block"
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          >
            GIORNA<span className="italic font-light text-clay">TA</span>
          </motion.span>
        </motion.h1>

        <div className="grid md:grid-cols-12 gap-8 items-end -mt-2 md:-mt-10 pb-10">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            className="md:col-span-4 text-lg md:text-xl leading-snug text-ink/80 max-w-md"
          >
            Especialistas en conservación y restauración con más de
            <em className="font-display italic"> 25 años</em>: policromías,
            retablos, pintura mural y mobiliario, en taller e in situ.
          </motion.p>

          {/* imagen arco */}
          <motion.div style={{ y: yImg }} className="md:col-span-5 relative">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
              className="img-zoom relative rounded-t-[999px] rounded-b-[28px] overflow-hidden aspect-[3/4] max-h-[560px] w-full shadow-2xl"
            >
              <img src={IMAGES.heroArch} alt="Detalle de obra pictórica en restauración" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-cream/90 backdrop-blur rounded-2xl px-5 py-3 text-sm">
                <span className="tracking-widest uppercase text-[11px]">Retablos · Lienzos · Tallas</span>
                <span className="bg-ink text-bone rounded-full px-3 py-1 text-xs">+25 años de oficio</span>
              </div>
            </motion.div>

            {/* sello giratorio */}
            <motion.div
              style={{ rotate }}
              className="absolute -top-8 -right-4 md:-right-8 w-28 h-28 md:w-36 md:h-36"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                <defs>
                  <path id="circ" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <circle cx="50" cy="50" r="50" className="fill-ink" />
                <text className="fill-bone text-[10.5px] tracking-[0.22em] uppercase">
                  <textPath href="#circ">· giornata · desde 1997 · logroño</textPath>
                </text>
                <text x="50" y="60" textAnchor="middle" className="fill-ochre text-2xl">✦</text>
              </svg>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="md:col-span-3 flex flex-col gap-5"
          >
            <div className="img-zoom rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={IMAGES.heroSmall} alt="Pinceles y pigmentos del taller" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-3">
              <MagneticButton>Reservar visita</MagneticButton>
            </div>
            <a href="#proceso" className="link-line text-sm tracking-[0.2em] uppercase text-ink/60 w-fit">
              Ver el proceso ↓
            </a>
          </motion.div>
        </div>

        {/* stats */}
        <div className="grid grid-cols-3 border-t border-ink/15 py-6 text-center md:text-left">
          {[
            ["+25", "años de experiencia"],
            ["1997", "taller en Logroño"],
            ["9", "disciplinas de intervención"],
          ].map(([n, l]) => (
            <div key={l} className="px-2">
              <div className="font-display text-4xl md:text-6xl font-light">{n}</div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-ink/55 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-ink/15 bg-cream/60">
        <Marquee items={["patrimonio religioso", "pintura mural", "retablos y tallas", "mobiliario", "arqueología"]} />
      </div>
    </section>
  );
}
