// FOOTER → Elementor: Footer Template (Theme Builder)
import { Link } from "react-router-dom";
import { NAV, SERVICES } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-bone pt-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 pb-12">
          <div className="md:col-span-5">
            <Link to="/" className="font-display text-3xl">
              Giornata<span className="text-clay">.</span>
            </Link>
            <p className="text-bone/55 mt-4 max-w-sm leading-relaxed">
              Taller de arte y restauración en Valencia desde 1998. Obra
              pictórica, mueble, dorado y conservación preventiva.
            </p>
            <div className="flex gap-3 mt-6">
              {["Instagram", "Pinterest", "TikTok"].map((s) => (
                <a key={s} href="/" className="text-xs tracking-[0.2em] uppercase border border-bone/20 rounded-full px-4 py-2 hover:bg-bone hover:text-ink transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <nav className="md:col-span-4 grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-bone/40 mb-4">Web</div>
              <ul className="space-y-3">
                {NAV.map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="link-line text-bone/75 hover:text-bone">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-bone/40 mb-4">Servicios</div>
              <ul className="space-y-3">
                {SERVICES.slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <Link to={`/servicios/${s.slug}`} className="link-line text-bone/75 hover:text-bone">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="md:col-span-3">
            <div className="text-[11px] tracking-[0.3em] uppercase text-bone/40 mb-4">Horario</div>
            <p className="text-bone/75 text-sm leading-relaxed">
              Lun — Vie · 9:00–18:00<br />Visitas con cita.<br />Urgencias para seguros y museos.
            </p>
            <Link to="/contacto" className="inline-flex mt-5 rounded-full bg-bone text-ink px-6 py-3 text-sm hover:bg-ochre transition-colors">
              Cómo llegar ↗
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div aria-hidden className="font-display font-medium text-outline text-[18.5vw] leading-[0.8] text-center select-none -mb-[3vw]">
          GIORNATA
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-5 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-bone/45">
          <span>© 2026 Giornata Taller de Arte y Restauración — Prototipo React → Elementor</span>
          <span className="flex gap-5">
            <Link to="/contacto" className="hover:text-bone">Aviso legal</Link>
            <Link to="/contacto" className="hover:text-bone">Privacidad</Link>
            <Link to="/contacto" className="hover:text-bone">Cookies</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
