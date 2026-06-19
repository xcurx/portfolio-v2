export const personalInfo = {
  name: "Sujal Kachhawah",
  firstName: "Sujal",
  initials: "SK",
  title: "Fullstack Developer",
  location: "Nagpur, India",
  email: "suj5al78@gmail.com",
  phone: "9322089296",
  linkedin: "https://linkedin.com/in/sujal-kachhawah-058564291",
  github: "https://github.com/xcurx",
  summary:
    "Fullstack developer (Next.js · Go · WebSockets) with production experience building real-time collaborative systems and full-featured web applications. Won Smart India Hackathon 2025 at the national level, delivered a complete full-stack platform under competition conditions. Seeking a web/backend internship where I can contribute to product-focused engineering teams.",
};

export const education = {
  degree: "Bachelor of Technology — Computer Science and Engineering",
  institution: "Indian Institute of Information Technology (IIIT), Nagpur",
  expected: "Expected May 2027",
};

export interface Accomplishment {
  title: string;
  highlight: string;
  description: string;
}

export const accomplishments: Accomplishment[] = [
  {
    title: "Smart India Hackathon 2025",
    highlight: "Winner",
    description:
      "Built and shipped a full-stack placement management platform at the national level. Competed among hundreds of teams across India; selected as a winning team.",
  },
  {
    title: "Smart India Hackathon 2024",
    highlight: "Finalist",
    description:
      "Selected among the top teams to compete at the national level out of thousands of college entries.",
  },
  {
    title: "IIT BHU Hackitout",
    highlight: "3rd Place",
    description:
      "Secured 3rd place at the Hackitout hackathon organised by IIT BHU.",
  },
];

export interface Experience {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    role: "Web Development Team Member",
    organization: "GDG on Campus (Google Developer Groups), IIIT Nagpur",
    period: "Sep 2024 – May 2025",
    bullets: [
      "Engineered the Timeline and Carousel components for CodeXCaliber, a GSoC-inspired open-source platform deployed at codexcaliber.vercel.app",
      "Collaborated with a cross-functional team of developers using Git-based workflows, code reviews, and shared component architecture",
      "Contributed to an open-source program connecting student developers with real-world project and mentorship experience",
    ],
  },
];

export interface Project {
  title: string;
  badge?: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
  figNum: string;
}

export const projects: Project[] = [
  {
    title: "Saksham",
    badge: "SIH 2025 Winner",
    description:
      "Full-stack placement management platform unifying student, employer, faculty, and placement-cell workflows. Role-based dashboards, status-driven opportunity pipelines, CSV bulk operations, real-time notifications, and AI-assisted resume and interview features. Delivered under 36-hour hackathon conditions.",
    stack: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL"],
    github: "https://github.com/xcurx/canco",
    live: "https://sih25-one.vercel.app",
    figNum: "01",
  },
  {
    title: "Collaborative Canvas",
    description:
      "Real-time multi-user collaborative drawing platform with WebSocket-based state synchronisation. Interactive canvas with shape support, undo/redo history, shape manipulation, shareable room links, and full state import/export.",
    stack: ["Next.js", "TypeScript", "Go", "WebSockets"],
    github: "https://github.com/xcurx/canco",
    figNum: "02",
  },
  {
    title: "Mockly",
    description:
      "Agentic AI mock interview platform with LangGraph-orchestrated multi-step pipelines for resume parsing, web-augmented question generation via Tavily search, and structured answer evaluation. Smart/fast LLM routing and voice-based interviews with STT/TTS support.",
    stack: ["Next.js", "TypeScript", "FastAPI", "LangGraph", "LangChain", "PostgreSQL"],
    github: "https://github.com/xcurx/Mockly",
    figNum: "03",
  },
  {
    title: "Chat Application",
    description:
      "WhatsApp-inspired real-time chat platform with authentication, user search, friend request system, push notifications, and live chat with typing and read indicators. Dedicated WebSocket server for low-latency messaging.",
    stack: ["Next.js", "Express.js", "WebSockets", "Prisma", "PostgreSQL"],
    github: "https://github.com/xcurx/chatapp",
    figNum: "04",
  },
];

export interface SkillCategory {
  name: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    name: "Core",
    items: [
      "Fullstack Development",
      "REST APIs",
      "WebSocket APIs",
      "Real-time Systems",
      "WebRTC",
    ],
  },
  {
    name: "AI / LLM",
    items: [
      "LLM Engineering",
      "RAG Systems",
      "AI Agents",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
    ],
  },
  {
    name: "Frontend / UI",
    items: ["React.js", "Next.js", "Tailwind CSS", "shadcn/ui"],
  },
  {
    name: "Backend / Infra",
    items: ["Node.js (Express)", "Golang", "FastAPI", "Prisma ORM", "Docker"],
  },
  {
    name: "Databases",
    items: ["MongoDB", "PostgreSQL", "Vector Databases (Qdrant, ChromaDB)"],
  },
  {
    name: "Languages",
    items: ["TypeScript", "JavaScript", "Go", "Python", "C++", "Rust", "Solidity"],
  },
  {
    name: "Tools",
    items: ["Git", "GitHub", "Linux", "CI/CD", "Unit & Integration Testing"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
