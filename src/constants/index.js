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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
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
    title: "Game Codes!",
    icon: web,
  },
  {
    title: "Gamer Merchandising",
    icon: mobile,
  },
  {
    title: "Retail Distribution",
    icon: backend,
  },
  {
    title: " Worldwide Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Switch game codes in a box!",
    company_name: "Game codes",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Gaming specialty retailers are thinning with less and less retailers to merchandise games.",
      "CRP is one of the leading exponents of Code in a Box products - which can and are being sold in mass market retailers in the USA and Europe and more retailers very very soon.",
      "CRP works with small or large publishers and developers to take their games - PC or Switch and get them in front of huge buying audiences.",
      "It's a value and volume play that expands the reach of those games we partner with AND delivers significant revenue.",
    ],
  },
  {
    title: "Gamer merchandise!",
    company_name: "Merchandise",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "One of the three pillars of GAAS - is Community (The other two are Revenue and Awareness) CRP can deliver the following - ",
      "1.Create wikis for you on Fandom and Wikia",
      "2.Create influencer led campaigns - using our partner Vidglo's influencers to drive gamers to your game and your merchandise store!",
      "3.Create and manage all the orders and deliver quality merchandise on time everytime",
      "4.Create Collector Editions that gamers will drool over and share with their gaming community.... Expanding your game awareness (see Pillar #3 above) ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Alternative retail distribution!",
    company_name: "Distribution",
    icon: shopify,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "CRP has over 20 years in working on models to distribute great games to gamers.",
      "In 2023 we've managed to blend physical and digital using an all new proprietary system to create retail theatre for gamers in physical retail outlets.",
      "Additionally we have over 200,000 outlets to deliver gaming content to - all over the globe from USA to China to MENA and other regions.",
      "This generates significant extra marketing and revenue opportunities for game makers for PC, Switch and other formats. ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rob is super well connected and totally understands the gaming business Quickly gave us the connections we needed to expand our audience and grow out community Clearly loves the games business and is liked and more importantly trusted.",
    name: "#1 game on Steam",
    designation: "Video Game Publisher",
    company: "Steam",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Rob has been around for years always comes to us with relevant propositions that are fully worked up and ready to go. There's been many occasions when he's just been a help and a support in some of our projects without any agenda. Always a good sounding board and trusted as a good partner.",
    name: "Global Gaming",
    designation: "Steam",
    company: "Physical Retailer ",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Rob comes with a great pedigree of having been in the gaming industry for years with an amazing black book of contacts. He knows what we need to achieve our growth and how to write, deliver and execute a strategic plan. He's fun to work with and loyal which is something we really value.",
    name: "Online Video Game Retailer",
    designation: "Game publisher",
    company: "Steam",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

export { services, technologies, experiences, testimonials };
