import type { LandingContent } from '../types';

/**
 * Contenuti della landing — ITALIANO (lingua di riferimento).
 * Per modificare i testi del sito basta cambiare le stringhe qui sotto.
 */
export const landing: LandingContent = {
  hero: {
    headline: 'Il fanta da spogliatoio.',
    sub: 'Panka è il fantacalcio dove schieri i tuoi compagni di squadra. Quelli veri.',
    cta: "Scarica l'app",
    screenshot: {
      src: 'dashboard.png',
      alt: 'La dashboard di Panka: la tua card giocatore, la prossima partita e la classifica',
    },
  },

  intro: {
    title: 'Hai mai schierato te stesso al fanta?',
    body: 'Con Panka fai il fanta sulle vostre partite reali, schierando te e i tuoi compagni. Prima della partita scegli chi mettere in formazione: se chi hai schierato fa punti sul campo, tu sali in classifica. Il fanta non si gioca più solo davanti alla TV.',
    screenshot: {
      src: 'player-card.png',
      alt: 'La card giocatore di Panka con foto, ruolo, valore in crediti e andamento dei voti',
    },
  },

  howItWorks: {
    title: 'Come funziona',
    steps: [
      {
        title: "Scarica l'app e trova la tua squadra.",
        body: 'Entri nel tuo gruppo con un codice. Tu e i tuoi compagni avrete un valore in crediti in base al ruolo e a quello che avete dimostrato in campo.',
        screenshot: {
          src: 'onboarding.png',
          alt: 'La schermata di ingresso in squadra di Panka con il codice invito',
        },
      },
      {
        title: 'Fai la tua formazione.',
        body: 'Prima della partita scegli chi schierare. Hai un budget di crediti e non puoi prendere tutti: devi decidere la tua tattica. Puoi anche metterne meno di 11 per permetterti i giocatori più costosi, mentre i bonus di reparto premiano le scelte più coraggiose.',
        screenshot: {
          src: 'lineup.png',
          alt: "L'inserimento formazione di Panka: elenco dei convocati con costi e budget residuo",
        },
      },
      {
        title: 'Scopri i voti del mister.',
        body: "Dopo la partita il mister (o un admin) mette i voti. Più gioca bene chi hai scelto, più alto è il tuo punteggio. L'app fa tutti i calcoli con voti reali, gol e modificatori impostati dalla tua squadra, e aggiorna la classifica.",
        screenshot: {
          src: 'field-votes.png',
          alt: 'Il campo di Panka con la formazione schierata e i voti assegnati a ogni giocatore',
        },
      },
    ],
  },

  why: {
    title: 'Perché giocare a Panka',
    blocks: [
      {
        title: 'Perché schieri chi gioca con te',
        body: 'Stai puntando sul tuo terzino che fa una diagonale all’anno, sul tuo capitano che gioca con quattro cavigliere, sul super-sub che gioca un minuto ma ha il piede fatato, o direttamente su te stesso. Niente fenomeni di Serie A presi dalla TV: la formazione la fai con la gente con cui esci dal campo ogni settimana.',
      },
      {
        title: 'Perché tiene tutto in un posto solo',
        body: 'Formazioni, voti, pagelle, classifica. Tutto dentro l’app. Senza impazzire tra foto sgranate sui gruppi WhatsApp o aspettare che si aggiornino i portali della lega.',
      },
      {
        title: 'Perché è una partita nella partita',
        body: 'Se di solito date il 110% in campo, adesso c’è un motivo in più. Anche uno scatto o una scivolata possono valere quel mezzo voto che ti fa vincere la giornata al fanta.',
      },
      {
        title: 'Perché lo sfottò è garantito',
        body: '“Oggi ti ho messo, me lo fai un golazo?”. Panka accende il pre-partita nello spogliatoio e va avanti tutta la settimana sulla chat di squadra.',
      },
    ],
    photoAlt: 'Partita di calcio amatoriale: giocatori in campo al tramonto',
    roles: {
      title: 'Cosa fa chi, dentro l’app',
      intro: 'Ogni squadra ha giocatori e staff (allenatore o admin). Ecco chi può fare cosa:',
      playerLabel: 'Giocatore',
      staffLabel: 'Allenatore / Admin',
      adminOnlyLabel: 'Solo admin',
      yesLabel: 'Sì',
      noLabel: '—',
      rows: [
        { feature: 'Schierare la propria formazione con il budget crediti', player: 'yes', staff: 'yes' },
        { feature: 'Vedere voti, pagelle e classifica', player: 'yes', staff: 'yes' },
        { feature: 'Comparire in classifica al fanta', player: 'yes', staff: 'admin' },
        { feature: 'Caricare la propria foto e curare il profilo', player: 'yes', staff: 'yes' },
        { feature: 'Creare le partite e convocare i giocatori', player: 'no', staff: 'yes' },
        { feature: 'Mettere i voti e le pagelle dopo la partita', player: 'no', staff: 'yes' },
        { feature: 'Chiudere la partita e calcolare i punteggi', player: 'no', staff: 'yes' },
        { feature: 'Gestire la rosa e il valore in crediti dei giocatori', player: 'no', staff: 'yes' },
        { feature: 'Impostare bonus, modificatori e budget', player: 'no', staff: 'admin' },
        { feature: 'Creare tornei e gestire le stagioni', player: 'no', staff: 'yes' },
        { feature: 'Generare i codici invito e gestire i membri', player: 'no', staff: 'admin' },
        { feature: 'Certificati medici, quote e allenamenti della squadra', player: 'no', staff: 'yes' },
      ],
    },
  },

  audiences: {
    title: 'Se giochi a calcio con una squadra vera, Panka è per te.',
    items: [
      {
        title: 'Squadre amatoriali',
        body: 'Calcio a 7 e a 11. Il campionato del lunedì sera o della domenica mattina.',
      },
      {
        title: 'Tornei UISP, CSI, AICS',
        body: 'Federazioni amatoriali e leghe locali che vogliono dare un’app ufficiale e un divertimento in più ai propri tesserati.',
      },
      {
        title: 'Squadre giovanili',
        body: 'Categorie under che vogliono fare gruppo ed esaltarsi con dinamiche di gioco moderne.',
      },
      {
        title: 'Gruppi di amici',
        body: 'Chi si organizza per giocare ogni settimana e vuole trasformare la partitella in un fanta.',
      },
    ],
  },

  testimonials: {
    title: 'Dicono di Panka',
    items: [
      {
        quote: 'L’unica volta che non mi schiero faccio gol da 30 metri. Panka è strano, Beppe.',
      },
      {
        quote: 'Ci siamo giocati una birretta post-partita ogni giornata. Un motivo in più per dare l’anima!',
      },
      {
        quote: 'In squadra siamo già appassionati di fanta, ma il bello di Panka è che si gioca proprio sul campo.',
      },
    ],
  },

  comingSoon: {
    title: 'In arrivo',
    /* DA COMPLETARE: contenuti della sezione "Coming soon".
       La sezione è spenta finché flags.comingSoon è false in src/config.ts */
    items: [],
  },

  faq: {
    title: 'Domande frequenti',
    items: [
      {
        question: 'Panka è gratis?',
        answer:
          'Sì. Panka è in fase pilota e l’app è completamente gratuita. In futuro potrebbero arrivare funzionalità premium opzionali, ma il gioco base — formazioni, voti, classifica — resterà accessibile alla squadra.',
      },
      {
        question: 'Funziona solo per il calcio?',
        answer:
          'Oggi Panka è pensata per il calcio, a 7 e a 11. L’architettura però è già pronta per altri sport di squadra: è un piano futuro a cui stiamo lavorando.',
      },
      {
        question: 'Chi mette i voti?',
        answer:
          'Il mister o un admin della squadra, dopo ogni partita: voto da 0 a 10 (anche a mezzi punti) più gol, assist e cartellini. L’app calcola da sola i punteggi fanta e aggiorna la classifica.',
      },
      {
        question: 'Quanti giocatori servono? Devono scaricare tutti l’app?',
        answer:
          'No, non serve che tutti scarichino l’app. Chi gestisce la squadra crea le card di tutti i giocatori: chi non ha l’app compare comunque in rosa, riceve i voti e può essere schierato. L’app serve solo a chi vuole fare la propria formazione e giocare al fanta — e bastano anche pochi partecipanti per cominciare.',
      },
      {
        question: 'Come funzionano i modificatori?',
        answer:
          'Ogni squadra imposta le proprie regole. Ci sono bonus e malus individuali (per esempio gol +3, assist +1, ammonizione −0,5), bonus di reparto se difesa, centrocampo o attacco giocano bene tutti insieme, e un bonus portiere se il tuo numero 1 fa una grande partita. L’admin può regolare tutti i valori e il budget crediti dalla sezione impostazioni.',
      },
      {
        question: 'I miei dati sono al sicuro?',
        answer:
          'Sì. I dati della squadra vivono su infrastruttura cloud sicura, sono visibili solo ai membri del tuo gruppo e non vengono venduti né condivisi con terzi a fini commerciali. Puoi chiedere la cancellazione del tuo account e dei tuoi dati in qualsiasi momento.',
      },
    ],
  },

  finalCta: {
    title: 'Porta il fanta nel tuo spogliatoio.',
  },

  contact: {
    title: 'Contatti',
    intro: 'Vuoi portare Panka nella tua squadra o saperne di più? Lasciaci i tuoi dati e ti aiutiamo noi a configurare il gruppo.',
    fields: {
      name: { label: 'Nome e cognome', placeholder: 'Mario Rossi' },
      email: { label: 'Email', placeholder: 'mario.rossi@email.it' },
      team: { label: 'Nome squadra (facoltativo)', placeholder: 'ASD Real Panchina' },
      message: { label: 'Messaggio', placeholder: 'Raccontaci della tua squadra…' },
    },
    submit: 'Invia richiesta',
    sending: 'Invio in corso…',
    success: 'Richiesta inviata! Ti ricontattiamo al più presto.',
    errorGeneric: 'Qualcosa è andato storto. Riprova tra qualche minuto o scrivici direttamente.',
    errorValidation: {
      name: 'Inserisci nome e cognome',
      email: 'Inserisci un indirizzo email valido',
      message: 'Scrivi un messaggio',
    },
    privacyNote: 'Inviando accetti la nostra informativa privacy. Niente spam, promesso.',
  },
};
