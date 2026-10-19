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
  tagline: 'El mundo cambia según cómo lo mirás.',
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
    portada: 'sitio/juana.jpg', // fondo de la portada solo si la lista de arriba queda vacía
    quienSoy: 'sitio/juana.jpg', // retrato de "Quién soy"
    compartir: 'sitio/juana.jpg', // la que se ve al compartir el link por WhatsApp/Instagram
    frase: 'sitio/mar.jpg', // foto de fondo de la frase (vacío o si no existe = fondo azul liso)
    video: 'sitio/mar.jpg', // carátula del título "Video" (si no existe = fondo liso)
  },

  // --- Portada: fotos que se van pasando solas ------------------------
  // Ruta dentro de fotos/. Las que no están en ninguna categoría van en fotos/sitio/portada/. "encuadre" (opcional) elige qué parte se ve si la
  // pantalla recorta la foto: '50% 0%' arriba, '50% 50%' centro, '50% 100%' abajo.
  portada: {
    fotos: [
      { foto: 'sitio/portada/01-jeep-en-la-quebrada.jpg', encuadre: '60% 70%' },
      { foto: 'sitio/portada/02-modelo-entre-movimiento.jpg', encuadre: '52% 40%' },
      { foto: 'sitio/portada/03-llamas.jpg', encuadre: '15% 55%' },
      { foto: 'sitio/portada/04-canon-rojo.jpg', encuadre: '55% 55%' },
      { foto: 'sitio/portada/05-aeropuerto-nevado.jpg', encuadre: '30% 60%' },
    ] as { foto: string; encuadre?: string }[],
  },

  // --- Quién soy -----------------------------------------------------
  quienSoy: {
    titulo: 'Soy Juana Andrada.',
    parrafos: [
      'Fotógrafa y filmmaker de Tigre, Buenos Aires.',
      'Licenciada en Producción y Dirección de Contenidos Audiovisuales. A través de RESOLUCIÓN desarrollo imágenes y narrativas audiovisuales para artistas, marcas, emprendimientos y proyectos culturales.',
    ],
    // Esta frase va en itálica:
    cierre: 'Mi trabajo combina una mirada documental, editorial y cinematográfica.',
    // Video corto que pasa solo, sin sonido, debajo del texto (en public/media/).
    video: '', // vacío = sin video
  },

  // --- Categorías de trabajos ---------------------------------------
  // "carpeta" es el nombre de la carpeta dentro de fotos/ y también el
  // link directo a la sección (ej: tusitio.com/#moda).
  // El orden de esta lista es el orden en que aparecen en la página.
  // "encuadre" (opcional) elige qué parte de la carátula se ve cuando la
  // pantalla la recorta: '50% 0%' = arriba, '50% 50%' = centro, '50% 100%' = abajo.
  // "triptico" suma dos fotos más a la carátula, lado a lado (en computadora).
  categorias: [
    { carpeta: 'moda', titulo: 'Moda', bajada: 'Editorial y campañas.', encuadre: '60% 35%' },
    { carpeta: 'eventos', titulo: 'Eventos', bajada: 'Coberturas y experiencias.', encuadre: '50% 65%' },
    { carpeta: 'marcas', titulo: 'Marcas', bajada: 'Producto, campañas y contenido para redes.', encuadre: '50% 45%', triptico: ['marcas/02-ponchos-artesanales.jpg', 'marcas/03-mate-junto-al-fuego.jpg'] },
    { carpeta: 'recitales', titulo: 'Recitales', bajada: 'Shows y música en vivo.', encuadre: '50% 35%', triptico: ['recitales/02-cantante-con-el-brazo-en-alto.jpg', 'recitales/03-cantante-bajo-luz-roja.jpg'] },
    { carpeta: 'documental', titulo: 'Documental', bajada: 'Historias, viajes y proyectos personales.', encuadre: '20% 55%' },
  ],

  // Descripciones de fotos puntuales (opcional, ayuda a Google y a
  // personas ciegas). Formato: 'carpeta/archivo.jpg': 'descripción'.
  // Si una foto no está acá, se usa el nombre del archivo o la categoría.
  descripcionesFotos: {
    'recitales/02-cantante-con-el-brazo-en-alto.jpg': 'Cantante con el brazo en alto canta a contraluz, en blanco y negro',
    'recitales/06-cantante-entre-luces.jpg': 'Cantante con remera roja canta con el micrófono entre rayos de luz azul',
    'eventos/04-casa-silber-encuentro.jpg': 'Collage de un encuentro de Silber Legal: invitados conversan y se abrazan en un patio',
    'eventos/10-casa-silber-patio.jpg': 'Invitados conversan en el patio durante un evento de Silber Legal',
    'eventos/16-casa-silber-charlas.jpg': 'Patio lleno de invitados y panel de charlas en Casa Silber',
    // Moda
    'moda/portada.jpg': 'Dos modelos con prendas en tonos tierra y celeste posan en un campo abierto bajo el cielo azul',
    'moda/01-modelo-entre-movimiento.jpg': 'Modelo con vestido naranja mira a cámara mientras dos figuras pasan desenfocadas por delante',
    'moda/02-modelo-en-el-muelle.jpg': 'Modelo con chaleco tejido y bolso de cuero de pie en un muelle a contraluz',
    'moda/03-modelo-con-botas-de-montar.jpg': 'Modelo con conjunto celeste y beige y botas de montar, sentada frente a un campo de polo',
    'moda/09-vestidos-en-el-campo.jpg': 'Dos modelos con vestidos estampados de cola larga caminan por el pasto',
    'moda/04-modelo-con-sombrero.jpg': 'Modelo con sombrero de paja y blusa clara apoyada en un poste de madera',
    'moda/07-modelo-junto-al-alambrado.jpg': 'Modelo de pelo largo con vestido claro apoyada en un poste junto a un alambrado',
    'moda/05-modelo-recostada-en-el-pasto.jpg': 'Modelo con prendas bordó y blancas recostada en el pasto entre flores',
    'moda/08-dos-modelos-en-la-piedra.jpg': 'Dos modelos con chalecos de cuero conversan frente a un arco de piedra',
    'moda/06-anillo-dorado.jpg': 'Mano con un anillo dorado texturado apoyada sobre un suéter tejido',
    'moda/11-modelo-en-el-muelle-blanco-y-negro.jpg': 'Modelo agachada en un muelle junto al agua, en blanco y negro',
    'moda/12-anillos-y-camisa.jpg': 'Manos con anillos dorados, uno con forma de estrella, sobre una camisa blanca',
    'moda/10-retrato-sonriendo.jpg': 'Retrato de una joven sonriente con blusa clara y pañuelo, entre plantas',
    // Eventos
    'eventos/portada.jpg': 'Los novios de pie frente al altar de una iglesia, con los invitados a ambos lados de la alfombra roja',
    'eventos/01-novios-al-atardecer.jpg': 'Los novios caminan de la mano por un jardín al atardecer',
    'eventos/06-novia-entrando-a-la-iglesia.jpg': 'La novia, con capa de encaje, entra del brazo de un hombre de jaquet frente a una gran puerta de madera',
    'eventos/13-novia-con-amigas.jpg': 'La novia ríe abrazada con cuatro mujeres de vestidos de fiesta frente a un cerco verde',
    'eventos/02-fiesta-grupo.jpg': 'Grupo de amigos festeja abrazado en la pista de baile bajo luces de colores',
    'eventos/03-casamiento-de-campo.jpg': 'Novia con corona de flores y velo camina del brazo de un hombre con boina y pañuelo rojo',
    'eventos/11-novia-con-corona-de-flores.jpg': 'Novia con corona de flores sonríe frente a un hombre con boina, en blanco y negro',
    'eventos/07-baile-en-la-pista.jpg': 'Invitada baila con los brazos en alto en una fiesta con luces violetas',
    'eventos/08-novios-entrando-al-jardin.jpg': 'Novios sonrientes entran del brazo a un jardín, ella con ramo de flores blancas',
    'eventos/15-abrazo-de-los-novios.jpg': 'La novia se ríe emocionada mientras abraza al novio en el jardín',
    'eventos/09-amigas-riendo.jpg': 'Tres amigas ríen y conversan en una fiesta al aire libre',
    'eventos/14-fiesta-blanco-y-negro.jpg': 'Pareja bailando entre invitados con sombreros de cotillón, en blanco y negro',
    'eventos/19-abrazo-entre-amigos.jpg': 'Dos amigos se abrazan en un jardín durante un evento',
    'eventos/05-saludo-en-la-feria.jpg': 'Mujer con bufanda de colores saluda tomando las manos de alguien en una feria al aire libre',
    'eventos/18-publico-al-aire-libre.jpg': 'Público sentado en un parque durante un evento al aire libre',
    'eventos/12-procesion.jpg': 'Multitud caminando por una calle de tierra durante una procesión',
    'eventos/17-encuentro-y-charla.jpg': 'Dos mujeres conversan y ríen en un encuentro con carteles de fondo',
    'eventos/20-pareja-bailando.jpg': 'Pareja bailando abrazada en la penumbra de una fiesta',
    // Marcas
    'marcas/portada.jpg': 'Morral de cuero marrón con escudo de metal y etiqueta de Talabartería La Rodada, junto a un mate',
    'marcas/01-mate-con-escudo.jpg': 'Mate de calabaza con el escudo argentino grabado y funda de cuero',
    'marcas/02-ponchos-artesanales.jpg': 'Tres ponchos artesanales de lana en rojo, naranja y crudo colgados en percheros de madera',
    'marcas/03-mate-junto-al-fuego.jpg': 'Mate de calabaza con bombilla de plata y yerba, con el fuego de fondo',
    'marcas/04-boss.jpg': 'Hombre con remera blanca se saca una selfie frente a un cartel de BOSS, en blanco y negro',
    'marcas/05-mate-y-cuero.jpg': 'Mate de calabaza junto a un estuche de cuero con logo grabado',
    'marcas/06-helado-arnaldo.jpg': 'Dos manos se pasan un vaso de helado de pistacho de la heladería Arnaldo',
    'marcas/07-billeteras-de-cuero.jpg': 'Dos billeteras de cuero, una clara y otra bordó, sobre una mesa de madera',
    'marcas/08-retrato-en-estudio.jpg': 'Hombre sonriente sentado en una silla de madera en un estudio de fondo blanco',
    // Recitales
    'recitales/portada.jpg': 'Cantante con anteojos de sol y corbata roja canta mientras toca un teclado rojo',
    'recitales/01-guitarrista-con-anteojos.jpg': 'Guitarrista con anteojos de sol y camisa clara toca una guitarra eléctrica en vivo',
    'recitales/03-cantante-bajo-luz-roja.jpg': 'Cantante con los ojos cerrados aferrada al micrófono bajo una luz roja',
    'recitales/04-saxo-entre-el-publico.jpg': 'Saxofonista toca en medio del público que levanta las manos, en blanco y negro',
    'recitales/05-baterista-sonriendo.jpg': 'Baterista con anteojos de sol sonríe con los palillos en alto',
    'recitales/07-cantante-con-sombrero.jpg': 'Cantante con sombrero y barba canta frente al micrófono con su guitarra, en blanco y negro',
    'recitales/08-publico-en-la-escalera.jpg': 'Público sentado en una escalera filma y mira el show desde arriba',
    'recitales/09-manos-en-el-piano.jpg': 'Manos sobre las teclas de un piano, en blanco y negro',
    // Documental
    'documental/portada.jpg': 'Un grupo de llamas blancas mira a cámara en un campo verde con montañas de fondo',
    'documental/01-jeep-en-la-quebrada.jpg': 'Un jeep estacionado junto a un arroyo y un joven caminando, con montañas y nubes de fondo',
    'documental/02-canon-rojo.jpg': 'Joven con los brazos en alto en lo alto de un cañón de tierra roja',
    'documental/03-manos-en-el-telar.jpg': 'Manos trabajando en un telar artesanal, en blanco y negro',
    'documental/04-nena-con-cactus.jpg': 'Nena saca la lengua junto a un cactus bajo el cielo azul',
    'documental/05-nino-con-la-camiseta-argentina.jpg': 'Niño con la camiseta de la selección argentina mira hacia abajo',
    'documental/06-terneros.jpg': 'Dos terneros con caravanas miran a cámara, en blanco y negro',
    'documental/07-cardon.jpg': 'Cardón alto frente a un pueblo de montaña entre la niebla',
    'documental/08-avion-en-la-pista.jpg': 'Operario con chaleco naranja junto a un avión de Aerolíneas Argentinas en la pista',
    'documental/10-aeropuerto-nevado.jpg': 'Aeropuerto con aviones y montañas nevadas al amanecer',
    'documental/11-caballo.jpg': 'Primer plano del hocico de un caballo marrón con una mancha blanca',
    'documental/12-ternero.jpg': 'Ternero colorado con caravana mira de frente a la cámara',
    'documental/13-amigas-en-la-selva.jpg': 'Dos amigas sonríen entre la vegetación de un sendero junto al mar',
    'documental/14-amigas-frente-al-mar.jpg': 'Dos amigas abrazadas sentadas frente al mar',
  } as Record<string, string>,

  // --- Video ---------------------------------------------------------
  video: {
    titulo: 'Video',
    bajada: 'Filmmaking y dirección audiovisual.',
    // Videos propios: se suben a la carpeta public/videos (.mp4) y aparecen solos,
    // en orden alfabético. Una imagen .jpg con el mismo nombre es su portada.
    // Por defecto no llevan título. Si querés agregar título o descripción a uno:
    // '01-sesion-de-moda-en-el-campo.mp4': { titulo: 'Campaña', descripcion: 'Dirección y cámara.' },
    // "destacado" muestra una etiqueta chica arriba del video.
    archivos: {} as Record<string, { titulo?: string; descripcion?: string; destacado?: string }>,
    // Videos de YouTube o Vimeo:
    // Pegá acá los links de YouTube o Vimeo. Ejemplo:
    // { url: 'https://www.youtube.com/watch?v=XXXXXXXXXXX', titulo: 'Videoclip — Artista', descripcion: 'Dirección y cámara.' },
    // Si un video de Vimeo no muestra miniatura, agregá miniatura: 'link-a-una-imagen.jpg'.
    lista: [] as { url: string; titulo: string; descripcion?: string; miniatura?: string }[],
  },

  // --- Lo que me mueve (antes de "Trabajemos juntos") -----------------
  // Las fotos están en fotos/sitio/contacto/.
  esencia: {
    label: 'Lo que me mueve',
    titulo: 'Viajar, mirar, conversar.',
    parrafos: [
      'Me encanta viajar, conocer lugares nuevos y estar en contacto con la naturaleza.',
      'Disfruto conocer gente y charlar: cada historia empieza con una conversación. Eso es lo que busco llevar a cada proyecto.',
    ],
    fotos: [
      { foto: 'sitio/contacto/01-juana-en-la-ruta.jpg', alt: 'Juana asomada por la ventanilla de una camioneta en la ruta, con su cámara' },
      { foto: 'sitio/contacto/02-juana-en-el-campo.jpg', alt: 'Juana con los brazos abiertos en un campo de flores amarillas' },
      { foto: 'sitio/contacto/03-juana-con-la-camara.jpg', alt: 'Juana fotografiándose en un reflejo con su cámara' },
    ],
  },

  // --- Formulario de cotización -------------------------------------
  cotizacion: {
    titulo: 'Cotizá tu proyecto',
    bajada: 'Contame qué tenés en mente y te respondo por WhatsApp.',
    tiposDeTrabajo: ['Moda', 'Eventos', 'Marcas', 'Recitales', 'Documental', 'Video', 'Otro'],
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
