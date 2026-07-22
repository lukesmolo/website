import type { LandingContent } from '../types';

/**
 * Contenuti della landing — ITALIANO (lingua di riferimento).
 * Per modificare i testi del sito basta cambiare le stringhe qui sotto.
 */
export const landing: LandingContent = {
  hero: {
    headline: 'Il fanta da spogliatoio.',
    highlight: 'Il fanta',
    sub: 'Panka è il fanta dove schieri i tuoi compagni di squadra. Quelli veri.',
    cta: "Scarica l'app",
    screenshot: {
      src: 'dashboard.png',
      alt: 'La dashboard di Panka: la tua card giocatore, la prossima partita e la classifica',
    },
  },

  intro: {
    title: 'Hai mai schierato te stesso al fanta?',
    body: '“Al secondo colpo di tacco, ti metto in panca”. La frase più temuta di ogni spogliatoio è diventata un’app. Da oggi il fanta non si fa più solo davanti alla TV: con Panka te lo giochi sulle tue partite reali, schierando te e i tuoi compagni. Prima della partita scegli chi mettere in formazione. Se chi hai schierato prende un bel voto dal mister, tu sali in classifica. Se chi hai schierato prende dei bonus, voli direttamente.',
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
        body: 'Entri nel tuo gruppo con un codice. Tu e i tuoi compagni avrete un valore in crediti in base al ruolo e a quello che avete dimostrato in campo. Non prendertela se il bomber vale più di te!',
        screenshot: {
          src: 'onboarding.png',
          alt: 'La schermata di ingresso in squadra di Panka con il codice invito',
        },
      },
      {
        title: 'Fai la tua formazione.',
        body: 'Prima della partita scegli chi schierare. Hai un budget di crediti e non puoi prendere tutti: devi decidere la tua tattica. Puoi anche lasciare qualche slot vuoto per poterti permettere i giocatori più costosi, catori premiano le scelte più coraggiose.',
        screenshot: {
          src: 'lineup.png',
          alt: "L'inserimento formazione di Panka: elenco dei convocati con costi e budget residuo",
        },
      },
      {
        title: 'Scopri i voti del mister.',
        body: "Qui sale la tensione. Dopo la partita il mister (o un admin) mette i voti. Più gioca bene chi hai scelto in formazione, più sarà alto il tuo punteggio. L'app fa tutti i calcoli con i voti reali, i gol e i modificatori impostati dalla tua squadra, e aggiorna la classifica.",
        screenshot: {
          src: 'field-votes.png',
          alt: 'Il campo di Panka con la formazione schierata e i voti assegnati a ogni giocatore',
        },
      },
    ],
  },

  why: {
    title: 'Perché giocare a Panka',
    player: {
      label: 'Se sei un giocatore',
      reasons: [
        {
          title: 'Schieri chi gioca con te',
          body: 'Basta fenomeni di Serie A: qui punti tutto sul tuo terzino che fa una diagonale all’anno, sul tuo capitano che gioca con quattro cavigliere e, se te la senti, su te stesso.',
        },
        {
          title: 'La partita nella partita',
          body: 'Se di solito dai tutto per la maglia, ora darai tutto anche per Panka. Ogni scatto, recupero o cross all’ultimo minuto vale quel mezzo voto in più per vincere la giornata.',
        },
        {
          title: 'Tutte le tue stats in tasca',
          body: 'Media voto, gol, assist e andamento delle tue prestazioni durante l’anno. Tutto salvato sul tuo profilo personale.',
        },
        {
          title: 'Lo sfottò è garantito',
          body: '“Oggi ti ho messo, me lo fai un golazo?”. Panka accende il pre-partita nello spogliatoio e continua tutta la settimana sulla chat di squadra.',
        },
      ],
    },
    coach: {
      label: 'Se sei un coach',
      reasons: [
        {
          title: 'Basta fogli sparsi e file persi',
          body: 'Tieni traccia delle presenze agli allenamenti, delle quote pagate e delle scadenze delle visite mediche direttamente dall’app.',
        },
        {
          title: 'Convochi tutti con un tap',
          body: 'Fai la lista dei convocati su Panka e la mandi in automatico sul gruppo WhatsApp della squadra, formattata e pronta con tutte le informazioni sulla partita.',
        },
        {
          title: 'Pagelle facili e veloci',
          body: 'Inserisci i voti a fine partita dall’app. I calcoli dei fanta-punti per tutta la squadra li fa Panka in automatico. I tuoi ragazzi non li hai mai visti così motivati.',
        },
        {
          title: 'La tua rosa sotto controllo',
          body: 'Hai tutte le statistiche della rosa sottomano. Ti basta un’occhiata per capire chi è in forma e chi si merita un giro in panchina. Dagli allenamenti fatti  alle visite mediche, non può sfuggirti più nulla.',
        },
      ],
    },
    photoAlt: 'Porta da calcio su un campo amatoriale, con il logo Panka',
  },

  audiences: {
    title: 'Per chi è Panka',
    body: 'Panka è per tutti, sia che giochiate in un campionato serio sia che vi troviate il martedì sera per una partita tra amici. Non importa il livello: se c’è una squadra, c’è un fanta da giocare in spogliatoio. Al momento supportiamo solo il calcio, ma stiamo già lavorando per includere altri sport di squadra.',
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
    intro: 'Panka è già pronta per farvi litigare, ma stiamo sviluppando nuove funzioni per le prossime stagioni. Ecco cosa troverai presto nell’app:',
    items: [
      {
        title: 'Avatar personalizzati',
        body: 'Crea la tua caricatura digitale nell’app per rendere la tua card unica.',
      },
      {
        title: 'Grafiche social pronte da condividere',
        body: 'Genera in automatico le card dei migliori di giornata, la Top 11, i risultati o la classifica da pubblicare sui social.',
      },
      {
        title: 'Quotazioni dinamiche automatiche',
        body: 'I valori in crediti dei giocatori saliranno e scenderanno in automatico durante la stagione, calcolati da un algoritmo in base ai voti reali.',
      },
      {
        title: 'Statistiche avanzate',
        body: 'Grafici di rendimento e storici dettagliati della tua stagione come nei professionisti.',
      },
      {
        title: 'Assistente AI',
        body: 'Un aiuto virtuale basato sulle statistiche per farti scegliere la formazione migliore per ogni giornata.',
      },
      {
        title: 'Premi e trofei',
        body: 'Trofei su misura, card celebrative e tutto quello che ti serve per esultare in faccia ai tuoi compagni.',
      },
    ],
  },

  faq: {
    title: 'Domande frequenti',
    items: [
      {
        question: 'Panka è gratis?',
        answer:
          'Sì. Scarichi l’app, entri nel gruppo e inizi a giocare. Nessun abbonamento, nessun costo nascosto. Tranne le birrette che ti toccherà offrire al vincitore.',
      },
      {
        question: 'Posso usare Panka anche per un altro sport?',
        answer:
          'Se giochi a basket, pallavolo, rugby, o altro e vuoi provarla, scrivici. Al momento siamo tarati sul calcio, ma stiamo già lavorando per coprire altri sport di squadra e ci servono squadre pronte a tutto per testare le nuove versioni!',
      },
      {
        question: 'Chi inserisce i voti e le pagelle?',
        answer:
          'Il mister, un dirigente o chiunque in squadra abbia la voglia e il coraggio di dare i voti. Chi gestisce il gruppo inserisce i voti direttamente dall’app a fine partita, e da quel momento in spogliatoio può succedere di tutto.',
      },
      {
        question: 'Quanti giocatori servono per giocare?',
        answer:
          'Con quanti amici fai di solito il fanta? Ecco, ci siamo capiti. Più siete e più vi divertite, ma non c’è un numero minimo per iniziare (noi suggeriamo di essere almeno in 5). E se qualcuno in squadra non ha voglia di scaricare l’app, nessun problema: un admin può inserire comunque tutta la rosa, così potrai schierare anche chi non si è ancora iscritto.',
      },
      {
        question: 'Come funzionano i modificatori?',
        answer:
          'Proprio come nel fanta classico, se rispetti determinati criteri (ad esempio moduli particolari o un voto alto al portiere) sblocchi dei punti bonus che si sommano al tuo punteggio. I modificatori servono a premiare la tattica, ma non sono un obbligo: potete decidere insieme se usarli, come personalizzarli o se ignorarli del tutto per giocare in modo più classico. Decidete voi le regole del vostro spogliatoio.',
      },
      {
        question: 'I miei dati sono al sicuro?',
        answer:
          'Sì. Panka non condivide i dati con terze parti. Le informazioni, i voti e le classifiche della vostra squadra sono privati e accessibili solo ai membri invitati tramite il codice squadra.',
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
