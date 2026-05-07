
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTilt } from "@/hooks/use-tilt";

interface Exp {
  title: string;
  company: string;
  location: string;
  period: string;
  tag: string;
  tagColor: string;
  accent: string;       // tailwind bg gradient for the left accent bar
  accentGlow: string;   // inline glow color
  context?: string;
  chips: string[];
  bullets: string[];
}

const ExperienceCard = ({ exp, index }: { exp: Exp; index: number }) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt(6);
  const reveal = useScrollReveal();

  return (
    <div
      ref={reveal.ref}
      className={`reveal ${reveal.visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="tilt-card glass rounded-2xl overflow-hidden relative group"
      >
        {/* Shimmer */}
        <div data-shimmer className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none transition-opacity duration-300" />

        {/* Left accent bar */}
        <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${exp.accent} opacity-70 group-hover:opacity-100 transition-opacity`} />

        {/* Ambient glow behind card on hover */}
        <div
          className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 0% 50%, ${exp.accentGlow} 0%, transparent 60%)` }}
        />

        <div className="relative z-10 pl-7 pr-6 py-7">
          {/* Top row */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <div className="mb-2">
                <span className={`text-xs font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${exp.tagColor}`}>
                  {exp.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#f5f5f7] mb-1">{exp.title}</h3>
              <p className="text-[#0a84ff] font-semibold text-sm">{exp.company}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[#86868b] text-sm font-medium">{exp.period}</p>
              <p className="text-[#636366] text-xs mt-0.5">{exp.location}</p>
            </div>
          </div>

          {/* Context */}
          {exp.context && (
            <p className="text-[#636366] text-xs italic mb-4 leading-relaxed border-l border-white/10 pl-3">{exp.context}</p>
          )}

          {/* Chips */}
          {exp.chips.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {exp.chips.map((c) => (
                <span key={c} className="text-xs glass px-2.5 py-0.5 rounded-full text-cyan-300/80 border-cyan-400/20">
                  {c}
                </span>
              ))}
            </div>
          )}

          {/* Bullets */}
          <ul className="space-y-2">
            {exp.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[#86868b] text-sm leading-relaxed">
                <span className="text-[#0a84ff] mt-[5px] shrink-0 text-xs">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
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
      chips: [],
      bullets: [
        "Gaining local NZ work experience in customer operations, stock management, and team coordination.",
        "Supporting daily store operations with 98%+ accuracy across checkout, produce, and online fulfilment.",
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
      context: "Enterprise Data Platform — Scalable Pipelines, AI-Enabled Analytics & Self-Service BI across AME, APJ and EMEA",
      chips: ["300K+ SKUs", "15+ Dashboards", "3 Global Regions"],
      bullets: [
        "Designed automated data pipelines ingesting and transforming data from SAP, ERP and legacy systems into a centralised platform (Data Lake Gen2, Databricks, Data Factory) across 300K+ global SKU-location pairs.",
        "Prepared AI-ready data assets for forecasting models — cleansing 12–24 months of demand data — enabling near real-time inventory insights for supply chain planners across three regions.",
        "Developed 15+ Power BI dashboards and semantic data models covering fill rate, demand trends, SKU forecasts and excess inventory, enabling stakeholder self-service analytics.",
        "Implemented data governance frameworks: validation rules, reconciliation checks, exception logging and audit trails to ensure compliance and stakeholder trust.",
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
      context: "Cable Approval Validation — AI-enabled pass/fail prediction pipeline for wire harness certification",
      chips: ["28% R&D Saving", "3 hrs/day saved", "300+ PDFs"],
      bullets: [
        "Built end-to-end data acquisition pipeline — extracting structured records from 300+ legacy PDFs using tabula-py, engineering an ML-ready dataset from 30–40 test dimensions.",
        "Developed classification solution (Decision Tree, Random Forest, KNN, SVM) reducing test requirements from 30–40 checks to 5–6 for predicted passes.",
        "Applied domain-informed interpolation and Confusion Matrix evaluation, minimising Type I errors in safety-critical certification decisions.",
        "Delivered 28% R&D expenditure reduction and saved engineers ~3 hours per day.",
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
      context: "KPI Reporting & BI — Operational Dashboards for Electronics Device Certification",
      chips: ["~20% cycle time cut", "~15% QoQ improvement", "8+ Dashboards"],
      bullets: [
        "Designed 8+ Power BI dashboards surfacing certification bottlenecks, reducing average certification cycle time by ~20%.",
        "Identified high-failure test categories via SQL trend analysis, enabling QA to reduce repeat-test incidents by ~15% QoQ.",
        "Produced monthly compliance and revenue reports supporting strategic capacity planning.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <div ref={headingReveal.ref} className={`reveal text-center mb-16 ${headingReveal.visible ? "visible" : ""}`}>
          <p className="text-[#0a84ff] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Timeline</p>
          <h2 className="font-black text-gradient-hero" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}>
            Career Journey
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
