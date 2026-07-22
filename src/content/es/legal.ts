import type { LegalContent } from '../types';

/* POR COMPLETAR: textos legales definitivos, a validar por un abogado.
   Esto son placeholders estructurales. */
export const legal: LegalContent = {
  privacy: {
    title: 'Política de privacidad',
    updated: 'Última actualización: [POR COMPLETAR]',
    body: [
      '[POR COMPLETAR] Esta página describirá cómo Panka trata los datos personales recogidos a través de la web: datos del formulario de contacto (nombre, email, nombre del equipo, mensaje, idioma), finalidades, base jurídica, plazos de conservación, derechos del interesado y contacto del responsable.',
      '[POR COMPLETAR] Responsable del tratamiento: Panka S.r.l., Viale Aldo Moro 16, 40127 Bolonia (Italia) — NIF-IVA y CF 04398091209.',
      '[POR COMPLETAR] Los datos del formulario se almacenan en Supabase (UE) y se usan solo para responder a las solicitudes. Sin venta ni cesión a terceros.',
    ],
  },
  cookiePolicy: {
    title: 'Política de cookies',
    updated: 'Última actualización: [POR COMPLETAR]',
    body: [
      '[POR COMPLETAR] Esta página enumerará las cookies de la web: cookies técnicas necesarias, cookies de estadística (Google Analytics 4, solo con consentimiento) y cookies de marketing (Meta Pixel, solo con consentimiento).',
      '[POR COMPLETAR] Las preferencias pueden cambiarse en cualquier momento desde el enlace «Preferencias de cookies» del pie de página.',
    ],
  },
  backHome: 'Volver al inicio',
};
