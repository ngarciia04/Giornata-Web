// ARTÍCULO (/blog/:slug) → Elementor: Single de Entrada (Theme Builder).
import { Link, Navigate, useParams } from "react-router-dom";
import { POSTS } from "../data/content";
import { MagneticButton, Reveal } from "../components/ui";
import CTA from "../components/CTA";

export default function BlogPost() {
  const { slug } = useParams();
  const idx = POSTS.findIndex((p) => p.slug === slug);
  if (idx === -1) return <Navigate to="/blog" replace />;
  const post = POSTS[idx];
  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="bg-bone pt-28 md:pt-36 pb-10">
        <div className="max-w-[900px] mx-auto px-5">
          <nav className="flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-ink/50">
            <Link to="/" className="hover:text-ink">Inicio</Link>
            <span className="text-clay">/</span>
            <Link to="/blog" className="hover:text-ink">Blog</Link>
            <span className="text-clay">/</span>
            <span className="text-ink/80">{post.cat}</span>
          </nav>
          <Reveal>
            <div className="mt-6 inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase">
              <span className="bg-ink text-bone rounded-full px-4 py-1.5">{post.cat}</span>
              <span className="text-ink/55">{post.date} · {post.read}</span>
            </div>
            <h1 className="font-display font-light text-4xl md:text-6xl leading-[1.02] mt-5">{post.title}</h1>
            <p className="text-lg text-ink/65 mt-4 leading-relaxed">{post.excerpt}</p>
          </Reveal>
        </div>
      </section>

      <div className="bg-bone pb-6">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="rounded-[28px] overflow-hidden shadow-xl aspect-[21/10]">
            <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <article className="bg-cream py-12 md:py-16">
        <div className="max-w-[760px] mx-auto px-5">
          <div className="flex items-center gap-4 pb-8 border-b border-ink/10">
            <div className="w-12 h-12 rounded-full bg-ink text-bone grid place-items-center font-display italic text-xl">M</div>
            <div>
              <div className="font-medium">Marta Giornata</div>
              <div className="text-sm text-ink/55">Restauradora · Taller Giornata</div>
            </div>
            <span className="ml-auto text-[11px] tracking-[0.25em] uppercase text-ink/45">{post.read} de lectura</span>
          </div>
          {post.body.map((par, i) => (
            <Reveal key={i}>
              <p className={`leading-[1.85] text-ink/80 ${i === 0 ? "font-display text-2xl leading-snug mt-8 first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:text-clay" : "mt-6 text-[17px]"}`}>
                {par}
              </p>
            </Reveal>
          ))}
          <Reveal>
            <div className="mt-10 rounded-3xl bg-ink text-bone p-8 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
              <div className="font-display text-2xl">¿Tienes un caso parecido? Te lo valoramos gratis.</div>
              <MagneticButton href="/contacto">Enviar fotos</MagneticButton>
            </div>
          </Reveal>
          <div className="mt-10">
            <div className="text-[11px] tracking-[0.3em] uppercase text-ink/50">Sigue leyendo</div>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`} className="group rounded-2xl overflow-hidden border border-ink/10 bg-bone hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={r.img} alt={r.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-5 font-display text-xl leading-tight">{r.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CTA />
    </>
  );
}
