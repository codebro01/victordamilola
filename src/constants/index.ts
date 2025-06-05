import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#accomplishments", label: "Accomplishments" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export const SKILLS = [
  "Typescript", "JavaScript", "React", "Next.js", "Node.js", "Express.js", 
  "MongoDB", "PostgreSQL", "GraphQL", "REST APIs", "Tailwind CSS", "Mailchimp API"
];

export const SOCIAL_LINKS = [
  { href: 'https://github.com/codebro01', icon: Github, label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/samson-damilola-7145a01a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://x.com/_codebro',
    icon: Twitter,
    label: 'Twitter',
  },
  { href: 'mailto:samsondamilola.99@gmail.com', icon: Mail, label: 'Email' },
]

export const PROJECTS_DATA = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce application with features like product listings, cart, checkout, and user authentication.',
    image: '/img/u-shop.png',
    tags: ['Typescript', 'Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: 'https://github.com/codebro01/NextJS-Ecommerce',
    repoLink: 'https://github.com/codebro01/NextJS-Ecommerce',
    aiHint: 'online store',
  },
  {
    title: 'Poultry Automation System',
    description:
      'An automated system for managing poultry farms, enabling real-time monitoring and control of feeding, lighting, and climate conditions.',
    image: '/img/pms.jpg',
    tags: ['Node.js', 'Python', 'React JS', 'Mongodb', 'Graphql', "Rest API", 'Cloudinary', 'Auth'],
    liveLink: 'https://poultry-management-system-ten.vercel.app/',
    repoLink: 'https://github.com/codebro01/poultry-management-system.git',
    aiHint: 'poultry farm automation',
  },
  {
    title: 'Besmooth International Music',
    description:
      'A vibrant music school website showcasing expert-led courses, flexible scheduling, and personalized lessons for all skill levels, designed to inspire and nurture musical talent.',
    image: '/img/bim.png',
    tags: ['Typescript', 'Next js', 'Firebase', 'Tailwind css'],
    liveLink:
      'https://vercel.com/victor-damilolas-projects/bim-music-school-mvp/deployments',
    repoLink: 'https://github.com/codebro01/BIM-Music-School-MVP',
    aiHint: 'Music school',
  },
  {
    title: 'Financial Institution Website',
    description:
      'Sopura Business Concept offers secure, user-friendly payment processing, empowering businesses and individuals with fast, innovative transactions and dedicated support.',
    image: '/img/sopurabiz.png',
    tags: ['Javascript', 'React js', 'Material UI'],
    liveLink: 'https://www.sopurabiz.com.ng/',
    repoLink: 'https://github.com/codebro01/sopura',
    aiHint: 'Finance Institution',
  },
  {
    title: 'Church Website',
    description:
      'The Redeemed Christian Church of God Shekinah Zonal Headquarters Kabba is a welcoming family dedicated to worship, spiritual growth, and serving the community with love and faith',
    image: '/img/rccg-shekinah.jpg',
    tags: [
      'Javascript',
      'Node js',
      'React js',
      'Rest API',
      'Cloudinary',
      'Auth',
    ],
    liveLink: 'https://rccgshekinah.netlify.app/',
    repoLink: 'https://github.com/codebro01/rccg_shekinah_react_app',
    aiHint: 'Religious Institution',
  },
  {
    title: 'Data Collection System',
    description:
      'A user-friendly web app for secondary schools to efficiently collect, manage, and analyze government-related data, ensuring compliance and streamlined reporting.',
    image: '/img/Government Data Collection.png',
    tags: [
      'Javascript',
      'Node js',
      'React js',
      'Rest API',
      'Cloudinary',
      'Auth',
    ],
    liveLink: 'https://kogiagile.org/',
    repoLink: 'https://github.com/codebro01/kogi_agile_app',
    aiHint: 'Data Collection System',
  },
]

export const TESTIMONIALS_DATA = [
  {
    quote: "Working with Victor was a pleasure. He is not only technically proficient but also a great communicator. He consistently exceeded our expectations.",
    name: "Mr. Lawal",
    title: "CEO, Lawal Tech Intl",
    image: "/img/mr lawal.jpg",
    aiHint: "business person",
  },
  {
    quote: "Victor is an exceptional developer. His ability to quickly understand complex requirements and deliver high-quality solutions is truly impressive. He was a key player in our project's success.",
    name: "Mr. Job",
    title: "Senior Python Developer",
    image: "/img/jobic.jpg",
    aiHint: "person portrait",
  },
];

export const ACCOMPLISHMENTS_DATA = [
  {
    title: 'Built An Enterprise Level Data Collection System',
    description:
      'Developed a secure web app for secondary schools using the MERN stack, enabling efficient collection, storage, and management of government-required student data with dynamic forms and role-based access control.',
    year: '2024',
    icon: 'Database', // Placeholder for an appropriate Lucide icon or SVG
  },
  {
    title: 'Improved API Performance by 40%',
    description:
      'Optimized backend services and database queries, resulting in a 40% reduction in API response times for a high-traffic application.',
    year: '2022',
    icon: 'Zap', // Placeholder
  },
  {
    title: 'Speaker at DevConf 2021',
    description:
      "Presented a talk on 'Modern Frontend Architectures with Next.js' to an audience of over 200 developers.",
    year: '2021',
    icon: 'Mic', // Placeholder
  },
  {
    title: 'Added ML to Poultry Automation System',
    description:
      'I added a health status prediction system for poultry management using python, integrating real-time data analysis and predictive algorithms to monitor and optimize poultry health.',
    year: '2025',
    icon: 'BrainCog',
  },
]

export const BLOG_POSTS_DATA = [
  {
    title:
      'Reddit sues AI startup Anthropic for allegedly using data without permission',
    date: '2025-June-04',
    summary:
      'Reddit sued the artificial intelligence startup Anthropic on Wednesday, accusing it of stealing data from the social media discussion website to train its AI models despite publicly assuring it wouldn"t.',
    slug: 'https://www.reuters.com/business/reddit-sues-ai-startup-anthropic-allegedly-using-data-without-permission-2025-06-04/',
    image: '/img/Reddit-Logo.webp',
    aiHint: 'Reddit sues Anthropic',
  },
  {
    title:
      'Democratic AI Revolution: Power to the People and Code to the Masses',
    date: '2025-05-19',
    summary:
      'In a world increasingly shaped by algorithms and artificial intelligence, the notion of democratizing its creation, access, and governance offers a powerful counterpoint to the centralized control often associated with Big Tech',
    slug: 'https://www.technewsworld.com/story/democratic-ai-revolution-power-to-the-people-and-code-to-the-masses-179743.html',
    image: '/img/AI Revoluation.jpg',
    aiHint: 'AI Revolution',
  },
]

export const START_DATE_EXPERIENCE = "2020-01-01";
