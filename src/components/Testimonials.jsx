// TESTIMONIALS → Elementor: Section > Heading + Slides (widget Slideshow/Testimonial Carousel)
// Solo useState local para el índice: en Elementor es el widget Slider sin código.
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TESTIMONIALS } from "../data/content";
import { Reveal, SectionTag } from "./ui";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];

  return (
    <section id="opiniones" className="bg-ochre/25 py-20 md:py-28 border-y border-ink/10">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        <Reveal>
          <SectionTag index="04" label="Opiniones" />
        </Reveal>
        <Reveal>
          <h2 className="font-display font-light text-5xl md:text-6xl mt-8 tracking-tight">
            Lo que dicen <em className="italic text-clay">las casas</em> que ya pasaron por el taller.
          </h2>
        </Reveal>

        <div className="mt-10 bg-ink text-bone rounded-[28px] p-8 md:p-12 relative overflow-hidden min-h-[340px] flex flex-col justify-between">
          <span aria-hidden className="absolute -top-6 left-6 font-display text-[160px] leading-none text-bone/10 select-none">“</span>
          <AnimatePresence mode="wait">
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="font-display font-light italic text-2xl md:text-4xl leading-tight max-w-3xl">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-medium">{t.name}</div>
                <div className="text-bone/55 text-sm tracking-[0.18em] uppercase">{t.role}</div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-10">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Ver opinión ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ${i === idx ? "w-10 bg-ochre" : "w-2 bg-bone/25 hover:bg-bone/50"}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setIdx((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="w-12 h-12 rounded-full border border-bone/25 hover:bg-bone hover:text-ink transition-colors"
                aria-label="Anterior"
              >
                ←
              </button>
              <button
                onClick={() => setIdx((idx + 1) % TESTIMONIALS.length)}
                className="w-12 h-12 rounded-full bg-clay hover:bg-ochre hover:text-ink transition-colors"
                aria-label="Siguiente"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
