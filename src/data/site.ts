// =====================================================================
//  CONTENIDO DEL SITIO — RESOLUCIÓN
//  Todo lo que se ve en la página se edita desde este archivo.
//  Cambiá solo lo que está entre comillas '...' y guardá.
//  (No borres las comas ni las llaves { } del final de cada línea.)
// =====================================================================

export const site = {
  // --- Marca y datos generales --------------------------------------
  marca: 'RESOLUCIÓN',
  nombre: 'Juana Andrada',
  ubicacion: 'Tigre, Buenos Aires, Argentina',
  subtituloMarca: 'Fotografía + Audiovisual',
  tagline: 'The world is shaped by the way we see it.',
  subtitulo: 'Fotografía, cine y dirección audiovisual',

  // Dirección web definitiva del sitio (sin barra al final).
  // Cambiala cuando tengas el dominio propio, ej: 'https://resolucion.com.ar'
  url: 'https://resolucion-web.vercel.app',

  // --- SEO: lo que aparece en Google y al compartir el link ----------
  seo: {
    titulo: 'RESOLUCIÓN — Juana Andrada · Fotografía + Audiovisual',
    descripcion:
      'Juana Andrada, fotógrafa y filmmaker de Tigre, Buenos Aires. Fotografía de moda, eventos, corporativa, recitales y documental. Video y dirección audiovisual. Pedí tu cotización.',
  },

  // --- Fotos especiales (están en la carpeta fotos/sitio/) -----------
  imagenes: {
    portada: 'sitio/juana.jpg', // foto tenue del fondo de la portada
    quienSoy: 'sitio/juana.jpg', // retrato de "Quién soy"
    compartir: 'sitio/juana.jpg', // la que se ve al compartir el link por WhatsApp/Instagram
    frase: 'sitio/mar.jpg', // foto de fondo de la frase (vacío o si no existe = fondo azul liso)
    video: 'sitio/portada-video.jpg', // carátula del título "Video" (si no existe = fondo liso)
  },

  // --- Quién soy -----------------------------------------------------
  quienSoy: {
    titulo: 'Soy Juana Andrada.',
    parrafos: [
      'Fotógrafa y filmmaker de Tigre, Buenos Aires.',
      'Actualmente estudio Producción y Dirección Audiovisual. A través de RESOLUCIÓN desarrollo imágenes y narrativas audiovisuales para artistas, marcas, emprendimientos y proyectos culturales.',
    ],
    // Esta frase va en itálica:
    cierre: 'Mi trabajo combina una mirada documental, editorial y cinematográfica.',
  },

  // --- Categorías de trabajos ---------------------------------------
  // "carpeta" es el nombre de la carpeta dentro de fotos/ y también el
  // link directo a la sección (ej: tusitio.com/#moda).
  // El orden de esta lista es el orden en que aparecen en la página.
  categorias: [
    { carpeta: 'moda', titulo: 'Moda', bajada: 'Editorial y campañas.' },
    { carpeta: 'eventos', titulo: 'Eventos', bajada: 'Coberturas y experiencias.' },
    { carpeta: 'corporativo', titulo: 'Corporativo', bajada: 'Marcas y contenido institucional.' },
    { carpeta: 'recitales', titulo: 'Recitales', bajada: 'Shows y música en vivo.' },
    { carpeta: 'documental', titulo: 'Documental', bajada: 'Historias y proyectos personales.' },
  ],

  // Descripciones de fotos puntuales (opcional, ayuda a Google y a
  // personas ciegas). Formato: 'carpeta/archivo.jpg': 'descripción'.
  // Si una foto no está acá, se usa el nombre del archivo o la categoría.
  descripcionesFotos: {
    'corporativo/02-ponchos-artesanales.jpg':
      'Tres ponchos artesanales de lana en rojo, naranja y crudo colgados en percheros de madera',
    'corporativo/03-helado-arnaldo.jpg': 'Dos manos se pasan un vaso de helado de pistacho de la heladería Arnaldo',
    'moda/02-modelo-sentada-en-tranquera.jpg':
      'Modelo de pelo largo y rizado con vestido claro y cinturón de cuero, sentada en una tranquera de campo',
    'moda/03-modelo-con-botas-de-montar.jpg':
      'Modelo con conjunto celeste y beige y botas de montar de cuero, sentada frente a un campo de polo',
    'corporativo/04-morral-talabarteria-la-rodada.jpg':
      'Morral de cuero marrón con escudo de metal y etiqueta de Talabartería La Rodada, junto a un mate',
    'moda/01-modelo-junto-al-alambrado.jpg':
      'Modelo de pelo largo con vestido claro y trenzas celestes, apoyada en un poste junto a un alambrado de campo',
    'documental/01-lectura-y-mate-al-sol.jpg':
      'Mujer con gorra lee sentada en el pasto con un mate, rodeada de mantas de lana bajo el sol',
    'documental/02-terneros.jpg': 'Dos terneros con caravanas miran a cámara, en blanco y negro',
    'eventos/portada.webp': 'Intercambio de anillos en una ceremonia al aire libre',
    'corporativo/portada.webp':
      'Collage de trabajos corporativos: producto, envíos, una oradora con micrófono, un evento de marca y un equipo trabajando',
    'recitales/portada.webp': 'Cantante en blanco y negro canta con el micrófono bajo las luces del escenario',
    'documental/portada.webp':
      'Collage documental: paisajes del sur, kitesurf, retratos en familia, un mate, una peregrinación y una chica tocando la guitarra',
    'moda/portada.webp':
      'Dos modelos con prendas en tonos tierra y celeste posan en un campo abierto bajo el cielo azul',
    'corporativo/01-equipo-con-notebook-y-mate.jpg':
      'Tres jóvenes miran una notebook en estudio, uno de ellos con un mate',
    'eventos/01-casamiento-campo.jpg':
      'Novia con corona de flores y velo camina del brazo de un hombre con boina y pañuelo rojo en un casamiento de campo',
    'recitales/01-cantante-con-guitarra.jpg':
      'Cantante sonríe frente al micrófono mientras toca la guitarra acústica en un show nocturno',
    'recitales/02-baterista-en-vivo.jpg':
      'Baterista con anteojos de sol toca en vivo bajo luces azules y naranjas',
    'eventos/02-manos-casamiento.jpg':
      'Manos entrelazadas en blanco y negro durante un casamiento, junto a un ramo de flores',
  } as Record<string, string>,

  // --- Video ---------------------------------------------------------
  video: {
    titulo: 'Video',
    bajada: 'Filmmaking y dirección audiovisual.',
    // Pegá acá los links de YouTube o Vimeo. Ejemplo:
    // { url: 'https://www.youtube.com/watch?v=XXXXXXXXXXX', titulo: 'Videoclip — Artista', descripcion: 'Dirección y cámara.' },
    // Si un video de Vimeo no muestra miniatura, agregá miniatura: 'link-a-una-imagen.jpg'.
    lista: [] as { url: string; titulo: string; descripcion?: string; miniatura?: string }[],
  },

  // --- Formulario de cotización -------------------------------------
  cotizacion: {
    titulo: 'Cotizá tu proyecto',
    bajada: 'Contame qué tenés en mente y te respondo por WhatsApp.',
    tiposDeTrabajo: ['Moda', 'Eventos', 'Corporativo', 'Recitales', 'Documental', 'Video', 'Otro'],
  },

  // --- Contacto ------------------------------------------------------
  contacto: {
    email: 'resolucion2005@gmail.com',
    // Número de WhatsApp: solo números, con 549 + código de área, sin 0 ni 15.
    whatsapp: '5491138489276',
    whatsappVisible: '+54 9 11 3848-9276',
    instagram: ['juanaa__andrada', 'resolucion_'],
    tiktok: ['juanaandrada'],
  },

  footer: '© 2026 RESOLUCIÓN — Juana Andrada',
};
