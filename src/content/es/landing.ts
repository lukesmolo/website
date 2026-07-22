import type { LandingContent } from '../types';

/**
 * Contenido de la landing — ESPAÑOL (España).
 * Recreado a partir del original italiano, no traducido literalmente:
 * mismo tono de vestuario, léxico del fútbol amateur español.
 */
export const landing: LandingContent = {
  hero: {
    headline: 'El fantasy del vestuario.',
    highlight: 'El fantasy',
    sub: 'Panka es el fantasy donde alineas a tus compañeros de equipo. A los de verdad.',
    cta: 'Descarga la app',
    screenshot: {
      src: 'dashboard.png',
      alt: 'El panel de Panka: tu cromo de jugador, el próximo partido y la clasificación',
    },
  },

  intro: {
    title: '¿Alguna vez te has alineado a ti mismo en el fantasy?',
    body: 'Con Panka juegas al fantasy sobre tus partidos reales, alineándote a ti y a tus compañeros. Antes del partido eliges tu once: si los que has puesto rinden sobre el campo, tú subes en la clasificación. El fantasy ya no se juega solo desde el sofá.',
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
        body: 'Entras en tu grupo con un código de invitación. Tú y tus compañeros tendréis un valor en créditos según vuestra posición y lo que hayáis demostrado sobre el campo. ¡No te lo tomes a mal si el pichichi vale más que tú!',
        screenshot: {
          src: 'onboarding.png',
          alt: 'La pantalla de acceso al equipo de Panka con el código de invitación',
        },
      },
      {
        title: 'Haz tu alineación.',
        body: 'Antes del partido eliges a quién poner. Tienes un presupuesto de créditos y no te da para todos: toca mojarse y decidir tu táctica. Puedes incluso dejar algún hueco libre para permitirte a los jugadores más caros, mientras los modificadores premian las apuestas más valientes.',
        screenshot: {
          src: 'lineup.png',
          alt: 'La pantalla de alineación de Panka: lista de convocados con costes y presupuesto restante',
        },
      },
      {
        title: 'Descubre las notas del míster.',
        body: 'Aquí sube la tensión. Después del partido el míster (o un admin) pone las notas. Cuanto mejor jueguen los que has puesto en tu once, más alta será tu puntuación. La app hace todos los cálculos con notas reales, goles y los modificadores que haya configurado tu equipo, y actualiza la clasificación.',
        screenshot: {
          src: 'field-votes.png',
          alt: 'El campo de Panka con el once alineado y la nota de cada jugador',
        },
      },
    ],
  },

  why: {
    title: 'Por qué jugar a Panka',
    player: {
      label: 'Si eres jugador',
      reasons: [
        {
          title: 'Alineas a los que juegan contigo',
          body: 'Nada de cracks de Primera: aquí te lo juegas todo a tu lateral que hace una cobertura al año, a tu capitán que juega con cuatro tobilleras y, si te atreves, a ti mismo.',
        },
        {
          title: 'El partido dentro del partido',
          body: 'Si ya lo das todo por la camiseta, ahora lo darás todo también por Panka. Cada sprint, cada balón recuperado o ese centro en el último minuto vale ese medio punto extra para ganar la jornada.',
        },
        {
          title: 'Todas tus stats en el bolsillo',
          body: 'Nota media, goles, asistencias y la evolución de tus actuaciones durante el año. Todo guardado en tu perfil personal.',
        },
        {
          title: 'El pique está garantizado',
          body: '«Hoy te he puesto, ¿me marcas un golazo?». Panka enciende el previo en el vestuario y el pique sigue toda la semana en el grupo del equipo.',
        },
      ],
    },
    coach: {
      label: 'Si eres el míster',
      reasons: [
        {
          title: 'Se acabaron las hojas sueltas y los archivos perdidos',
          body: 'Controla las asistencias a los entrenamientos, las cuotas pagadas y los vencimientos de los reconocimientos médicos directamente desde la app.',
        },
        {
          title: 'Convocas a todos con un toque',
          body: 'Haz la lista de convocados en Panka y envíala automáticamente al grupo de WhatsApp del equipo, formateada y lista con toda la información del partido.',
        },
        {
          title: 'Notas fáciles y rápidas',
          body: 'Pon las notas al final del partido desde la app. Los cálculos de los puntos fantasy de todo el equipo los hace Panka automáticamente. Nunca has visto a tus chicos tan motivados.',
        },
        {
          title: 'Tu plantilla bajo control',
          body: 'Tienes todas las estadísticas de la plantilla a mano. Te basta un vistazo para saber quién está en forma y quién se merece un rato en el banquillo.',
        },
      ],
    },
    photoAlt: 'Portería de fútbol en un campo amateur, con el logo de Panka',
  },

  audiences: {
    title: 'Para quién es Panka',
    body: 'Panka es para todos, tanto si jugáis en una liga seria como si quedáis los martes por la noche para un partido entre amigos. El nivel da igual: si hay un equipo, hay un fantasy que jugar en el vestuario. De momento solo soportamos el fútbol, pero ya estamos trabajando para incluir otros deportes de equipo.',
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
    intro: 'Panka ya está lista para haceros discutir, pero estamos desarrollando nuevas funciones para las próximas temporadas. Esto es lo que encontrarás pronto en la app:',
    items: [
      {
        title: 'Avatares personalizados',
        body: 'Crea tu caricatura digital en la app para hacer tu cromo único.',
      },
      {
        title: 'Gráficas para redes listas para compartir',
        body: 'Genera automáticamente los cromos de los mejores de la jornada, el Once Ideal, los resultados o la clasificación para publicar en redes.',
      },
      {
        title: 'Cotizaciones dinámicas automáticas',
        body: 'Los valores en créditos de los jugadores subirán y bajarán automáticamente durante la temporada, calculados por un algoritmo según las notas reales.',
      },
      {
        title: 'Estadísticas avanzadas',
        body: 'Gráficos de rendimiento e históricos detallados de tu temporada, como los profesionales.',
      },
      {
        title: 'Asistente IA',
        body: 'Un ayudante virtual basado en las estadísticas para elegir la mejor alineación de cada jornada.',
      },
      {
        title: 'Premios y trofeos',
        body: 'Trofeos a medida, cromos conmemorativos y todo lo que necesitas para celebrarlo en la cara de tus compañeros.',
      },
    ],
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Panka es gratis?',
        answer:
          'Sí. Te descargas la app, entras en el grupo y empiezas a jugar. Sin suscripciones ni costes ocultos. Salvo las cañas que te tocará pagarle al ganador.',
      },
      {
        question: '¿Puedo usar Panka para otro deporte?',
        answer:
          'Si juegas al baloncesto, al vóley, al rugby o a otra cosa y quieres probarla, escríbenos. De momento estamos centrados en el fútbol, pero ya estamos trabajando para cubrir otros deportes de equipo, ¡y nos hacen falta equipos dispuestos a todo para probar las nuevas versiones!',
      },
      {
        question: '¿Quién pone las notas y las puntuaciones?',
        answer:
          'El míster, un delegado o cualquiera del equipo que tenga las ganas y el valor de poner notas. Quien gestiona el grupo las mete directamente desde la app al final del partido, y a partir de ahí en el vestuario puede pasar de todo.',
      },
      {
        question: '¿Cuántos jugadores hacen falta para jugar?',
        answer:
          '¿Con cuántos amigos juegas normalmente al fantasy? Pues eso. Cuantos más seáis, más os divertís, pero no hay un mínimo para empezar (nosotros sugerimos ser al menos 5). Y si alguien del equipo no quiere descargarse la app, no pasa nada: un admin puede meter igualmente toda la plantilla, así podrás alinear incluso a quien todavía no se ha registrado.',
      },
      {
        question: '¿Cómo funcionan los modificadores?',
        answer:
          'Igual que en el fantasy clásico: si cumples ciertos criterios (por ejemplo, esquemas concretos o una nota alta del portero) desbloqueas puntos extra que se suman a tu puntuación. Los modificadores premian la táctica, pero no son obligatorios: podéis decidir juntos si usarlos, cómo personalizarlos o ignorarlos del todo y jugar de forma más clásica. Las reglas de vuestro vestuario las ponéis vosotros.',
      },
      {
        question: '¿Mis datos están seguros?',
        answer:
          'Sí. Panka no comparte los datos con terceros. La información, las notas y las clasificaciones de vuestro equipo son privadas y solo pueden verlas los miembros invitados con el código del equipo.',
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
