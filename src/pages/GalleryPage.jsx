// GALERÍA → Elementor: Página "Galería" + Loop Grid con filtro (Tabs).
// Filtro = estado local; en Elementor usa widget Portfolio + filtros por taxonomía.
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { GALLERY } from "../data/content";
import { Reveal, SectionTag } from "../components/ui";

const CATS = ["Todo", ...Array.from(new Set(GALLERY.map((g) => g.cat)))];

export default function GalleryPage() {
  const [cat, setCat] = useState("Todo");
  const [light, setLight] = useState(null);
  const items = GALLERY.filter((g) => cat === "Todo" || g.cat === cat);

  return (
    <>
      <PageHero
        tag="Galería — antes / después"
        title="Piezas que"
        accent="volvieron a la luz."
        desc="Una selección del taller. Pulsa cualquier pieza para verla en grande."
        crumbs={["Galería"]}
        marquee={["pictórica", "mueble", "dorado", "papel"]}
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Reveal><SectionTag index="01" label="Filtrar por disciplina" /></Reveal>
          <div className="flex flex-wrap gap-2 mt-6">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-6 py-3 text-sm tracking-wide transition-all duration-300 ${
                  cat === c ? "bg-ink text-bone" : "border border-ink/20 hover:bg-ink hover:text-bone"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <AnimatePresence mode="popLayout">
              {items.map((g) => (
                <motion.button
                  layout
                  key={g.title}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLight(g)}
                  className="group text-left rounded-3xl overflow-hidden bg-bone border border-ink/10 hover:-translate-y-1 hover:shadow-xl transition-all"
                >
                  <div className="img-zoom aspect-[4/3]">
                    <img src={g.img} alt={g.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 flex items-center justify-between gap-3">
                    <div>
                      <div className="font-display text-xl leading-tight">{g.title}</div>
                      <div className="text-[11px] tracking-[0.25em] uppercase text-clay mt-1">{g.cat}</div>
                    </div>
                    <span className="w-10 h-10 shrink-0 rounded-full border border-ink/20 grid place-items-center group-hover:bg-ink group-hover:text-bone transition-colors">⤢</span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {light && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLight(null)}
            className="fixed inset-0 z-[80] bg-ink/90 backdrop-blur grid place-items-center p-5"
          >
            <motion.figure
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 10 }}
              className="max-w-4xl w-full bg-cream rounded-[28px] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={light.img} alt={light.title} className="w-full max-h-[70vh] object-cover" />
              <figcaption className="p-6 flex items-center justify-between gap-4">
                <div>
                  <div className="font-display text-2xl">{light.title}</div>
                  <div className="text-[11px] tracking-[0.25em] uppercase text-clay mt-1">{light.cat} · Giornata taller</div>
                </div>
                <button onClick={() => setLight(null)} className="w-12 h-12 rounded-full bg-ink text-bone hover:bg-clay transition-colors">✕</button>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
    </>
  );
}
