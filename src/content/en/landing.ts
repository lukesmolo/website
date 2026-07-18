import type { LandingContent } from '../types';

/**
 * Landing content — ENGLISH.
 * Recreated from the Italian copy, not translated word-for-word:
 * same locker-room banter, English idioms.
 */
export const landing: LandingContent = {
  hero: {
    headline: 'Fantasy football, straight from the locker room.',
    sub: 'Panka is the fantasy game where you field your own teammates. The real ones.',
    cta: 'Download the app',
    screenshot: {
      src: 'dashboard.png',
      alt: 'The Panka dashboard: your player card, the next match and the leaderboard',
    },
  },

  intro: {
    title: 'Ever picked yourself in fantasy?',
    body: 'With Panka you play fantasy on your own real matches, fielding yourself and your teammates. Before kick-off you pick your lineup: if the players you chose deliver on the pitch, you climb the table. Fantasy is no longer just a sofa game.',
    screenshot: {
      src: 'player-card.png',
      alt: 'The Panka player card with photo, position, credit value and vote history',
    },
  },

  howItWorks: {
    title: 'How it works',
    steps: [
      {
        title: 'Download the app and find your team.',
        body: 'You join your squad with an invite code. You and your teammates each get a value in credits, based on your position and what you have actually shown on the pitch.',
        screenshot: {
          src: 'onboarding.png',
          alt: 'The Panka team onboarding screen with the invite code',
        },
      },
      {
        title: 'Pick your lineup.',
        body: 'Before the match you choose who to field. You have a credit budget and you cannot afford everyone: you have to commit to a plan. You can even field fewer than 11 to afford the expensive players, while squad bonuses reward the braver calls.',
        screenshot: {
          src: 'lineup.png',
          alt: 'Panka lineup builder: the squad list with player costs and remaining budget',
        },
      },
      {
        title: 'Find out the gaffer’s ratings.',
        body: 'After the match the coach (or an admin) enters the ratings. The better your picks play, the higher your score. The app does all the maths with real ratings, goals and the modifiers your team has set, and updates the leaderboard.',
        screenshot: {
          src: 'field-votes.png',
          alt: 'The Panka pitch view with the fielded lineup and each player’s rating',
        },
      },
    ],
  },

  why: {
    title: 'Why play Panka',
    blocks: [
      {
        title: 'Because you field the people you play with',
        body: 'You are backing your full-back who makes one covering run a season, your captain who plays strapped up in four ankle braces, the super-sub who gets one minute but has a wand of a foot — or yourself. No TV superstars: you build your lineup with the same people you walk off the pitch with every week.',
      },
      {
        title: 'Because it keeps everything in one place',
        body: 'Lineups, ratings, report cards, the table. All inside the app. No more squinting at blurry photos in the group chat or waiting for a league portal to update.',
      },
      {
        title: 'Because it’s a game within the game',
        body: 'If your lot already give 110% on the pitch, now there is one more reason. Even a sprint or a sliding tackle can be worth the half-point that wins you the matchday.',
      },
      {
        title: 'Because the banter is guaranteed',
        body: '“I picked you today — get me a worldie, yeah?”. Panka lights up the dressing room before kick-off and keeps the team chat going all week long.',
      },
    ],
    photoAlt: 'Amateur football match: players on the pitch at sunset',
    roles: {
      title: 'Who does what in the app',
      intro: 'Every team has players and staff (coach or admin). Here is who can do what:',
      playerLabel: 'Player',
      staffLabel: 'Coach / Admin',
      adminOnlyLabel: 'Admin only',
      yesLabel: 'Yes',
      noLabel: '—',
      rows: [
        { feature: 'Field their own lineup within the credit budget', player: 'yes', staff: 'yes' },
        { feature: 'See ratings, report cards and the leaderboard', player: 'yes', staff: 'yes' },
        { feature: 'Appear in the fantasy leaderboard', player: 'yes', staff: 'admin' },
        { feature: 'Upload their photo and manage their profile', player: 'yes', staff: 'yes' },
        { feature: 'Create matches and call up players', player: 'no', staff: 'yes' },
        { feature: 'Enter ratings and report cards after the match', player: 'no', staff: 'yes' },
        { feature: 'Close the match and calculate the scores', player: 'no', staff: 'yes' },
        { feature: 'Manage the roster and player credit values', player: 'no', staff: 'yes' },
        { feature: 'Set bonuses, modifiers and the budget', player: 'no', staff: 'admin' },
        { feature: 'Create tournaments and manage seasons', player: 'no', staff: 'yes' },
        { feature: 'Generate invite codes and manage members', player: 'no', staff: 'admin' },
        { feature: 'Medical certificates, dues and training sessions', player: 'no', staff: 'yes' },
      ],
    },
  },

  audiences: {
    title: 'If you play football with a real team, Panka is for you.',
    items: [
      {
        title: 'Amateur teams',
        body: 'Seven-a-side and eleven-a-side. The Monday-night league or the Sunday-morning kickabout.',
      },
      {
        title: 'Local leagues and grassroots competitions',
        body: 'Amateur federations and local leagues that want to give their members an official app and one more reason to show up.',
      },
      {
        title: 'Youth teams',
        body: 'Junior sides that want to build team spirit and get fired up with modern game dynamics.',
      },
      {
        title: 'Groups of friends',
        body: 'Anyone who organises a weekly game and wants to turn the kickabout into a fantasy league.',
      },
    ],
  },

  testimonials: {
    title: 'What they say about Panka',
    items: [
      {
        quote: 'The one week I leave myself out, I score from 30 yards. Panka is a strange game, Beppe.',
      },
      {
        quote: 'We put a post-match pint on it every matchday. One more reason to leave everything out there!',
      },
      {
        quote: 'Our squad was already mad about fantasy football, but the beauty of Panka is that you play it on your own pitch.',
      },
    ],
  },

  comingSoon: {
    title: 'Coming soon',
    /* TO BE COMPLETED: "Coming soon" section content.
       The section stays off while flags.comingSoon is false in src/config.ts */
    items: [],
  },

  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'Is Panka free?',
        answer:
          'Yes. Panka is in its pilot phase and the app is completely free. Optional premium features may come later, but the core game — lineups, ratings, leaderboard — will remain available to your team.',
      },
      {
        question: 'Is it football only?',
        answer:
          'Today Panka is built for football, seven-a-side and eleven-a-side. The architecture is already prepared for other team sports though: that is a future plan we are working on.',
      },
      {
        question: 'Who enters the ratings?',
        answer:
          'The coach or a team admin, after every match: a 0–10 rating (half points allowed) plus goals, assists and cards. The app calculates the fantasy scores on its own and updates the leaderboard.',
      },
      {
        question: 'How many players do we need? Does everyone have to install the app?',
        answer:
          'No, not everyone needs the app. Whoever manages the team creates a card for every player: teammates without the app still appear in the roster, get rated and can be fielded. The app is only needed by those who want to set their own lineup and play fantasy — and even a handful of participants is enough to start.',
      },
      {
        question: 'How do the modifiers work?',
        answer:
          'Every team sets its own rules. There are individual bonuses and penalties (for example goal +3, assist +1, yellow card −0.5), department bonuses when your defence, midfield or attack all play well together, and a goalkeeper bonus when your number 1 has a blinder. The admin can tune every value and the credit budget from the settings.',
      },
      {
        question: 'Is my data safe?',
        answer:
          'Yes. Your team’s data lives on secure cloud infrastructure, is visible only to members of your group, and is never sold or shared with third parties for commercial purposes. You can request the deletion of your account and data at any time.',
      },
    ],
  },

  finalCta: {
    title: 'Bring fantasy into your locker room.',
  },

  contact: {
    title: 'Contact us',
    intro: 'Want to bring Panka to your team, or just to know more? Leave your details and we will help you set up your group.',
    fields: {
      name: { label: 'Full name', placeholder: 'Alex Smith' },
      email: { label: 'Email', placeholder: 'alex.smith@email.com' },
      team: { label: 'Team name (optional)', placeholder: 'Sunday League FC' },
      message: { label: 'Message', placeholder: 'Tell us about your team…' },
    },
    submit: 'Send request',
    sending: 'Sending…',
    success: 'Request sent! We will get back to you shortly.',
    errorGeneric: 'Something went wrong. Try again in a few minutes or write to us directly.',
    errorValidation: {
      name: 'Enter your full name',
      email: 'Enter a valid email address',
      message: 'Write a message',
    },
    privacyNote: 'By sending you accept our privacy policy. No spam, promise.',
  },
};
