import type { LegalContent } from '../types';

/* DA COMPLETARE: testi legali definitivi da far validare a un legale.
   Questi sono placeholder strutturali. */
export const legal: LegalContent = {
  privacy: {
    title: 'Privacy policy',
    updated: 'Ultimo aggiornamento: [DA COMPLETARE]',
    body: [
      '[DA COMPLETARE] Questa pagina descriverà come Panka tratta i dati personali raccolti tramite il sito: dati del form contatti (nome, email, nome squadra, messaggio, lingua), finalità del trattamento, base giuridica, tempi di conservazione, diritti dell’interessato e contatti del titolare.',
      '[DA COMPLETARE] Titolare del trattamento: Panka S.r.l., Viale Aldo Moro 16, 40127 Bologna — P.IVA e C.F. 04398091209.',
      '[DA COMPLETARE] I dati del form vengono conservati su Supabase (UE) e usati solo per rispondere alle richieste. Nessuna vendita o cessione a terzi.',
    ],
  },
  cookiePolicy: {
    title: 'Cookie policy',
    updated: 'Ultimo aggiornamento: [DA COMPLETARE]',
    body: [
      '[DA COMPLETARE] Questa pagina elencherà i cookie usati dal sito: cookie tecnici necessari, cookie statistici (Google Analytics 4, attivo solo previo consenso) e cookie di marketing (Meta Pixel, attivo solo previo consenso).',
      '[DA COMPLETARE] Le preferenze si possono modificare in ogni momento dal link “Preferenze cookie” nel footer.',
    ],
  },
  backHome: 'Torna alla home',
};
