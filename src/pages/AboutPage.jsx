// SOBRE NOSOTROS → Elementor: Página "Nosotros"
// Hero + historia + valores + equipo + timeline + CTA.
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { CONTACT, CREW, IMAGES } from "../data/content";
import { MagneticButton, Reveal, SectionTag } from "../components/ui";

const VALUES = [
  { t: "Mínima intervención", d: "Intervenimos solo lo necesario, con técnicas específicas y adaptadas a cada obra." },
  { t: "Reversibilidad", d: "Respeto absoluto por los materiales originales y la autenticidad de cada pieza." },
  { t: "Rigor y respeto", d: "Estudio previo, documentación completa y estándares internacionales de calidad." },
];

const YEARS = [
  ["1997", "Taller propio en Logroño: aquí intervenimos cada pieza que puede moverse."],
  ["+25", "años de experiencia en patrimonio religioso, pintura, arqueología y mobiliario."],
  ["360°", "del estudio previo a la protección final, en taller o in situ."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="Sobre nosotros — el taller"
        title="Lento por"
        accent="convicción."
        desc="Taller propio en Logroño desde 1997: conservación y restauración de obras de arte con más de 25 años de experiencia."
        crumbs={["Nosotros"]}
        marquee={["desde 1997", "logroño", "policromías", "criterio museo"]}
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="img-zoom rounded-[28px] overflow-hidden aspect-[4/5] shadow-xl">
              <img src={IMAGES.aboutHistory} alt="Taller Giornata" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <div>
            <Reveal><SectionTag index="01" label="Historia" /></Reveal>
            <Reveal>
              <h2 className="font-display font-light text-4xl md:text-6xl mt-6 leading-[0.95]">
                Bienvenidos a <em className="italic text-clay">Giornata.</em>
              </h2>
              <p className="mt-6 text-ink/75 text-lg leading-relaxed">
                Taller de arte y restauración, especialistas en conservación y
                restauración de obras de arte. Especialización en policromías,
                con trabajos sobre arqueología, artes decorativas, etnografía
                y mobiliario, entre otros. Nuestra labor es multidisciplinar.
              </p>
              <p className="mt-4 text-ink/65 leading-relaxed">
                Contamos con taller propio en Logroño desde {CONTACT.since}, donde
                realizamos intervenciones, además de trabajar in situ cuando la
                obra lo requiere. Trabajamos para museos, diócesis, instituciones,
                profesionales y particulares.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex gap-3">
                <MagneticButton href="/galeria" tone="ghost">Ver trabajos</MagneticButton>
                <MagneticButton href="/contacto">Visitar el taller</MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-bone py-16 md:py-24 border-t border-ink/10">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Reveal><SectionTag index="02" label="Valores" /></Reveal>
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.08}>
                <div className="rounded-3xl bg-cream border border-ink/10 p-8 h-full hover:bg-ink hover:text-bone transition-colors duration-500">
                  <div className="font-display italic text-5xl text-clay">0{i + 1}</div>
                  <h3 className="font-display text-2xl mt-4">{v.t}</h3>
                  <p className="mt-2 opacity-70">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Reveal><SectionTag index="03" label="Equipo y colaboradores" dark /></Reveal>
          <Reveal>
            <p className="mt-6 text-bone/65 max-w-3xl leading-relaxed">
              Somos un equipo de restauradores licenciados en Bellas Artes. Y cuando
              el proyecto lo pide, trabajamos codo a codo con profesionales
              altamente especializados para soluciones integrales.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5 mt-8">
            {CREW.map((m, i) => (
              <Reveal key={m.t} delay={i * 0.08}>
                <div className="rounded-3xl bg-coal border border-bone/10 p-8 h-full hover:border-ochre/50 transition-colors">
                  <div className="font-display italic text-5xl text-ochre">0{i + 1}</div>
                  <div className="font-display text-2xl mt-4">{m.t}</div>
                  <div className="text-bone/55 text-sm mt-2 leading-relaxed">{m.d}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6 border-t border-bone/10 pt-10">
            {YEARS.map(([y, d]) => (
              <div key={y}>
                <div className="font-display italic text-4xl text-ochre">{y}</div>
                <p className="text-bone/60 mt-2 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
