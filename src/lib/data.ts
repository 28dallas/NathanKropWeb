// ─── Site Data ───────────────────────────────────────────────────────────────
// Edit this file to update all content across the portfolio.

export const siteConfig = {
  name: 'Nathan Krop',
  aliases: ['NatePrince'],
  title: 'Full-Stack Engineer & Creative Dev',
  tagline: 'Building clean code that tells a story.',
  location: 'Nairobi & Eldoret, Kenya',
  email: 'neithank47@gmail.com',
  github: 'https://github.com/28dallas',
  whatsapp: 'https://wa.me/254702605566',
  tiktok: 'https://www.tiktok.com/@apex_bluesky?_r=1&_t=ZG-970Y8z0e6nA',
  facebook: 'https://www.facebook.com/share/1CBD6RLuBe/',
  instagram: 'https://www.instagram.com/tbagdallas?igsh=MWhxYWRvZThyN2thcQ==',
  livePortfolio: 'https://nathankrop.dev', // update when live
}

export const stats = [
  { num: '2+', label: 'Years Experience' },
  { num: '14+', label: 'Projects Shipped' },
  { num: '3', label: 'Creative Disciplines' },
  { num: '∞', label: 'Iterations' },
]

export const skillCategories = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', highlight: true },
      { name: 'Next.js', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'JavaScript', highlight: false },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'HTML5', highlight: false },
      { name: 'CSS3', highlight: false },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', highlight: false },
      { name: 'Supabase', highlight: true },
      { name: 'Python', highlight: false },
      { name: 'Ruby', highlight: false },
      { name: 'REST APIs', highlight: false },
      { name: 'PostgreSQL', highlight: false },
    ],
  },
  {
    label: 'Mobile & Tools',
    skills: [
      { name: 'Android Studio', highlight: false },
      { name: 'Kotlin', highlight: false },
      { name: 'Git / GitHub', highlight: false },
      { name: 'VS Code', highlight: false },
      { name: 'Cursor', highlight: false },
      { name: 'Ollama (Local AI)', highlight: false },
      { name: 'Claude Code', highlight: false },
    ],
  },
  {
    label: 'Media',
    skills: [
      { name: 'CapCut Pro', highlight: true },
      { name: 'Adobe Premiere Pro', highlight: false },
      { name: 'InShot', highlight: false },
      { name: 'Graphic Design', highlight: false },
      { name: 'Video Production', highlight: false },
    ],
  },
  {
    label: 'Writing',
    skills: [
      { name: 'Technical Documentation', highlight: true },
      { name: 'Content Creation', highlight: false },
      { name: 'Copywriting', highlight: false },
      { name: 'Storytelling', highlight: false },
      { name: 'English Literature', highlight: false },
    ],
  },
]

export const projects = [
  {
    num: '01',
    title: 'Her Lab Academy',
    description:
      'A full-stack e-learning platform for Perur Rays of Hope CBO in West Pokot County. Features enrollment code system, AI chatbot in English & Kiswahili, and 13 curated courses.',
    tech: ['Next.js 14', 'Supabase', 'Cloudinary', 'Tailwind', 'AI Chatbot'],
    link: 'https://her-lab-academy254-iqqe.vercel.app',
    linkLabel: 'View Project',
  },
  {
    num: '02',
    title: 'ReliableTanks',
    description:
      'A professional service website for a water tank repair and maintenance company in Kenya. Clean UI with service listings, contact flow, and mobile-first design.',
    tech: ['Next.js', 'Tailwind CSS', 'Responsive Design'],
    link: 'https://www.reliablewatertankrepair.co.ke',
    linkLabel: 'Live Site',
  },
  {
    num: '03',
    title: 'Event Connect',
    description:
      'A digital marketplace for discovering and hiring event service providers across Kenya. Features financial projections, automated workflows, and seamless booking.',
    tech: ['Next.js', 'M-Pesa API', 'Supabase', 'Automation'],
    link: 'https://eventconnect23.vercel.app',
    linkLabel: 'Live Site',
  },
  {
    num: '04',
    title: 'LuxuryCulture254',
    description:
      'An elegant luxury web experience with custom DNS configurations, SSL implementation, and a high-end editorial interface crafted for the Kenyan premium market.',
    tech: ['Next.js 15', 'Custom DNS', 'SSL', 'Premium UI'],
    link: 'https://www.luxuryculture254.com',
    linkLabel: 'Live Site',
  },
  {
    num: '05',
    title: 'Apex Bluesky Tools',
    description:
      'A multi-tool Next.js SaaS platform with 53+ productivity and developer tools. Fully owned and operated — architecture to deployment, solo.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'SaaS'],
    link: 'https://apexblueskytools.online',
    linkLabel: 'Live Site',
  },
  {
    num: '06',
    title: 'St. Elizabeth School Site',
    description:
      'A comprehensive school website for St. Elizabeth Girls Senior School Morpus, West Pokot — with M-Pesa Paybill integration, gallery lightbox, and counter animations.',
    tech: ['Next.js 14', 'M-Pesa Daraja', 'Animations'],
    link: 'https://st-elizabeth-taupe.vercel.app',
    linkLabel: 'View Project',
  },
  {
    num: '07',
    title: 'RaxTrading',
    description:
      'A sleek trading and investment platform interface built for the Kenyan market. Features a modern dashboard, clean financial UI, and responsive layout.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    link: 'https://raxtrade254.vercel.app',
    linkLabel: 'Live Site',
  },
  {
    num: '08',
    title: 'Perur Rays of Hope',
    description:
      'Official website for Perur Rays of Hope CBO — a community-based organisation in West Pokot. Showcases programmes, impact stories, and donation pathways.',
    tech: ['Next.js', 'Tailwind CSS', 'CBO Platform'],
    link: 'https://perurraysofhopeke.org',
    linkLabel: 'Live Site',
  },
  {
    num: '09',
    title: 'Grace CBO',
    description:
      'A community organisation website built to highlight outreach programmes, team profiles, and fundraising initiatives for Grace CBO in Kenya.',
    tech: ['Next.js', 'Tailwind CSS', 'Responsive Design'],
    link: 'https://gracecbo.org',
    linkLabel: 'Live Site',
  },
  {
    num: '10',
    title: 'Deriv Affiliate',
    description:
      'A high-converting affiliate marketing landing page for Deriv trading platform. Focused on persuasive copy, fast load times, and clear CTA flows.',
    tech: ['Next.js', 'Tailwind CSS', 'Vercel', 'Affiliate Marketing'],
    link: 'https://up-my-doller-omhg.vercel.app',
    linkLabel: 'Live Site',
  },
  {
    num: '11',
    title: 'Hydrosill Drillers',
    description:
      'A professional website for a borehole drilling company in Kenya. Features service breakdowns, project gallery, and a streamlined inquiry form.',
    tech: ['Next.js', 'Tailwind CSS', 'Vercel'],
    link: 'https://hydrosill.vercel.app',
    linkLabel: 'Live Site',
  },
  {
    num: '12',
    title: 'Sports Betting Platform',
    description:
      'A sports betting UI with live odds display, match listings, and a clean dashboard design optimised for engagement and fast navigation.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    link: 'https://betway4-auc6.vercel.app',
    linkLabel: 'Live Site',
  },
  {
    num: '13',
    title: 'DriveSasa',
    description:
      'A vehicle hire and car rental platform for the Kenyan market. Includes vehicle listings, booking flow, and a modern responsive interface.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    link: 'https://drive-sasa254.vercel.app',
    linkLabel: 'Live Site',
  },
  {
    num: '14',
    title: 'MegaLtd',
    description:
      'A corporate business website for Mega Ltd — clean company profile layout with service offerings, team section, and a professional responsive design.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    link: 'https://mega-ltd-pjrq.vercel.app',
    linkLabel: 'Live Site',
  },
]

export const creativeItems = [
  {
    icon: '🎵',
    title: 'Music & Recording Artist',
    description:
      'Rapper and performer as PrinceBreezy / NatePrince. Motivational content focused on growth, ambition, and East African identity.',
  },
  {
    icon: '🎬',
    title: 'Video Production & Editing',
    description:
      'CapCut Pro, Adobe Premiere, InShot. Sprite Kenya digital challenge participant. Custom Madaraka Day promotional graphics.',
  },
  {
    icon: '✍️',
    title: 'Technical Writing & Copywriting',
    description:
      'English Literature background applied to documentation, content strategy, and developer-facing copy that actually reads well.',
  },
  {
    icon: '💼',
    title: 'Freelance — Upwork & Fiverr',
    description:
      'Client-focused delivery across web dev, media production, and content creation. Reliable turnarounds, clean handoffs.',
  },
]
