// FEATURES / PROCESO → Elementor: Section bone > Heading + 4 columnas (steps)
// + comparador Antes/Después: en Elementor usa widget Image Comparison.
import { useState } from "react";
import { IMAGES, PROCESS } from "../data/content";
import { Reveal, SectionTag } from "./ui";

export default function Features() {
  const [pos, setPos] = useState(50);

  return (
    <section id="proceso" className="bg-bone py-20 md:py-28 border-t border-ink/10">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal>
          <SectionTag index="03" label="Proceso & prueba" />
        </Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-8">
          <Reveal>
            <h2 className="font-display font-light text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-3xl">
              De lo <span className="text-outline-ink font-medium">apagado</span> a lo{" "}
              <em className="italic text-clay">vivo</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-ink/65 max-w-sm">Arrastra el tirador y compruébalo. Así documentamos cada pieza: misma luz, mismo encuadre.</p>
          </Reveal>
        </div>

        {/* comparador */}
        <Reveal className="mt-10">
          <div className="relative rounded-[28px] overflow-hidden select-none aspect-[16/9] md:aspect-[21/9] shadow-2xl">
            <img src={IMAGES.after} alt="Mueble después de restaurar" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
              <img
                src={IMAGES.before}
                alt="Mueble antes de restaurar"
                draggable={false}
                className="absolute inset-0 h-full object-cover grayscale contrast-125 brightness-90"
                style={{ width: `${(100 / Math.max(pos, 1)) * 100}%`, maxWidth: "none" }}
              />
              <div className="absolute inset-0 bg-ink/20" />
            </div>
            <span className="absolute top-4 left-4 bg-ink/80 text-bone text-[11px] tracking-[0.25em] uppercase px-4 py-2 rounded-full">Antes</span>
            <span className="absolute top-4 right-4 bg-cream/90 text-ink text-[11px] tracking-[0.25em] uppercase px-4 py-2 rounded-full">Después</span>
            <div className="absolute top-0 bottom-0 bg-cream shadow-xl" style={{ left: `calc(${pos}% - 1px)`, width: 2 }} />
            <button
              aria-label="mover comparador"
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-cream shadow-xl grid place-items-center text-xl border border-ink/10 cursor-ew-resize"
              style={{ left: `${pos}%` }}
            >
              ⟷
            </button>
            <input
              type="range"
              min={2}
              max={98}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              aria-label="Comparar antes y después"
            />
          </div>
        </Reveal>

        {/* steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.07}>
              <div className="group rounded-3xl bg-cream border border-ink/10 p-7 h-full hover:bg-ink hover:text-bone transition-colors duration-500">
                <div className="font-display italic text-5xl text-clay group-hover:text-ochre transition-colors">{p.n}</div>
                <h3 className="font-display text-2xl mt-4">{p.title}</h3>
                <p className="text-sm mt-2 leading-relaxed opacity-70">{p.desc}</p>
                <div className="mt-6 h-1 rounded-full bg-current opacity-15 overflow-hidden">
                  <div className="h-full w-0 bg-clay group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
