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
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 30, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio de Annabelle PERBET',
    description: '',
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
    'Express',
    'MongoDb',
    'Github',
    'Postman',
    'TypeScript',
    'Figma'
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Titre RNCP de niveau 5 : Développeur-intégrateur web',
      body: 'Apprentissage de langages de programmation et réalisation de projets profesionnalisants',
      year: 'Mars 2022-Novembre 2022',
      link: 'https://example.com',
    },
    {
      name: 'Master 2 Recherche Espagnol',
      body: 'Réalisation d'un mémoire entiérement en espagnol',
      year: 'Septembre 2013-Juin 2014',
      link: 'https://example.com',
    },
    {
      name: 'Master 1 Recherche Espagnol',
      body: 'Cours en espagnol, traductions de texte...',
      year: 'Septembre 2012-Juin 2013',
      link: 'https://example.com',
    },
    {
      name: 'Licence d'Espagnol',
      body: 'Cours en espagnol, civilisations, rédactions de commentaires de texte, traductions de texte...',
      year: 'Septembre 2009-Juin 2012',
      link: 'https://example.com',
    },
    {
      name: 'Baccalauréat Economique et Sociale',
      body: 'Cours de maths, histoire - géographie, espagnol, anglais, sciences économiques et sociales...',
      year: 'Septembre 2008-Juin 2009',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'OpenClassrooms',
      degree: 'Titre RNCP',
      from: '2022',
      to: '2022',
    },
    {
      institution: 'Université Jean-Monnet de Saint-Etienne',
      degree: 'Licence et Master',
      from: '2009',
      to: '2014',
    },
    {
      institution: 'Lycée Sacré-Coeur Yssingeaux',
      degree: 'Baccalauréat',
      from: '2006',
      to: '2009',
    },
    {
      institution: 'Collège Saint-Pierre Saint-Anne Yssingeaux',
      degree: 'Brevet',
      from: '2002',
      to: '2006',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
   source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
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
    defaultTheme: 'light',

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
      'light',
      'dark',
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
