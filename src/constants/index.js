import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  nextjs,
  sass,
  firebase,
  my_logo,
  offload,
  ventaco,
  shopify,
  offload_poster,
  schoolzone_poster,
  gamerange_poster,
  threejs,
  gitHub,
  twitter,
  linkedIn,
  medium,
  playstore,
  web_icon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Technical Writer",
    icon: creator,
  },
];

const socials = [
  {
    name: "GitHub",
    url: "https://www.github.com/jsjags",
    icon: gitHub,
    color: "violet",
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com/jsjags01",
    icon: twitter,
    color: "white",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jesse-abuaja",
    icon: linkedIn,
    color: "#0073b0",
  },
  {
    name: "Medium",
    url: "https://medium.com/@jsjags01",
    icon: medium,
    color: "turquoise",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    color: "bisque",
  },
  {
    name: "CSS 3",
    icon: css,
    color: "lightblue",
  },
  {
    name: "JavaScript",
    icon: javascript,
    color: "lightyellow",
  },
  {
    name: "TypeScript",
    icon: typescript,
    color: "white",
  },
  {
    name: "Three JS",
    icon: threejs,
    color: "silver",
  },
  {
    name: "React JS",
    icon: reactjs,
    color: "lightblue",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    color: "lavender",
  },
  {
    name: "Next JS",
    icon: nextjs,
    color: "#fffff0",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    color: "azure",
  },
  {
    name: "Node JS",
    icon: nodejs,
    color: "honeydew",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    color: "gainsboro",
  },
  {
    name: "firebase",
    icon: firebase,
    color: "white",
  },
  {
    name: "git",
    icon: git,
    color: "mistyrose",
  },
];

const experiences = [
  {
    title: "React JS Developer",
    company_name: "Freelance",
    icon: my_logo,
    iconBg: "#000000",
    date: "March 2020 - August 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Team OffLoad",
    icon: offload,
    iconBg: "#ffffff",
    date: "September 2022 - November 2022",
    points: [
      "Designed and implemented core architecture and features for software from prototype to operational application.",
      "Evaluated application responsiveness and eliminated bugs that increased application performance.",
      "Worked closely with the project manager and collaborated with the product designer and technical team to align application programming with design elements that positively impacted user-feedback.",
      "Implementing responsive design and ensuring compatibility for varying screen sizes.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Full stack Developer",
    company_name: "Ventaco Inc",
    icon: ventaco,
    iconBg: "#ffffff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Consuming and Integrating third-party APIs for data verification.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "OffLoad",
    description:
      "OffLoad is an Android application designed to create a safe place to track your emotions, identify your day to day stress points and to make you become more self aware of certain triggers.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "cyan-text-gradient",
      },
    ],
    image: offload_poster,
    source_code_link: "https://github.com/Co-Lab-You-Belong-in-Tech/OffLoad",
    live_url:
      "https://play.google.com/store/apps/details?id=com.jsjags01.HeadiesBox",
    live_url_icon: playstore,
    live_url_text: "View on Play Store",
  },
  {
    name: "SchoolZone",
    description:
      "Web application designed for schools that cannot afford quality administrative staff or employees to manage their data but need an easy, affordable or reliable alternative.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "gray-text-gradient",
      },
      {
        name: "redux",
        color: "purple-text-gradient",
      },
      {
        name: "mongodb",
        color: "cyan-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "styledcomponents",
        color: "pink-text-gradient",
      },
    ],
    image: schoolzone_poster,
    source_code_link: "https://github.com/JSjags/school-zone",
    live_url: "https://schoolzone.vercel.app",
    live_url_icon: web_icon,
    live_url_text: "View Live Demo",
  },
  {
    name: "GameRange",
    description:
      "Web application designed for gamers to read and create blog posts, checkout latest video game reviews, watch gameplay videos, game shows and game trailers.",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "gray-text-gradient",
      },
      {
        name: "ejs",
        color: "orange-text-gradient",
      },
      {
        name: "restapi",
        color: "purple-text-gradient",
      },
      {
        name: "mongodb",
        color: "cyan-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: gamerange_poster,
    source_code_link: "https://github.com/JSjags/gamerange-blog",
    live_url: "https://gamerange.onrender.com",
    live_url_icon: web_icon,
    live_url_text: "View Live Demo",
  },
];

const loadingStatus = [
  "Loading Assets",
  "Preparing Canvas",
  "Adding lights",
  "Everything is set",
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  loadingStatus,
};
