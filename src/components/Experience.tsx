
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTilt } from "@/hooks/use-tilt";

interface Exp {
  title: string;
  company: string;
  location: string;
  period: string;
  tag: string;
  tagColor: string;
  accent: string;
  accentGlow: string;
  dotColor: string;
  context?: string;
  chips: string[];
  bullets: string[];
}

const ExperienceCard = ({ exp, isLeft }: { exp: Exp; isLeft: boolean }) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt(6);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="tilt-card glass rounded-2xl overflow-hidden relative group"
    >
      {/* Shimmer */}
      <div data-shimmer className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none transition-opacity duration-300" />

      {/* Accent bar — faces the spine */}
      <div
        className={`absolute top-0 bottom-0 w-[3px] bg-gradient-to-b ${exp.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300 ${isLeft ? "right-0" : "left-0"}`}
      />

      {/* Glow halo */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at ${isLeft ? "100%" : "0%"} 50%, ${exp.accentGlow} 0%, transparent 65%)`,
        }}
      />

      <div className="relative z-10 px-6 py-6">
        {/* Tag + period */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${exp.tagColor}`}>
            {exp.tag}
          </span>
          <span className="text-[#636366] text-xs">{exp.period}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#f5f5f7] leading-tight mb-0.5">{exp.title}</h3>
        <p className="text-[#0a84ff] text-sm font-semibold mb-0.5">{exp.company}</p>
        <p className="text-[#636366] text-xs mb-3">{exp.location}</p>

        {/* Context */}
        {exp.context && (
          <p className="text-[#636366] text-xs italic mb-3 leading-relaxed border-l-2 border-white/10 pl-3">{exp.context}</p>
        )}

        {/* Achievement chips */}
        {exp.chips.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {exp.chips.map((c) => (
              <span key={c} className="text-[10px] glass px-2 py-0.5 rounded-full text-cyan-300/80">
                {c}
              </span>
            ))}
          </div>
        )}

        {/* Bullets */}
        <ul className="space-y-1.5">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-[#86868b] text-xs leading-relaxed">
              <span className="text-[#0a84ff] mt-1 shrink-0">▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Experience = () => {
  const headingReveal = useScrollReveal();

  const experiences: Exp[] = [
    {
      title: "Team Member – Customer Operations",
      company: "Woolworths New Zealand",
      location: "Auckland, NZ",
      period: "Apr 2025 – Present",
      tag: "Local NZ Experience",
      tagColor: "text-green-400 border-green-400/30",
      accent: "from-green-400 to-emerald-500",
      accentGlow: "rgba(52,211,153,0.12)",
      dotColor: "#34d399",
      chips: [],
      bullets: [
        "Gaining local NZ work experience in customer operations, stock management and team coordination.",
        "Supporting daily store operations with 98%+ accuracy across checkout, produce and online fulfilment.",
        "Fulfilled 50+ online orders per shift, contributing to positive customer satisfaction metrics.",
      ],
    },
    {
      title: "Data Engineer",
      company: "Hewlett-Packard",
      location: "Bangalore, India",
      period: "Jun 2022 – Mar 2025",
      tag: "Core Data Engineering",
      tagColor: "text-cyan-400 border-cyan-400/30",
      accent: "from-cyan-400 to-blue-500",
      accentGlow: "rgba(10,132,255,0.14)",
      dotColor: "#0a84ff",
      context: "Enterprise Data Platform — Scalable Pipelines, AI-Enabled Analytics & Self-Service BI across AME, APJ and EMEA",
      chips: ["300K+ SKUs", "15+ Dashboards", "3 Global Regions"],
      bullets: [
        "Designed automated data pipelines from SAP, ERP and legacy systems into Data Lake Gen2, Databricks and Data Factory across 300K+ global SKU-location pairs.",
        "Prepared AI-ready data assets for forecasting models — cleansing 12–24 months demand data for near real-time inventory insights across three regions.",
        "Developed 15+ Power BI dashboards and semantic models covering fill rate, demand trends, SKU forecasts and excess inventory.",
        "Implemented data governance frameworks: validation rules, reconciliation checks, exception logging and audit trails.",
      ],
    },
    {
      title: "Engineer – Product",
      company: "Molex India Pvt. Ltd",
      location: "Bangalore, India",
      period: "Aug 2020 – May 2022",
      tag: "AI / ML Engineering",
      tagColor: "text-purple-400 border-purple-400/30",
      accent: "from-purple-400 to-pink-500",
      accentGlow: "rgba(191,90,242,0.12)",
      dotColor: "#bf5af2",
      context: "Cable Approval Validation — AI-enabled pass/fail prediction pipeline for wire harness certification",
      chips: ["28% R&D Saving", "3 hrs/day saved", "300+ PDFs"],
      bullets: [
        "Built end-to-end data acquisition pipeline extracting records from 300+ legacy PDFs using tabula-py, engineering an ML-ready dataset from 30–40 test dimensions.",
        "Developed classification solution (Decision Tree, Random Forest, KNN, SVM) reducing test requirements from 30–40 to 5–6 checks.",
        "Delivered 28% R&D expenditure reduction and saved engineers ~3 hours per day through data-driven certification decisions.",
      ],
    },
    {
      title: "Data Analyst",
      company: "TUV Rheinland India Pvt. Ltd",
      location: "Bangalore, India",
      period: "Dec 2018 – Jul 2020",
      tag: "BI & Analytics",
      tagColor: "text-blue-400 border-blue-400/30",
      accent: "from-blue-400 to-indigo-500",
      accentGlow: "rgba(99,102,241,0.12)",
      dotColor: "#6366f1",
      context: "KPI Reporting & BI — Operational Dashboards for Electronics Device Certification",
      chips: ["~20% cycle time cut", "~15% QoQ improvement", "8+ Dashboards"],
      bullets: [
        "Designed 8+ Power BI dashboards surfacing certification bottlenecks, reducing average cycle time by ~20%.",
        "Identified high-failure test categories via SQL trend analysis, reducing repeat-test incidents by ~15% QoQ.",
        "Produced monthly compliance and revenue reports supporting strategic capacity planning.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div ref={headingReveal.ref} className={`reveal text-center mb-20 ${headingReveal.visible ? "visible" : ""}`}>
          <p className="text-[#0a84ff] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Timeline</p>
          <h2 className="font-black text-gradient-hero" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}>
            Career Journey
          </h2>
        </div>

        {/* ── Tree ── */}
        <div className="relative">

          {/* Central spine */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px hidden md:block"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.12) 6%, rgba(255,255,255,0.12) 94%, transparent)",
            }}
          />

          <div className="space-y-14">
            {experiences.map((exp, index) => (
              <TreeRow key={exp.company} exp={exp} index={index} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/** Separate component so each row gets its own scroll-reveal hook */
const TreeRow = ({ exp, index, isLeft }: { exp: Exp; index: number; isLeft: boolean }) => {
  const reveal = useScrollReveal(0.08);

  return (
    <div
      ref={reveal.ref}
      className={`reveal ${isLeft ? "reveal-left" : "reveal-right"} ${reveal.visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Desktop: alternating tree */}
      <div className={`hidden md:flex items-center ${isLeft ? "justify-start" : "justify-end"}`}>
        <div className={`w-5/12 relative ${isLeft ? "pr-8" : "pl-8"}`}>

          {/* Small connector dot on the card edge toward the spine */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full ${isLeft ? "-right-[calc(1rem-1px)]" : "-left-[calc(1rem-1px)]"} z-10`}
            style={{
              background: exp.dotColor,
              boxShadow: `0 0 8px ${exp.dotColor}`,
            }}
          />

          {/* Connector line from card edge to spine */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 h-px w-6 ${isLeft ? "right-0 translate-x-full" : "left-0 -translate-x-full"}`}
            style={{ background: `linear-gradient(to ${isLeft ? "right" : "left"}, transparent, ${exp.dotColor}88)` }}
          />

          <ExperienceCard exp={exp} isLeft={isLeft} />
        </div>

        {/* Central dot */}
        <div className="absolute left-1/2 -translate-x-1/2 z-20">
          <div
            className="w-4 h-4 rounded-full border-2 border-[#060608]"
            style={{
              background: exp.dotColor,
              boxShadow: `0 0 12px ${exp.dotColor}, 0 0 28px ${exp.dotColor}66`,
            }}
          />
        </div>
      </div>

      {/* Mobile: full-width single column with left dot */}
      <div className="md:hidden flex items-start gap-4">
        <div className="flex flex-col items-center pt-4">
          <div
            className="w-3 h-3 rounded-full shrink-0"
            style={{ background: exp.dotColor, boxShadow: `0 0 8px ${exp.dotColor}` }}
          />
          <div className="w-px flex-1 mt-2" style={{ background: `${exp.dotColor}44` }} />
        </div>
        <div className="flex-1 pb-6">
          <ExperienceCard exp={exp} isLeft={true} />
        </div>
      </div>
    </div>
  );
};
