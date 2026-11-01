/**
 * ============================================================================
 * DOMINIO CYCLING CLUB — DATOS EDITABLES
 * ============================================================================
 * Este archivo centraliza TODA la información que cambia con el tiempo:
 * contacto, horarios, instructores, instalaciones, galería y redes sociales.
 *
 * Para actualizar el sitio solo necesitas editar los valores de aquí abajo.
 * No es necesario tocar index.html, style.css ni main.js.
 *
 * Reglas importantes:
 * - Deja "" (comillas vacías) en cualquier dato que todavía no tengas.
 *   Los elementos sin información se ocultan automáticamente en la página.
 * - El botón flotante de WhatsApp solo aparece si "whatsapp" tiene un valor.
 * - Para usar una fotografía real en vez del diseño de marcador de posición,
 *   coloca el archivo dentro de la carpeta /img/ y escribe su ruta en el
 *   campo "photo" correspondiente (ejemplo: "img/galeria/sesion-1.jpg").
 * ============================================================================
 */
window.DOMINIO_DATA = {

  /* ---- Identidad básica ------------------------------------------------ */
  brand: {
    name: 'DOMINIO',
    subname: 'CYCLING CLUB',
    facilityBadge: 'OFFICIAL SPINNING FACILITY',
    locationShort: 'Cuauhtémoc, Chihuahua',
    locationFull: 'Cuauhtémoc, Chihuahua, México'
  },

  /* ---- Textos principales -------------------------------------------------
     Los titulares más importantes del sitio. "heroEyebrow", "heroTitle" y
     el nombre de marca se sincronizan automáticamente en toda la página.

     "heroSubtitle" y "statementPhrase" incluyen formato visual especial
     (negritas / color de acento) directamente en index.html, así que se
     muestran aquí solo como referencia del texto actual: para cambiarlos
     edita el contenido de los elementos #hero-subtitle y #statement-phrase
     en index.html.
  --------------------------------------------------------------------------- */
  texts: {
    heroEyebrow: 'Dominio Cycling Club · Cuauhtémoc, Chihuahua',
    heroTitle: 'DOMINA CADA PEDALADA',
    heroSubtitle: 'Energía. Disciplina. Comunidad. Vive la experiencia de entrenar en Dominio Cycling Club.',
    statementPhrase: 'Tu trabajo deja huella'
  },

  /* ---- Contacto ----------------------------------------------------------
     Completa estos datos en cuanto los tengas disponibles.
     "whatsapp" debe llevar solo números con código de país, sin espacios
     ni símbolos. Ejemplo: "526251234567".
  ------------------------------------------------------------------------- */
  contact: {
    address: 'Calle 18 Altos 1435, Zona Centro, Cuauhtémoc, Chihuahua, C.P. 31500, México',
    phone: '',
    whatsapp: '526251037144',
    email: 'contacto@dominio.work',
    facebook: '',
    instagram: '',
    // --- Ubicación en Google Maps ---------------------------------------
    // "placeId" identifica la ficha "Dominio Cycling" en Google Maps.
    placeId: 'ChIJScGzOAAI4YARcm_2lW5k3L0',
    // Enlace corto oficial para el botón "Cómo llegar".
    mapUrl: 'https://maps.app.goo.gl/grWXj78Rjm6tjLYr5',
    // Coordenadas exactas de la ficha de Google Business.
    mapCoords: '28.3973865,-106.8686228',
    // Plus Code que muestra Google Maps en la ficha.
    plusCode: '94WJ+XH Cuauhtémoc, Chihuahua',
    // Horario mostrado en la ficha (texto libre).
    hoursNote: 'Abierto · Cierra a las 10 p.m.',
    // Fotos del lugar (se muestran en la ficha junto al mapa).
    // Coloca los archivos en /img/lugar/ y escribe su ruta aquí.
    photos: [
      { src: 'img/team/promo1-actualizada.jpg', alt: 'Fachada de Dominio Cycling Club' },
      { src: 'img/team/Equipo.jpg', alt: 'Equipo de Dominio Cycling Club' },
      { src: 'img/team/equipo2.jpg', alt: 'Comunidad de Dominio Cycling Club' }
    ]
  },

  /* ---- Horarios ------------------------------------------------------------
     Agrega un objeto por franja horaria cuando los horarios estén
     confirmados, por ejemplo:
     { dias: 'Lunes a viernes', horario: '6:00 – 21:00', nota: 'Clases cada hora' }
     Si el arreglo queda vacío se muestra un aviso invitando a preguntar
     directamente, sin inventar información.
  --------------------------------------------------------------------------- */
  schedule: [
    { dias: 'Lunes a viernes', horario: '7:00 – 8:00 pm', nota: 'Spinning — clase abierta a alumnos nuevos' },
    { dias: 'Lunes a viernes', horario: '8:00 – 9:00 pm', nota: 'Spinning — clase de fundadores' },
    { dias: 'Lunes a viernes', horario: '9:00 – 10:00 pm', nota: 'Entrenamiento funcional' },
    { dias: 'Lunes a viernes', horario: '6:00 – 10:00 pm', nota: 'Gimnasio abierto al público general (renta de espacio y equipo, sin instructor)' }
  ],

  /* ---- Instructores --------------------------------------------------------
     Sustituye estos datos de ejemplo por los instructores reales cuando
     los tengas. "photo" y "social" pueden dejarse vacíos.
  --------------------------------------------------------------------------- */
  instructors: [
    {
      name: 'Dra. Irene Orozco',
      role: 'Fundadora e instructora',
      bio: 'Fundadora de Dominio Cycling Club e instructora certificada en spinning y entrenamiento funcional, guía cada sesión con la energía que dio vida a este proyecto.',
      photo: 'img/instructores/irene-orozco.jpg',
      social: ''
    }
  ],

  /* ---- Certificaciones -----------------------------------------------------
     "caption" es el título visible. Los archivos .pdf se abren en otra pestaña.
  --------------------------------------------------------------------------- */
  certifications: [
    { caption: 'Certificación 1', photo: 'img/certificacion1.jpg' },
    { caption: 'Certificación 2', photo: 'img/certificacion2.jpg' },
    { caption: 'Certificación 3', photo: 'img/certificacion3.jpg' },
    { caption: 'Certificación 4', photo: 'img/certificacion4.jpg' },
    { caption: 'Certificación 5', photo: 'img/certificacion5.jpg' },
    { caption: 'Certificación 6', photo: 'img/certificacion6.jpg' },
    { caption: 'Certificación 7', photo: 'img/certificacion7.jpg' },
    { caption: 'Certificación 8', photo: 'img/Certificacion8.jpeg' },
    { caption: 'Certificación 9', photo: 'img/Certificacion9.jpeg' },
    { caption: 'Certificación 10', photo: 'img/Certificacion10.jpeg' },
    { caption: 'Certificación 11', photo: 'img/Certificacion11.jpeg' },
    { caption: 'Certificación 12', photo: 'img/Certificacion12.jpg' },
    { caption: 'Certificación 13', photo: 'img/Certificacion13.jpg' },
    { caption: 'Certificación 14', photo: 'img/Certificacion14.jpg' },
    { caption: 'Certificación 15', photo: 'img/Certificacion15.jpg' }
  ],

  /* ---- Instalaciones ---------------------------------------------------
     Agrega tantos elementos como quieras: la cuadrícula se adapta sola.
  ---------------------------------------------------------------------- */
  facilities: [
    {
      title: 'Salón de spinning',
      desc: 'Bicicletas profesionales e iluminación ambiental para cada sesión.',
      photo: ''
    },
    {
      title: 'Zona de entrenamiento',
      desc: 'Espacio equipado para complementar tu preparación física.',
      photo: ''
    },
    {
      title: 'Área común',
      desc: 'Un espacio pensado para la comunidad antes y después de entrenar.',
      photo: ''
    },
    {
      title: 'Vestidores',
      desc: 'Instalaciones cómodas y limpias para tu comodidad.',
      photo: ''
    }
  ],

  /* ---- Galería -------------------------------------------------------------
     Para usar una fotografía real: coloca el archivo en /img/ y escribe
     su ruta en "photo" (ejemplo: "img/galeria/sesion-1.jpg").
  --------------------------------------------------------------------------- */
  gallery: [
    { caption: 'Desafía tus retos', photo: 'img/team/nosotros1.jpg' },
    { caption: 'Únete a la comunidad', photo: 'img/team/nosotros2.jpg' },
    { caption: 'Más fuertes juntos', photo: 'img/team/nosotros3.jpg' },
    { caption: 'Somos más que spinning', photo: 'img/team/promo2.jpg' },
    { caption: 'Vive la montaña', photo: 'img/team/promo3.jpg' },
    { caption: 'Vive la ruta', photo: 'img/team/promo4.jpg' },
    { caption: 'Entrenamos con propósito', photo: 'img/team/promo5.jpg' }
  ],

  /* ---- Eventos ---------------------------------------------------------------
     Un objeto por evento, en orden del más reciente al más antiguo.
     "photos" alimenta la galería del evento (se abre en el lightbox del
     sitio) y "videos" (opcional) se muestran en una sección independiente.
     "date" es texto libre para mostrar en la línea de tiempo.
  --------------------------------------------------------------------------- */
  events: [
    {
      id: 'halloween-ride-2026',
      title: 'Halloween Ride 2026',
      date: '24 · OCT · 2026',
      tag: 'Clase especial',
      cover: 'img/eventos/halloween-2026/Portada.jpg',
      excerpt: 'La clase más terrorífica del año: el salón se vistió de Halloween, los alumnos llegaron disfrazados y la energía subió con cada pedalada.',
      videos: [
        {
          title: '23 de octubre · 23:26',
          youtubeEmbed: 'https://www.youtube.com/embed/HVl0ELUAg4Q',
          youtubeUrl: 'https://youtube.com/shorts/HVl0ELUAg4Q'
        },
        {
          title: '24 de octubre · 09:33',
          youtubeEmbed: 'https://www.youtube.com/embed/DKa9eHsVXTM',
          youtubeUrl: 'https://youtube.com/shorts/DKa9eHsVXTM'
        },
        {
          title: '24 de octubre · 09:47',
          youtubeEmbed: 'https://www.youtube.com/embed/quaV3BLdvpI',
          youtubeUrl: 'https://youtube.com/shorts/quaV3BLdvpI'
        },
        {
          title: '31 de octubre · toma 1',
          youtubeEmbed: 'https://www.youtube.com/embed/wGDtoKdW0Zg',
          youtubeUrl: 'https://youtube.com/shorts/wGDtoKdW0Zg'
        },
        { title: '31 de octubre · toma 2', src: 'img/eventos/halloween-2026/videos/video-05.mp4' }
      ],
      photos: [
        'img/eventos/halloween-2026/fotos/halloween-alumna-dominio-diablita-garras.jpg',
        'img/eventos/halloween-2026/fotos/halloween-antifaz-calavera-cuernos.jpg',
        'img/eventos/halloween-2026/fotos/halloween-bufon-siniestro-brazos-abiertos.jpg',
        'img/eventos/halloween-2026/fotos/halloween-bufon-siniestro-pose-senala.jpg',
        'img/eventos/halloween-2026/fotos/halloween-catrina-velo-rosa-cuerpo-completo.jpg',
        'img/eventos/halloween-2026/fotos/halloween-catrina-velo-rosa-pose-manos.jpg',
        'img/eventos/halloween-2026/fotos/halloween-ciclista-bandana-calabaza.jpg',
        'img/eventos/halloween-2026/fotos/halloween-ciclista-gato-negro.jpg',
        'img/eventos/halloween-2026/fotos/halloween-ciclista-pulgar-arriba.jpg',
        'img/eventos/halloween-2026/fotos/halloween-clase-nocturna-grupo-spinning.jpg',
        'img/eventos/halloween-2026/fotos/halloween-disfraz-angel-calabaza.jpg',
        'img/eventos/halloween-2026/fotos/halloween-disfraz-bufon-diabolico.jpg',
        'img/eventos/halloween-2026/fotos/halloween-disfraz-caperucita-pose.jpg',
        'img/eventos/halloween-2026/fotos/halloween-disfraz-catrina-mexicana.jpg',
        'img/eventos/halloween-2026/fotos/halloween-disfraz-diablita-spinning.jpg',
        'img/eventos/halloween-2026/fotos/halloween-disfraz-doctor-peste-y-arana.jpg',
        'img/eventos/halloween-2026/fotos/halloween-disfraz-esqueleto-guantes-huesos-1.jpg',
        'img/eventos/halloween-2026/fotos/halloween-disfraz-esqueleto-guantes-huesos-2.jpg',
        'img/eventos/halloween-2026/fotos/halloween-disfraz-hombre-lobo-capa-roja.jpg',
        'img/eventos/halloween-2026/fotos/halloween-disfraz-la-purga-mascara-led-2.jpg',
        'img/eventos/halloween-2026/fotos/halloween-disfraz-pato-lucas.jpg',
        'img/eventos/halloween-2026/fotos/halloween-disfraz-sally-jack-skellington-cuerpo.jpg',
        'img/eventos/halloween-2026/fotos/halloween-disfraz-sally-pose-zombi.jpg',
        'img/eventos/halloween-2026/fotos/halloween-disfraz-viuda-negra-capa-tul.jpg',
        'img/eventos/halloween-2026/fotos/halloween-disfraz-viuda-negra-manos-juntas.jpg',
        'img/eventos/halloween-2026/fotos/halloween-grupo-disfraces-1.jpg',
        'img/eventos/halloween-2026/fotos/halloween-grupo-disfraces-2.jpg',
        'img/eventos/halloween-2026/fotos/halloween-grupo-disfraces-3.jpg',
        'img/eventos/halloween-2026/fotos/halloween-hombre-lobo-capa-roja-garras-2.jpg',
        'img/eventos/halloween-2026/fotos/halloween-lentes-neon-monstruo-1.jpg',
        'img/eventos/halloween-2026/fotos/halloween-lentes-neon-monstruo-2.jpg',
        'img/eventos/halloween-2026/fotos/halloween-maquillaje-sally-jack-skellington.jpg',
        'img/eventos/halloween-2026/fotos/halloween-mascara-zombie-primer-plano.jpg',
        'img/eventos/halloween-2026/fotos/halloween-nina-disfraz-sangriento-pose.jpg',
        'img/eventos/halloween-2026/fotos/halloween-pareja-doctor-peste-broma-baculo.jpg',
        'img/eventos/halloween-2026/fotos/halloween-pareja-doctor-peste-falda-roja-1.jpg',
        'img/eventos/halloween-2026/fotos/halloween-pareja-doctor-peste-falda-roja-2.jpg',
        'img/eventos/halloween-2026/fotos/halloween-pareja-maquillaje-cicatriz.jpg',
        'img/eventos/halloween-2026/fotos/halloween-pareja-payasos-accion-movimiento.jpg',
        'img/eventos/halloween-2026/fotos/halloween-pareja-payasos-ensangrentados-cuerpo-entero.jpg',
        'img/eventos/halloween-2026/fotos/halloween-pareja-payasos-sonriendo.jpg',
        'img/eventos/halloween-2026/fotos/halloween-pareja-viuda-negra-mascara-neon-1.jpg',
        'img/eventos/halloween-2026/fotos/halloween-pareja-viuda-negra-mascara-neon-2.jpg',
        'img/eventos/halloween-2026/fotos/halloween-payasa-muneca-diabolica.jpg',
        'img/eventos/halloween-2026/fotos/halloween-poster-clase-medianoche-catrina.jpg',
        'img/eventos/halloween-2026/fotos/halloween-convivio-alumnas-comiendo-1.jpg',
        'img/eventos/halloween-2026/fotos/halloween-convivio-comida-taquitos.jpg',
        'img/eventos/halloween-2026/fotos/halloween-convivio-comunidad-sala.jpg',
        'img/eventos/halloween-2026/fotos/halloween-pastel-celebracion-socias.jpg'
      ]
    }
  ]
};
