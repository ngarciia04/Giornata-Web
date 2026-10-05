// BLOG (listado) → Elementor: Página "Blog" + Loop Grid de Entradas.
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { POSTS } from "../data/content";
import { MagneticButton, Reveal, SectionTag } from "../components/ui";

export default function BlogPage() {
  const [feat, ...rest] = POSTS;
  return (
    <>
      <PageHero
        tag="Blog — cuaderno del taller"
        title="Lo que aprendemos"
        accent="restaurando."
        desc="Guías honestas, errores comunes y criterio de museo explicado sin tecnicismos."
        crumbs={["Blog"]}
        marquee={["guías", "taller", "dorado", "conservación"]}
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Reveal><SectionTag index="01" label="Destacado" /></Reveal>
          <Reveal>
            <Link to={`/blog/${feat.slug}`} className="group grid md:grid-cols-2 mt-6 rounded-[28px] overflow-hidden bg-ink text-bone hover:shadow-2xl transition-shadow">
              <div className="img-zoom aspect-[16/10] md:aspect-auto md:min-h-[380px]">
                <img src={feat.img} alt={feat.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="text-[11px] tracking-[0.3em] uppercase text-ochre">{feat.cat} · {feat.date} · {feat.read}</div>
                <h2 className="font-display font-light text-4xl md:text-5xl mt-4 leading-[1.02] group-hover:text-ochre transition-colors">{feat.title}</h2>
                <p className="text-bone/60 mt-4 leading-relaxed">{feat.excerpt}</p>
                <span className="mt-6 text-sm tracking-[0.2em] uppercase">Leer artículo →</span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-12">
            <Reveal><SectionTag index="02" label="Todos los artículos" /></Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 0.07}>
                  <Link to={`/blog/${p.slug}`} className="group block rounded-3xl overflow-hidden bg-bone border border-ink/10 hover:-translate-y-1 hover:shadow-xl transition-all h-full">
                    <div className="img-zoom aspect-[16/10]">
                      <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="text-[11px] tracking-[0.25em] uppercase text-clay">{p.cat} · {p.read}</div>
                      <h3 className="font-display text-2xl mt-2 leading-tight group-hover:text-clay transition-colors">{p.title}</h3>
                      <p className="text-ink/60 text-sm mt-2 leading-relaxed">{p.excerpt}</p>
                      <div className="mt-4 text-xs tracking-[0.2em] uppercase text-ink/50">{p.date}</div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <MagneticButton href="/contacto" tone="ghost">¿Tienes una pieza? Escríbenos</MagneticButton>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
