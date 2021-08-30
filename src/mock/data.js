import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Eduardo | Front-End Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi, I'm`,
  name: 'Eduardo Pereira',
  subtitle: 'A Front-End Developer',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'Graduated as a Computer Technician by ETEC Prof. Alfredo de Barros Santos, I am currently a student of the Kenzie Academy Brasil in Full Stack Web Development training and majoring in Software Engineering. Every day I put my knowledge into practice in order to improve techniques and soft-skills applied to my area of ​​interest.',
  paragraphTwo:
    'I have knowledge in: Html5, CSS3, Bootstrap, Tailwind, Javascript ES6+, React, Redux, Context API, Styled Components, Material UI, React Testing Library, Git, Linux and notions of UI / UX, Figma, Adobe Photoshop and experience in Scrum and Kanban.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'kenzie-shop.png',
    title: 'Kenzie Shop TS',
    info: 'Kenzie Shop TS is an e-commerce for the sale of cell phones of the most varied models. It has Login, Registration, Product Selection and Shopping Cart functionalities. It was developed using Typescript, as a first contact with technology and its employability in a project of this type.',
    info2: '',
    url: 'https://kenzie-shop-ts-peach.vercel.app/',
    repo: 'https://github.com/EduhPereira/kenzie-shop-ts', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'self-care.png',
    title: 'SelfCare',
    info: 'SelfCare is a web application for managing habits. Aiming at the user experience, all elements, navigation and actions were designed with a focus on practicality and ease, keeping the design simple and intuitive. It has Login, Logoff, Profile Editing, Adding, Editing and Deleting a Habit functions, in addition to allowing the user to search for groups that share common goals among its members. For such features, the API "HABITS API" was used.',
    info2: '',
    url: 'https://self-care.vercel.app/',
    repo: 'https://github.com/EduhPereira/self-care', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'kenzie-shop-past.png',
    title: 'Kenzie Shop',
    info: 'The Kenzie Shop is intended to serve as training for Redux technology. Through it, the "customer" can choose one of the products listed, and it is added to the cart. Redux gets into the role of managing states and providing information globally, avoiding the "prop drilling" process.',
    info2: '',
    url: 'https://kenzie-shop-sage.vercel.app/',
    repo: 'https://github.com/EduhPereira/Kenzie-Shop', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'kenzie-hub.png',
    title: 'Kenzie Hub',
    info: 'Proposed as the final delivery of the 2nd sprint of the Kenzie Academy Brazil React module, the project is based on creating a platform to serve as a portfolio to students, where new technologies and their respective levels of knowledge can be registered. Its implemented functionalities are: Login, Logoff, Registration, Profile View, and finally, Addition / Removal of studied technologies',
    info2: '',
    url: 'https://kenzie-hub-psi-orpin.vercel.app/',
    repo: 'https://github.com/EduhPereira/kenzie-hub', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'triwizard.png',
    title: 'TriWizard',
    info: 'Proposed as the last delivery of the first sprint in the second training module at Kenzie Academy Brazil, TriWizard is based on consuming data from an API and drawing three students as participants in the tournament.',
    info2: '',
    url: 'https://triwizard-tournament-nu.vercel.app/',
    repo: 'https://github.com/EduhPereira/TriWizard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'kenzie-burger.png',
    title: 'Kenzie Burger',
    info: 'Proposed as the first delivery of the second module at Kenzie Academy Brazil, Kenzie Burger consists of a menu interface containing items from a burger shop, which can be searched and/or added to and removed from a cart, and maintains a constant price update based on what items were added in the purchase made.',
    info2: '',
    url: 'https://kenzie-burger-two.vercel.app/',
    repo: 'https://github.com/EduhPereira/kenzie-burger', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gold-saucer.png',
    title: 'Gold Saucer',
    info: 'The Gold Saucer platform brings together longing 2d games developed in Javascript and some lucky ones for the fun of the most different audiences',
    info2: '',
    url: 'https://gold-saucer.vercel.app/',
    repo: 'https://github.com/EduhPereira/gold-saucer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather.png',
    title: 'Weather Forecast',
    info: 'Aiming to train the knowledge base in data treatment coming from an API, the application "Weather Forecast" was conceived. Using two public APIs, it allows the user to search his city / state / country and see weather conditions.',
    info2: '',
    url: 'https://weather-app-alpha-umber.vercel.app/',
    repo: 'https://github.com/EduhPereira/weather-app', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to talk with me? Awesome!',
  btn: '',
  email: 'augusto.pereira.contato@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/eduardo-pereira-75375b209/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/EduhPereira',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
