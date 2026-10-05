// SERVICES → Elementor: Section oscura > Heading + Grid (3 col) > 6× Card (imagen, título, texto, tags)
// Hover zoom + número grande: en Elementor usa CSS .img-zoom + Motion Effects.
import { Link } from "react-router-dom";
import { SERVICES } from "../data/content";
import { MagneticButton, Reveal, SectionTag } from "./ui";

export default function Services() {
  return (
    <section id="servicios" className="bg-ink text-bone py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal>
          <SectionTag index="01" label="Servicios" dark />
        </Reveal>
        <div className="grid md:grid-cols-12 gap-6 mt-8 items-end">
          <Reveal className="md:col-span-8">
            <h2 className="font-display font-light leading-[0.95] tracking-tight text-5xl md:text-7xl">
              Manos que <em className="italic text-ochre">reparan</em>,
              <br /> ojos que <em className="italic text-ochre">conservan</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-4">
            <p className="text-bone/65 leading-relaxed">
              Seis disciplinas, un mismo protocolo de museo: documentación,
              reversibilidad y materiales nobles. Elige tu pieza, nosotros el método.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 0.08}>
              <Link to={`/servicios/${s.slug}`} className="block">
              <article className="group relative rounded-3xl overflow-hidden bg-coal border border-bone/10 hover:border-ochre/50 transition-colors duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="img-zoom aspect-[16/10]">
                  <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover opacity-90" />
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between">
                    <span className="font-display italic text-bone/30 text-4xl leading-none">{s.n}</span>
                    <span className="w-10 h-10 rounded-full border border-bone/20 grid place-items-center transition-all duration-500 group-hover:bg-clay group-hover:border-clay group-hover:rotate-45">
                      ↗
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl mt-3 font-normal">{s.title}</h3>
                  <p className="text-bone/60 mt-2 leading-relaxed text-[15px]">{s.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {s.tags.map((t) => (
                      <span key={t} className="text-[11px] tracking-[0.18em] uppercase border border-bone/15 rounded-full px-3 py-1 text-bone/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <MagneticButton href="/servicios" tone="light">Ver servicios en detalle</MagneticButton>
        </div>
      </div>
    </section>
  );
}
