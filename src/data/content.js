// CONTENIDO REAL — extraído de giornata.es (web anterior del taller).
// En WordPress: SERVICES → CPT "Servicios" | POSTS → Entradas | GALLERY → Medios + Loop Grid.
// Imágenes de galería/blog: ficheros propios del taller (hotlink temporal a la web anterior;
// al migrar, importar a Biblioteca de Medios).

export const CONTACT = {
  email: "giornatataller@gmail.com",
  phone: "617 78 55 31",
  phoneHref: "tel:+34617785531",
  phoneFull: "+34 617 78 55 31",
  address: "C. Somosierra, 23, 26002 Logroño, La Rioja",
  mapsUrl: "https://maps.app.goo.gl/YHfVUiCsxRejZLUBA",
  since: "1997",
  city: "Logroño",
};

export const IMAGES = {
  heroArch:
    "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1200&auto=format&fit=crop",
  heroSmall:
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
  aboutMain:
    "https://images.unsplash.com/photo-1456086272160-b28b0645b729?q=80&w=1200&auto=format&fit=crop",
  // Foto de la sacristía (galería del taller) — para la página Nosotros
  aboutHistory: "https://giornata.es/wp-content/uploads/2025/03/Sacristia1-1-scaled.jpg",
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

// Los 9 servicios literales de giornata.es /servicios/
export const SERVICES = [
  {
    n: "01",
    slug: "patrimonio-religioso",
    title: "Patrimonio Religioso",
    desc: "Retablos, cajas de órganos, paramentos, artesonados, pórticos, mobiliario, imágenes, lienzos, orfebrería.",
    long: "Nuestra especialidad. Intervenimos retablos, cajas de órganos, paramentos, artesonados, pórticos, mobiliario litúrgico, imágenes, lienzos y orfebrería, tanto en el taller como in situ cuando la obra lo requiere.",
    includes: ["Retablos e imágenes", "Cajas de órganos y paramentos", "Artesonados y pórticos", "Lienzos y orfebrería"],
    tags: ["Retablos", "Órganos", "Orfebrería"],
    img: "https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=800&auto=format&fit=crop",
  },
  {
    n: "02",
    slug: "edificios-espacios-publicos",
    title: "Edificios y espacios públicos",
    desc: "Intervenciones en fachadas, azulejería, escudos, esculturas y elementos del espacio público.",
    long: "Intervenimos fachadas, azulejería, escudos y esculturas del espacio público, con proyectos de restauración y trabajo in situ adaptado a cada material y entorno.",
    includes: ["Fachadas", "Azulejería", "Escudos y escultura pública", "Proyectos de intervención"],
    tags: ["Fachadas", "Azulejo", "Piedra"],
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop",
  },
  {
    n: "03",
    slug: "pintura-escultura",
    title: "Pintura y escultura",
    desc: "Restauración de pintura y escultura sobre cualquier soporte: lienzo, tabla, madera, piedra.",
    long: "Pintura de caballete y sobre tabla, escultura en madera, piedra o terracota. Tratamos la suciedad superficial, la oxidación de barnices y la pérdida de capa pictórica con criterio de mínima intervención.",
    includes: ["Lienzo y tabla", "Escultura policromada", "Limpieza de barnices", "Reintegración cromática"],
    tags: ["Lienzo", "Tabla", "Talla"],
    img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format&fit=crop",
  },
  {
    n: "04",
    slug: "pintura-mural",
    title: "Pintura mural",
    desc: "Muros, bóvedas y techos: la pintura mural es especialmente vulnerable al tiempo y la humedad.",
    long: "La pintura mural sufre como ninguna el paso del tiempo y la humedad. Intervenimos muros, bóvedas y techos —como en las Clarisas de Nájera— con consolidación, limpieza y reintegración.",
    includes: ["Muros y bóvedas", "Humedad y sales", "Consolidación", "Reintegración"],
    tags: ["Muro", "Bóveda", "Fresco"],
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop",
  },
  {
    n: "05",
    slug: "evaluacion-proyectos",
    title: "Evaluación y proyectos",
    desc: "Evaluación del estado de conservación y redacción de proyectos de restauración.",
    long: "Cada intervención comienza con un estudio técnico previo detallado: evaluamos el estado de conservación, redactamos el proyecto y documentamos todo el proceso con criterios profesionales.",
    includes: ["Estudio técnico previo", "Proyecto de restauración", "Documentación del proceso", "Asesoramiento a instituciones"],
    tags: ["Estudio", "Proyecto", "Informe"],
    img: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop",
  },
  {
    n: "06",
    slug: "digitalizacion-patrimonio",
    title: "Digitalización del patrimonio",
    desc: "Registro y digitalización de bienes culturales para su estudio, difusión y archivo.",
    long: "Digitalizamos bienes del patrimonio para garantizar su registro, estudio y difusión: un respaldo documental imprescindible junto a cualquier intervención de conservación.",
    includes: ["Registro fotográfico", "Archivo documental", "Difusión", "Estudio"],
    tags: ["Registro", "Archivo", "Foto"],
    img: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=800&auto=format&fit=crop",
  },
  {
    n: "07",
    slug: "diversos-materiales",
    title: "Diversos materiales",
    desc: "Mármol, marfil, piedra, alabastro, metal, cerámica, azulejos, porcelana.",
    long: "Cada material pide su técnica: tratamos mármol, marfil, piedra, alabastro, metal, cerámica, azulejos y porcelana con protocolos específicos y adaptados a cada pieza.",
    includes: ["Piedra y alabastro", "Metal y cerámica", "Marfil y porcelana", "Azulejería"],
    tags: ["Piedra", "Metal", "Cerámica"],
    img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop",
  },
  {
    n: "08",
    slug: "muebles-artes-decorativas",
    title: "Muebles y artes decorativas",
    desc: "Restauración de mobiliario y artes decorativas en nuestro taller de Logroño.",
    long: "En nuestro taller de Logroño devolvemos la solidez y la belleza al mobiliario y a las artes decorativas: ebanistería, chapeados, acabados tradicionales y piezas etnográficas.",
    includes: ["Ebanistería", "Chapeados y ensambles", "Acabados tradicionales", "Etnografía"],
    tags: ["Mueble", "Ebanistería", "Etnografía"],
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
  },
  {
    n: "09",
    slug: "pintura-decorativa",
    title: "Pintura decorativa",
    desc: "Damos una nueva vida a tus muebles renovándolos con pintura decorativa. También murales.",
    long: "Renovamos muebles con pintura decorativa y pintamos murales a medida: una forma de dar una nueva vida a piezas y espacios sin perder su carácter.",
    includes: ["Renovación de muebles", "Murales a medida", "Acabados decorativos", "Diseño personalizado"],
    tags: ["Mueble", "Mural", "Diseño"],
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop",
  },
];

// Método real del taller (del artículo "Técnicas de trabajo")
export const PROCESS = [
  { n: "01", title: "Estudio previo", desc: "Cada intervención comienza con un estudio técnico previo detallado que nos permite intervenir con criterio." },
  { n: "02", title: "Limpieza", desc: "Técnicas de limpieza específicas y adaptadas a cada obra y cada material." },
  { n: "03", title: "Consolidación", desc: "Devolvemos la estabilidad a la pieza para garantizar su integridad física a largo plazo." },
  { n: "04", title: "Reintegración y protección", desc: "Reintegramos y protegemos, documentando todo el proceso, con respeto por el original." },
];

// Colaboradores reales: ebanistas, canteros, arqueólogos, historiadores (+ geólogos, químicos)
export const CREW = [
  { t: "Restauradores", d: "Licenciados en Bellas Artes, especialidad en Conservación y Restauración de Bienes Culturales. Especialización en policromías." },
  { t: "Ebanistas y canteros", d: "Oficios que completan cada proyecto: madera, ensambles, piedra y soporte material." },
  { t: "Arqueólogos e historiadores", d: "Contexto e historia de cada pieza, con apoyo de geólogos y químicos cuando hace falta." },
];

export const CLIENTS = ["Museos", "Diócesis", "Instituciones", "Profesionales", "Particulares"];

// Galería real de giornata.es (categorías y fotos del taller)
const G = "https://giornata.es/wp-content/uploads/2025/03";
export const GALLERY = [
  { title: "Pintura mural — techo", cat: "Pintura Mural", img: `${G}/IMG-20210324-WA0078-2.jpg` },
  { title: "Sacristía", cat: "Sacristía", img: `${G}/Sacristia1-1-scaled.jpg` },
  { title: "Jesús en casa de Simón fariseo", cat: "Lienzos", img: `${G}/Jesus-en-casa-de-Simon-fariseo-1.png` },
  { title: "Orfebrería", cat: "Orfebrería", img: `${G}/IMG_5712-scaled.jpg` },
  { title: "Retablo", cat: "Retablos", img: `${G}/DSC_0052-scaled.jpg` },
  { title: "Tallas", cat: "Tallas", img: `${G}/2021-07-14-10.32.25-scaled.jpg` },
  { title: "Retablo — iglesia", cat: "Retablos", img: `${G}/DSC_0398-scaled.jpg` },
  { title: "Arqueología", cat: "Arqueología", img: `${G}/2022-04-22-14.59.24-scaled.jpg` },
];

// Entradas reales del blog de giornata.es (abril 2025)
const B = "https://giornata.es/wp-content/uploads/2025/04";
export const POSTS = [
  {
    slug: "restauracion-mobiliario-logrono",
    title: "Restauración de Mobiliario en Logroño",
    excerpt: "En nuestro taller de restauración en Logroño, nos dedicamos a devolver la solidez y la belleza al mobiliario antiguo.",
    cat: "Mobiliario",
    date: "22 Abr 2025",
    read: "4 min",
    img: `${B}/54624-scaled.jpg`,
    body: [
      "El mobiliario antiguo llega al taller con ensambles sueltos, chapeados levantados y acabados agotados por décadas de uso. Cada pieza se estudia antes de tocarla: qué madera es, qué acabados conserva y qué necesita para volver a ser útil.",
      "Reencolamos ensambles, reponemos chapeados y recuperamos acabados tradicionales, respetando la pátina que le dan los años. El objetivo es que el mueble vuelva a usarse a diario sin perder su historia.",
      "Si tienes una pieza en casa que lo necesita, tráela al taller de la calle Somosierra: la valoramos y te proponemos la intervención justa, sin exceso.",
    ],
  },
  {
    slug: "pintura-decorativa-muebles-murales",
    title: "Pintura decorativa – Pintura de muebles y murales",
    excerpt: "Pintura decorativa y renovación de muebles en Logroño: damos una nueva vida a tus piezas.",
    cat: "Pintura decorativa",
    date: "22 Abr 2025",
    read: "4 min",
    img: `${B}/2021-01-29-10.35.17-scaled.jpg`,
    body: [
      "No todo es restaurar: también renovamos. Con pintura decorativa damos una nueva vida a muebles cansados, adaptándolos a espacios actuales sin que pierdan su carácter.",
      "Trabajamos el color, los acabados y los detalles a medida de cada cliente y cada estancia, del mueble suelto al mural completo.",
      "Cuéntanos qué pieza o pared tienes en mente y te proponemos un diseño: del boceto al acabado final, todo pasa por nuestras manos.",
    ],
  },
  {
    slug: "restauracion-artes-decorativas",
    title: "Restauración de artes decorativas en La Rioja",
    excerpt: "En nuestro taller de restauración en Logroño desarrollamos trabajos sobre artes decorativas y objetos singulares.",
    cat: "Artes decorativas",
    date: "22 Abr 2025",
    read: "4 min",
    img: `${B}/IMG_5968-2-scaled.jpg`,
    body: [
      "Las artes decorativas —cerámica, metal, objetos litúrgicos, piezas etnográficas— piden un trato tan riguroso como un gran retablo, pero a otra escala.",
      "En el taller combinamos el estudio de cada material con la colaboración de ebanistas, canteros y otros oficios para soluciones integrales.",
      "Cada objeto se documenta y se interviene con mínima intervención: estabilizar, limpiar y reintegrar solo lo necesario.",
    ],
  },
  {
    slug: "restauracion-bienes-arqueologicos",
    title: "Restauración de bienes arqueológicos – La Rioja",
    excerpt: "La restauración arqueológica requiere un conocimiento profundo de los materiales y su contexto e historia.",
    cat: "Arqueología",
    date: "22 Abr 2025",
    read: "5 min",
    img: `${B}/Final-1-scaled.jpg`,
    body: [
      "La pieza arqueológica no es solo materia: es contexto. Por eso trabajamos junto a arqueólogos e historiadores que nos ayudan a leer cada fragmento antes de intervenir.",
      "Limpieza mecánica controlada, consolidación y reintegración discernible: la pieza debe estabilizarse sin inventar lo que el tiempo se llevó.",
      "Colaboramos con instituciones y profesionales que necesitan este rigor para sus fondos y yacimientos.",
    ],
  },
  {
    slug: "restauracion-pintura-mural",
    title: "Restauración de pintura mural en La Rioja",
    excerpt: "La pintura mural es especialmente vulnerable a los efectos del paso del tiempo y la humedad.",
    cat: "Pintura mural",
    date: "22 Abr 2025",
    read: "5 min",
    img: `${B}/Final.jpg`,
    body: [
      "Humedad, sales y repintes: la pintura mural sufre agresiones que no perdonan. Nuestra intervención en las Clarisas de Nájera es un buen ejemplo de lo que este trabajo exige.",
      "Consolidamos el soporte, fijamos la capa pictórica y reintegramos con criterio discernible, siempre documentando cada fase.",
      "Si tu parroquia o edificio conserva pintura mural deteriorada, pide una evaluación: el diagnóstico previo evita males mayores.",
    ],
  },
  {
    slug: "restauracion-pintura-lienzo-madera",
    title: "Restauración de pintura sobre lienzo y madera en Logroño",
    excerpt: "Tanto la pintura de caballete como sobre tabla presentan con frecuencia suciedad, oxidación del barniz y pérdidas.",
    cat: "Pintura",
    date: "22 Abr 2025",
    read: "5 min",
    img: `${B}/IMG_6148-scaled.jpg`,
    body: [
      "El barniz oxidado amarillea y apaga los colores; la suciedad superficial hace el resto. Es el caso más habitual que entra en el taller, del cuadro familiar a la obra de colección.",
      "Tras el estudio previo, limpiamos con sistemas controlados, sentamos la capa pictórica donde hace falta y reintegramos las pérdidas sin falsificar.",
      "El barnizado final de protección devuelve la profundidad a la obra y la deja estabilizada para las próximas décadas.",
    ],
  },
  {
    slug: "restauracion-tallas-religiosas",
    title: "Restauración de tallas y esculturas religiosas",
    excerpt: "Las imágenes devocionales son parte esencial del patrimonio artístico y emocional de muchas comunidades.",
    cat: "Tallas",
    date: "22 Abr 2025",
    read: "5 min",
    img: `${B}/Dios-Padre.-Retablo-Clarisas-Najera-final.jpg`,
    body: [
      "Las tallas devocionales —como el Dios Padre del retablo de las Clarisas de Nájera— cargan siglos de cera, humo, repintes y cariño. Tratarlas exige respeto doble: artístico y emocional.",
      "Nuestra especialización en policromías nos permite recuperar estofados, encarnaduras y dorados con la máxima fidelidad al original.",
      "Trabajamos para diócesis, parroquias y particulares que quieren que sus imágenes luzcan como merecen sin perder su historia.",
    ],
  },
  {
    slug: "restauracion-retablos-rioja",
    title: "Restauración de retablos en La Rioja",
    excerpt: "A lo largo de los años hemos tenido el privilegio de intervenir en diversos retablos de nuestra tierra.",
    cat: "Retablos",
    date: "22 Abr 2025",
    read: "5 min",
    img: `${B}/IMG_4726-scaled.jpg`,
    body: [
      "Del Retablo de la Dolorosa de Foncea a tantos otros repartidos por La Rioja: cada retablo es un mundo de madera, policromía, oro y siglos.",
      "Intervenimos la estructura, la policromía y el dorado, combinando el trabajo en taller con largas campañas in situ cuando la obra no puede moverse.",
      "Si tu parroquia o institución custodia un retablo deteriorado, redactamos el proyecto de restauración y lo ejecutamos con todas las garantías.",
    ],
  },
  {
    slug: "taller-profesional-restauracion",
    title: "¿Por qué confiar en un taller profesional?",
    excerpt: "Restaurar una obra de arte —un retablo, una escultura, un lienzo— exige criterio, formación y método.",
    cat: "Taller",
    date: "22 Abr 2025",
    read: "4 min",
    img: `${B}/paint-brushes-tubes-oil-paints-wood-scaled.jpg`,
    body: [
      "Una intervención mal hecha es peor que no intervenir: barnices equivocados, repintes invasivos o limpiezas agresivas dejan daños irreversibles.",
      "Un taller profesional aporta restauradores licenciados en Bellas Artes, estudio previo, materiales reversibles y documentación completa de cada paso.",
      "Nuestra trayectoria de más de 25 años con museos, diócesis e instituciones es nuestro mejor aval. Desconfía de quien te prometa milagros sin estudiar la pieza.",
    ],
  },
  {
    slug: "tecnicas-trabajo-restauracion",
    title: "Técnicas de trabajo: nuestro método de intervención",
    excerpt: "Estudio previo, limpieza, consolidación, reintegración y protección: así intervenimos cada obra.",
    cat: "Taller",
    date: "22 Abr 2025",
    read: "5 min",
    img: `${B}/rioja02b.jpg`,
    body: [
      "Cada intervención comienza con un estudio técnico previo detallado que nos permite intervenir con criterio, con técnicas específicas y adaptadas a cada obra, documentando todo el proceso. Aplicamos técnicas de limpieza, consolidación, reintegración y protección final, siempre con criterios de mínima intervención, reversibilidad y respeto por los materiales originales.",
      "Contamos con un equipo de restauradores licenciados en Bellas Artes que aporta una visión técnica, artística y ética a cada proyecto, conforme a estándares internacionales de calidad y con el máximo respeto por la autenticidad de cada pieza. Colaboramos con arqueólogos, historiadores del arte, ebanistas, canteros, geólogos y químicos para abordar cada proyecto de manera integral.",
      "Nuestro objetivo no es solo recuperar el aspecto estético, sino garantizar la estabilidad a largo plazo de la obra y su comprensión como bien cultural: retablos, lienzos, esculturas, pintura mural, objetos arqueológicos, mobiliario y artes decorativas.",
    ],
  },
  {
    slug: "restauracion-piedra-rioja",
    title: "Restauración de Piedra en La Rioja",
    excerpt: "La restauración de piedra requiere un enfoque técnico, respetuoso y especializado.",
    cat: "Piedra",
    date: "22 Abr 2025",
    read: "4 min",
    img: `${B}/DespSur_1.jpg`,
    body: [
      "Fachadas, escudos, portadas y escultura en piedra sufren la contaminación, el agua y las sales. Cada piedra —caliza, arenisca, mármol— pide un protocolo distinto.",
      "Trabajamos con un enfoque técnico y respetuoso: limpieza selectiva, consolidación, cosido de fracturas y protección final, con apoyo de canteros y geólogos.",
      "Pedimos siempre un estudio previo del estado de conservación: en piedra, acertar con el diagnóstico es acertar con la intervención.",
    ],
  },
];

export const FAQS = [
  { q: "¿Para quién trabajáis?", a: "Para museos, diócesis, instituciones, profesionales y particulares. Nuestra trayectoria es nuestro mejor aval." },
  { q: "¿Trabajáis fuera del taller?", a: "Sí. Contamos con taller propio en Logroño desde 1997 y trabajamos in situ cuando la obra lo requiere." },
  { q: "¿Quién forma el equipo?", a: "Restauradores licenciados en Bellas Artes, especializados en Conservación y Restauración de Bienes Culturales, con apoyo de ebanistas, canteros, arqueólogos e historiadores del arte." },
  { q: "¿Qué incluye una intervención?", a: "Estudio técnico previo, técnicas adaptadas a cada obra, documentación de todo el proceso y criterios de mínima intervención y reversibilidad." },
];
