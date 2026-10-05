# Giornata · Guía de traducción React → WordPress + Elementor Pro

Prototipo en React (Vite + Tailwind + Framer Motion). Sin backend, sin APIs, sin auth.
Todo lo visual es reproducible con Elementor Pro + CSS.

## 1. Mapa ruta → página / plantilla WP

| Ruta React (`src/pages/`) | WordPress / Elementor | Contenido |
|---|---|---|
| `/` → `Home.jsx` | Portada (Front Page) | `Hero + Services + About + Features + Testimonials + CTA` (intacto) |
| `/nosotros` → `AboutPage.jsx` | Página "Sobre Nosotros" | `PageHero` + historia + valores + equipo (`TEAM`) + timeline + `CTA` |
| `/servicios` → `ServicesPage.jsx` | Página "Servicios" + CPT Servicios | Listado 6 cards → enlazan a `/servicios/:slug` + protocolo + FAQ |
| `/servicios/:slug` → `ServiceDetail.jsx` | Single CPT Servicio (Theme Builder) | Ficha (plazo/precio) + incluye + proceso + siguiente servicio + `CTA` |
| `/galeria` → `GalleryPage.jsx` | Página "Galería" | Loop Grid `GALLERY` + filtros por taxonomía + lightbox |
| `/blog` → `BlogPage.jsx` | Página "Blog" (Entradas) | Destacado + grid `POSTS` + newsletter visual |
| `/blog/:slug` → `BlogPost.jsx` | Single Entrada (Theme Builder) | Portada + cuerpo + autor + relacionados + `CTA` |
| `/contacto` → `ContactPage.jsx` | Página "Contacto" | Datos + Form + Mapa + FAQ |

## 1b. Mapa sección → plantilla (home)

| React (`src/components/`) | Elementor | Widgets |
|---|---|---|
| `Header.jsx` | Theme Builder → Header (sticky) | Logo (Heading) + Menu + Button “Diagnóstico” + Mobile menu fullscreen |
| `Hero.jsx` (#inicio) | Page → Section min-height 100vh, fondo `bone #EFE8DA` | Heading gigante (Fraunces 15vw) + Text + Button + Image (arco: border-radius 999px top) + Counter stats + Marquee |
| `Services.jsx` (#servicios) | Section fondo `ink #14120F` | Heading + Loop Grid 3col × 6 Cards (Image, Heading, Text, Badge tags) |
| `About.jsx` (#taller) | Section fondo `cream #F6F1E6` | 2 columnas: izq imágenes superpuestas (Motion Effects → Scrolling parallax), der Heading + Icon List + firma |
| `Features.jsx` (#proceso) | Section fondo `bone` | Heading + widget **Image Comparison** (Antes/Después) + 4 columnas Steps |
| `Testimonials.jsx` (#opiniones) | Section fondo `ochre/25` | Heading + **Testimonial Carousel / Slides** (autoplay 6s) |
| `CTA.jsx` (#contacto) | Section fondo `clay #C8502E` + bg image overlay 15% | Heading + datos contacto + widget **Form** (nombre, email, select pieza, textarea) → email |
| `Footer.jsx` | Theme Builder → Footer | 3 columnas + Heading gigante outline + barra legal |

## 2. Tokens (Site Settings → Colors / Fonts)

- `ink #14120F` · `coal #1E1B16` · `bone #EFE8DA` · `cream #F6F1E6`
- `clay #C8502E` · `clay-deep #9E3A1F` · `ochre #D9A441` · `stone #8A8378` · `moss #4A5240`
- Display: **Fraunces** (light + italic) · Texto: **Space Grotesk**
- Radio cards: `28px` · Botones: pill `999px` · Sombras suaves XL

## 3. Efectos → cómo replicarlos sin React

- **Reveal on scroll** (`ui.jsx Reveal`): Elementor → Motion Effects → Entrance Animation (Fade Up, 900ms). Stagger con delay por columna.
- **Parallax hero/about** (`useScroll`): Elementor Pro → Scrolling Effects → Vertical Speed distinta por widget.
- **Marquee** (`ui.jsx Marquee`): pega este CSS en Customizer y duplica el contenido 2×:
  ```css
  @keyframes marquee { to { transform: translateX(-50%); } }
  .marquee-track { display:inline-flex; animation: marquee 22s linear infinite; }
  ```
- **Hover zoom cards** (`.img-zoom`): Custom CSS del repo `src/index.css` → copiar a la Card.
- **Grano de película** (`.grain::after`): es solo un overlay SVG fijo al 7% — pégalo como Custom CSS del body.
- **Cursor custom + preloader + Lenis smooth**: prescindibles en WP. Sustituye Lenis por el “Smooth Scroll” del tema o ignóralo; el preloader puede ser un popup de Elementor con animación de conteo o simplemente omitirse.
- **Comparador Antes/Después** (`Features.jsx`): usa el widget nativo **Image Comparison** de Elementor (mismo layout, sin código).
- **Slider opiniones** (`Testimonials.jsx`): widget **Slides** con 3 slides copiadas de `src/data/content.js`.

## 4. Contenido editable

Todo el copy vive en `src/data/content.js` (SERVICES, PROCESS, TESTIMONIALS, NAV, IMAGES).
Para migrar: cada objeto del array = una Card/Slide en Elementor. Las URLs de Unsplash son placeholder:
súbelas a Biblioteca de Medios y sustitúyelas.

## 5. Lo que NO se migra (a propósito)

Preloader con contador, Lenis, cursor personalizado y `framer-motion` son del prototipo.
En WP se sustituyen por equivalentes nativos de Elementor listados arriba. No hay
estado global, ni rutas, ni fetch: el formulario es visual (`onSubmit preventDefault`).
