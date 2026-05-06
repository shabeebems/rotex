"use client";

import { useAnimationFrame } from "motion/react";
import { useRef } from "react";

const cubeSides = [
  {
    name: "front",
    title: "Executive",
    candidate: "Aisha Khan",
    role: "Operations Director",
    summary: "Scaled regional teams, improved delivery speed, and led executive reporting.",
    skills: ["Strategy", "P&L", "Hiring"],
    experience: ["22% lower costs", "8-market launch"],
    footer: "MBA - Leadership",
    accent: "bg-emerald-700",
    tint: "bg-emerald-50",
    transform: "[transform:rotateY(0deg)_translateZ(100px)]",
  },
  {
    name: "left",
    title: "Modern",
    candidate: "Rohan Mehta",
    role: "Product Designer",
    summary: "Designed SaaS dashboards, design systems, and onboarding journeys.",
    skills: ["Figma", "UX", "Research"],
    experience: ["40% faster signup", "Design system v2"],
    footer: "B.Des - Interaction",
    accent: "bg-violet-600",
    tint: "bg-violet-50",
    transform: "[transform:rotateY(-90deg)_translateZ(100px)]",
  },
  {
    name: "right",
    title: "Creative",
    candidate: "Maya Thomas",
    role: "Brand Strategist",
    summary: "Built campaign stories, launch kits, and visual identity guidelines.",
    skills: ["Brand", "Copy", "Media"],
    experience: ["3 national launches", "2.4M reach"],
    footer: "BA - Communications",
    accent: "bg-amber-500",
    tint: "bg-amber-50",
    transform: "[transform:rotateY(90deg)_translateZ(100px)]",
  },
  {
    name: "top",
    title: "Minimal",
    candidate: "Arjun Rao",
    role: "Software Engineer",
    summary: "Ships reliable web apps with clean APIs, testing, and cloud tooling.",
    skills: ["React", "Node", "AWS"],
    experience: ["99.9% uptime", "CI/CD owner"],
    footer: "B.Tech - Computer Science",
    accent: "bg-rose-600",
    tint: "bg-rose-50",
    transform: "[transform:rotateX(90deg)_translateZ(100px)]",
  },
  {
    name: "bottom",
    title: "Classic",
    candidate: "Sara Joseph",
    role: "Finance Analyst",
    summary: "Creates forecasts, variance reports, and investor-ready dashboards.",
    skills: ["Excel", "SQL", "FP&A"],
    experience: ["12% margin gain", "Monthly close lead"],
    footer: "CPA Candidate",
    accent: "bg-sky-600",
    tint: "bg-sky-50",
    transform: "[transform:rotateX(-90deg)_translateZ(100px)]",
  },
  {
    name: "back",
    title: "Portfolio",
    candidate: "Dev Patel",
    role: "Marketing Lead",
    summary: "Grows acquisition with content funnels, SEO, and conversion testing.",
    skills: ["SEO", "Ads", "CRM"],
    experience: ["3x organic traffic", "28% more leads"],
    footer: "Google Analytics Certified",
    accent: "bg-cyan-600",
    tint: "bg-cyan-50",
    transform: "[transform:rotateY(180deg)_translateZ(100px)]",
  },
];

function ResumeTemplateFace({
  title,
  candidate,
  role,
  summary,
  skills,
  experience,
  footer,
  accent,
  tint,
}: {
  title: string;
  candidate: string;
  role: string;
  summary: string;
  skills: string[];
  experience: string[];
  footer: string;
  accent: string;
  tint: string;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white/95 p-3">
      <div className={`h-full w-[72%] overflow-hidden rounded-sm border border-slate-200 ${tint} shadow-inner`}>
        <div className={`${accent} px-2 py-1.5 text-[7px] font-bold uppercase tracking-[0.14em] text-white`}>
          {title}
        </div>
        <div className="space-y-1.5 bg-white p-2">
          <div className="flex gap-2">
            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${accent} text-[9px] font-bold text-white`}>
              {candidate
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </div>
            <div className="min-w-0 flex-1 pt-0.5">
              <p className="truncate text-[8px] font-bold leading-none text-slate-900">{candidate}</p>
              <p className="mt-1 truncate text-[6px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                {role}
              </p>
              <p className="mt-1 line-clamp-2 text-[5px] leading-tight text-slate-500">{summary}</p>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_2fr] gap-2">
            <div className="space-y-1">
              <p className="text-[5px] font-bold uppercase tracking-[0.12em] text-slate-700">Skills</p>
              {skills.map((skill) => (
                <div key={skill} className={`rounded-full ${accent} px-1 py-0.5 text-center text-[4.5px] font-semibold text-white`}>
                  {skill}
                </div>
              ))}
              <div className="mt-1 rounded bg-slate-100 p-1">
                <p className="text-[4.5px] font-bold uppercase text-slate-500">Education</p>
                <p className="mt-0.5 text-[5px] leading-tight text-slate-700">{footer}</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[5px] font-bold uppercase tracking-[0.12em] text-slate-700">Experience</p>
              {experience.map((item) => (
                <div key={item} className="rounded border border-slate-100 bg-slate-50 p-1">
                  <p className="text-[5px] font-semibold leading-tight text-slate-700">{item}</p>
                  <div className="mt-1 h-0.5 w-full rounded-full bg-slate-200" />
                  <div className="mt-0.5 h-0.5 w-4/5 rounded-full bg-slate-200" />
                </div>
              ))}
              <div className="grid grid-cols-2 gap-1">
                <div className={`${accent} rounded p-1 text-center text-[4.5px] font-bold text-white`}>ATS</div>
                <div className="rounded bg-slate-100 p-1 text-center text-[4.5px] font-bold text-slate-600">
                  Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AnimatedCube() {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((time) => {
    if (!ref.current) return;

    const rotate = Math.sin(time / 10000) * 200;
    const y = (1 + Math.sin(time / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="flex h-[280px] w-full items-center justify-center [perspective:800px]">
      <div
        ref={ref}
        className="relative h-[200px] w-[200px] [transform-style:preserve-3d]"
        aria-hidden="true"
      >
        {cubeSides.map((side) => (
          <div
            key={side.name}
            className={`absolute inset-0 overflow-hidden border border-white/60 shadow-[0_20px_50px_rgba(5,150,105,0.18)] ${side.transform}`}
          >
            <ResumeTemplateFace
              title={side.title}
              candidate={side.candidate}
              role={side.role}
              summary={side.summary}
              skills={side.skills}
              experience={side.experience}
              footer={side.footer}
              accent={side.accent}
              tint={side.tint}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
