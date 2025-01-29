// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'aperbet56', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 30, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['aperbet56/P2_site_booki_Perbet_Annabelle', 'aperbet56/P3_Ohmyfood_Perbet_Annabelle_042022', 'aperbet56/P4_Agence_Lapanthere_Perbet_Annabelle_05_2022', 'aperbet56/P5_Kanap_Perbet_Annabelle_06_2022', 'aperbet56/Piiquante_Perbet_Annabelle', 'aperbet56/P7DW_Kasa_Perbet_Annabelle_09_2022', 'aperbet56/wikipedia_app', 'aperbet56/frontend-mentor_recipe_page', 'aperbet56/hair_and_barber_shop', 'aperbet56/robbie_lens_photograph', 'aperbet56/restaurant_japonais', 'aperbet56/image_editor', 'aperbet56/jeu_devine_le_nombre', 'aperbet56/file_upload', 'aperbet56/national_geographic_slider', 'aperbet56/music_player', 'aperbet56/suivi_recettes_depenses', 'aperbet56/countries_app', 'aperbet56/url_shortener', 'aperbet56/qr_code_with_form', 'aperbet56/memory_game', 'aperbet56/jeu_morpion', 'aperbet56/timeline_verticale', 'aperbet56/multiplication_app', 'aperbet56/calendrier_dynamique_devenement', 'aperbet56/interactive_rating_component', 'aperbet56/testimonials_grid_blog', 'aperbet56/social_media_dashboard', 'aperbet56/sunnyside_agency', 'aperbet56/quiz_football_ligue_1', 'aperbet56/imc__calculator' ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Extension Chrome : Page Print',
          description:
            "Création d'une extension Chrome nommée page print qui permet à l'utilisateur d'imprimer la page web sur laquelle il se trouve.",
          imageUrl:
            'https://img.freepik.com/vecteurs-libre/illustration-industrie-impression_23-2148880435.jpg?t=st=1738081471~exp=1738085071~hmac=3732696fdeb5fc97b64cdb3affa69deaf3798bc14bf6185449ce370a15c44ca7&w=740',
          link: 'https://github.com/aperbet56/page_print_chrome_extension',
        },
        {
          title: 'Extension Chrome Page Translator',
          description:
            "Création d'une extension Chrome nommée Page Translator qui permet à l'utilisateur de traduire la page web sur laquelle il se trouve en fonction du langage qu'il a choisi au préalable.",
          imageUrl:
            'https://img.freepik.com/vecteurs-libre/illustration-dessinee-main-services-traduction_23-2151109064.jpg?t=st=1738081229~exp=1738084829~hmac=ca2cddb94756b80b361b55bdfc5ac799e69b52c6ab17b99be2587b7cfaf36b7b&w=740',
          link: 'https://github.com/aperbet56/extension_chrome_page_translator',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio Annabelle PERBET',
    description: 'Portfolio présentant les diplômes obtenus, les expériences professionnelles, les langages de programmation et les technologies maîtrisés, les projets réalisés par Annabelle PERBET',
    imageURL: '',
  },
  social: {
    linkedin: 'Annabelle PERBET',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://aperbet56.github.io/',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'Git',
    'HTML5',
    'Bootstrap5',
    'CSS3',
    'Sass',
    'Express',
    'MongoDb',
    'Github',
    'Postman',
    'TypeScript',
    'Figma'
  ],
  experiences: [
    {
      company: 'OpenClassrooms',
      position: 'Développeur web apprenant : Travail sur des projets professionnalisants',
      from: 'Mars 2022',
      to: 'Novembre 2022',
      companyLink: '',
    },
    {
      company: '',
      position: "Garde d'enfants",
      from: 'Mars 2017',
      to: 'Août 2018',
      companyLink: '',
    },
     {
      company: '',
      position: "Garde d'enfants",
      from: 'Septembre 2014',
      to: 'Avril 2016',
      companyLink: '',
    },
    {
      company: 'Ecole publique : Les Vastres',
      position: 'Accompagnement du professeur des écoles',
      from: 'Avril 2012',
      to: 'Mai 2012',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Titre RNCP de niveau 5 : Développeur - intégrateur web',
      body: "Apprentissage de langages de programmation et réalisation de projets profesionnalisants comme la construction des sites web responsives et dynamiques, la création des APIs et des bases de données sécurisées, l'optimisation des performances et la réalisation la maintenance de sites web déjà existants, l'amélioration du référencement naturel (SEO)...",
      year: 'Mars 2022 - Novembre 2022',
      link: 'https://example.com',
    },
    {
      name: 'Master 2 Recherche Espagnol',
      body: "Réalisation d'un mémoire entièrement en espagnol, traduction de textes espagnol en français et de textes français en espagnol",
      year: 'Septembre 2013 - Juin 2014',
      link: 'https://example.com',
    },
    {
      name: 'Master 1 Recherche Espagnol',
      body: "Réalisation d'un mémoire entièrement en espagnol, traduction de textes espagnol en français et de textes français en espagnol",
      year: 'Septembre 2012 - Juin 2013',
      link: 'https://example.com',
    },
    {
      name: "Licence d'Espagnol",
      body: 'Cours en espagnol, civilisations, rédactions de commentaires de texte, traductions de texte, apprentisage du portugais...',
      year: 'Septembre 2009 - Juin 2012',
      link: 'https://example.com',
    },
    {
      name: 'Baccalauréat Economique et Sociale',
      body: 'Cours de maths, histoire - géographie, espagnol, anglais, sciences économiques et sociales...',
      year: 'Septembre 2008 - Juin 2009',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'OpenClassrooms',
      degree: 'Titre RNCP de niveau 5 : Développeur - intégrateur web',
      from: '2022',
      to: '2022',
    },
    {
      institution: 'Université Jean-Monnet de Saint-Etienne',
      degree: 'Licence et Master Espagnol',
      from: '2009',
      to: '2014',
    },
    {
      institution: 'Lycée Sacré-Coeur Yssingeaux',
      degree: 'Baccalauréat économique et sociale',
      from: '2006',
      to: '2009',
    },
    {
      institution: 'Collège Saint-Pierre Saint-Anne Yssingeaux',
      degree: 'Brevet des collèges',
      from: '2002',
      to: '2006',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
   source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'winter',
      'dark',
      'black',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `<a 
      class="text-primary" href="https://github.com/aperbet56"
      target="_blank"
      rel="noreferrer"
    >aperbet56</a>`,

  enablePWA: true,
};

export default CONFIG;
