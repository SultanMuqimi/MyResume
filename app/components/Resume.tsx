"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Chip, Link, Separator, Card } from "@heroui/react";

/* ── helpers ──────────────────────────────────────────────── */
function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay },
  };
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="font-mono text-xs text-amber-500/70 tracking-widest">{number}</span>
      <div className="h-px w-8 bg-amber-500/30" />
      <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium">{label}</span>
    </div>
  );
}

/* ── 1. HERO ──────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* photo */}
      <Image
        src="/images/hero.jpg"
        alt="Sultan AlMuqaimi"
        fill
        priority
        className="object-cover object-top"
      />

      {/* overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      {/* content */}
      <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        >
          {/* location badge */}
          <div className="flex items-center gap-2 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]" />
            <span className="text-xs text-white/50 font-mono tracking-widest uppercase">Muscat, Oman</span>
          </div>

          {/* name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none mb-4">
            Sultan
            <br />
            <span className="text-white/90">AlMuqaimi</span>
          </h1>

          {/* role */}
          <p className="text-base md:text-lg text-white/50 font-light tracking-wide mb-8 max-w-md">
            DevOps Engineer · Backend & Data Engineer · AI / Computer Vision
          </p>

          {/* social links */}
          <div className="flex flex-wrap items-center gap-4">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/sultan-almuqaimi/" },
              { label: "GitHub", href: "https://github.com/SultanMuqimi/" },
              { label: "@SultanBuilds", href: "https://www.instagram.com/SultanBuilds" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                target="_blank" rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-amber-400 transition-colors duration-200"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <span className="text-[10px] text-white/25 uppercase tracking-widest font-mono rotate-90 origin-center mb-4">scroll</span>
          <motion.div
            className="h-10 w-px bg-gradient-to-b from-transparent to-amber-500/60"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ── 2. ABOUT ─────────────────────────────────────────────── */
function AboutSection() {
  const stats = [
    { value: "6", label: "Years Government" },
    { value: "6", label: "Years Freelance" },
    { value: "2", label: "Companies Co-Founded" },
    { value: "BSc", label: "Computer Science" },
  ];

  return (
    <section id="about" className="py-28 md:py-36 px-8 md:px-16 max-w-6xl mx-auto">
      <motion.div {...fadeUp()}>
        <SectionLabel number="01" label="About" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <motion.div {...fadeUp(0.1)}>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Built for<br />
            <span className="text-amber-400">mission-critical.</span>
          </h2>
        </motion.div>

        <motion.div {...fadeUp(0.2)} className="space-y-5">
          <p className="text-[15px] leading-relaxed text-white/55">
            DevOps Engineer with six years inside the government sector — Sultanate of Oman,
            covering the full stack of enterprise IT: server infrastructure, Active Directory,
            backend, full-stack, and now DevOps across containerized deployments, CI/CD,
            monitoring, and change management.
          </p>
          <p className="text-[15px] leading-relaxed text-white/55">
            In parallel, six continuous years of freelance work across backend, DevOps, AI,
            and multi-tenant SaaS engagements. Co-founder of two ventures in the GCC tech space.
            Academic foundation in Computer Science with a Data Engineering
            specialization.
          </p>
        </motion.div>
      </div>

      {/* stats row */}
      <motion.div
        {...fadeUp(0.3)}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
      >
        {stats.map((s, i) => (
          <Card key={i} className="bg-white rounded-2xl p-6 gap-1 shadow-none border-0">
            <Card.Header className="p-0 pb-1">
              <Card.Title className="text-4xl font-bold text-black tracking-tight">{s.value}</Card.Title>
            </Card.Header>
            <Card.Description className="text-xs text-gray-500 uppercase tracking-widest font-medium">{s.label}</Card.Description>
          </Card>
        ))}
      </motion.div>
    </section>
  );
}

/* ── 3. EXPERIENCE ────────────────────────────────────────── */
function ExperienceSection() {
  const roles = [
    {
      title: "Infrastructure → DevOps Engineer",
      company: "Government Sector — Sultanate of Oman",
      period: "2020 – Present",
      tag: "6 Years",
      icon: "GOV",
      gradient: "from-amber-500/15 to-amber-900/5",
      points: [
        "Six-year progression through the full enterprise IT stack inside a mission-critical government environment.",
        "Started in infrastructure: Windows Server, Active Directory, networking, and systems administration.",
        "Moved into backend → full-stack development supporting internal mission-critical applications.",
        "Now operating as DevOps: containerized deployments, CI/CD pipelines, monitoring, incident response, and change-management discipline.",
      ],
    },
    {
      title: "Freelance Developer & DevOps Engineer",
      company: "Independent / Project-based",
      period: "2020 – Present",
      tag: "6 Years",
      icon: "FRL",
      gradient: "from-white/8 to-white/2",
      points: [
        "Six continuous years of freelance across backend, DevOps, AI, and multi-tenant SaaS.",
        "Building and operating a multi-tenant GCC marketplace platform on ASP.NET Core and Clean Architecture.",
        "Docker-based multi-service stacks (PostgreSQL, Redis, ASP.NET Core) with GitHub Actions CI/CD on Azure.",
        "AI/ML components integrated into production workflows, from data preparation through model deployment.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-28 md:py-36 px-8 md:px-16 max-w-6xl mx-auto">
      <motion.div {...fadeUp()}>
        <SectionLabel number="02" label="Experience" />
      </motion.div>

      <div className="space-y-5">
        {roles.map((role, i) => (
          <motion.div key={i} {...fadeUp(i * 0.1)}>
            <Card className="flex flex-col sm:flex-row border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/12 transition-all duration-300 overflow-hidden rounded-3xl">
              {/* Left accent panel */}
              <div className={`relative h-[100px] w-full shrink-0 overflow-hidden sm:h-auto sm:w-[130px] bg-gradient-to-br ${role.gradient} flex items-center justify-center`}>
                <span className="text-2xl font-black text-amber-400/60 tracking-widest select-none">
                  {role.icon}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col">
                <Card.Header className="gap-1 pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 w-full pr-2">
                    <Card.Title className="text-base sm:text-lg font-semibold text-white leading-snug">
                      {role.title}
                    </Card.Title>
                    <div className="flex items-center gap-2 shrink-0">
                      <Chip className="bg-amber-500/10 border border-amber-500/25 text-amber-400 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                        {role.tag}
                      </Chip>
                      <span className="text-[11px] text-white/30 font-mono">{role.period}</span>
                    </div>
                  </div>
                  <Card.Description className="text-sm text-white/40">{role.company}</Card.Description>
                </Card.Header>

                <Separator className="bg-white/5 mx-4" />

                <Card.Content className="pt-3 pb-4">
                  <ul className="space-y-2">
                    {role.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-white/50 leading-relaxed">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-amber-500/50" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </Card.Content>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ── 4. PROJECTS ──────────────────────────────────────────── */
function ProjectsSection() {
  const projects = [
    {
      name: "Vision AI",
      url: undefined,
      tag: "Computer Vision",
      description:
        "End-to-end CV pipeline: dataset preparation, CNN + Transfer Learning (ResNet) model training, evaluation (accuracy, F1, confusion matrix), and full deployment into the application layer.",
      stack: ["Python", "CNN", "ResNet", "Transfer Learning"],
    },
    {
      name: "Digital Marketplace",
      url: undefined,
      tag: "SaaS Platform",
      description:
        "Multi-tenant marketplace platform for the GCC built on ASP.NET Core and Clean Architecture with scalable backend services and modular extension points.",
      stack: ["ASP.NET Core", "PostgreSQL", "Redis", "Azure"],
    },
    {
      name: "Qias",
      url: undefined,
      tag: "Industrial AI",
      description:
        "Backend and AI services for an industrial pipeline corrosion monitoring system, targeting Oil & Gas operators in the GCC. Piloted with OQ.",
      stack: ["Python", "FastAPI", "AI/ML", "Docker"],
    },
    {
      name: "Forge",
      url: "github.com/SultanMuqimi/Forge",
      tag: "Developer Tool",
      description:
        "Code scaffolding tool built on top of Claude Code that uses structured rule files to generate consistent, architecture-compliant application codebases.",
      stack: ["Claude Code", "TypeScript", "Clean Architecture"],
    },
  ];

  return (
    <section id="projects" className="py-28 md:py-36 px-8 md:px-16 max-w-6xl mx-auto">
      <motion.div {...fadeUp()}>
        <SectionLabel number="03" label="Selected Projects" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            {...fadeUp(i * 0.1)}
            className="group relative rounded-2xl border border-white/6 bg-white/[0.02] hover:bg-white/[0.04] hover:border-amber-500/20 transition-all duration-300 p-7 overflow-hidden"
          >
            {/* ambient glow on hover */}
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-amber-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{p.name}</h3>
                {p.url && (
                  <a
                    href={p.url.startsWith("github") ? `https://${p.url}` : `https://${p.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/25 hover:text-amber-400 transition-colors font-mono"
                  >
                    {p.url} ↗
                  </a>
                )}
              </div>
              <Chip className="bg-white/5 border border-white/8 text-white/50 text-xs px-2 py-0.5 rounded-full shrink-0">
                {p.tag}
              </Chip>
            </div>

            <p className="text-sm text-white/45 leading-relaxed mb-5">{p.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg bg-white/4 border border-white/6 text-[11px] text-white/40 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ── 5. SKILLS ────────────────────────────────────────────── */
function SkillsSection() {
  const groups = [
    {
      label: "DevOps & Cloud",
      items: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD Pipelines", "Microsoft Azure"],
    },
    {
      label: "Backend",
      items: ["ASP.NET Core", "C#", "Python", "FastAPI", "Clean Architecture"],
    },
    {
      label: "Frontend",
      items: ["React", "React Native", "TypeScript"],
    },
    {
      label: "Databases",
      items: ["PostgreSQL", "SQL (Advanced)", "Redis", "Hadoop", "HDFS"],
    },
    {
      label: "AI / ML / CV",
      items: ["CNN", "ResNet", "Transfer Learning", "Scikit-learn", "NumPy", "Pandas", "Feature Engineering"],
    },
    {
      label: "Data & Visualization",
      items: ["Power BI", "Excel", "ETL", "EDA", "Statistical Analysis"],
    },
    {
      label: "Infrastructure",
      items: ["Windows Server", "Active Directory", "TCP/IP", "Networking"],
    },
  ];

  return (
    <section id="skills" className="py-28 md:py-36 px-8 md:px-16 max-w-6xl mx-auto">
      <motion.div {...fadeUp()}>
        <SectionLabel number="04" label="Skills & Stack" />
      </motion.div>

      <div className="space-y-8">
        {groups.map((g, i) => (
          <motion.div key={i} {...fadeUp(i * 0.05)} className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="md:w-44 shrink-0">
              <span className="text-xs text-white/30 uppercase tracking-widest">{g.label}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <Chip
                  key={item}
                  className="bg-white/4 border border-white/8 hover:border-amber-500/30 hover:bg-amber-500/8 transition-all duration-200 cursor-default text-white/60 text-xs px-2 py-0.5 rounded-full"
                >
                  {item}
                </Chip>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ── 6. EDUCATION ─────────────────────────────────────────── */
function EducationSection() {
  const edu = [
    {
      school: "Middle East College",
      degree: "Bachelor of Science in Computer Science — Data Engineering Specialization",
      year: "Graduated 2026",
    },
    {
      school: "Military Technological College",
      degree: "Diploma in Information Technology",
      year: "Graduated 2020",
    },
  ];

  const certs = [
    "CompTIA A+",
    "CompTIA Network+ (N+)",
    "ASP.NET Core Development",
    "React & React Native",
    "Certified Manager",
    "Certified Supervisor",
  ];

  return (
    <section id="education" className="py-28 md:py-36 px-8 md:px-16 max-w-6xl mx-auto">
      <motion.div {...fadeUp()}>
        <SectionLabel number="05" label="Education & Certifications" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        {/* education */}
        <motion.div {...fadeUp(0.1)} className="space-y-6">
          {edu.map((e, i) => (
            <div key={i} className="py-1">
              <div className="text-xs font-mono text-white/25 mb-1">{e.year}</div>
              <div className="text-base font-semibold text-white mb-1">{e.school}</div>
              <div className="text-sm text-white/45 leading-relaxed">{e.degree}</div>
            </div>
          ))}
        </motion.div>

        {/* certs */}
        <motion.div {...fadeUp(0.2)}>
          <div className="flex flex-wrap gap-2.5">
            {certs.map((c) => (
              <Chip
                key={c}
                className="bg-white/4 border border-white/8 text-white/55 text-xs px-2 py-0.5 rounded-full"
              >
                {c}
              </Chip>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── 7. CONTACT ───────────────────────────────────────────── */
function ContactSection() {
  const links = [
    { label: "SultanGenerateCode@gmail.com", href: "mailto:SultanGenerateCode@gmail.com" },
    { label: "+968 9777 4591", href: "tel:+96897774591" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sultan-almuqaimi/" },
    { label: "GitHub", href: "https://github.com/SultanMuqimi/" },
    { label: "@SultanBuilds", href: "https://www.instagram.com/SultanBuilds" },
  ];

  return (
    <section id="contact" className="py-28 md:py-40 px-8 md:px-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp()}>
          <SectionLabel number="06" label="Contact" />
        </motion.div>

        <motion.div {...fadeUp(0.1)}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Let&apos;s build<br />
            <span className="text-amber-400">something.</span>
          </h2>
          <p className="text-sm text-white/35 mb-12 max-w-sm leading-relaxed">
            Seeking DevOps / SRE / Application Operations roles. Open to remote and on-site opportunities.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.2)} className="flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              {...(!l.href.startsWith("mailto") && !l.href.startsWith("tel") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-center gap-3 text-white/45 hover:text-amber-400 transition-colors duration-200 w-fit text-sm"
            >
              <span className="h-px w-4 bg-current transition-all duration-200 group-hover:w-6" />
              {l.label}
            </Link>
          ))}
        </motion.div>

        <motion.div {...fadeUp(0.3)} className="mt-20 pt-8 border-t border-white/5">
          <p className="text-xs text-white/15 font-mono">
            © 2026 Sultan AlMuqaimi · Muscat, Oman
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ── BOTTOM NAV ───────────────────────────────────────────── */
const bottomNavItems = [
  {
    label: "About",
    href: "#about",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    label: "Work",
    href: "#experience",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    label: "Projects",
    href: "#projects",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: "Skills",
    href: "#skills",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    label: "Education",
    href: "#education",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pb-safe flex justify-center">
      <div className="mx-4 mb-4 rounded-2xl bg-black/85 backdrop-blur-2xl shadow-[0_-4px_40px_rgba(0,0,0,0.6)] w-fit">
        <div className="flex items-center justify-center gap-1 px-4 py-3">
          {bottomNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center gap-1.5 px-3 py-1 rounded-xl text-amber-400 hover:text-amber-300 transition-all duration-200"
            >
              <span className="transition-all duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(251,191,36,0.7)]">
                {item.icon}
              </span>
              <span className="text-[9px] font-medium tracking-wide uppercase">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ── NAV ──────────────────────────────────────────────────── */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <span className="text-sm font-semibold text-white/70 tracking-tight">Sultan AlMuqaimi</span>
      <Link
        href="mailto:SultanGenerateCode@gmail.com"
        className="text-xs text-white/35 hover:text-amber-400 transition-colors duration-200 border border-white/10 hover:border-amber-500/30 px-4 py-2 rounded-full"
      >
        Get in touch
      </Link>
    </nav>
  );
}

/* ── ROOT ─────────────────────────────────────────────────── */
export function Resume() {
  return (
    <main className="bg-black min-h-screen pb-28">
      <Nav />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <BottomNav />
    </main>
  );
}
