import type { LandingContent } from '../types';

/**
 * Contenido de la landing — ESPAÑOL (España).
 * Recreado a partir del original italiano, no traducido literalmente:
 * mismo tono de vestuario, léxico del fútbol amateur español.
 */
export const landing: LandingContent = {
  hero: {
    headline: 'El fantasy del vestuario.',
    sub: 'Panka es el fantasy donde alineas a tus compañeros de equipo. A los de verdad.',
    cta: 'Descarga la app',
    screenshot: {
      src: 'dashboard.png',
      alt: 'El panel de Panka: tu cromo de jugador, el próximo partido y la clasificación',
    },
  },

  intro: {
    title: '¿Alguna vez te has alineado a ti mismo en el fantasy?',
    body: 'Con Panka juegas al fantasy sobre vuestros partidos reales, alineándote a ti y a tus compañeros. Antes del partido eliges tu once: si los que has puesto rinden sobre el campo, tú subes en la clasificación. El fantasy ya no se juega solo desde el sofá.',
    screenshot: {
      src: 'player-card.png',
      alt: 'El cromo de jugador de Panka con foto, posición, valor en créditos e historial de notas',
    },
  },

  howItWorks: {
    title: 'Cómo funciona',
    steps: [
      {
        title: 'Descarga la app y encuentra a tu equipo.',
        body: 'Entras en tu grupo con un código de invitación. Tú y tus compañeros tendréis un valor en créditos según vuestra posición y lo que hayáis demostrado sobre el campo.',
        screenshot: {
          src: 'onboarding.png',
          alt: 'La pantalla de acceso al equipo de Panka con el código de invitación',
        },
      },
      {
        title: 'Haz tu alineación.',
        body: 'Antes del partido eliges a quién poner. Tienes un presupuesto de créditos y no te da para todos: toca mojarse y decidir tu táctica. Puedes incluso alinear a menos de 11 para permitirte a los jugadores más caros, mientras los bonus de línea premian las apuestas más valientes.',
        screenshot: {
          src: 'lineup.png',
          alt: 'La pantalla de alineación de Panka: lista de convocados con costes y presupuesto restante',
        },
      },
      {
        title: 'Descubre las notas del míster.',
        body: 'Después del partido el míster (o un admin) pone las notas. Cuanto mejor jueguen los que has elegido, más alta será tu puntuación. La app hace todos los cálculos con notas reales, goles y los modificadores que haya configurado tu equipo, y actualiza la clasificación.',
        screenshot: {
          src: 'field-votes.png',
          alt: 'El campo de Panka con el once alineado y la nota de cada jugador',
        },
      },
    ],
  },

  why: {
    title: 'Por qué jugar a Panka',
    blocks: [
      {
        title: 'Porque alineas a los que juegan contigo',
        body: 'Estás apostando por tu lateral que hace una cobertura al año, por tu capitán que juega con cuatro tobilleras, por el revulsivo que sale un minuto pero tiene una zurda mágica, o directamente por ti mismo. Nada de cracks de Primera vistos por la tele: la alineación la haces con la gente con la que sales del campo cada semana.',
      },
      {
        title: 'Porque lo tiene todo en un solo sitio',
        body: 'Alineaciones, notas, puntuaciones, clasificación. Todo dentro de la app. Sin volverte loco entre fotos pixeladas en el grupo de WhatsApp ni esperar a que se actualicen los portales de la liga.',
      },
      {
        title: 'Porque es un partido dentro del partido',
        body: 'Si ya os dejáis el alma en el campo, ahora hay un motivo más. Hasta un sprint o una entrada a ras de césped pueden valer ese medio punto que te da la jornada en el fantasy.',
      },
      {
        title: 'Porque el pique está garantizado',
        body: '«Hoy te he puesto, ¿me marcas un golazo?». Panka enciende el vestuario antes del partido y el pique sigue toda la semana en el grupo del equipo.',
      },
    ],
    photoAlt: 'Partido de fútbol amateur: jugadores en el campo al atardecer',
    roles: {
      title: 'Quién hace qué dentro de la app',
      intro: 'Cada equipo tiene jugadores y cuerpo técnico (entrenador o admin). Esto es lo que puede hacer cada uno:',
      playerLabel: 'Jugador',
      staffLabel: 'Entrenador / Admin',
      adminOnlyLabel: 'Solo admin',
      yesLabel: 'Sí',
      noLabel: '—',
      rows: [
        { feature: 'Hacer su alineación con el presupuesto de créditos', player: 'yes', staff: 'yes' },
        { feature: 'Ver notas, puntuaciones y clasificación', player: 'yes', staff: 'yes' },
        { feature: 'Aparecer en la clasificación del fantasy', player: 'yes', staff: 'admin' },
        { feature: 'Subir su foto y gestionar su perfil', player: 'yes', staff: 'yes' },
        { feature: 'Crear partidos y convocar jugadores', player: 'no', staff: 'yes' },
        { feature: 'Poner las notas después del partido', player: 'no', staff: 'yes' },
        { feature: 'Cerrar el partido y calcular las puntuaciones', player: 'no', staff: 'yes' },
        { feature: 'Gestionar la plantilla y el valor en créditos', player: 'no', staff: 'yes' },
        { feature: 'Configurar bonus, modificadores y presupuesto', player: 'no', staff: 'admin' },
        { feature: 'Crear torneos y gestionar temporadas', player: 'no', staff: 'yes' },
        { feature: 'Generar códigos de invitación y gestionar miembros', player: 'no', staff: 'admin' },
        { feature: 'Certificados médicos, cuotas y entrenamientos', player: 'no', staff: 'yes' },
      ],
    },
  },

  audiences: {
    title: 'Si juegas al fútbol con un equipo de verdad, Panka es para ti.',
    items: [
      {
        title: 'Equipos amateur',
        body: 'Fútbol 7 y fútbol 11. La liga de los lunes por la noche o la pachanga seria del domingo por la mañana.',
      },
      {
        title: 'Ligas locales y torneos de aficionados',
        body: 'Federaciones amateur y ligas municipales que quieren dar a sus equipos una app oficial y una diversión más.',
      },
      {
        title: 'Equipos de cantera',
        body: 'Categorías inferiores que quieren hacer grupo y motivarse con dinámicas de juego modernas.',
      },
      {
        title: 'Grupos de amigos',
        body: 'Los que quedan cada semana para jugar y quieren convertir la pachanga en un fantasy.',
      },
    ],
  },

  testimonials: {
    title: 'Dicen de Panka',
    items: [
      {
        quote: 'La única vez que no me alineo, marco desde 30 metros. Qué cosa más rara este Panka, Beppe.',
      },
      {
        quote: 'Nos jugamos unas cañas post-partido cada jornada. ¡Un motivo más para dejarse el alma!',
      },
      {
        quote: 'En el equipo ya éramos muy fanáticos del fantasy, pero lo bueno de Panka es que se juega en tu propio campo.',
      },
    ],
  },

  comingSoon: {
    title: 'Próximamente',
    /* POR COMPLETAR: contenido de la sección "Próximamente".
       La sección está apagada mientras flags.comingSoon sea false en src/config.ts */
    items: [],
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Panka es gratis?',
        answer:
          'Sí. Panka está en fase piloto y la app es totalmente gratuita. En el futuro podrían llegar funciones premium opcionales, pero el juego base — alineaciones, notas, clasificación — seguirá disponible para tu equipo.',
      },
      {
        question: '¿Solo funciona para el fútbol?',
        answer:
          'Hoy Panka está pensada para el fútbol, fútbol 7 y fútbol 11. Eso sí, la arquitectura ya está preparada para otros deportes de equipo: es un plan de futuro en el que estamos trabajando.',
      },
      {
        question: '¿Quién pone las notas?',
        answer:
          'El míster o un admin del equipo, después de cada partido: nota de 0 a 10 (con medios puntos) más goles, asistencias y tarjetas. La app calcula sola las puntuaciones del fantasy y actualiza la clasificación.',
      },
      {
        question: '¿Cuántos jugadores hacen falta? ¿Todos tienen que instalarse la app?',
        answer:
          'No, no hace falta que todos se descarguen la app. Quien gestiona el equipo crea el cromo de cada jugador: los compañeros sin la app siguen apareciendo en la plantilla, reciben sus notas y pueden ser alineados. La app solo la necesita quien quiera hacer su alineación y jugar al fantasy — y con unos pocos participantes ya se puede empezar.',
      },
      {
        question: '¿Cómo funcionan los modificadores?',
        answer:
          'Cada equipo configura sus propias reglas. Hay bonus y penalizaciones individuales (por ejemplo gol +3, asistencia +1, amarilla −0,5), bonus de línea cuando la defensa, el centro del campo o la delantera rinden en bloque, y un bonus de portero cuando tu número 1 hace un partidazo. El admin puede ajustar todos los valores y el presupuesto de créditos desde los ajustes.',
      },
      {
        question: '¿Mis datos están seguros?',
        answer:
          'Sí. Los datos del equipo viven en una infraestructura cloud segura, solo los ven los miembros de tu grupo y nunca se venden ni se comparten con terceros con fines comerciales. Puedes pedir la eliminación de tu cuenta y de tus datos en cualquier momento.',
      },
    ],
  },

  finalCta: {
    title: 'Lleva el fantasy a tu vestuario.',
  },

  contact: {
    title: 'Contacto',
    intro: '¿Quieres llevar Panka a tu equipo o saber más? Déjanos tus datos y te ayudamos a configurar el grupo.',
    fields: {
      name: { label: 'Nombre y apellidos', placeholder: 'Javier García' },
      email: { label: 'Email', placeholder: 'javier.garcia@email.es' },
      team: { label: 'Nombre del equipo (opcional)', placeholder: 'CD La Banquilla' },
      message: { label: 'Mensaje', placeholder: 'Cuéntanos algo de tu equipo…' },
    },
    submit: 'Enviar solicitud',
    sending: 'Enviando…',
    success: '¡Solicitud enviada! Te contactamos muy pronto.',
    errorGeneric: 'Algo ha salido mal. Inténtalo de nuevo en unos minutos o escríbenos directamente.',
    errorValidation: {
      name: 'Escribe tu nombre y apellidos',
      email: 'Escribe un email válido',
      message: 'Escribe un mensaje',
    },
    privacyNote: 'Al enviar aceptas nuestra política de privacidad. Nada de spam, prometido.',
  },
};
