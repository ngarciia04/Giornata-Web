// ABOUT / TALLER → Elementor: Section clara > 2 columnas (sticky image + texto)
// Columna izq: imágenes superpuestas | Col der: Heading + checklist + firma.
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMAGES } from "../data/content";
import { Reveal, SectionTag } from "./ui";

const POINTS = [
  "Estudio técnico previo y documentación de cada intervención",
  "Mínima intervención, reversibilidad y respeto por el original",
  "Máximo rigor técnico y respeto por el patrimonio",
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -30]);

  return (
    <section id="taller" ref={ref} className="bg-cream py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal>
          <SectionTag index="02" label="El taller" />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-8">
          <div className="relative min-h-[480px]">
            <motion.div style={{ y: y1 }} className="img-zoom absolute left-0 top-0 w-[72%] rounded-[28px] overflow-hidden aspect-[3/4] shadow-xl">
              <img src={IMAGES.aboutMain} alt="Manos restaurando en el taller Giornata" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div style={{ y: y2 }} className="img-zoom absolute right-0 bottom-0 w-[52%] rounded-[24px] overflow-hidden aspect-square shadow-2xl border-8 border-cream">
              <img src={IMAGES.aboutDetail} alt="Detalle de pigmento y pincel" className="w-full h-full object-cover" />
            </motion.div>
            <div className="absolute left-4 bottom-6 bg-ink text-bone rounded-2xl px-5 py-4 shadow-xl">
              <div className="font-display italic text-3xl leading-none">“giornata”</div>
              <div className="text-xs tracking-[0.2em] uppercase text-bone/60 mt-1">la jornada del fresco · lo que se pinta en un día</div>
            </div>
          </div>

          <div>
            <Reveal>
              <h2 className="font-display font-light text-5xl md:text-6xl leading-[0.95] tracking-tight">
                Un taller <em className="italic text-clay">lento</em> en un mundo rápido.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-ink/75 leading-relaxed">
                Somos un equipo de restauradores licenciados en Bellas Artes,
                especializados en <em className="font-display italic">policromías</em> y
                en la intervención sobre arqueología, artes decorativas,
                etnografía y mobiliario. Nuestra labor es multidisciplinar.
              </p>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {POINTS.map((p, i) => (
                <Reveal key={p} delay={i * 0.08}>
                  <li className="flex gap-4 items-start bg-bone rounded-2xl p-4 border border-ink/10">
                    <span className="w-8 h-8 shrink-0 rounded-full bg-moss text-bone grid place-items-center">✓</span>
                    <span className="text-ink/80">{p}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.2}>
              <div className="mt-8 flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-ink text-bone grid place-items-center font-display italic text-2xl">N</div>
                <div>
                  <div className="font-medium">Nuria Esteso Cano</div>
                  <div className="text-sm text-ink/55 tracking-wide">Fundadora · Lic. Bellas Artes, Conservación y Restauración</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
