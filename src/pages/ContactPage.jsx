// CONTACTO → Elementor: Página "Contacto" (Form + Mapa + FAQ).
import PageHero from "../components/PageHero";
import { CONTACT, FAQS } from "../data/content";
import { Reveal, SectionTag } from "../components/ui";

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="Contacto — respuesta en 48h"
        title="Cuéntanos"
        accent="tu pieza."
        desc="Si necesitas asesoramiento o un proyecto de restauración, estaremos encantados de ayudarte."
        crumbs={["Contacto"]}
        marquee={["logroño", "taller propio", "trabajo in situ"]}
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-5">
            <SectionTag index="01" label="Taller" />
            <h2 className="font-display font-light text-4xl md:text-5xl mt-6">Ven a vernos <em className="italic text-clay">en directo.</em></h2>
            <ul className="mt-8 space-y-4">
              {[
                ["◎", "Dirección", CONTACT.address, CONTACT.mapsUrl],
                ["☎", "Teléfono", CONTACT.phoneFull, CONTACT.phoneHref],
                ["✉", "Email", CONTACT.email, `mailto:${CONTACT.email}`],
              ].map(([icon, k, v, href]) => (
                <li key={k} className="flex gap-4 items-center bg-bone rounded-2xl p-5 border border-ink/10">
                  <span className="w-11 h-11 shrink-0 rounded-full bg-ink text-bone grid place-items-center text-lg">{icon}</span>
                  <span><span className="block text-[11px] tracking-[0.25em] uppercase text-ink/50">{k}</span><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="font-medium hover:text-clay transition-colors">{v}</a></span>
                </li>
              ))}
            </ul>
            {/* Mapa visual: en Elementor sustituye por widget Google Maps */}
            <div className="mt-5 rounded-[28px] overflow-hidden border border-ink/10 bg-bone aspect-[16/10] relative">
              <div
                className="absolute inset-0 opacity-90"
                style={{
                  backgroundImage:
                    "linear-gradient(#14120f11 1px, transparent 1px), linear-gradient(90deg, #14120f11 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center bg-cream rounded-2xl px-6 py-5 shadow-xl border border-ink/10">
                  <div className="text-3xl">📍</div>
                  <div className="font-display text-xl mt-1">C. Somosierra, 23 — Logroño</div>
                  <a href={CONTACT.mapsUrl} target="_blank" rel="noreferrer" className="text-sm text-clay link-line">Abrir en Google Maps ↗</a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form onSubmit={(e) => e.preventDefault()} className="bg-ink text-bone rounded-[28px] p-7 md:p-10 shadow-2xl lg:sticky lg:top-28">
              <SectionTag index="02" label="Envíanos un mensaje" dark />
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <label className="grid gap-2 text-sm">
                  <span className="tracking-[0.2em] uppercase text-[11px] text-bone/55">Nombre</span>
                  <input required placeholder="Tu nombre" className="rounded-xl bg-coal border border-bone/15 px-4 py-3 outline-none focus:border-ochre placeholder:text-bone/30" />
                </label>
                <label className="grid gap-2 text-sm">
                  <span className="tracking-[0.2em] uppercase text-[11px] text-bone/55">Apellidos</span>
                  <input required placeholder="Tus apellidos" className="rounded-xl bg-coal border border-bone/15 px-4 py-3 outline-none focus:border-ochre placeholder:text-bone/30" />
                </label>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <label className="grid gap-2 text-sm">
                  <span className="tracking-[0.2em] uppercase text-[11px] text-bone/55">Email</span>
                  <input required type="email" placeholder="tu@email.com" className="rounded-xl bg-coal border border-bone/15 px-4 py-3 outline-none focus:border-ochre placeholder:text-bone/30" />
                </label>
                <label className="grid gap-2 text-sm">
                  <span className="tracking-[0.2em] uppercase text-[11px] text-bone/55">Número de teléfono</span>
                  <input required type="tel" placeholder="600 000 000" className="rounded-xl bg-coal border border-bone/15 px-4 py-3 outline-none focus:border-ochre placeholder:text-bone/30" />
                </label>
              </div>
              <label className="grid gap-2 text-sm mt-4">
                <span className="tracking-[0.2em] uppercase text-[11px] text-bone/55">Mensaje</span>
                <textarea rows={5} placeholder="Cuéntanos tu pieza o proyecto…" className="rounded-xl bg-coal border border-bone/15 px-4 py-3 outline-none focus:border-ochre resize-none placeholder:text-bone/30" />
              </label>
              <button className="mt-6 w-full rounded-full bg-clay py-4 font-medium hover:bg-ochre hover:text-ink transition-colors">
                Enviar mensaje ↗
              </button>
              <p className="mt-3 text-xs text-bone/40 text-center">Prototipo visual — en Elementor conecta este Form a {CONTACT.email}.</p>
            </form>
          </Reveal>
        </div>

        <div className="max-w-[1400px] mx-auto px-5 md:px-10 mt-12 grid md:grid-cols-2 gap-4">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-2xl bg-bone border border-ink/10 p-6 open:bg-ink open:text-bone transition-colors">
              <summary className="font-display text-xl cursor-pointer list-none flex justify-between items-center gap-4">
                {f.q}<span className="text-clay group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 opacity-70 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
