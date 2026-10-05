// ELEMENTOR-MAP: este archivo es tu "contenido editable".
// En WordPress: SERVICES → CPT "Servicios" | POSTS → Entradas/Blog | GALLERY → Media + Loop Grid.
// Cada objeto → una Card / Single. Textos 1:1 para copiar-pegar.

export const IMAGES = {
  heroArch:
    "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1200&auto=format&fit=crop",
  heroSmall:
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
  aboutMain:
    "https://images.unsplash.com/photo-1459908676239-d5f02a50184b?q=80&w=1200&auto=format&fit=crop",
  aboutDetail:
    "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop",
  cta:
    "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=1400&auto=format&fit=crop",
  before:
    "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop&sat=-100",
  after:
    "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop",
};

export const NAV = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Galería", href: "/galeria" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

export const SERVICES = [
  {
    n: "01",
    slug: "obra-pictorica",
    title: "Obra pictórica",
    desc: "Lienzo, tabla y mural. Limpieza, consolidación, reintegración cromática y barnizado final.",
    long: "Tratamos óleo, temple y técnica mixta sobre lienzo, tabla y muro. Cada obra entra con informe fotográfico, test de solubilidad y cata de limpieza: solo intervenimos lo necesario y todo queda documentado para tu seguro o herencia.",
    includes: ["Limpieza de barnices y repintes", "Sentado de color y consolidación", "Reintegración con tratteggio", "Barnizado museo + informe final"],
    time: "2 – 6 semanas",
    price: "desde 180 €",
    tags: ["Óleo", "Temple", "Mural"],
    img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format&fit=crop",
  },
  {
    n: "02",
    slug: "mueble-madera",
    title: "Mueble y madera",
    desc: "Decapado reversible, ebanistería, marquetería, goma laca a muñequilla y tapicería.",
    long: "Cómodas, bargueños, sillas y mesas. Reencolamos ensambles, reponemos chapeados y marquetería perdida y acabamos a goma laca sin plásticos: el mueble vuelve sólido y con su pátina intacta.",
    includes: ["Ebanistería y reencolado", "Marquetería y talla", "Goma laca a muñequilla", "Tapicería tradicional"],
    time: "3 – 8 semanas",
    price: "desde 220 €",
    tags: ["Ébano", "Nogal", "Laca"],
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
  },
  {
    n: "03",
    slug: "dorado-policromia",
    title: "Dorado y policromía",
    desc: "Pan de oro, bruñido con ágata, estofados, esgrafiados y reposición de faltas.",
    long: "Marcos, retablos y escultura dorada. Asentamos bol, ponemos oro de 24k al agua o a la mixtión, bruñimos con ágata y reintegramos estofados sin que se note el corte entre original y reposición.",
    includes: ["Oro 24k al agua y mixtión", "Bruñido con ágata", "Estofado y esgrafiado", "Patinado de reintegración"],
    time: "2 – 5 semanas",
    price: "desde 150 €",
    tags: ["Oro 24k", "Retablo", "Marco"],
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop",
  },
  {
    n: "04",
    slug: "papel-documento",
    title: "Papel y documento",
    desc: "Desacidificación, alisado, injertos de pulpa y encapsulado de obra gráfica.",
    long: "Grabados, carteles, libros y documentos. Lavado controlado, desacidificación, injertos tono sobre tono y encapsulado libre de ácido para que puedas exponerlo sin miedo.",
    includes: ["Limpieza y desacidificado", "Injertos y alisado", "Encapsulado museo", "Enmarcado conservación"],
    time: "1 – 3 semanas",
    price: "desde 90 €",
    tags: ["Grabado", "Cartel", "Libro"],
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
  },
  {
    n: "05",
    slug: "escultura",
    title: "Escultura",
    desc: "Piedra, terracota y madera policromada. Fijado, cosido y reintegración volumétrica.",
    long: "Talla, piedra y terracota. Cosemos fracturas con varilla invisible, modelamos faltas y reintegramos color de forma discernible: la pieza recupera presencia sin perder historia.",
    includes: ["Fijado y cosido", "Reintegración volumétrica", "Limpieza piedra", "Pátinas finales"],
    time: "3 – 7 semanas",
    price: "desde 200 €",
    tags: ["Piedra", "Terracota", "Talla"],
    img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop",
  },
  {
    n: "06",
    slug: "conservacion-preventiva",
    title: "Conservación preventiva",
    desc: "Informes, control climático, embalaje museográfico y planes para colecciones.",
    long: "Para galerías, museos y colecciones privadas: peritajes, planes de conservación, control de HR/luz y embalajes a medida para transporte y préstamo.",
    includes: ["Peritaje e informes", "Plan de conservación", "Embalaje museográfico", "Asesoría en sala"],
    time: "a medida",
    price: "presupuesto",
    tags: ["Peritaje", "Museos", "Seguros"],
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop",
  },
];

export const PROCESS = [
  { n: "01", title: "Diagnóstico", desc: "Estudio con luz rasante, UV e informe fotográfico. Presupuesto cerrado sin sorpresas." },
  { n: "02", title: "Limpieza", desc: "Retirada de barnices oxidados, humo y repintes con geles de máxima reversibilidad." },
  { n: "03", title: "Consolidación", desc: "Fijamos capa pictórica, chapeados y ensambles para devolver solidez estructural." },
  { n: "04", title: "Reintegración", desc: "Tratteggio y retoque discernible. Devolvemos la lectura sin falsificar la historia." },
];

export const GALLERY = [
  { title: "Óleo s. XIX — limpieza", cat: "Pictórica", img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=900&auto=format&fit=crop" },
  { title: "Bargueño nogal — ebanistería", cat: "Mueble", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=900&auto=format&fit=crop" },
  { title: "Marco oro — reposición", cat: "Dorado", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=900&auto=format&fit=crop" },
  { title: "Grabado — desacidificado", cat: "Papel", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=900&auto=format&fit=crop" },
  { title: "Talla policromada — fijado", cat: "Pictórica", img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=900&auto=format&fit=crop" },
  { title: "Butaca — goma laca", cat: "Mueble", img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=900&auto=format&fit=crop" },
  { title: "Retablo — estofado", cat: "Dorado", img: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=900&auto=format&fit=crop" },
  { title: "Silla isabelina — tapicería", cat: "Mueble", img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=900&auto=format&fit=crop" },
  { title: "Boceto taller — pigmentos", cat: "Pictórica", img: "https://images.unsplash.com/photo-1459908676239-d5f02a50184b?q=80&w=900&auto=format&fit=crop" },
];

export const POSTS = [
  {
    slug: "barniz-amarillo-cuadro",
    title: "Por qué tu cuadro se ve amarillo (y no es la pintura)",
    excerpt: "El barniz se oxida con la luz y el humo. Te contamos cómo lo detectamos y retiramos sin tocar la capa original.",
    cat: "Guías",
    date: "12 Sep 2026",
    read: "6 min",
    img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=900&auto=format&fit=crop",
    body: [
      "Casi todos los óleos anteriores a 1960 llevan un barniz natural que, con los años, amarillea. No es suciedad superficial: es oxidación química.",
      "En el taller lo confirmamos con luz ultravioleta: el barniz viejo fluoresce en verde lechoso. Hacemos catas milimétricas y elegimos un gel que solo disuelve el barniz, nunca el color.",
      "El resultado es inmediato: los azules vuelven a ser azules y la profundidad regresa. Y lo sellamos con un barniz museo con filtro UV.",
    ],
  },
  {
    slug: "goma-laca-vs-poliuretano",
    title: "Goma laca vs poliuretano: el error que arruina muebles",
    excerpt: "El brillo plástico mata la pátina. Explicamos el acabado reversible que usamos en mueble antiguo.",
    cat: "Taller",
    date: "28 Ago 2026",
    read: "5 min",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=900&auto=format&fit=crop",
    body: [
      "El poliuretano es irreversible y crea una película plástica que falsea el mueble. La goma laca, en cambio, se aplica a muñequilla en capas finas y siempre se puede retirar.",
      "Nuestro protocolo: decapado suave, reencolado, tapaporos y entre 8 y 12 manos de goma laca con pulido intermedio.",
      "Si tu mueble brilla como un espejo barato, probablemente lleva poliuretano. Tiene arreglo: lo retiramos y devolvemos el satinado profundo original.",
    ],
  },
  {
    slug: "pan-de-oro-marco",
    title: "Cómo saber si tu marco es pan de oro de verdad",
    excerpt: "Tres pruebas caseras y cuándo merece la pena restaurar un marco dorado del XIX.",
    cat: "Dorado",
    date: "9 Ago 2026",
    read: "4 min",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=900&auto=format&fit=crop",
    body: [
      "El oro al agua suena, pesa y se bruñe: pasa la uña con cuidado, el oro auténtico sobre bol rojo deja ver un fondo cálido en las rozaduras.",
      "La purpurina moderna, en cambio, es plana y fría. Se repinta encima y se pela a escamas.",
      "Restaurar un marco de oro compensa casi siempre: un marco XIX bien dorado multiplica el valor del conjunto y protege el lienzo.",
    ],
  },
  {
    slug: "conservacion-coleccionistas",
    title: "Conservación preventiva para coleccionistas (checklist)",
    excerpt: "Humedad, luz y embalaje: la guía mínima para que tu colección no enferme en casa.",
    cat: "Guías",
    date: "20 Jul 2026",
    read: "7 min",
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=900&auto=format&fit=crop",
    body: [
      "Mantén 45–55% de humedad relativa y evita focos a menos de un metro del cuadro. La luz directa es el enemigo número uno.",
      "Nunca envuelvas en plástico de burbujas directamente sobre la pintura: usa papel siliconado y cajas a medida.",
      "Una revisión cada dos años detecta craquelados y movimientos antes de que sean fracturas. La ofrecemos gratis a clientes del taller.",
    ],
  },
];

export const TEAM = [
  { name: "Marta Giornata", role: "Fundadora · Pintura", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop" },
  { name: "Pau Ferrer", role: "Ebanistería · Mueble", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop" },
  { name: "Lucía Sanz", role: "Dorado · Policromía", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop" },
];

export const TESTIMONIALS = [
  { quote: "Devolvieron la luz a un Sorolla familiar que dábamos por perdido. El informe antes / después es de museo.", name: "Carmen Alarcón", role: "Colección privada · Valencia" },
  { quote: "La cómoda isabelina de mi abuela volvió sólida, sin perder su pátina. Goma laca perfecta, ni un brillo plástico.", name: "Javier Montes", role: "Particular · Madrid" },
  { quote: "Trabajan para nuestra galería con plazos quirúrgicos. Dorado a la mixtión impecable en tres marcos del XIX.", name: "Galería Nolde", role: "Galería · Bilbao" },
];

export const FAQS = [
  { q: "¿El presupuesto es gratuito?", a: "Sí. Con fotos y medidas te damos orientación en 48h y cita en taller sin coste." },
  { q: "¿Cuánto tarda una restauración?", a: "Entre 1 y 8 semanas según disciplina. Te damos fecha de entrega cerrada por escrito." },
  { q: "¿Recogéis a domicilio?", a: "Sí, en Valencia ciudad y área metropolitana. Para el resto, embalaje guiado + mensajería asegurada." },
  { q: "¿Emitís informe para seguros?", a: "Sí, informe fotográfico con materiales y criterio, válido para seguros y herencias." },
];
