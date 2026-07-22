import type { LandingContent } from '../types';

/**
 * Landing content — ENGLISH.
 * Recreated from the Italian copy, not translated word-for-word:
 * same locker-room banter, English idioms.
 */
export const landing: LandingContent = {
  hero: {
    headline: 'Fantasy football, straight from the locker room.',
    highlight: 'Fantasy football',
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
        body: 'You join your squad with an invite code. You and your teammates each get a value in credits, based on your position and what you have actually shown on the pitch. Don’t take it personally if the striker is worth more than you!',
        screenshot: {
          src: 'onboarding.png',
          alt: 'The Panka team onboarding screen with the invite code',
        },
      },
      {
        title: 'Pick your lineup.',
        body: 'Before the match you choose who to field. You have a credit budget and you cannot afford everyone: you have to commit to a plan. You can even leave a few slots empty to afford the expensive players, while modifiers reward the braver calls.',
        screenshot: {
          src: 'lineup.png',
          alt: 'Panka lineup builder: the squad list with player costs and remaining budget',
        },
      },
      {
        title: 'Find out the gaffer’s ratings.',
        body: 'This is where the tension kicks in. After the match the coach (or an admin) enters the ratings. The better your picks play, the higher your score. The app does all the maths with real ratings, goals and the modifiers your team has set, and updates the leaderboard.',
        screenshot: {
          src: 'field-votes.png',
          alt: 'The Panka pitch view with the fielded lineup and each player’s rating',
        },
      },
    ],
  },

  why: {
    title: 'Why play Panka',
    player: {
      label: 'If you’re a player',
      reasons: [
        {
          title: 'You field the people you play with',
          body: 'Forget TV superstars: here you put everything on your full-back who makes one covering run a season, on your captain strapped into four ankle braces and — if you’ve got the nerve — on yourself.',
        },
        {
          title: 'A game within the game',
          body: 'If you already give everything for the shirt, now you’ll give everything for Panka too. Every sprint, recovery run or last-minute cross is worth that extra half-point that wins you the matchday.',
        },
        {
          title: 'All your stats in your pocket',
          body: 'Average rating, goals, assists and how your performances trend through the season. All saved on your personal profile.',
        },
        {
          title: 'Banter guaranteed',
          body: '“I picked you today — get me a worldie, yeah?”. Panka lights up the dressing room before kick-off and keeps the team chat going all week long.',
        },
      ],
    },
    coach: {
      label: 'If you’re a coach',
      reasons: [
        {
          title: 'No more scattered sheets and lost files',
          body: 'Track training attendance, paid dues and medical check-up deadlines straight from the app.',
        },
        {
          title: 'Call everyone up with one tap',
          body: 'Build your match-day squad list on Panka and send it automatically to the team’s WhatsApp group, formatted and ready with all the match info.',
        },
        {
          title: 'Quick and easy ratings',
          body: 'Enter the ratings at full time from the app. Panka does all the fantasy-point maths for the whole team automatically. You’ve never seen your lads this motivated.',
        },
        {
          title: 'Your roster under control',
          body: 'All your squad’s stats at your fingertips. One glance is enough to see who’s in form and who’s earned a spell on the bench.',
        },
      ],
    },
    photoAlt: 'Football goal on an amateur pitch, with the Panka logo',
  },

  audiences: {
    title: 'Who Panka is for',
    body: 'Panka is for everyone, whether you play in a serious league or meet up on Tuesday nights for a game with friends. The level doesn’t matter: if there’s a team, there’s a fantasy league to play in the locker room. Right now we only support football, but we’re already working on bringing in other team sports.',
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
    intro: 'Panka is already good to go — arguments included — but we’re building new features for the seasons ahead. Here’s what’s landing in the app soon:',
    items: [
      {
        title: 'Custom avatars',
        body: 'Create your own digital caricature in the app and make your card one of a kind.',
      },
      {
        title: 'Ready-to-share social graphics',
        body: 'Automatically generate cards for the matchday MVPs, the Top 11, results or the leaderboard, ready to post on your socials.',
      },
      {
        title: 'Automatic dynamic pricing',
        body: 'Player credit values will rise and fall automatically through the season, calculated by an algorithm based on real ratings.',
      },
      {
        title: 'Advanced stats',
        body: 'Performance charts and a detailed history of your season, just like the pros.',
      },
      {
        title: 'AI assistant',
        body: 'A virtual helper built on the stats to pick your best possible lineup every matchday.',
      },
      {
        title: 'Awards and trophies',
        body: 'Custom trophies, celebration cards and everything you need to gloat right in your teammates’ faces.',
      },
    ],
  },

  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'Is Panka free?',
        answer:
          'Yes. You download the app, join your group and start playing. No subscription, no hidden costs. Except the round of beers you’ll owe the winner.',
      },
      {
        question: 'Can I use Panka for another sport?',
        answer:
          'If you play basketball, volleyball, rugby or anything else and want to try it, write to us. Right now we’re tuned for football, but we’re already working on covering other team sports — and we need teams up for anything to test the new versions!',
      },
      {
        question: 'Who enters the ratings and report cards?',
        answer:
          'The coach, a club official, or whoever in the team has the will — and the nerve — to hand out ratings. Whoever manages the group enters them straight from the app at full time, and from that moment anything can happen in the locker room.',
      },
      {
        question: 'How many players do we need?',
        answer:
          'How many friends do you usually play fantasy football with? Exactly. The more of you there are, the more fun it gets, but there’s no minimum to start (we suggest at least 5 of you). And if someone in the team can’t be bothered to download the app, no problem: an admin can add the whole roster anyway, so you can field even those who haven’t signed up yet.',
      },
      {
        question: 'How do the modifiers work?',
        answer:
          'Just like classic fantasy football: meet certain criteria (say, a particular formation or a high goalkeeper rating) and you unlock bonus points added to your score. Modifiers are there to reward tactics, but they’re not mandatory: you can decide together whether to use them, how to customise them, or to ignore them entirely and keep things classic. Your locker room, your rules.',
      },
      {
        question: 'Is my data safe?',
        answer:
          'Yes. Panka doesn’t share data with third parties. Your team’s info, ratings and leaderboards are private and only accessible to the members invited with the team code.',
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
