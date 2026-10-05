// CTA / CONTACTO → Elementor: Section (fondo clay) > 2 col:
// Col izq: Heading gigante + datos contacto | Col der: Form widget (Name, Email, Select, Textarea, Submit)
import { CONTACT, IMAGES } from "../data/content";
import { Reveal } from "./ui";

export default function CTA() {
  return (
    <section id="contacto" className="bg-clay text-cream py-20 md:py-28 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.cta})` }}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-clay via-clay/95 to-clay-deep/90" />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-12">
        <div>
          <Reveal>
            <p className="text-[11px] tracking-[0.35em] uppercase text-cream/70">(05) — Contacto</p>
            <h2 className="font-display font-light text-6xl md:text-8xl leading-[0.9] tracking-tight mt-4">
              ¿Hablamos<br /> de tu <em className="italic">pieza?</em>
            </h2>
            <p className="mt-6 text-cream/80 text-lg max-w-md">
              Si necesitas asesoramiento o un proyecto de restauración,
              estaremos encantados de ayudarte. Escríbenos sin compromiso.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="mt-8 space-y-3 text-cream/90">
              <li className="flex gap-3 items-center"><span className="w-10 h-10 rounded-full bg-cream/15 grid place-items-center">✉</span> {CONTACT.email}</li>
              <li className="flex gap-3 items-center"><span className="w-10 h-10 rounded-full bg-cream/15 grid place-items-center">☎</span> {CONTACT.phoneFull}</li>
              <li className="flex gap-3 items-center"><span className="w-10 h-10 rounded-full bg-cream/15 grid place-items-center">◎</span> {CONTACT.address}</li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form
            className="bg-cream text-ink rounded-[28px] p-7 md:p-9 shadow-2xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="grid gap-2 text-sm">
                <span className="tracking-[0.2em] uppercase text-[11px] text-ink/60">Nombre</span>
                <input required placeholder="Tu nombre" className="rounded-xl border border-ink/15 bg-white px-4 py-3 outline-none focus:border-clay" />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="tracking-[0.2em] uppercase text-[11px] text-ink/60">Apellidos</span>
                <input required placeholder="Tus apellidos" className="rounded-xl border border-ink/15 bg-white px-4 py-3 outline-none focus:border-clay" />
              </label>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <label className="grid gap-2 text-sm">
                <span className="tracking-[0.2em] uppercase text-[11px] text-ink/60">Email</span>
                <input required type="email" placeholder="tu@email.com" className="rounded-xl border border-ink/15 bg-white px-4 py-3 outline-none focus:border-clay" />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="tracking-[0.2em] uppercase text-[11px] text-ink/60">Teléfono de contacto</span>
                <input required type="tel" placeholder="600 000 000" className="rounded-xl border border-ink/15 bg-white px-4 py-3 outline-none focus:border-clay" />
              </label>
            </div>
            <label className="grid gap-2 text-sm mt-4">
              <span className="tracking-[0.2em] uppercase text-[11px] text-ink/60">Asunto</span>
              <input placeholder="¿Sobre qué nos escribes?" className="rounded-xl border border-ink/15 bg-white px-4 py-3 outline-none focus:border-clay" />
            </label>
            <label className="grid gap-2 text-sm mt-4">
              <span className="tracking-[0.2em] uppercase text-[11px] text-ink/60">Mensaje</span>
              <textarea rows={4} placeholder="Cuéntanos tu pieza o proyecto…" className="rounded-xl border border-ink/15 bg-white px-4 py-3 outline-none focus:border-clay resize-none" />
            </label>
            <button className="mt-6 w-full rounded-full bg-ink text-bone py-4 font-medium hover:bg-clay transition-colors duration-300">
              Enviar mensaje ↗
            </button>
            <p className="mt-3 text-xs text-ink/50 text-center">
              Formulario visual de prototipo — en Elementor conecta este Form a tu email / Mailchimp.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
