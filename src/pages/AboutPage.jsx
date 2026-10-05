// SOBRE NOSOTROS → Elementor: Página "Nosotros"
// Hero + historia + valores + equipo + timeline + CTA.
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { IMAGES, TEAM } from "../data/content";
import { MagneticButton, Reveal, SectionTag } from "../components/ui";

const VALUES = [
  { t: "Reversibilidad", d: "Todo lo que añadimos se puede retirar. El futuro también restaura." },
  { t: "Pátina sí, suciedad no", d: "Limpiamos sin dejar la pieza como nueva de fábrica: respetamos su edad." },
  { t: "Documento, luego toco", d: "Foto, UV, cata y presupuesto cerrado antes de intervenir." },
];

const YEARS = [
  ["1998", "Marta abre el taller en Ruzafa con una mesa y un caballete."],
  ["2007", "Incorporamos ebanistería y horno de dorado al agua."],
  ["2016", "Acreditación para museos y compañías de seguros."],
  ["2026", "3.400 piezas devueltas y un equipo de 6 manos."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="Sobre nosotros — el taller"
        title="Lento por"
        accent="convicción."
        desc="Desde 1998 restauramos como se pintaba al fresco: por giornate, jornadas enteras dedicadas a una sola pieza."
        crumbs={["Nosotros"]}
        marquee={["desde 1998", "criterio museo", "materiales nobles", "valencia"]}
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="img-zoom rounded-[28px] overflow-hidden aspect-[4/5] shadow-xl">
              <img src={IMAGES.aboutMain} alt="Taller Giornata" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <div>
            <Reveal><SectionTag index="01" label="Historia" /></Reveal>
            <Reveal>
              <h2 className="font-display font-light text-4xl md:text-6xl mt-6 leading-[0.95]">
                Una palabra italiana, <em className="italic text-clay">un taller valenciano.</em>
              </h2>
              <p className="mt-6 text-ink/75 text-lg leading-relaxed">
                <em className="font-display italic">Giornata</em> es lo que un fresquista
                pinta en un día, antes de que seque el enlucido. Esa es nuestra
                medida: una pieza, una jornada, toda la atención. Sin cadena de
                montaje, sin subcontratas, sin brillos plásticos.
              </p>
              <p className="mt-4 text-ink/65 leading-relaxed">
                Hoy somos ebanista, doradora y dos restauradoras de pintura.
                Compartimos mesa, microscopio y café — y firmamos cada informe
                con nombre y criterio.
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
          <Reveal><SectionTag index="03" label="Equipo" dark /></Reveal>
          <div className="grid sm:grid-cols-3 gap-5 mt-8">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="group rounded-3xl overflow-hidden bg-coal border border-bone/10">
                  <div className="img-zoom aspect-[3/4]">
                    <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="font-display text-2xl">{m.name}</div>
                    <div className="text-bone/55 text-sm tracking-[0.15em] uppercase mt-1">{m.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid md:grid-cols-4 gap-6 border-t border-bone/10 pt-10">
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
