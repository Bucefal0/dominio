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
    address: 'Calle 18 1435, Centro, Cuauhtémoc, Chihuahua, C.P. 31500, México',
    phone: '',
    whatsapp: '526251037144',
    email: 'contacto@dominio.work',
    facebook: '',
    instagram: '',
    // Se usa para el mapa y el botón "Cómo llegar" mientras no haya
    // una dirección exacta. Cuando tengas la dirección completa,
    // reemplázala aquí para mayor precisión.
    mapQuery: '94WJ+XF Cuauhtémoc, Chihuahua'
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
    { caption: 'Certificación 1', photo: 'img/certificacion1.png' },
    { caption: 'Certificación 2', photo: 'img/certificacion2.png' },
    { caption: 'Certificación 3', photo: 'img/certificacion3.png' },
    { caption: 'Certificación 4', photo: 'img/certificacion4.png' },
    { caption: 'Certificación 5', photo: 'img/certificacion5.png' },
    { caption: 'Certificación 6', photo: 'img/certificacion6.png' },
    { caption: 'Certificación 7', photo: 'img/certificacion7.png' },
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
  ]
};
