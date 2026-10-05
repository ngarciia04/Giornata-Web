// SERVICIOS (listado) → Elementor: Página "Servicios" + Loop Grid.
// Cada card enlaza a su detalle (/servicios/:slug) → Single de CPT Servicios.
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { FAQS, PROCESS, SERVICES } from "../data/content";
import { Reveal, SectionTag } from "../components/ui";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tag="Servicios — seis disciplinas"
        title="Elige tu pieza,"
        accent="ponemos el método."
        desc="Nuestra labor es multidisciplinar: nueve disciplinas con el máximo rigor técnico y respeto por el patrimonio en cada intervención."
        crumbs={["Servicios"]}
        marquee={["pintura", "mueble", "dorado", "papel", "escultura", "preventiva"]}
      />

      <section className="bg-ink text-bone py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Reveal><SectionTag index="01" label="Detalle por disciplina" dark /></Reveal>
          <div className="space-y-5 mt-8">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug}>
                <Link
                  to={`/servicios/${s.slug}`}
                  className="group grid md:grid-cols-12 gap-6 items-center rounded-[28px] bg-coal border border-bone/10 hover:border-ochre/50 transition-all duration-500 overflow-hidden hover:-translate-y-1"
                >
                  <div className="img-zoom md:col-span-4 aspect-[16/10] md:aspect-auto md:h-full md:min-h-[240px]">
                    <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="md:col-span-8 p-6 md:p-10">
                    <div className="flex items-center gap-4">
                      <span className="font-display italic text-bone/30 text-3xl">{s.n}</span>
                      <span className="text-[11px] tracking-[0.25em] uppercase text-ochre">{s.tags.join(" · ")}</span>
                    </div>
                    <h2 className="font-display font-light text-4xl md:text-5xl mt-2 group-hover:text-ochre transition-colors">{s.title}</h2>
                    <p className="text-bone/60 mt-3 max-w-2xl leading-relaxed">{s.long}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-5">
                      {s.includes.slice(0, 3).map((t) => (
                        <span key={t} className="text-xs border border-bone/15 rounded-full px-3 py-1 text-bone/60">{t}</span>
                      ))}
                      <span className="ml-auto w-12 h-12 rounded-full bg-clay grid place-items-center text-xl transition-transform duration-500 group-hover:rotate-45">↗</span>
                    </div>
                  </div>
                  {i === 0 && <span className="sr-only">Ver detalle</span>}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Reveal><SectionTag index="02" label="Protocolo común" /></Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.07}>
                <div className="rounded-3xl bg-cream border border-ink/10 p-7 h-full">
                  <div className="font-display italic text-5xl text-clay">{p.n}</div>
                  <h3 className="font-display text-2xl mt-3">{p.title}</h3>
                  <p className="text-sm mt-2 text-ink/65 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-12">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-cream border border-ink/10 p-6 open:bg-ink open:text-bone transition-colors">
                <summary className="font-display text-xl cursor-pointer list-none flex justify-between items-center gap-4">
                  {f.q}<span className="text-clay group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 opacity-70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
