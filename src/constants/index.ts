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
  "JavaScript", "React", "Next.js", "Node.js", "Express.js", 
  "MongoDB", "PostgreSQL", "GraphQL", "REST APIs", "Tailwind CSS", "Mailchimp API"
];

export const SOCIAL_LINKS = [
  { href: "https://github.com/victordamilola", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/victordamilola", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/victordamilola", icon: Twitter, label: "Twitter" },
  { href: "mailto:victor.damilola@example.com", icon: Mail, label: "Email" },
];

export const PROJECTS_DATA = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with features like product listings, cart, checkout, and user authentication.",
    image: "https://placehold.co/600x400.png",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    repoLink: "#",
    aiHint: "online store",
  },
  {
    title: "Dev Blog CMS",
    description: "A content management system for a developer blog, allowing easy creation and management of articles.",
    image: "https://placehold.co/600x400.png",
    tags: ["React", "Express.js", "PostgreSQL", "GraphQL"],
    liveLink: "#",
    repoLink: "#",
    aiHint: "blog platform",
  },
  {
    title: "Marketing Campaign Tool",
    description: "Integrated Mailchimp API for managing email campaigns and analyzing results for a marketing agency.",
    image: "https://placehold.co/600x400.png",
    tags: ["Node.js", "Mailchimp API", "REST APIs"],
    liveLink: "#",
    repoLink: "#",
    aiHint: "email marketing",
  },
];

export const TESTIMONIALS_DATA = [
  {
    quote: "Victor is an exceptional developer. His ability to quickly understand complex requirements and deliver high-quality solutions is truly impressive. He was a key player in our project's success.",
    name: "Jane Doe",
    title: "Project Manager, Tech Solutions Inc.",
    image: "https://placehold.co/100x100.png",
    aiHint: "person portrait",
  },
  {
    quote: "Working with Victor was a pleasure. He is not only technically proficient but also a great communicator. He consistently exceeded our expectations.",
    name: "John Smith",
    title: "CEO, Innovate Startups",
    image: "https://placehold.co/100x100.png",
    aiHint: "business person",
  },
];

export const ACCOMPLISHMENTS_DATA = [
  {
    title: "Lead Developer on Award-Winning App",
    description: "Led a team of 5 developers to build a mobile-first web application that won the 'Innovation in Tech 2023' award.",
    year: "2023",
    icon: "Award", // Placeholder for an appropriate Lucide icon or SVG
  },
  {
    title: "Improved API Performance by 40%",
    description: "Optimized backend services and database queries, resulting in a 40% reduction in API response times for a high-traffic application.",
    year: "2022",
    icon: "Zap", // Placeholder
  },
  {
    title: "Speaker at DevConf 2021",
    description: "Presented a talk on 'Modern Frontend Architectures with Next.js' to an audience of over 200 developers.",
    year: "2021",
    icon: "Mic", // Placeholder
  },
];

export const BLOG_POSTS_DATA = [
  {
    title: "Deep Dive into Next.js 14 Server Components",
    date: "2024-03-15",
    summary: "Exploring the power and flexibility of Server Components in Next.js 14, and how they reshape web development.",
    slug: "nextjs-14-server-components",
    image: "https://placehold.co/600x300.png",
    aiHint: "code screen",
  },
  {
    title: "GraphQL vs REST: Choosing the Right API Strategy",
    date: "2024-02-20",
    summary: "A comprehensive comparison of GraphQL and REST APIs, helping you decide which is best for your next project.",
    slug: "graphql-vs-rest",
    image: "https://placehold.co/600x300.png",
    aiHint: "network diagram",
  },
];

export const START_DATE_EXPERIENCE = "2018-01-01";
