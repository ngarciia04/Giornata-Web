// SERVICIO DETALLE (/servicios/:slug) → Elementor: Single de CPT "Servicios" (Theme Builder).
import { Link, Navigate, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { PROCESS, SERVICES } from "../data/content";
import { MagneticButton, Reveal } from "../components/ui";

export default function ServiceDetail() {
  const { slug } = useParams();
  const idx = SERVICES.findIndex((s) => s.slug === slug);
  if (idx === -1) return <Navigate to="/servicios" replace />;
  const s = SERVICES[idx];
  const next = SERVICES[(idx + 1) % SERVICES.length];

  return (
    <>
      <PageHero
        tag={`Servicio ${s.n} / 06`}
        title={s.title}
        accent="."
        desc={s.long}
        crumbs={["Servicios", s.title]}
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-7">
            <div className="img-zoom rounded-[28px] overflow-hidden aspect-[16/11] shadow-xl">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
            </div>
            <h2 className="font-display font-light text-4xl md:text-5xl mt-10">Qué incluye</h2>
            <ul className="mt-6 space-y-3">
              {s.includes.map((inc) => (
                <li key={inc} className="flex gap-4 items-center bg-bone rounded-2xl p-4 border border-ink/10">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-moss text-bone grid place-items-center">✓</span>
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
            <h2 className="font-display font-light text-4xl md:text-5xl mt-10">Cómo lo hacemos</h2>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {PROCESS.map((p) => (
                <div key={p.n} className="rounded-2xl bg-bone border border-ink/10 p-6">
                  <div className="font-display italic text-3xl text-clay">{p.n}</div>
                  <div className="font-display text-xl mt-1">{p.title}</div>
                  <p className="text-sm text-ink/60 mt-1">{p.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 space-y-5">
              <div className="rounded-[28px] bg-ink text-bone p-8">
                <div className="text-[11px] tracking-[0.3em] uppercase text-bone/50">Ficha rápida</div>
                <div className="mt-4 space-y-3 text-lg">
                  <div className="flex justify-between border-b border-bone/10 pb-3"><span className="text-bone/55">Plazo</span><span>{s.time}</span></div>
                  <div className="flex justify-between border-b border-bone/10 pb-3"><span className="text-bone/55">Precio</span><span className="text-ochre">{s.price}</span></div>
                  <div className="flex justify-between"><span className="text-bone/55">Garantía</span><span>Informe + 2 años</span></div>
                </div>
                <div className="mt-6 grid gap-3">
                  <MagneticButton href="/contacto">Pedir diagnóstico gratis</MagneticButton>
                  <MagneticButton href="/galeria" tone="ghost">Ver antes / después</MagneticButton>
                </div>
                <p className="mt-4 text-xs text-bone/45">Respuesta en 48h con fotos y medidas.</p>
              </div>
              <div className="rounded-[28px] bg-bone border border-ink/10 p-8">
                <div className="text-[11px] tracking-[0.3em] uppercase text-ink/50">Otras disciplinas</div>
                <div className="mt-4 grid gap-2">
                  {SERVICES.filter((x) => x.slug !== s.slug).slice(0, 4).map((x) => (
                    <Link key={x.slug} to={`/servicios/${x.slug}`} className="flex justify-between items-center rounded-xl px-4 py-3 hover:bg-cream border border-transparent hover:border-ink/10 transition-all">
                      <span className="font-display text-lg">{x.title}</span><span>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-clay text-cream py-14">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-cream/60">Siguiente servicio</div>
            <div className="font-display font-light text-4xl md:text-6xl mt-2">{next.title}</div>
          </div>
          <Link to={`/servicios/${next.slug}`} className="rounded-full bg-cream text-ink px-8 py-4 hover:bg-ink hover:text-bone transition-colors">
            Ver detalle ↗
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
