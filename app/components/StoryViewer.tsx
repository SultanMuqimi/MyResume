"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Button, Chip, Link } from "@heroui/react";
import { chapters, type Chapter } from "@/app/data/chapters";

/* ─── Photo Panel ─────────────────────────────────────────────── */
function PhotoPanel({ chapter }: { chapter: Chapter }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={chapter.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        >
          <Image
            src={chapter.photo}
            alt={chapter.label}
            fill
            className="object-cover object-center"
            priority
          />
          {/* gradient overlay — fades left edge into the dark panel */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          {/* bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ─── Content Area ────────────────────────────────────────────── */
function ContentArea({ chapter }: { chapter: Chapter }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={chapter.id}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
        className="space-y-5"
      >
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white whitespace-pre-line">
          {chapter.content.headline}
        </h2>

        {/* Body */}
        <p className="text-[15px] leading-relaxed text-white/60 max-w-sm">
          {chapter.content.body}
        </p>

        {/* Highlights */}
        {chapter.content.highlights && (
          <ul className="space-y-2">
            {chapter.content.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-white/80">
                <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        {chapter.content.tags && (
          <div className="flex flex-wrap gap-2 pt-1">
            {chapter.content.tags.map((tag) => (
              <Chip
                key={tag}
                size="sm"
                variant="flat"
                classNames={{
                  base: "bg-white/8 border border-white/10",
                  content: "text-white/70 text-xs font-medium",
                }}
              >
                {tag}
              </Chip>
            ))}
          </div>
        )}

        {/* Links */}
        {chapter.content.links && (
          <div className="flex flex-col gap-2 pt-1">
            {chapter.content.links.map((lnk) => (
              <Link
                key={lnk.href}
                href={lnk.href}
                isExternal={!lnk.href.startsWith("mailto") && !lnk.href.startsWith("tel")}
                className="text-sm text-amber-400 hover:text-amber-300 transition-colors w-fit"
              >
                {lnk.label} →
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Chapter Pill ────────────────────────────────────────────── */
function ChapterPill({
  chapter,
  isActive,
  onClick,
}: {
  chapter: Chapter;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        chapter-pill group w-full text-left rounded-xl px-4 py-3
        border transition-all duration-300
        ${
          isActive
            ? "border-amber-500/60 bg-amber-500/10"
            : "border-white/8 bg-white/4 hover:border-white/20 hover:bg-white/8"
        }
      `}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {/* active dot */}
          <span
            className={`
              h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300
              ${isActive ? "bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)]" : "bg-white/25 group-hover:bg-white/40"}
            `}
          />
          <div className="min-w-0">
            <div
              className={`text-sm font-semibold truncate transition-colors duration-300 ${
                isActive ? "text-white" : "text-white/60 group-hover:text-white/80"
              }`}
            >
              {chapter.label}
            </div>
            <div className="text-[11px] text-white/35 truncate mt-0.5">
              {chapter.subtitle}
            </div>
          </div>
        </div>
        {chapter.accentTag && (
          <Chip
            size="sm"
            variant="flat"
            classNames={{
              base: `shrink-0 transition-all duration-300 ${
                isActive
                  ? "bg-amber-500/20 border border-amber-500/40"
                  : "bg-white/6 border border-white/10"
              }`,
              content: `text-[10px] font-bold ${isActive ? "text-amber-400" : "text-white/40"}`,
            }}
          >
            {chapter.accentTag}
          </Chip>
        )}
      </div>
    </button>
  );
}

/* ─── Main StoryViewer ────────────────────────────────────────── */
export function StoryViewer() {
  const [activeId, setActiveId] = useState<string>(chapters[0].id);
  const activeChapter = chapters.find((c) => c.id === activeId)!;

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black flex">
      {/* ── LEFT PANEL ── */}
      <div className="relative z-10 flex flex-col w-full max-w-[420px] shrink-0 h-full">
        {/* Header */}
        <div className="px-8 pt-10 pb-6 shrink-0">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/30 mb-1">
            Portfolio
          </div>
          <div className="text-xl font-bold text-white">Sultan AlMuqaimi</div>
          <div className="text-xs text-white/40 mt-0.5">
            DevOps · Backend · AI · Muscat, Oman
          </div>
        </div>

        {/* Nav pills */}
        <nav className="nav-scroll flex-1 overflow-y-auto px-6 pb-4 space-y-2">
          {chapters.map((chapter) => (
            <ChapterPill
              key={chapter.id}
              chapter={chapter}
              isActive={chapter.id === activeId}
              onClick={() => setActiveId(chapter.id)}
            />
          ))}
        </nav>

        {/* Active content */}
        <div className="px-8 py-8 shrink-0 border-t border-white/8">
          <ContentArea chapter={activeChapter} />
        </div>
      </div>

      {/* ── RIGHT PANEL (photo) ── */}
      <div className="relative flex-1 h-full">
        <PhotoPanel chapter={activeChapter} />
      </div>

      {/* ── MOBILE BOTTOM NAV ── */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 z-20 bg-black/90 backdrop-blur-xl border-t border-white/10 overflow-x-auto">
        <div className="flex gap-2 px-4 py-3 w-max">
          {chapters.map((chapter) => (
            <Button
              key={chapter.id}
              size="sm"
              variant={chapter.id === activeId ? "flat" : "light"}
              onPress={() => setActiveId(chapter.id)}
              className={`shrink-0 text-xs transition-all ${
                chapter.id === activeId
                  ? "bg-amber-500/15 border border-amber-500/40 text-amber-400"
                  : "border border-white/10 text-white/50"
              }`}
            >
              {chapter.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
