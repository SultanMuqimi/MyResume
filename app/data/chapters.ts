export interface ChapterLink {
  label: string;
  href: string;
}

export interface Chapter {
  id: string;
  label: string;
  subtitle: string;
  photo: string;
  accentTag?: string;
  content: {
    headline: string;
    body: string;
    highlights?: string[];
    tags?: string[];
    links?: ChapterLink[];
  };
}

export const chapters: Chapter[] = [
  {
    id: "sultan",
    label: "Sultan AlMuqaimi",
    subtitle: "DevOps · Backend · AI",
    photo: "/images/hero.jpg",
    content: {
      headline: "Engineer. Builder.\nProblem solver.",
      body: "Six years inside the Ministry of Defence. Six years freelance. One company co-founded. I build across infrastructure, backend, AI — and I finish what I start. Based in Muscat, Oman. Seeking DevOps / SRE / Application Operations roles.",
      tags: ["Muscat, Oman", "Open to Opportunities"],
      links: [
        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/sultan-almuqaimi",
        },
        { label: "GitHub", href: "https://github.com/SultanMuqimi" },
        {
          label: "Instagram",
          href: "https://instagram.com/sultanbuilds",
        },
      ],
    },
  },
  {
    id: "defence",
    label: "Ministry of Defence",
    subtitle: "2020 – Present · Sultanate of Oman",
    photo: "/images/focused.jpg",
    accentTag: "6 Years",
    content: {
      headline: "Built for\nmission-critical.",
      body: "Six-year progression through the full enterprise IT stack inside a defence environment — Windows Server, Active Directory, backend, full-stack, and now DevOps. Strict change management. High reliability. Defence-grade follow-through.",
      highlights: [
        "Infrastructure & Active Directory Administration",
        "Backend & Full-Stack Development",
        "Docker · Kubernetes · CI/CD Pipelines",
        "Incident Response & Change Management",
      ],
    },
  },
  {
    id: "freelance",
    label: "The Freelancer",
    subtitle: "2020 – Present · Independent",
    photo: "/images/problem-solving.jpg",
    accentTag: "6 Years",
    content: {
      headline: "Six years.\nZero breaks.",
      body: "Continuous freelance across backend, DevOps, AI, and multi-tenant SaaS. Building BataqatPlus — a GCC marketplace platform on ASP.NET Core, Clean Architecture, deployed on Azure with automated GitHub Actions CI/CD.",
      highlights: [
        "BataqatPlus — Multi-tenant GCC Marketplace",
        "ASP.NET Core · PostgreSQL · Redis",
        "GitHub Actions CI/CD on Azure",
        "AI/ML integration into production workflows",
      ],
    },
  },
  {
    id: "qias",
    label: "Qias",
    subtitle: "Co-Founder · 2024 – Present",
    photo: "/images/founder-close.jpg",
    accentTag: "OQX 2026",
    content: {
      headline: "AI for\nburied pipelines.",
      body: "Lead backend and AI engineering for Qias — an AI-powered corrosion monitoring system piloted with OQ for buried oil pipelines. Selected for the OQX Pre-Accelerator 2026 (AlJabr).",
      highlights: [
        "AI-Powered Corrosion Detection",
        "Piloted with OQ — Oil & Gas",
        "OQX Pre-Accelerator 2026 (AlJabr)",
        "GCC Industrial Target Market",
      ],
    },
  },
  {
    id: "stage",
    label: "The Stage",
    subtitle: "Speaker · Content Creator",
    photo: "/images/press-conference.jpg",
    content: {
      headline: "Comfortable\ncommanding the room.",
      body: "Established tech content creator on LinkedIn and Instagram for the Arabic-speaking developer community. From internal defence briefings to press conferences — I communicate clearly at every level.",
      tags: [
        "LinkedIn",
        "Instagram @sultanbuilds",
        "Arabic Dev Community",
        "Tech Content",
      ],
    },
  },
  {
    id: "builder",
    label: "Builder",
    subtitle: "MVSX · BataqatPlus · Forge · Qias",
    photo: "/images/presentation.jpg",
    content: {
      headline: "Ship things\nthat work.",
      body: "End-to-end ownership from architecture to production. Computer Vision pipelines, marketplace platforms, AI code scaffolding, and industrial monitoring systems. Every project is fully deployed and running.",
      highlights: [
        "MVSX — Computer Vision (CNN · ResNet · Transfer Learning)",
        "BataqatPlus — Multi-tenant SaaS Marketplace for GCC",
        "Forge — AI Code Scaffolding built on Claude Code",
        "Qias — Industrial Pipeline Corrosion AI",
      ],
    },
  },
  {
    id: "stack",
    label: "The Stack",
    subtitle: "Skills & Tools",
    photo: "/images/collaboration.jpg",
    content: {
      headline: "Full stack,\nno exceptions.",
      body: "From Kubernetes to CNNs. The tools change — the discipline doesn't.",
      tags: [
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "Azure",
        "ASP.NET Core",
        "C#",
        "Python",
        "FastAPI",
        "React",
        "React Native",
        "PostgreSQL",
        "Redis",
        "SQL",
        "Hadoop",
        "HDFS",
        "ResNet",
        "CNN",
        "Power BI",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "Clean Architecture",
        "CI/CD",
      ],
    },
  },
  {
    id: "connect",
    label: "Let's Connect",
    subtitle: "Muscat, Oman",
    photo: "/images/deep-work.jpg",
    content: {
      headline: "Always building\nsomething.",
      body: "Seeking DevOps / SRE / Application Operations roles in enterprise environments. Open to remote and on-site. Bringing backend, data engineering, and AI/ML capabilities alongside.",
      links: [
        {
          label: "SultanGenerateCode@gmail.com",
          href: "mailto:SultanGenerateCode@gmail.com",
        },
        { label: "+968 9777 4591", href: "tel:+96897774591" },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/sultan-almuqaimi",
        },
        { label: "GitHub", href: "https://github.com/SultanMuqimi" },
        {
          label: "@sultanbuilds",
          href: "https://instagram.com/sultanbuilds",
        },
      ],
    },
  },
];
