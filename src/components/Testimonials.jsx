// CLIENTES → Elementor: Section > Heading + 5 Cards (Icon Box).
// Contenido real de giornata.es: "Trabajamos para museos, diócesis, instituciones,
// profesionales y particulares. Nuestra trayectoria es nuestro mejor aval."
import { Link } from "react-router-dom";
import { CLIENTS } from "../data/content";
import { Reveal, SectionTag } from "./ui";

const ICONS = ["🏛", "⛪", "🏢", "🧰", "🏠"];

export default function Testimonials() {
  return (
    <section id="clientes" className="bg-ochre/25 py-20 md:py-28 border-y border-ink/10">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal>
          <SectionTag index="04" label="Para quién trabajamos" />
        </Reveal>
        <div className="grid lg:grid-cols-12 gap-8 mt-8 items-end">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display font-light text-5xl md:text-6xl tracking-tight">
              Nuestra trayectoria es <em className="italic text-clay">nuestro mejor aval.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-ink/65 leading-relaxed">
              Más de 25 años restaurando para museos, diócesis, instituciones,
              profesionales y particulares, en el taller y donde la obra lo requiera.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          {CLIENTS.map((c, i) => (
            <Reveal key={c} delay={i * 0.06}>
              <div className="rounded-3xl bg-ink text-bone p-7 text-center hover:bg-clay transition-colors duration-500 h-full">
                <div className="text-4xl">{ICONS[i % ICONS.length]}</div>
                <div className="font-display text-xl md:text-2xl mt-3">{c}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 text-center">
            <Link to="/contacto" className="link-line text-sm tracking-[0.2em] uppercase text-ink/60">
              Cuéntanos tu proyecto →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
