// Contenido de la web. Cada texto tiene versión es / en.
// Las imágenes apuntan al CDN de Squarespace; download.mjs las descarga y build.mjs las sustituye por la copia local.
const C = 'https://images.squarespace-cdn.com/content/v1/67d20e13f0ed7630721e30f1/';
export const img = (path, alt_es = '', alt_en = '') => ({ src: C + path, alt: { es: alt_es, en: alt_en || alt_es } });
const t = (es, en) => ({ es, en });

export const site = {
  name: 'Laura Sánchez',
  domain: 'https://www.laurasanchezpardo.com',
  email: 'laurawork.sanchez@gmail.com',
  phone: '+34 682 92 70 98',
  phoneHref: 'tel:+34682927098',
  linkedin: 'https://www.linkedin.com/in/laura-s%C3%A1nchez-pardo-738aab19a/',
  favicon: C + 'ada87037-de3f-4e3d-a93b-ecbdeeb6953f/favicon.ico',
  nav: [
    { key: 'portfolio', label: t('Portfolio', 'Portfolio') },
    { key: 'workshops', label: t('Workshops', 'Workshops') },
    { key: 'about', label: t('About me', 'About me') },
    { key: 'contact', label: t('Contact', 'Contact') },
  ],
  footer: {
    title: t('Let’s work together', 'Let’s work together'),
    city: t('Madrid<br>Spain', 'Madrid<br>Spain'),
    tagline: t('Creative thinking,<br>strategic design.', 'Creative thinking,<br>strategic design.'),
    follow: t('Sígueme', 'Follow me'),
  },
};

// slug de cada página (sin idioma). '' = inicio
export const routes = {
  home: '',
  portfolio: 'portfolio',
  workshops: 'workshops',
  about: 'about-me',
  contact: 'contact',
  mouchi: 'portfolio/mouchi',
  eonia: 'portfolio/eonia',
  disowned: 'portfolio/disowned',
  natura: 'portfolio/natura-box',
  lladro: 'portfolio/lladro',
};

// Redirecciones desde las URLs antiguas de Squarespace
export const redirects = {
  '/porfolio': 'portfolio',
  '/workshops-1': 'workshops',
  '/contacto-5': 'contact',
  '/home': 'home',
  '/203issue': 'mouchi',
  '/203issue-1': 'eonia',
  '/203issue-1-1': 'disowned',
  '/203issue-1-1-1': 'natura',
  '/203issue-1-1-1-1': 'lladro',
};

/* ---------------- INICIO ---------------- */
export const home = {
  seo: {
    title: t('Laura Sánchez | Service Designer & Strategist', 'Laura Sánchez | Service Designer & Strategist'),
    desc: t('Diseño estratégico y creativo para experiencias con sentido. Service design, UX/UI, branding y diseño visual en Madrid.',
            'Strategic and creative design for meaningful experiences. Service design, UX/UI, branding and visual design based in Madrid.'),
  },
  marquee: t('Strategic & Creative Design for Meaningful Experiences.', 'Strategic & Creative Design for Meaningful Experiences.'),
  intro: {
    photo: img('8734b86f-9849-44f1-a3f0-0cb93a462370/IMG_8941+2+copia.jpg', 'Laura Sánchez sentada frente a una pared de madera roja', 'Laura Sánchez sitting in front of a red wooden wall'),
    mark: img('c4dc1e14-5069-4372-9d7e-170cc76b8173/Recurso+1.png', '', ''),
    title: t('Service Designer & Strategist | UX/UI · Visual Design · Human-Centred Design', 'Service Designer & Strategist | UX/UI · Visual Design · Human-Centred Design'),
    body: t([
      'Soy Laura Sánchez Pardo, diseñadora de servicios con una base sólida en diseño visual y estrategia de marca. Trabajo en la intersección entre las personas, la tecnología y el negocio, diseñando experiencias que no solo tienen sentido, sino que también sorprenden.',
      'En los últimos 5 años he liderado proyectos end-to-end aplicando metodologías de service design: research, journey maps, service blueprints y talleres de co-diseño, siempre con el objetivo de traducir complejidad en soluciones claras y con impacto real.',
      'Lo que me diferencia: combino pensamiento sistémico riguroso con ejecución visual de alto nivel. No solo mapeo la experiencia: también la construyo, la comunico y la llevo hasta el último detalle con el que las personas conectan de verdad.',
    ], [
      'I’m Laura Sánchez Pardo, a service designer with a strong background in visual design and brand strategy. I work where people, technology and business meet, designing experiences that don’t just make sense but also surprise.',
      'Over the last 5 years I’ve led end-to-end projects using service design methods: research, journey maps, service blueprints and co-design workshops, always aiming to turn complexity into clear solutions with real impact.',
      'What sets me apart: I combine rigorous systems thinking with high-end visual execution. I don’t just map the experience. I also build it, communicate it and carry it through to the last detail people truly connect with.',
    ]),
    cta: t('Ver proyectos', 'See projects'),
  },
  concept: {
    title: t('Del concepto al <span class="oval">impacto.</span>', 'From concept to <span class="oval">impact.</span>'),
    body: t('Entiendo el diseño como una herramienta de transformación, no solo estética. Cada proyecto es un sistema de personas, procesos y touchpoints que hay que orquestar con criterio, método y visión. Licenciada en Diseño con mención en Diseño de Servicios por la Universidad de Navarra (Pamplona, España).',
            'I see design as a tool for transformation, not just aesthetics. Every project is a system of people, processes and touchpoints that has to be orchestrated with judgement, method and vision. Design graduate with a specialisation in Service Design from the University of Navarra (Pamplona, Spain).'),
    items: [
      t('Service Design & Experience Strategy.', 'Service Design & Experience Strategy.'),
      t('UX/UI & Digital Experiences.', 'UX/UI & Digital Experiences.'),
      t('Brand Identity & Visual Design.', 'Brand Identity & Visual Design.'),
    ],
    image: img('0728fb5e-c1db-42f7-bf71-d4c2fe7c8591/DTS_Mood_board_Julien_Tell_Photos_ID3499.jpg', 'Mano señalando una nota adhesiva rosa en una mesa de trabajo llena de notas de colores', 'Hand pointing at a pink sticky note on a worktable covered in colourful notes'),
  },
  works: {
    title: t('Selected <span class="oval">works</span>', 'Selected <span class="oval">works</span>'),
    body: t('Una selección de proyectos que reflejan mi forma de trabajar: creatividad, atención al detalle y un enfoque en lograr un impacto real. Cada uno cuenta una historia diferente, pero todos comparten la misma esencia: convertir las ideas en experiencias memorables.',
            'A selection of projects that reflect how I work: creativity, attention to detail and a focus on real impact. Each one tells a different story, but they all share the same essence: turning ideas into memorable experiences.'),
    cta: t('Ver portfolio →', 'See portfolio →'),
    images: [
      img('627be128-0897-4e94-95c2-5989da566878/Captura+de+pantalla+2025-09-28+a+las+12.29.23.png', 'Logotipo en relieve de MOUCHI, “Where less speaks loud”', 'Embossed MOUCHI logo, “Where less speaks loud”'),
      img('ad6183e2-27e9-44a3-99d5-2a4c20bfddee/Captura+de+pantalla+2025-09-28+a+las+23.11.11.png', 'Bolsa de papel de Disowned Factory sobre fondo azul claro', 'Disowned Factory paper bag on a light blue background'),
      img('dc6d6686-1f18-442a-867d-a0cfdee18497/Gemini_Generated_Image_40zshf40zshf40zs.png', 'Libro del caso de estudio Lladró sobre un escritorio de madera', 'Lladró case study book on a wooden desk'),
      img('e0393c61-41f9-4e6a-8560-c66344ac78cb/Captura+de+pantalla+2025-09-28+a+las+13.19.12.png', 'Móvil con el perfil de Instagram de Eonia', 'Phone showing the Eonia Instagram profile'),
      img('48ab2eef-88bd-4933-9ea9-4778ddffe289/Captura+de+pantalla+2025-08-07+a+las+18.19.45.png', 'Tarjetas de visita con logotipo de un cangrejo', 'Business cards with a crab logo'),
      img('18dac7b3-e95d-4944-88d9-a62c3fbc2577/Captura+de+pantalla+2025-09-28+a+las+21.26.37.png', 'Público en un concierto, en blanco y negro', 'Crowd at a concert, black and white'),
      img('65c91fd1-7b5e-40ed-b5b4-0e0dabcdc214/Captura+de+pantalla+2025-09-28+a+las+21.40.48.png', 'Pantalla gigante con “Save the date 31.12.24” frente al público', 'Giant screen with “Save the date 31.12.24” in front of a crowd'),
      img('7022bdd2-699c-4972-b287-43ad6b19ecfc/Captura+de+pantalla+2025-08-07+a+las+18.34.19.png', 'Papelería en blanco y negro de Cultoría', 'Black and white stationery for Cultoría'),
      img('8565a9ac-5f44-4535-a2a3-117a0c94cea6/Captura+de+pantalla+2025-09-29+a+las+1.23.55.png', 'Móviles con los perfiles sociales de Natura Box', 'Phones showing Natura Box social profiles'),
    ],
  },
  purpose: {
    label: t('PURPOSE', 'PURPOSE'),
    text: t('Great design is more than aesthetics: it’s strategy, purpose, and a spark that makes people say <em>wow</em>. I craft experiences that connect, inspire, and leave a lasting impression.',
            'Great design is more than aesthetics: it’s strategy, purpose, and a spark that makes people say <em>wow</em>. I craft experiences that connect, inspire, and leave a lasting impression.'),
    images: [
      img('713c870a-6024-47d2-ad0d-f7870c196cab/DTS_Mood_board_Julien_Tell_Photos_ID3481.jpg', 'Persona revisando libros abiertos sobre una mesa blanca', 'Person flipping through open books on a white table'),
      img('c78b67f3-b3e2-41be-973c-cf96a60fe677/tempImageAlP7Hc.jpg', 'Mujer caminando en una sala con el rótulo “The future is present”', 'Woman walking in a room with a “The future is present” light sign'),
      img('f64bdb2b-a3f4-4b5b-ab34-a58435408e46/Captura+de+pantalla+2025-09-28+a+las+13.04.46.png', 'Portátil mostrando una invitación de boda floral', 'Laptop showing a floral wedding invitation'),
    ],
  },
  services: {
    title: t('Services', 'Services'),
    image: img('95495038-dc9d-4bec-a1e8-d9e9a8235253/DTS_Mood_board_Julien_Tell_Photos_ID3496.jpg', 'Persona escribiendo en una nota adhesiva rosa', 'Person writing on a pink sticky note'),
    items: [
      { title: t('Branding & Identidad de marca', 'Branding & Brand identity'),
        list: t(['Creación de logotipo y universos visuales.', 'Desarrollo de manual de marca / brand book.', 'Rediseño o evolución de marcas ya existentes.', 'Estrategia de marca → tono, personalidad, storytelling.'],
                ['Logo design and visual universes.', 'Brand guidelines / brand book.', 'Redesign or evolution of existing brands.', 'Brand strategy → tone, personality, storytelling.']),
        note: t('(Ideal para startups, emprendedores y marcas que quieren profesionalizar su imagen.)', '(Ideal for startups, entrepreneurs and brands that want a more professional image.)') },
      { title: t('Diseño digital & Web', 'Digital & Web design'),
        list: t(['Diseño de páginas web personalizadas (WordPress + Figma).', 'Diseño UX/UI para productos digitales (apps, SaaS, plataformas).', 'Landings y microsites para campañas/eventos.'],
                ['Custom website design (WordPress + Figma).', 'UX/UI design for digital products (apps, SaaS, platforms).', 'Landing pages and microsites for campaigns and events.']) },
      { title: t('Creatividad & Comunicación visual', 'Creativity & Visual communication'),
        list: t(['Ilustraciones personalizadas (corporativas, editoriales, eventos).', 'Material gráfico para marketing y redes sociales.', 'Diseño de presentaciones y piezas para comunicación interna/externa.'],
                ['Custom illustration (corporate, editorial, events).', 'Graphic assets for marketing and social media.', 'Presentations and pieces for internal and external communication.']) },
      { title: t('Consultoría creativa', 'Creative consulting'),
        list: t(['Asesoría de marca', 'Workshop de definición de identidad', 'Acompañamiento en lanzamiento'],
                ['Brand advisory', 'Identity definition workshop', 'Launch support']) },
    ],
    cta: t('Contacta ahora', 'Get in touch'),
  },
};

/* ---------------- PORTFOLIO ---------------- */
export const portfolio = {
  seo: {
    title: t('Portfolio | Laura Sánchez', 'Portfolio | Laura Sánchez'),
    desc: t('Proyectos de service design, branding e identidad visual: Lladró, Mouchi, Disowned, Natura Box, Eonia y más.',
            'Service design, branding and visual identity projects: Lladró, Mouchi, Disowned, Natura Box, Eonia and more.'),
  },
  title: t('Selected works', 'Selected works'),
  featured: [
    { page: 'lladro', name: t('LLADRÓ · Caso de estudio', 'LLADRÓ · Case study'), tags: t('DISEÑO DE EXPERIENCIA · INVESTIGACIÓN · ESTRATEGIA', 'EXPERIENCE DESIGN · RESEARCH · STRATEGY'),
      image: img('92f0a8e4-612f-47eb-8fcd-9646c84dadbb/Captura+de+pantalla+2025-09-28+a+las+16.58.15.png', 'Libro abierto del caso de estudio Lladró', 'Open Lladró case study book') },
    { page: 'mouchi', name: t('MOUCHI', 'MOUCHI'), tags: t('IDENTIDAD · LOGO · BRANDING', 'IDENTITY · LOGO · BRANDING'),
      image: img('e008e973-da64-48ab-a887-98811f84aa52/Captura+de+pantalla+2025-09-28+a+las+12.29.23.png', 'Logotipo de MOUCHI en papel texturizado', 'MOUCHI logo on textured paper') },
    { page: 'disowned', name: t('DISOWNED', 'DISOWNED'), tags: t('IDENTIDAD · LOGO · BRANDING', 'IDENTITY · LOGO · BRANDING'),
      image: img('7872f709-b288-4154-ad3b-a88b771f540c/Captura+de+pantalla+2025-09-28+a+las+16.22.59.png', 'Cinta de embalaje de Disowned Factory sobre hormigón', 'Disowned Factory packing tape on concrete') },
    { page: 'natura', name: t('NATURA BOX', 'NATURA BOX'), tags: t('IDENTIDAD · LOGO · BRANDING', 'IDENTITY · LOGO · BRANDING'),
      image: img('8ac8f397-20f9-4eb1-aef8-07110b65db2f/Captura+de+pantalla+2025-09-28+a+las+16.02.30.png', 'Materiales de marca de Natura Box', 'Natura Box brand materials') },
    { page: 'eonia', name: t('EONIA EVENTS', 'EONIA EVENTS'), tags: t('IDENTIDAD · LOGO · BRANDING', 'IDENTITY · LOGO · BRANDING'),
      image: img('a3ade3a9-d360-4ddb-bffd-7444de72192d/Captura+de+pantalla+2025-09-28+a+las+16.18.00.png', 'Tarjetas de visita de EONIA', 'EONIA business cards') },
  ],
  othersTitle: t('Otros proyectos.', 'Other projects.'),
  others: [
    [t('Inma Aguilera · Marca personal', 'Inma Aguilera · Personal brand'), img('f15a0677-9b0f-4417-b2b0-4987c01c6036/Captura+de+pantalla+2025-08-07+a+las+18.19.45.png', 'Tarjetas de visita de Inma Aguilera', 'Inma Aguilera business cards')],
    [t('Los soles de la noche · App', 'Los soles de la noche · App'), img('d76c9c7b-7de4-4a0b-884f-23c1d7840756/Captura+de+pantalla+2025-09-28+a+las+16.35.54.png', 'Pantalla de la app con ilustración de edificios históricos', 'App screen with an illustration of historic buildings')],
    [t('Cultoría', 'Cultoría'), img('7d8d6ef5-df16-4aa5-b3e8-6a6ec4e8f0a4/Captura+de+pantalla+2025-08-07+a+las+18.34.19.png', 'Papelería de Cultoría', 'Cultoría stationery')],
    [t('Festival Animahu', 'Animahu Festival'), img('f2cc942b-85d6-49f6-afab-5853c6e4a038/Captura+de+pantalla+2025-09-28+a+las+16.27.13.png', 'Cartel del Festival Animahu', 'Animahu Festival poster')],
    [t('Myxes', 'Myxes'), img('bc62e12d-1846-4d6f-9ee5-1e733f7a1604/myxes_caja-21.jpg', 'Caja de Myxes', 'Myxes box')],
    [t('Carrera contra el cáncer', 'Race against cancer'), img('47670edb-e9e0-43ea-80dc-ed50a6d47373/Captura+de+pantalla+2025-09-28+a+las+16.05.47.png', 'Cartel de la carrera contra el cáncer de Huesca', 'Huesca race against cancer poster')],
    [t('CAPAZO', 'CAPAZO'), img('82d6cab8-c5a6-4853-a3c7-b895946dddfa/Captura+de+pantalla+2025-09-28+a+las+16.29.30.png', 'Dos personas leyendo la revista Capazo en una tienda', 'Two people reading Capazo magazine in a shop')],
    [t('TOUCH EVENT', 'TOUCH EVENT'), img('1a42538a-6fcc-4a78-883c-e6552d2f015e/touch1.jpg', 'Tarjetas de Touch Event sobre una mesa', 'Touch Event cards on a table')],
    [t('LEOPARD GAMES', 'LEOPARD GAMES'), img('35cf237b-a3fa-4b05-9fae-48743ca4eaac/Captura+de+pantalla+2025-09-28+a+las+16.34.36.png', 'Logotipo de Leopard Games', 'Leopard Games logo')],
    [t('Invitación de boda', 'Wedding invitation'), img('78cd08fe-b2e5-446c-a228-df31e2e20df2/Captura+de+pantalla+2025-09-28+a+las+17.28.42.png', 'Invitación de boda con decoración floral y sobre verde', 'Floral wedding invitation with a green envelope')],
    [t('Benditos Zarrios', 'Benditos Zarrios'), img('294e3175-8ddc-4f52-a2ae-fe832f3d9153/Captura+de+pantalla+2025-09-28+a+las+16.37.42.png', 'Cartel naranja del mercado Benditos Zarrios', 'Orange poster for the Benditos Zarrios market')],
    [t('Premio de Arquitectura', 'Architecture Award'), img('dba983fa-ea6c-4dad-9be0-4a5218057dd9/Captura+de+pantalla+2025-09-28+a+las+16.56.38.png', 'Trofeo de acrílico multicolor con forma de 3', 'Multicolour acrylic trophy shaped like a 3')],
    [t('Tonet', 'Tonet'), img('eb4cee78-64e3-48eb-b1a7-097b58bdc03c/ChatGPT+Image+28+sept+2025%2C+17_22_53.png', 'Sillas hechas con periódicos enrollados', 'Chairs made of rolled-up newspapers')],
    [t('GXUATELINDA · Libro para madres', 'GXUATELINDA · Book for mothers'), img('248f2e47-bb03-41a6-aa90-3d4ccb9aeffe/Captura+de+pantalla+2025-09-28+a+las+17.04.06.png', 'Ilustración de una mujer embarazada', 'Illustration of a pregnant woman')],
    [t('Arquiforma', 'Arquiforma'), img('35b19b88-ba15-4189-baaa-782139cb8585/Captura+de+pantalla+2025-09-29+a+las+2.23.00.png', 'Tarjeta de visita de Arquiforma sobre hormigón', 'Arquiforma business card on concrete')],
  ],
};

/* ---------------- WORKSHOPS ---------------- */
export const workshops = {
  seo: {
    title: t('Workshops & Co-diseño | Laura Sánchez', 'Workshops & Co-design | Laura Sánchez'),
    desc: t('Workshops estratégicos de service design para pasar de la complejidad a la claridad.', 'Strategic service design workshops to move teams from complexity to clarity.'),
  },
  title: t('Workshops &amp; Co-diseño', 'Workshops &amp; Co-design'),
  body: t('Diseño y facilito workshops estratégicos para ayudar a equipos y organizaciones a pasar de la complejidad a la claridad.',
          'I design and facilitate strategic workshops that help teams and organisations move from complexity to clarity.'),
  image: img('55ac51ae-26f4-443d-9da9-8c9ebc663725/DTS_Mood_board_Julien_Tell_Photos_ID3499.jpg', 'Sesión de lluvia de ideas con notas adhesivas', 'Brainstorming session with sticky notes'),
  tools: ['Workshop', 'User Journey Map', 'Value Proposition Canvas', 'Brand Positioning Map', 'How Might We'],
  quote: {
    image: img('1ae5e16e-bbb9-4eca-97c8-dc7530382f39/Captura+de+pantalla+2026-05-19+a+las+20.40.09.png', 'Persona escribiendo en una libreta junto a un portátil', 'Person writing in a notebook next to a laptop'),
    meta: t('2025 · Nueva York', '2025 · New York'),
    lead: t('A veces el mayor reto no es no saber qué hacer, sino no saber por dónde empezar.', 'Sometimes the biggest challenge isn’t not knowing what to do, but not knowing where to start.'),
    body: t(['Usando metodologías de diseño de servicios, trabajo con los equipos para sacar a la superficie lo que importa, alinearlo y convertirlo en decisiones reales.', 'Porque las mejores ideas no nacen en solitario.'],
            ['Using service design methods, I work with teams to surface what matters, align it and turn it into real decisions.', 'Because the best ideas are never born alone.']),
  },
};

/* ---------------- ABOUT ---------------- */
export const about = {
  seo: {
    title: t('About me | Laura Sánchez', 'About me | Laura Sánchez'),
    desc: t('Service designer y estratega con base en diseño visual. Formada en Diseño con mención en Service Design por la Universidad de Navarra.',
            'Service designer and strategist with a background in visual design. Design graduate specialised in Service Design, University of Navarra.'),
  },
  photo: img('4e00784e-3059-490f-bde6-b302079bc3b2/tempImagehLIQDk.jpg', 'Laura Sánchez sentada en un banco de un parque, en blanco y negro', 'Laura Sánchez sitting on a park bench, black and white'),
  signature: img('afa6fbe1-738b-4f2c-845e-b5958da8d97d/Ilustraci%C3%B3n_sin_t%C3%ADtulo.png', 'Firma de Laura', 'Laura’s signature'),
  title: t('Service Designer &amp; Strategist', 'Service Designer &amp; Strategist'),
  subtitle: t('Formada en Diseño con Mención en Service Design · Universidad de Navarra', 'Design degree with a specialisation in Service Design · University of Navarra'),
  body: t([
    'Soy Laura Sánchez, <strong>diseñadora de servicios con una sólida base en diseño visual</strong>. Trabajo en la intersección del diseño centrado en las personas, la estrategia de servicio y la marca.',
    'En los últimos 5 años he liderado procesos de <strong>service design end-to-end en entornos complejos: research, journey mapping, service blueprints, talleres de co-diseño y entrega de UX/UI.</strong> He trabajado directamente con CPOs, equipos de desarrollo y clientes, traduciendo insights de usuario y complejidad de negocio en soluciones claras y accionables.',
    'Lo que me diferencia: <strong>combino un pensamiento de service design riguroso con una ejecución visual de alto nivel.</strong> No solo mapeo la experiencia: también puedo construirla, comunicarla y llevarla hasta el último detalle con el que las personas conectan de verdad.',
  ], [
    'I’m Laura Sánchez, <strong>a service designer with a strong background in visual design</strong>. I work at the intersection of human-centred design, service strategy and brand.',
    'Over the last 5 years I’ve led <strong>end-to-end service design processes in complex environments: research, journey mapping, service blueprints, co-design workshops and UX/UI delivery.</strong> I’ve worked directly with CPOs, development teams and clients, translating user insights and business complexity into clear, actionable solutions.',
    'What sets me apart: <strong>I combine rigorous service design thinking with high-end visual execution.</strong> I don’t just map the experience. I can also build it, communicate it and carry it through to the last detail people truly connect with.',
  ]),
  cta: t('Contacta', 'Get in touch'),
};

/* ---------------- CONTACT ---------------- */
export const contact = {
  seo: {
    title: t('Contacto | Laura Sánchez', 'Contact | Laura Sánchez'),
    desc: t('¿Hablamos? Escríbeme para proyectos de service design, UX/UI y branding.', 'Let’s talk. Get in touch about service design, UX/UI and branding projects.'),
  },
  title: t('Let’s chat', 'Let’s chat'),
  city: t('Madrid, Spain', 'Madrid, Spain'),
  form: {
    name: t('Nombre', 'Name'), first: t('Nombre', 'First name'), last: t('Apellido', 'Last name'),
    email: t('Correo electrónico', 'Email'), message: t('Mensaje', 'Message'), required: t('(obligatorio)', '(required)'),
    send: t('Enviar', 'Send'), sending: t('Enviando…', 'Sending…'),
    ok: t('¡Gracias! Te responderé lo antes posible.', 'Thank you! I’ll get back to you as soon as possible.'),
    error: t('No se ha podido enviar. Escríbeme directamente a', 'Something went wrong. Email me directly at'),
  },
};

/* ---------------- PROYECTOS ----------------
   Bloques: {type:'text', html} · {type:'lead', html} · {type:'big', html} · {type:'img', image}
            {type:'pair', images:[a,b]} · {type:'grid', images:[...]} · {type:'marquee', text} · {type:'label', html}
*/
const tx = (es, en) => ({ type: 'text', html: t(es, en) });
const lead = (es, en) => ({ type: 'lead', html: t(es, en) });
const big = (es, en) => ({ type: 'big', html: t(es, en) });
const one = (image) => ({ type: 'img', image });
const pair = (...images) => ({ type: 'pair', images });
const grid = (...images) => ({ type: 'grid', images });
const label = (es, en) => ({ type: 'label', html: t(es, en) });

export const projects = {
  mouchi: {
    seo: { title: t('Mouchi · Identidad de marca | Laura Sánchez', 'Mouchi · Brand identity | Laura Sánchez'),
           desc: t('Identidad visual para Mouchi, marca de moda infantil artesanal y sostenible.', 'Visual identity for Mouchi, a handcrafted, sustainable children’s fashion brand.') },
    title: 'Mouchi', tags: t('IDENTIDAD · LOGO · BRANDING', 'IDENTITY · LOGO · BRANDING'),
    blocks: [
      lead('Nace como una marca de moda infantil con una mirada nostálgica, una sensibilidad muy cuidada por lo artesanal y un fuerte compromiso con la sostenibilidad.',
           'Born as a children’s fashion brand with a nostalgic outlook, a carefully nurtured sensitivity for craftsmanship and a strong commitment to sustainability.'),
      tx('<p>El nombre, con significado emocional y sonoridad internacional, pide una identidad visual con carácter y delicadeza.</p><p>Esta primera fase tiene como objetivo alinear el universo visual, las referencias estéticas y el tono gráfico general antes de entrar en propuestas de logotipo.</p>',
         '<p>The name, with its emotional meaning and international sound, calls for a visual identity with character and delicacy.</p><p>This first phase aims to align the visual universe, aesthetic references and overall graphic tone before moving on to logo proposals.</p>'),
      one(img('faf5865f-2c60-4c22-a7ef-fe266e66b61c/Captura+de+pantalla+2025-09-25+a+las+20.53.48.png', 'Fase de concepto: niños jugando en una mesa con tela de patchwork', 'Concept phase: children playing at a table with patchwork fabric')),
      one(img('b2250931-0e68-45c9-9e83-b6091373f024/Captura+de+pantalla+2025-09-28+a+las+20.39.23.png', 'Logotipo de Mouchi', 'Mouchi logo')),
      tx('<p>Evoca la simplicidad de un dibujo delicado, “no grita, susurra”, rindiendo homenaje de forma sutil al nombre <em>Mouchi</em> (búho en gallego) sin ser literal. Los dos arcos centrales sugieren hojas que se abren y despliegan nuevas historias, reforzando la idea de crecer sin prisa y de cada prenda como un capítulo que va tomando forma.</p>',
         '<p>It evokes the simplicity of a delicate drawing, one that “doesn’t shout, it whispers”, subtly paying tribute to the name <em>Mouchi</em> (owl in Galician) without being literal. The two central arches suggest pages opening up to unfold new stories, reinforcing the idea of growing up unhurried, with each garment as a chapter taking shape.</p>'),
      big('RESEARCH', 'RESEARCH'),
      tx('<p>Antes de definir ningún elemento visual, hice un proceso de investigación con el público objetivo: madres de niños de 0 a 6 años con sensibilidad por el diseño, la artesanía y la sostenibilidad. El objetivo era entender qué valoran de verdad, qué les frustra de las marcas infantiles actuales y qué emociones querían que les transmitiese una nueva marca.</p>',
         '<p>Before defining any visual element, I ran a research process with the target audience: mothers of children aged 0 to 6 who care about design, craftsmanship and sustainability. The goal was to understand what they truly value, what frustrates them about current children’s brands and what emotions they wanted a new brand to convey.</p>'),
      one(img('50d02cf5-3bed-4b09-ba3a-a099fafabbfb/Captura+de+pantalla+2026-03-27+a+las+12.39.11.png', 'Entrevistas en línea con madres en Madrid, 2025', 'Online interviews with mothers in Madrid, 2025')),
      pair(img('8fbd13a1-e546-4837-b357-60d98b341e85/Captura+de+pantalla+2026-03-27+a+las+12.47.13.png', 'Perfil de usuaria: Ana L., diseñadora en Madrid', 'User persona: Ana L., designer in Madrid'),
           img('b1aea12d-58c0-4f19-90bf-6c4480d0849e/Captura+de+pantalla+2026-03-27+a+las+12.47.17.png', 'Perfil de usuaria: María R., abogada en Madrid', 'User persona: María R., lawyer in Madrid')),
      one(img('ffc4f62e-0abe-42b2-9e64-476e4f6eb7e2/Captura+de+pantalla+2026-03-27+a+las+12.54.15.png', 'Mouchi: insights y decisiones de diseño', 'Mouchi: insights and design decisions')),
      big('<strong>Dónde crecen las historias</strong>', '<strong>Where stories grow</strong>'),
      label('Where less speaks loud', 'Where less speaks loud'),
      pair(img('a5c165a2-1fdc-4f55-823f-96bfcf80c499/Captura+de+pantalla+2025-09-28+a+las+20.28.15.png', 'Niña de pie al aire libre con las manos juntas', 'Girl standing outdoors with her hands together'),
           img('41f3ad2e-61c3-4116-950a-33760a78f34f/Captura+de+pantalla+2025-09-28+a+las+20.28.54.png', 'Medalla dorada con el logotipo de Mouchi', 'Gold medal with the Mouchi logo')),
      one(img('5af9c0ca-121a-4cea-a05a-b37c6f18d507/Presentation+Mockup_1.jpg', 'Páginas del brandbook de Mouchi', 'Pages of the Mouchi brand book')),
      one(img('120a90fb-d2f8-4009-bcab-f2a444b3dc88/Captura+de+pantalla+2025-09-28+a+las+20.34.30.png', 'Etiqueta de cartón de Mouchi colgada sobre tela', 'Mouchi cardboard tag hanging on fabric')),
      tx('<p>Mouchi no es solo un logo: es una forma de expresar quiénes somos y qué queremos transmitir al mundo. Nuestra identidad visual refleja nuestros valores, nuestra personalidad y la manera en que nos relacionamos con nuestra comunidad.</p><p>Este brandbook reúne las pautas esenciales para el uso correcto de la marca. Su objetivo es asegurar que cada aplicación del logo, los colores y la tipografía mantenga la coherencia y la fuerza de la identidad de Mouchi, sin importar el medio o el contexto.</p><p>Al seguir estas guías, contribuimos a que Mouchi sea reconocible, consistente y confiable en cada punto de contacto.</p>',
         '<p>Mouchi isn’t just a logo: it’s a way of expressing who we are and what we want to share with the world. Our visual identity reflects our values, our personality and the way we relate to our community.</p><p>This brand book brings together the essential guidelines for using the brand correctly. Its aim is to ensure that every use of the logo, colours and typography keeps Mouchi’s identity coherent and strong, whatever the medium or context.</p><p>By following these guidelines, we help Mouchi stay recognisable, consistent and trustworthy at every touchpoint.</p>'),
    ],
  },

  eonia: {
    seo: { title: t('Eonia Events · Identidad de marca | Laura Sánchez', 'Eonia Events · Brand identity | Laura Sánchez'),
           desc: t('Identidad y experiencia de marca para Eonia, eventos para un público joven.', 'Brand identity and experience for Eonia, events for a young audience.') },
    title: 'EONIA', tags: t('IDENTIDAD · LOGO · BRANDING', 'IDENTITY · LOGO · BRANDING'),
    blocks: [
      lead('Esta palabra proviene del antiguo término griego <em>aion</em>, que significa “época”, y le dio al castellano la palabra “eón”, un período de tiempo indefinido pero largo o una división importante del tiempo geológico.',
           'The word comes from the ancient Greek <em>aion</em>, meaning “age”, which gave Spanish the word “eón”: an indefinite but long period of time, or a major division of geological time.'),
      tx('<p>En astronomía y contextos menos formales, un eón se refiere a un lapso de tiempo de mil millones de años.</p>', '<p>In astronomy and less formal contexts, an aeon refers to a span of a billion years.</p>'),
      one(img('82d47846-9710-4536-88bc-44f97ebcf68a/Captura+de+pantalla+2025-08-07+a+las+18.17.27.png', 'Logotipo de Eonia', 'Eonia logo')),
      big('<strong>Dónde se disfruta sin pedir permiso</strong>', '<strong>Where you enjoy without asking for permission</strong>'),
      one(img('b06a9463-95a9-401d-886b-bc01b2d8ee68/Captura+de+pantalla+2025-09-28+a+las+21.26.37.png', 'Público en un concierto nocturno, en blanco y negro', 'Crowd at a night concert, black and white')),
      tx('<p><strong>Eonia</strong> es una marca dedicada a crear <strong>experiencias memorables y únicas</strong>, donde cada detalle está pensado para conectar con las emociones de los invitados. Su enfoque combina <strong>creatividad, estilo y planificación estratégica</strong>, asegurando que cada evento tenga identidad propia y deje huella. Desde la conceptualización hasta la ejecución, <strong>Eonia transforma ideas en momentos que se viven y se recuerdan</strong>, adaptándose a la personalidad y necesidades de cada cliente.</p>',
         '<p><strong>Eonia</strong> is a brand dedicated to creating <strong>unique, memorable experiences</strong>, where every detail is designed to connect with guests’ emotions. Its approach combines <strong>creativity, style and strategic planning</strong>, making sure every event has its own identity and leaves a mark. From concept to execution, <strong>Eonia turns ideas into moments that are lived and remembered</strong>, adapting to each client’s personality and needs.</p>'),
      tx('<p><strong>Experiencia del asistente</strong></p><p>Eonia no es solo una marca visual: es un servicio que empieza mucho antes de que empiece la música y termina días después del evento. Este journey map recoge la experiencia completa del asistente: desde el primer contacto con la marca en Instagram hasta el recuerdo que queda. Cada fase tiene sus propios touchpoints, sus emociones y sus oportunidades de diseño, y la identidad visual de Eonia tiene que funcionar en todas ellas.</p>',
         '<p><strong>The attendee experience</strong></p><p>Eonia isn’t just a visual brand. It’s a service that begins long before the music starts and ends days after the event. This journey map captures the attendee’s whole experience, from the first contact with the brand on Instagram to the memory that stays. Each phase has its own touchpoints, emotions and design opportunities, and Eonia’s visual identity has to work in all of them.</p>'),
      one(img('5ecf9667-bc53-4216-9ac8-e2df17299102/Captura+de+pantalla+2026-03-27+a+las+13.37.41.png', 'Journey map del asistente a un evento de Eonia', 'Journey map of an Eonia event attendee')),
      label('Eonia is a young soul', 'Eonia is a young soul'),
      big('Where the night becomes unforgettable.', 'Where the night becomes unforgettable.'),
      pair(img('45a09d6c-de47-44aa-bede-5e8b5fdc465f/Captura+de+pantalla+2025-09-28+a+las+21.33.42.png', 'Etiqueta tipo billete con código de barras', 'Ticket-style label with a barcode'),
           img('3c1664bc-1d61-487d-af8a-4c5642b07e9b/Captura+de+pantalla+2025-09-28+a+las+21.43.38.png', 'Entradas de Nochevieja de Eonia', 'Eonia New Year’s Eve tickets')),
      pair(img('4bc9729a-9869-4589-8094-71c206d9ca20/Captura+de+pantalla+2025-09-28+a+las+21.47.34.png', 'Perfiles de Instagram de Eonia en un móvil', 'Eonia Instagram profiles on a phone'),
           img('e014f093-1616-4bf7-aa59-f87d0c6e32c0/Captura+de+pantalla+2025-09-28+a+las+21.48.01.png', 'Sudadera y chapas de Eonia', 'Eonia hoodie and badges')),
      one(img('d4a41736-18b0-4429-93bc-6e3e205db9ef/Captura+de+pantalla+2025-09-28+a+las+21.47.00.png', 'Documentos y etiquetas de marca de Eonia', 'Eonia brand documents and labels')),
      big('<strong>Experiencias únicas y memorables.</strong>', '<strong>Unique, memorable experiences.</strong>'),
      tx('<p><strong>Eonia</strong> transforma la noche en <strong>experiencias únicas y memorables</strong> para un público joven que busca diversión, estilo y exclusividad. Cada evento está cuidadosamente diseñado para sorprender, emocionar y dejar huella, combinando <strong>creatividad, glamour y energía</strong> en cada detalle. Con Eonia, cada celebración se convierte en un momento que se vive intensamente y se recuerda para siempre, donde la música, la estética y la atmósfera se unen para crear noches inolvidables.</p>',
         '<p><strong>Eonia</strong> turns the night into <strong>unique, memorable experiences</strong> for a young audience looking for fun, style and exclusivity. Every event is carefully designed to surprise, move and leave a mark, combining <strong>creativity, glamour and energy</strong> in every detail. With Eonia, every celebration becomes a moment lived intensely and remembered forever, where music, aesthetics and atmosphere come together to create unforgettable nights.</p>'),
      one(img('df443e76-0031-46cf-b78e-a6fc873a54ad/Captura+de+pantalla+2025-09-28+a+las+21.40.48.png', 'Pantalla con “Save the date” en una sala oscura', 'Screen showing “Save the date” in a dark room')),
    ],
  },

  disowned: {
    seo: { title: t('Disowned Factory · Restyling | Laura Sánchez', 'Disowned Factory · Restyling | Laura Sánchez'),
           desc: t('Restyling de la identidad visual de Disowned Factory.', 'Visual identity restyling for Disowned Factory.') },
    title: 'DISOWNED', tags: t('IDENTIDAD · LOGO · BRANDING', 'IDENTITY · LOGO · BRANDING'),
    blocks: [
      tx('<p><strong>Disowned Factory</strong> es una marca con una <strong>actitud irreverente y creativa</strong>, dirigida a un público que busca productos con personalidad y diseño auténtico.</p><p>Su identidad se construye en torno a la <strong>originalidad, la transgresión y el juego visual</strong>, combinando estética moderna con referencias gráficas que conectan con consumidores jóvenes y conscientes del estilo.</p><p>La marca apuesta por la <strong>innovación y la autenticidad</strong>, generando piezas que destacan y se diferencian en un mercado saturado.</p>',
         '<p><strong>Disowned Factory</strong> is a brand with an <strong>irreverent, creative attitude</strong>, aimed at people looking for products with personality and authentic design.</p><p>Its identity is built around <strong>originality, transgression and visual play</strong>, combining a modern aesthetic with graphic references that connect with young, style-conscious consumers.</p><p>The brand is committed to <strong>innovation and authenticity</strong>, creating pieces that stand out in a saturated market.</p>'),
      one(img('897066fa-26a8-4331-8bdf-de00988d05d0/Captura+de+pantalla+2025-09-28+a+las+23.14.33.png', 'Tarjetas de visita de Disowned Factory', 'Disowned Factory business cards')),
      big('El restyling de <strong>Disowned Factory</strong> responde a la necesidad de <strong>reforzar su identidad visual</strong> y adaptarla a nuevas oportunidades de comunicación y expansión.',
          'The <strong>Disowned Factory</strong> restyling responds to the need to <strong>strengthen its visual identity</strong> and adapt it to new opportunities for communication and growth.'),
      tx('<p>Todo restyling empieza por entender qué no se puede tocar. Antes de proponer ningún cambio, hice un diagnóstico de la identidad existente: qué estaba funcionando, qué estaba fallando y cuáles eran las expectativas del cliente y de su audiencia. El objetivo era evolucionar el sistema visual sin perder la actitud que hace a Disowned reconocible.</p>',
         '<p>Every restyling starts by understanding what must not be touched. Before proposing any change, I diagnosed the existing identity: what was working, what was failing and what the client and their audience expected. The goal was to evolve the visual system without losing the attitude that makes Disowned recognisable.</p>'),
      pair(img('db52c114-6972-4647-a840-cb468a86bd8a/Captura+de+pantalla+2026-03-27+a+las+13.12.28.png', 'Insight y decisión estratégica: actitud irreverente', 'Insight and strategic decision: irreverent attitude'),
           img('007f7645-fc63-4f81-81e9-974f9af53f6c/Captura+de+pantalla+2026-03-27+a+las+13.12.37.png', 'Insight y decisión estratégica: nuevo público en Instagram', 'Insight and strategic decision: new audience on Instagram')),
      pair(img('67eac4b2-65bc-4616-b803-ee7ae8661073/Captura+de+pantalla+2026-03-27+a+las+13.12.33.png', 'Insight y decisión estratégica: sistema de identidad flexible', 'Insight and strategic decision: flexible identity system'),
           img('da4f03f3-13dc-4860-9e24-f1d2f0ac587d/Captura+de+pantalla+2026-03-27+a+las+13.12.42.png', 'Insight y decisión estratégica: contenido personalizado', 'Insight and strategic decision: custom content')),
      pair(img('ec7a9988-8367-43c4-998c-c86dbb323882/Knockout+-+Slide+1-1.gif', 'Animación de la marca Disowned', 'Disowned brand animation'),
           img('69f0c488-4a1c-4e14-82b7-66c68337a22e/Knockout+-+Slide+2-1+copia.gif', 'Animación de la marca en un móvil', 'Brand animation on a phone')),
      grid(img('d1fdaeca-b43a-4373-bcf7-b75afe5d16a2/Captura+de+pantalla+2026-03-27+a+las+13.19.49.png', 'Perfil de usuaria: Alba L., estudiante de moda', 'User persona: Alba L., fashion student'),
           img('2a7b8a31-24a5-47dd-90cf-2d1304ff7cb8/Captura+de+pantalla+2026-03-27+a+las+13.19.45.png', 'Perfil de usuario: Javier M., diseñador gráfico', 'User persona: Javier M., graphic designer'),
           img('b99e1e15-43b2-434a-8805-c17b5659ec07/Captura+de+pantalla+2026-03-27+a+las+13.17.35.png', 'Estrategia de touchpoints', 'Touchpoint strategy')),
      one(img('8aa33c44-9cd7-40ba-a1d5-11891d43fb3c/Captura+de+pantalla+2025-09-28+a+las+23.31.37.png', 'Nube de valores de marca', 'Brand values word cloud')),
      pair(img('6f492e38-df7d-43b1-bc84-5b4c933e7aa8/Captura+de+pantalla+2025-09-28+a+las+23.39.20.png', 'Papelería de Disowned Factory', 'Disowned Factory stationery'),
           img('28b22f3a-ef31-4522-b635-497b9e2ae8b2/Captura+de+pantalla+2025-09-28+a+las+23.38.35.png', 'Firma de correo electrónico', 'Email signature')),
      pair(img('bfdfd3a4-35dd-4f35-85cf-d6e6c4ccd657/Captura+de+pantalla+2025-09-28+a+las+23.11.11.png', 'Bolsa de papel de Disowned Factory', 'Disowned Factory paper bag'),
           img('4b58af74-d442-4390-b577-fea68a522e45/Captura+de+pantalla+2025-09-28+a+las+23.36.54.png', 'Acreditaciones y cinta para el cuello', 'ID badges and lanyard')),
      big('<strong>Mantener la esencia</strong>', '<strong>Keeping the essence</strong>'),
      tx('<p>El restyling de <strong>Disowned Factory</strong> responde a la necesidad de reforzar su identidad visual y adaptarla a nuevas oportunidades de comunicación y expansión. La actualización moderniza los elementos gráficos manteniendo la esencia irreverente de la marca, mejora la coherencia visual en todas sus aplicaciones, desde packaging hasta digital, y potencia la atracción hacia su público objetivo, destacando su carácter creativo y distintivo.</p><p>Además, alinea la identidad con la visión y los valores actuales de la marca, garantizando que cada pieza comunique fuerza, autenticidad y estilo. El resultado es una identidad más sólida, flexible y memorable, preparada para posicionar a Disowned Factory como un referente en su sector.</p>',
         '<p>The <strong>Disowned Factory</strong> restyling responds to the need to strengthen its visual identity and adapt it to new opportunities for communication and growth. The update modernises the graphic elements while keeping the brand’s irreverent essence, improves visual consistency across every application, from packaging to digital, and increases its appeal to its target audience by highlighting its creative, distinctive character.</p><p>It also aligns the identity with the brand’s current vision and values, making sure every piece communicates strength, authenticity and style. The result is a stronger, more flexible and memorable identity, ready to position Disowned Factory as a benchmark in its sector.</p>'),
      one(img('0cded7d5-cc1e-48d7-a436-59df9d3e8dd2/chapa_d.png', 'Chapas de Disowned Factory: “Break the rules”', 'Disowned Factory badges: “Break the rules”')),
      big('<strong>Create it, customize it, we make it real.</strong>', '<strong>Create it, customize it, we make it real.</strong>'),
    ],
  },

  natura: {
    seo: { title: t('Natura Box · Restyling | Laura Sánchez', 'Natura Box · Restyling | Laura Sánchez'),
           desc: t('Restyling de marca para Natura Box, un box de CrossFit donde la comunidad y la salud son el mantra.', 'Brand restyling for Natura Box, a CrossFit box where community and health are the mantra.') },
    title: 'NATURA BOX', tags: t('IDENTIDAD · LOGO · BRANDING', 'IDENTITY · LOGO · BRANDING'),
    blocks: [
      tx('<p><strong>Natura Box</strong> es mucho más que un box de CrossFit: es un espacio donde <strong>la comunidad y la salud son el mantra</strong>.</p><p>Aquí no hay un único tipo de usuario; jóvenes, mayores, hombres, mujeres y todo tipo de personas se sienten bienvenidos y motivados. El ambiente fluye con energía positiva, el respeto y la colaboración, fomentando el bienestar físico y mental en cada entrenamiento. Natura Box combina <strong>diversión, esfuerzo y salud</strong>, creando un entorno donde cada persona puede superarse y disfrutar del camino hacia un estilo de vida más fuerte y equilibrado.</p>',
         '<p><strong>Natura Box</strong> is much more than a CrossFit box: it’s a space where <strong>community and health are the mantra</strong>.</p><p>There’s no single type of member here; young and old, men, women and all kinds of people feel welcome and motivated. The atmosphere flows with positive energy, respect and collaboration, supporting physical and mental wellbeing in every session. Natura Box combines <strong>fun, effort and health</strong>, creating an environment where everyone can push themselves and enjoy the path to a stronger, more balanced lifestyle.</p>'),
      pair(img('3444f815-aa94-4c9a-9e6d-94d5fb20f924/NATURA-BOX-25.png', 'Logotipo de Natura Box', 'Natura Box logo'),
           img('5bf85190-f957-4c3f-850d-f91f34db571f/PHOTO-2025-03-04-09-13-14.jpg', 'Personas entrenando con pesas en el box', 'People training with weights at the box')),
      grid(img('8e104f44-101a-407b-9ce1-f8bc409fbe0c/Captura+de+pantalla+2025-09-29+a+las+0.02.24.png', 'Concepto de salud salvaje', 'The “wild health” concept'),
           img('3bd20f2a-28c3-4afd-a8d6-0c869b34af44/chapa.png', 'Chapas de Natura Box', 'Natura Box badges'),
           img('7bd4a321-891c-41d5-a04e-6ebe584fc927/Captura+de+pantalla+2025-09-29+a+las+0.00.58.png', 'Definición de comunidad', 'Definition of community')),
      { type: 'marquee', text: 'NATURA BOX ✳︎ ' },
      pair(img('1964825b-890f-4865-a215-00fd0acb4b1c/PHOTO-2025-03-04-09-13-15+3.jpg', 'Dos personas entrenando frente al cartel de Natura Box', 'Two people training in front of the Natura Box sign'),
           img('2f7c5000-2566-4926-b49b-f085d7069325/PHOTO-2025-03-04-09-13-15.jpg', 'Grupo estirando en el suelo del box', 'Group stretching on the box floor')),
      grid(img('0ea55d23-8f3e-4846-9b91-9f1f2c782c75/PHOTO-2025-03-04-08-49-46+2.jpg', 'Camisetas de Natura Box colgadas', 'Natura Box T-shirts on hangers'),
           img('456ccac0-7cec-44ad-9364-93b09a9594f2/PHOTO-2025-03-04-08-49-45.jpg', 'Grupo posando frente al cartel de Natura Box', 'Group posing in front of the Natura Box sign'),
           img('7c6577cd-d5b3-497b-8b29-c0ea3ee3a885/PHOTO-2025-03-04-09-13-14+2.jpg', 'Camiseta verde con huella dactilar', 'Green T-shirt with a fingerprint design')),
      pair(img('09489a6f-13c2-47ab-a284-62496fb5a541/PHOTO-2025-03-04-08-49-46.jpg', 'Cartel de Natura Box en una pared de madera', 'Natura Box sign on a wooden wall'),
           img('d676e38e-be58-4ad0-87c7-4f42a46c36be/NATURA-BOX-17.png', 'Natura Box con patrón de rayas', 'Natura Box with a striped pattern')),
      big('De la identidad al entrenamiento: sentir, conectar y crecer juntos.', 'From identity to training: feel, connect and grow together.'),
      one(img('216e5445-594c-4cb0-bc88-e33d0e1202ae/Captura+de+pantalla+2025-09-28+a+las+16.02.30.png', 'Materiales de marca de Natura Box', 'Natura Box brand materials')),
      big('<strong>Feel the flow. Feel alive.</strong>', '<strong>Feel the flow. Feel alive.</strong>'),
      tx('<p>En este proyecto de <strong>restyling para Natura Box</strong>, trabajamos para reflejar mejor la esencia del día a día del box: un espacio donde la salud es la prioridad y la comunidad impulsa cada entrenamiento.</p><p>El objetivo del cambio de marca fue crear una identidad con la que todos los usuarios pudieran <strong>sentirse identificados</strong>, desde jóvenes a mayores, principiantes o avanzados, reforzando la idea de una <strong>mentalidad saludable</strong> que fluye en cada acción.</p><p>La nueva imagen transmite energía, inclusión y bienestar, conectando con las personas no solo como deportistas, sino como parte de una comunidad que comparte valores, motivación y pasión por cuidarse.</p>',
         '<p>In this <strong>restyling project for Natura Box</strong>, we worked to better reflect the essence of everyday life at the box: a space where health is the priority and community drives every session.</p><p>The aim of the rebrand was to create an identity every member could <strong>identify with</strong>, young or old, beginner or advanced, reinforcing the idea of a <strong>healthy mindset</strong> that flows through every action.</p><p>The new image conveys energy, inclusion and wellbeing, connecting with people not just as athletes but as part of a community that shares values, motivation and a passion for looking after themselves.</p>'),
    ],
  },

  lladro: {
    seo: { title: t('Lladró · Caso de estudio de service design | Laura Sánchez', 'Lladró · Service design case study | Laura Sánchez'),
           desc: t('Cómo transformar la percepción de Lladró entre Millennials y Gen Z desde la experiencia y la comunidad.', 'How to transform the perception of Lladró among Millennials and Gen Z through experience and community.') },
    title: 'LLADRÓ', tags: t('CASE STUDY · VALENCIA', 'CASE STUDY · VALENCIA'),
    blocks: [
      lead('<em>¿Por qué Lladró no estaba presente en mi generación? Esa pregunta fue el punto de partida.</em>', '<em>Why wasn’t Lladró part of my generation? That question was the starting point.</em>'),
      tx('<p><strong>El reto:</strong> Transformar la percepción de Lladró entre Millennials y Gen Z, no desde el producto, sino desde la experiencia y la creación de una nueva comunidad.</p><p>Este proyecto nació en octubre de 2019, cuando Lladró comenzó a estar entre mis posibilidades para el TFG de una manera más seria. Lo que terminó por convencerme fue una conversación con mi abuela, en la que me explicó el enorme significado que tenía para ella una bailarina de Lladró, una marca que, en ese momento, yo no conocía.</p>',
         '<p><strong>The challenge:</strong> To transform how Millennials and Gen Z perceive Lladró, not through the product but through the experience and the creation of a new community.</p><p>This project was born in October 2019, when Lladró started to become a serious option for my final degree project. What finally convinced me was a conversation with my grandmother, in which she explained the enormous meaning a Lladró ballerina had for her, a brand I didn’t know at the time.</p>'),
      big('<strong>Old but gold.</strong>', '<strong>Old but gold.</strong>'),
      one(img('2f5c1f5d-8ada-47d7-a80a-b1a076535ef1/Captura+de+pantalla+2025-09-28+a+las+16.59.09.png', 'Páginas del documento sobre experiencias y preferencias de los millennials', 'Spread about millennials’ experiences and preferences')),
      tx('<p>Esto me llevó a preguntarme cómo una figura con un valor sentimental tan grande, que había estado en esa estantería durante décadas, nunca había llamado mi atención y, en cambio, cómo mi abuela la consideraba un símbolo.</p><p><strong>Metodología:</strong> Research cualitativo y cuantitativo con 300+ personas, mystery shopper en boutique de Valencia, entrevistas a 8 usuarios, análisis de tendencias globales, análisis competitivo y journey map completo de la visita al Museo Lladró, con acciones, sentimientos y pain points en cada touchpoint. Customer Segments para dos perfiles. Cuatro vías de propuesta de valor desarrolladas con AEIOU, service blueprints y scenarios: <em>Learn with Us · Created for You · Better Together · Inspire &amp; be Inspired.</em></p>',
         '<p>It made me wonder how a figure with such great sentimental value, which had sat on that shelf for decades, had never caught my attention, while my grandmother saw it as a symbol.</p><p><strong>Methodology:</strong> Qualitative and quantitative research with 300+ people, mystery shopping at the Valencia boutique, interviews with 8 users, global trend analysis, competitive analysis and a full journey map of the visit to the Lladró Museum, with actions, feelings and pain points at every touchpoint. Customer segments for two profiles. Four value proposition routes developed with AEIOU, service blueprints and scenarios: <em>Learn with Us · Created for You · Better Together · Inspire &amp; be Inspired.</em></p>'),
      { type: 'marquee', text: 'LLADRÓ x ' },
      one(img('c3a5c41f-b677-446c-b956-805e9eb7c9be/Imagen+9-9-21+a+las+12.10+%281%29-2.gif', 'Páginas sobre tendencias, Gen Z e inclusión cultural', 'Spreads about trends, Gen Z and cultural inclusion')),
      tx('<p>La creación y el desarrollo de esta estrategia partirán de dos puntos principales: el análisis de la situación/contexto actual de la marca y el estudio de las últimas tendencias globales. Tendencias que abarcarán diferentes temas específicos, hábitos de consumo, lujo, experiencias en tienda...</p><p>Todo ello con el objetivo principal de atraer a estas nuevas generaciones y formar con ellas una comunidad de Lladró. Una comunidad con compromiso, con movimiento.</p>',
         '<p>The strategy is built on two main pillars: an analysis of the brand’s current situation and context, and a study of the latest global trends, covering specific topics such as consumer habits, luxury and in-store experiences.</p><p>All with one main goal: to attract these new generations and build a Lladró community with them. A committed community, a community in motion.</p>'),
      one(img('068930be-6a9e-415c-94c2-1cb8bd441df3/ENTREGA_FINAL_TFG_Laura_S%C3%A1nchez+%28arrastrado%29+2_page-0001.jpg', 'Diagrama de burbujas con datos sobre lujo y nuevas generaciones', 'Bubble diagram with data on luxury and new generations')),
      one(img('3c6c2309-426a-4305-a24c-5e02542a3612/Captura+de+pantalla+2026-03-27+a+las+12.05.08.png', 'Matriz de desarrollo con las propuestas de valor', 'Development matrix with the value propositions')),
      { type: 'split', title: t('STRATEGY', 'STRATEGY'),
        html: t('<p>La materialización como tal consistirá en el presente documento, es decir, todos los ejercicios de actualización, investigación y herramientas de diseño de servicios, así como una propuesta de estrategia final en forma de matriz de desarrollo.</p><p><strong>Resultado:</strong> Estrategia de servicio completa con propuestas accionables para canal físico, digital y comunitario.</p>',
                '<p>The deliverable is this document: all the research, analysis and service design tools, together with a final strategy proposal in the form of a development matrix.</p><p><strong>Result:</strong> A complete service strategy with actionable proposals for physical, digital and community channels.</p>'),
        image: img('8da3b2cd-d2ee-4d2b-95dc-0e58ea3e5d5f/fondo+grande.jpg', 'Portada del documento de estrategia de Lladró', 'Cover of the Lladró strategy document') },
    ],
  },
};

export const ui = {
  back: t('Volver ←', 'Back ←'),
  viewProject: t('Ver proyecto →', 'View project →'),
  skip: t('Saltar al contenido', 'Skip to content'),
  menu: t('Menú', 'Menu'),
  prev: t('Anterior', 'Previous'),
  next: t('Siguiente', 'Next'),
  nextProject: t('Siguiente proyecto', 'Next project'),
};

/* ======================================================================
   AMPLIACIONES (nov 2026)
   ====================================================================== */
const local = (file, alt_es = '', alt_en = '') => ({ src: '/img/' + file, alt: { es: alt_es, en: alt_en || alt_es } });
const stats = (...items) => ({ type: 'stats', items });
const facts = (...items) => ({ type: 'facts', items });

/* ---------- Otros proyectos: descripción al pasar el ratón ---------- */
export const othersDesc = {
  'Inma Aguilera · Marca personal': t('Identidad personal para una profesional de la salud centrada en la prevención. Logotipo, tarjetas y papelería.', 'Personal identity for a health professional focused on prevention. Logo, cards and stationery.'),
  'Los soles de la noche · App': t('Interfaz para una app cultural, con ilustraciones propias de los edificios históricos de la ciudad.', 'Interface for a cultural app, with original illustrations of the city’s historic buildings.'),
  'Cultoría': t('Identidad y papelería en blanco y negro. Un sistema gráfico geométrico, sobrio y reconocible.', 'Black and white identity and stationery. A geometric, restrained and recognisable graphic system.'),
  'Festival Animahu': t('Cartel y piezas gráficas para la 16ª edición del festival de animación. Personajes, color y mucho ritmo.', 'Poster and graphic pieces for the 16th edition of the animation festival. Characters, colour and rhythm.'),
  'Myxes': t('Packaging con patrón de marca para las cajas de envío. La caja como primer contacto con el cliente.', 'Packaging with a brand pattern for shipping boxes. The box as the first touchpoint with the customer.'),
  'Carrera contra el cáncer': t('Cartel para la X Carrera contra el Cáncer de Huesca. Un mensaje directo: caminemos juntos.', 'Poster for the 10th Race Against Cancer in Huesca. A direct message: let’s walk together.'),
  'CAPAZO': t('Diseño editorial para una revista impresa, pensada para leerse con calma.', 'Editorial design for a print magazine, made to be read slowly.'),
  'TOUCH EVENT': t('Invitaciones y piezas impresas para un evento sobre experiencia de marca: diseñar para las personas, no para las marcas.', 'Invitations and printed pieces for a brand experience event: design for people, not for brands.'),
  'LEOPARD GAMES': t('Logotipo para un estudio de videojuegos. Retrato y leopardo resueltos en una sola silueta.', 'Logo for a video game studio. A portrait and a leopard resolved in a single silhouette.'),
  'Invitación de boda': t('Invitación ilustrada con acuarela floral, con sobre y papelería a juego.', 'Illustrated invitation with floral watercolour, with matching envelope and stationery.'),
  'Benditos Zarrios': t('Cartel e ilustraciones para un mercado de antigüedades con charlas, música y terraza.', 'Poster and illustrations for an antiques market with talks, music and a terrace.'),
  'Premio de Arquitectura': t('Diseño del trofeo para un premio de arquitectura: metacrilato de color con forma de 3.', 'Trophy design for an architecture award: coloured acrylic shaped like a 3.'),
  'Tonet': t('Concepto de producto: sillas de periódico reciclado enrollado sobre estructura metálica.', 'Product concept: chairs made of rolled recycled newspaper on a metal frame.'),
  'GXUATELINDA · Libro para madres': t('Ilustración y maquetación de un libro sobre nutrición durante el embarazo.', 'Illustration and layout for a book about nutrition during pregnancy.'),
  'Arquiforma': t('Identidad corporativa para una constructora: logotipo, tarjetas y aplicaciones.', 'Corporate identity for a construction company: logo, cards and applications.'),
};

/* ---------- Workshops: más contenido ---------- */
Object.assign(workshops, {
  intro: t(
    '<p>Un buen workshop no es una reunión larga con post-its. Es una sesión diseñada para que un equipo llegue a decisiones que no habría tomado por separado.</p><p>Preparo cada sesión a partir de los objetivos del proyecto: qué hay que decidir, quién tiene que estar y qué información falta. Después facilito, sintetizo y entrego un resultado accionable.</p>',
    '<p>A good workshop isn’t a long meeting with sticky notes. It’s a session designed so a team reaches decisions it wouldn’t have made separately.</p><p>I prepare every session around the project’s goals: what needs deciding, who needs to be in the room and what information is missing. Then I facilitate, synthesise and deliver an actionable result.</p>'),
  formatsTitle: t('Formatos', 'Formats'),
  formats: [
    { name: t('Kick-off estratégico', 'Strategic kick-off'), time: t('Medio día', 'Half day'),
      body: t('Para arrancar un proyecto con el equipo alineado: objetivos, usuarios, restricciones y criterios de éxito.', 'To start a project with an aligned team: goals, users, constraints and success criteria.'),
      tools: t('Stakeholder map · How Might We · Objetivos', 'Stakeholder map · How Might We · Goals') },
    { name: t('Posicionamiento de marca', 'Brand positioning'), time: t('1 día', '1 day'),
      body: t('Para definir quién es la marca, frente a quién compite y cómo quiere sonar. Ideal antes de un rediseño o un aniversario.', 'To define who the brand is, who it competes with and how it should sound. Ideal before a redesign or an anniversary.'),
      tools: t('Brand Positioning Map · Ejes de personalidad · Parrilla de palabras', 'Brand Positioning Map · Personality axes · Word grid') },
    { name: t('Sprint de experiencia', 'Experience sprint'), time: t('1 a 2 días', '1 to 2 days'),
      body: t('Para entender la experiencia actual de tus clientes y priorizar qué mejorar primero.', 'To understand your customers’ current experience and prioritise what to improve first.'),
      tools: t('User Journey Map · Value Proposition Canvas · Blueprint', 'User Journey Map · Value Proposition Canvas · Blueprint') },
  ],
  processTitle: t('Cómo trabajo', 'How I work'),
  process: [
    { name: t('Entender', 'Understand'), body: t('Entrevistas previas y revisión de lo que ya existe. Llego a la sesión sabiendo dónde están las tensiones.', 'Prior interviews and a review of what already exists. I arrive knowing where the tensions are.') },
    { name: t('Diseñar', 'Design'), body: t('Agenda, dinámicas y materiales hechos a medida, impresos o interactivos.', 'Tailored agenda, exercises and materials, printed or interactive.') },
    { name: t('Facilitar', 'Facilitate'), body: t('Conduzco la sesión para que hablen todas las voces y la conversación avance hacia decisiones.', 'I run the session so every voice is heard and the conversation moves towards decisions.') },
    { name: t('Sintetizar', 'Synthesise'), body: t('Ordeno lo que salió en insights, prioridades y próximos pasos que el equipo puede ejecutar.', 'I turn what came out into insights, priorities and next steps the team can act on.') },
  ],
  caseLabel: t('CASO', 'CASE'),
  caseTitle: t('Workshop de posicionamiento para una marca centenaria', 'Positioning workshop for a centenary brand'),
  caseBody: t(
    '<p>Una marca de alimentación con casi cien años de historia quería llegar a su centenario sabiendo qué decir y a quién. Diseñé un workshop de posicionamiento para extraer insights estratégicos con el equipo.</p><p>La sesión combinó una parrilla de palabras para acotar el territorio de marca, ejes de personalidad para situar a la marca frente a la competencia y materiales impresos e interactivos para trabajar en grupo.</p>',
    '<p>A food brand with almost a hundred years of history wanted to reach its centenary knowing what to say and to whom. I designed a positioning workshop to draw out strategic insights with the team.</p><p>The session combined a word grid to narrow the brand territory, personality axes to place the brand against its competitors, and printed and interactive materials for group work.</p>'),
  outcomesTitle: t('Qué te llevas', 'What you get'),
  outcomes: t(['Un mapa de insights ordenado', 'Prioridades acordadas por el equipo', 'Próximos pasos con responsables', 'Los materiales de la sesión, listos para reutilizar'],
              ['A clear map of insights', 'Priorities agreed by the team', 'Next steps with owners', 'The session materials, ready to reuse']),
  cta: t('¿Organizamos uno?', 'Shall we plan one?'),
});

/* ---------- Nuevo caso: The Host Edition ---------- */
routes.host = 'portfolio/the-host-edition';
portfolio.featured.unshift({
  page: 'host', name: t('THE HOST EDITION', 'THE HOST EDITION'), tags: t('ESTRATEGIA DIGITAL · UX · SEO · MARCA', 'DIGITAL STRATEGY · UX · SEO · BRAND'),
  image: local('host-producto.webp', 'Concepto de producto digital para The Host Edition', 'Digital product concept for The Host Edition'),
});
projects.host = {
  seo: { title: t('The Host Edition · Estrategia digital | Laura Sánchez', 'The Host Edition · Digital strategy | Laura Sánchez'),
         desc: t('Auditoría, optimización web, estrategia de visibilidad y marca para una consultora de alquiler vacacional y hoteles.', 'Audit, website optimisation, visibility strategy and brand for a holiday rental and hotel consultancy.') },
  title: 'THE HOST EDITION', tags: t('ESTRATEGIA DIGITAL · UX · SEO · MARCA', 'DIGITAL STRATEGY · UX · SEO · BRAND'),
  blocks: [
    facts([t('Cliente', 'Client'), t('The Host Edition, consultoría de alquiler vacacional y hoteles', 'The Host Edition, holiday rental and hotel consultancy')],
          [t('Año', 'Year'), t('2026', '2026')],
          [t('Rol', 'Role'), t('Auditoría, estrategia digital, UX, SEO y marca', 'Audit, digital strategy, UX, SEO and brand')]),
    lead('Una consultora con una web bonita que no estaba trabajando para ella. El reto: que la encuentren, que la entiendan y que puedan contactarla.',
         'A consultancy with a beautiful website that wasn’t working for it. The challenge: to be found, understood and easy to contact.'),
    tx('<p>Paula había lanzado The Host Edition sobre WordPress.com. Pedía cosas muy concretas: revisar la web, plantillas para redes, más visibilidad en Google y una web que cargara rápido.</p><p>Antes de diseñar nada, escuché todas las peticiones y las ordené en tres bloques, de lo urgente a lo ilusionante. Así cada decisión tenía un porqué y un orden.</p>',
       '<p>Paula had launched The Host Edition on WordPress.com. Her requests were very specific: review the website, social media templates, more visibility on Google and a site that loads fast.</p><p>Before designing anything, I listened to every request and organised them into three blocks, from the urgent to the aspirational. That way every decision had a reason and an order.</p>'),
    pair(local('host-pediste.webp', 'Lo que nos pediste: lista de necesidades del cliente', 'What you asked for: list of client needs'),
         local('host-organizado.webp', 'Cómo lo hemos organizado: tres bloques de trabajo', 'How we organised it: three work blocks')),
    big('<strong>Primero medir, después mover.</strong>', '<strong>Measure first, then move.</strong>'),
    tx('<p>Hice una auditoría con datos reales: rendimiento con Google PageSpeed Insights en las 7 páginas principales, SEO técnico, recorrido de contacto y marco legal.</p><p>Aparecieron problemas que no se ven a simple vista: el email del pie de página no funcionaba, el botón de Hoteles llevaba a una foto suelta y el formulario rechazaba apellidos normales porque pedía una @. Quien quería contactar se quedaba por el camino.</p>',
       '<p>I ran an audit with real data: performance with Google PageSpeed Insights across the 7 main pages, technical SEO, the contact journey and the legal framework.</p><p>Problems surfaced that you can’t see at first glance: the footer email didn’t work, the Hotels button opened a loose photo and the form rejected ordinary surnames because it required an @. Anyone who wanted to get in touch got lost along the way.</p>'),
    pair(local('host-rep-errores.webp', 'Tres errores que impedían contactar, corregidos', 'Three errors that blocked contact, fixed'),
         local('host-rep-homepage.webp', 'Homepage antes y después', 'Homepage before and after')),
    stats([t('89 → 97', '89 → 97'), t('Rendimiento medio en ordenador, sobre 100', 'Average desktop performance, out of 100')],
          [t('−92 %', '−92%'), t('Peso por imagen: de 2,5 MB a 200 KB', 'Weight per image: from 2.5 MB to 200 KB')],
          [t('0 → 7', '0 → 7'), t('Páginas con datos estructurados para Google', 'Pages with structured data for Google')],
          [t('100', '100'), t('SEO técnico mantenido en las 7 páginas', 'Technical SEO kept across all 7 pages')]),
    { ...one(local('host-rep-desktop.webp', 'Gráfica de rendimiento en ordenador, antes y después', 'Desktop performance chart, before and after')), narrow: true },
    tx('<p>Además, reordené el menú para que cada servicio estuviera junto a su tarifa, publiqué las páginas legales y el banner de cookies que exige la ley, reparé el sitemap en Search Console y di de alta el perfil de empresa en Google.</p>',
       '<p>I also reordered the menu so each service sits next to its pricing, published the legally required pages and cookie banner, fixed the sitemap in Search Console and set up the Google Business profile.</p>'),
    big('<strong>De invisible a primera opción.</strong>', '<strong>From invisible to first choice.</strong>'),
    tx('<p>La segunda fase fue la estrategia de visibilidad: SEO para España, blog local, presencia en Google Business y GEO, es decir, que asistentes como ChatGPT la recomienden cuando alguien pregunta por una consultora como la suya.</p><p>También dejé claras las expectativas: el posicionamiento es una carrera de fondo, con hitos realistas al mes 1, al 3 y al 6.</p>',
       '<p>The second phase was the visibility strategy: SEO for Spain, a local blog, Google Business presence and GEO, so that assistants like ChatGPT recommend her when someone asks for a consultancy like hers.</p><p>I also set clear expectations: search visibility is a long game, with realistic milestones at months 1, 3 and 6.</p>'),
    pair(local('host-invisible.webp', 'Pasar de invisible a primera opción en Google', 'From invisible to first choice on Google'),
         local('host-ia.webp', 'Que te recomienden también las herramientas de IA', 'Being recommended by AI tools too')),
    one(local('host-carrera.webp', 'La visibilidad es una carrera de fondo: hitos por meses', 'Visibility is a long game: milestones by month')),
    big('<strong>Una marca tan cuidada como lo que ofrece.</strong>', '<strong>A brand as polished as what it offers.</strong>'),
    { ...one(local('host-logo-explora.webp', 'Exploración del logotipo de The Host Edition', 'The Host Edition logo exploration')), narrow: true },
    grid(local('host-insta-37.webp', 'Plantilla de Instagram de The Host Edition', 'The Host Edition Instagram template'),
         local('host-insta-38.webp', 'Plantilla de Instagram con el lema', 'Instagram template with the tagline'),
         local('host-insta-40.webp', 'Plantilla de Instagram en dorado', 'Gold Instagram template')),
    pair(local('host-instagram.webp', 'Así se verá el perfil de Instagram', 'How the Instagram profile will look'),
         local('host-captar.webp', 'Guía regalo para captar clientes', 'Lead magnet guide to attract clients')),
    big('<strong>Hacia dónde puede ir.</strong>', '<strong>Where it could go.</strong>'),
    tx('<p>La última parte de la propuesta miraba más lejos: convertir el método de Paula en producto. Diseñé el concepto de una herramienta que genera un informe de experiencia para cada alojamiento, con una puntuación y recomendaciones accionables, y dos caminos para llevarlo a negocio.</p><p>También planteé un modelo de colaboración: Paula detecta clientes que necesitan mejorar su web, el estudio se encarga del proyecto y ella gana una comisión por cada uno.</p>',
       '<p>The last part of the proposal looked further ahead: turning Paula’s method into a product. I designed the concept for a tool that generates an experience report for each property, with a score and actionable recommendations, plus two routes to turn it into a business.</p><p>I also proposed a partnership model: Paula spots clients who need a better website, the studio builds it and she earns a commission on each one.</p>'),
    one(local('host-producto.webp', 'Concepto de producto: informe de experiencia para alojamientos', 'Product concept: experience report for properties')),
    pair(local('host-camino1.webp', 'Camino 1: la herramienta como servicio', 'Route 1: the tool as a service'),
         local('host-servicio.webp', 'Modelo de colaboración para derivar clientes', 'Partnership model to refer clients')),
    tx('<p><strong>Resultado:</strong> una web más rápida, en regla y con el contacto funcionando, una marca con sistema para redes y una hoja de ruta en tres fases para crecer.</p>',
       '<p><strong>Result:</strong> a faster, compliant website with a working contact journey, a brand with a social media system and a three-phase roadmap for growth.</p>'),
  ],
};

/* ---------- Legal ---------- */
site.nif = ''; // Rellena tu NIF si quieres que aparezca en el aviso legal (LSSI-CE lo pide si ofreces servicios)
routes.privacy = 'privacidad';
routes.legal = 'aviso-legal';
site.legalLinks = [
  { key: 'legal', label: t('Aviso legal', 'Legal notice') },
  { key: 'privacy', label: t('Privacidad', 'Privacy') },
];
contact.form.consent = t('He leído y acepto la <a href="{privacy}">política de privacidad</a>.', 'I have read and accept the <a href="{privacy}">privacy policy</a>.');
contact.form.info = t('Responsable: Laura Sánchez Pardo. Finalidad: responder a tu mensaje. Puedes ejercer tus derechos escribiendo a {email}.',
                      'Controller: Laura Sánchez Pardo. Purpose: replying to your message. You can exercise your rights by writing to {email}.');

export const legal = {
  privacy: {
    seo: { title: t('Política de privacidad | Laura Sánchez', 'Privacy policy | Laura Sánchez'), desc: t('Cómo se tratan los datos personales en esta web.', 'How personal data is handled on this website.') },
    title: t('Política de privacidad', 'Privacy policy'),
    updated: t('Última actualización: noviembre de 2026', 'Last updated: November 2026'),
    body: t(`
<h2>Responsable del tratamiento</h2>
<p>Laura Sánchez Pardo · Madrid, España · <a href="mailto:{email}">{email}</a></p>
<h2>Qué datos se recogen y para qué</h2>
<p>Solo se recogen los datos que escribes en el formulario de contacto (nombre, apellido, email y mensaje) con una única finalidad: responder a tu consulta. No se usan para enviar publicidad ni se ceden a terceros con fines comerciales.</p>
<h2>Base legal</h2>
<p>Tu consentimiento, que das al marcar la casilla antes de enviar el formulario. Puedes retirarlo en cualquier momento.</p>
<h2>Cuánto tiempo se conservan</h2>
<p>El tiempo necesario para atender tu consulta y, como máximo, un año desde el último contacto, salvo que exista una relación profesional que obligue a conservarlos más tiempo.</p>
<h2>Proveedores</h2>
<p>La web está alojada en Vercel Inc. y el formulario se envía a través de FormSubmit. Ambos proveedores pueden tratar datos fuera del Espacio Económico Europeo con las garantías previstas en el RGPD, como las cláusulas contractuales tipo de la Comisión Europea.</p>
<h2>Cookies y analítica</h2>
<p>Esta web no instala cookies propias ni de terceros. Para conocer el número de visitas se usa Vercel Web Analytics, que no utiliza cookies y solo recoge datos agregados y anónimos. Por eso no ves ningún banner de cookies.</p>
<h2>Tus derechos</h2>
<p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a <a href="mailto:{email}">{email}</a>. Si consideras que no se han atendido correctamente, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).</p>`, `
<h2>Data controller</h2>
<p>Laura Sánchez Pardo · Madrid, Spain · <a href="mailto:{email}">{email}</a></p>
<h2>What data is collected and why</h2>
<p>Only the data you enter in the contact form (first name, last name, email and message) is collected, for one purpose: replying to your enquiry. It is not used for advertising or shared with third parties for commercial purposes.</p>
<h2>Legal basis</h2>
<p>Your consent, which you give by ticking the box before sending the form. You can withdraw it at any time.</p>
<h2>How long it is kept</h2>
<p>For as long as needed to deal with your enquiry and, at most, one year from the last contact, unless a professional relationship requires keeping it longer.</p>
<h2>Providers</h2>
<p>The website is hosted by Vercel Inc. and the form is sent through FormSubmit. Both providers may process data outside the European Economic Area under the safeguards set out in the GDPR, such as the European Commission’s standard contractual clauses.</p>
<h2>Cookies and analytics</h2>
<p>This website does not set its own or third-party cookies. Visits are counted with Vercel Web Analytics, which uses no cookies and only collects aggregated, anonymous data. That is why there is no cookie banner.</p>
<h2>Your rights</h2>
<p>You can exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to <a href="mailto:{email}">{email}</a>. If you feel they have not been properly handled, you can file a complaint with the Spanish Data Protection Agency (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).</p>`),
  },
  legal: {
    seo: { title: t('Aviso legal | Laura Sánchez', 'Legal notice | Laura Sánchez'), desc: t('Datos del titular y condiciones de uso de esta web.', 'Owner details and terms of use of this website.') },
    title: t('Aviso legal', 'Legal notice'),
    updated: t('Última actualización: noviembre de 2026', 'Last updated: November 2026'),
    body: t(`
<h2>Titular</h2>
<p>En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI-CE): esta web pertenece a Laura Sánchez Pardo{nif}, con domicilio profesional en Madrid, España. Contacto: <a href="mailto:{email}">{email}</a>.</p>
<h2>Uso de la web</h2>
<p>Esta web es un portfolio profesional. Quien la visita se compromete a hacer un uso adecuado de sus contenidos.</p>
<h2>Propiedad intelectual</h2>
<p>Los textos, diseños e imágenes de esta web son obra de Laura Sánchez Pardo o se muestran con permiso de sus clientes. Las marcas que aparecen en los proyectos pertenecen a sus titulares. No se permite reproducir el contenido sin autorización.</p>
<h2>Enlaces</h2>
<p>Los enlaces a otras webs se ofrecen como referencia. No hay responsabilidad sobre su contenido.</p>
<h2>Ley aplicable</h2>
<p>Este aviso se rige por la legislación española.</p>`, `
<h2>Owner</h2>
<p>In accordance with Spanish Law 34/2002 on Information Society Services (LSSI-CE): this website belongs to Laura Sánchez Pardo{nif}, with professional address in Madrid, Spain. Contact: <a href="mailto:{email}">{email}</a>.</p>
<h2>Use of the website</h2>
<p>This website is a professional portfolio. Visitors agree to make appropriate use of its content.</p>
<h2>Intellectual property</h2>
<p>The texts, designs and images on this website are the work of Laura Sánchez Pardo or are shown with her clients’ permission. Brands shown in the projects belong to their owners. Reproduction without permission is not allowed.</p>
<h2>Links</h2>
<p>Links to other websites are provided for reference only. No responsibility is accepted for their content.</p>
<h2>Governing law</h2>
<p>This notice is governed by Spanish law.</p>`),
  },
};
