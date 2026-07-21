
import { useRef } from "react";
import { ExternalLink, Github, Zap, Lock } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  featured?: boolean;
  liveLink?: string;
  githubLink?: string;
  gradient: string;       // CSS gradient string for the card background
  glowColor: string;      // rgba glow color
  accentText: string;     // tailwind text color for tech pills
}

/** The Apple Fitness–style 3D tilt card */
const ProjectCard = ({ project, index, featured }: { project: Project; index: number; featured?: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const reveal  = useScrollReveal();

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;

    el.style.transition = "box-shadow 0.15s ease";
    el.style.transform  = `perspective(900px) rotateY(${x * 13}deg) rotateX(${-y * 13}deg) scale3d(1.04,1.04,1.04)`;
    el.style.boxShadow  = [
      `${-x * 32}px ${y * 32}px 64px rgba(0,0,0,0.7)`,
      `${-x * 10}px ${y * 10}px 20px rgba(0,0,0,0.35)`,
      `0 0 0 1px rgba(255,255,255,0.08)`,
    ].join(", ");

    const shimmer = el.querySelector<HTMLElement>("[data-shimmer]");
    if (shimmer) {
      const px = (x * 0.5 + 0.5) * 100;
      const py = (y * 0.5 + 0.5) * 100;
      shimmer.style.background = `radial-gradient(ellipse at ${px}% ${py}%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)`;
      shimmer.style.opacity = "1";
    }
  };

  const onMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transition = "transform 0.8s cubic-bezier(0.23,1,0.32,1), box-shadow 0.8s cubic-bezier(0.23,1,0.32,1)";
    el.style.transform  = "";
    el.style.boxShadow  = "";
    const shimmer = el.querySelector<HTMLElement>("[data-shimmer]");
    if (shimmer) { shimmer.style.opacity = "0"; shimmer.style.background = "transparent"; }
    setTimeout(() => { if (cardRef.current) cardRef.current.style.transition = ""; }, 800);
  };

  return (
    <div
      ref={reveal.ref}
      className={`reveal ${reveal.visible ? "visible" : ""} ${featured ? "md:col-span-2" : ""}`}
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative rounded-3xl overflow-hidden cursor-default h-full"
        style={{
          background: project.gradient,
          willChange: "transform",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Specular shimmer overlay */}
        <div data-shimmer className="absolute inset-0 pointer-events-none rounded-3xl opacity-0 transition-opacity duration-200" />

        {/* Noise texture overlay for depth */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04] rounded-3xl"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Ambient inner glow */}
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl"
          style={{ boxShadow: `inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.3)` }}
        />

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-5 right-5 z-10">
            <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/20">
              <Zap size={10} />Featured
            </span>
          </div>
        )}

        {/* Content */}
        <div className={`relative z-10 p-7 flex flex-col h-full ${featured ? "md:p-10" : ""}`}>
          {/* Header */}
          <div className="mb-4">
            <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-1">{project.subtitle}</p>
            <h3 className={`font-black text-white leading-tight ${featured ? "text-3xl" : "text-xl"}`}
              style={{ letterSpacing: "-0.02em", textShadow: "0 1px 20px rgba(0,0,0,0.4)" }}>
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className={`text-white/70 leading-relaxed mb-5 flex-1 ${featured ? "text-base" : "text-sm line-clamp-3"}`}>
            {project.description}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t) => (
              <span key={t} className="text-xs bg-black/25 backdrop-blur-sm text-white/80 border border-white/10 rounded-full px-2.5 py-0.5 font-medium">
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-auto">
            {project.githubLink ? (
              <a href={project.githubLink} target="_blank" rel="noreferrer"
                className="flex items-center gap-1.5 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white/80 hover:text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/10 transition-all duration-200 hover:scale-105">
                <Github size={13} />Code
              </a>
            ) : (
              <span className="flex items-center gap-1.5 bg-black/20 text-white/30 text-xs font-semibold px-4 py-2 rounded-full border border-white/10">
                <Lock size={13} />Private
              </span>
            )}
            {project.liveLink ? (
              <a href={project.liveLink} target="_blank" rel="noreferrer"
                className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/20 transition-all duration-200 hover:scale-105">
                <ExternalLink size={13} />Live App
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const headingReveal = useScrollReveal();

  const projects: Project[] = [
    {
      title: "Atlikon FMCG Data Lakehouse",
      subtitle: "Lakehouse · Featured Project",
      description: "Modern FMCG lakehouse consolidating child-company retail transactions into parent-level monthly reporting with Bronze, Silver and Gold medallion layers, Delta tables, rollup logic and governed Power BI-ready star schemas.",
      tech: ["Databricks", "AWS S3", "Delta Lake", "Unity Catalog", "SQL", "Power BI"],
      featured: true,
      githubLink: "https://github.com/bharathssa/Atlikon_databricks_project",
      gradient:   "linear-gradient(135deg, #082f49 0%, #075985 45%, #0f766e 100%)",
      glowColor:  "rgba(14,165,233,0.4)",
      accentText: "text-cyan-300",
    },
    {
      title: "AlphaQuest Capital — BTC Signal Dashboard",
      subtitle: "ML Trading · Signal Dashboard",
      description: "End-to-end ML pipeline with XGBoost, LightGBM, Random Forest and Gradient Boosting competing to predict daily BTC/ETH price movements. Auto-selects champion model by F1 score and dynamically allocates a simulated $50M portfolio across 4 market regimes.",
      tech: ["XGBoost", "LightGBM", "Random Forest", "Gradient Boosting", "Python", "F1 Optimisation"],
      liveLink:   "https://alphaquest.streamlit.app/",
      githubLink: "https://github.com/bharathssa/BTC-Signal-Dashboard",
      gradient:   "linear-gradient(135deg, #1a0533 0%, #3b0f6b 40%, #6b21a8 70%, #a855f7 100%)",
      glowColor:  "rgba(168,85,247,0.4)",
      accentText: "text-purple-300",
    },
    {
      title: "Financial Advisor — Monte Carlo Planner",
      subtitle: "FinTech · Retirement Simulation",
      description: "35-year financial outcome forecasting across superannuation, equities, and bitcoin. Grew corpus to $3.5M via dynamic asset glide path with actionable drawdown recommendations.",
      tech: ["Python", "Monte Carlo", "Financial Modelling", "Streamlit"],
      liveLink:   "https://financialadvisornz.streamlit.app/",
      githubLink: "https://github.com/bharathssa/Financial_Advisor",
      gradient:   "linear-gradient(135deg, #052e0f 0%, #065f46 50%, #059669 100%)",
      glowColor:  "rgba(5,150,105,0.4)",
      accentText: "text-emerald-300",
    },
    {
      title: "StockPortfolio Data Pipeline",
      subtitle: "Portfolio Analytics · Automation",
      description: "Production-style portfolio tracking system consolidating Indian equities, US equities and mutual funds into one analytics-ready layer with scheduled market-close pipelines and Azure SQL upserts.",
      tech: ["Python", "Azure SQL", "GitHub Actions", "Azure Functions", "T-SQL", "JSON APIs"],
      githubLink: "https://github.com/bharathssa/StockPortfolio",
      gradient:   "linear-gradient(135deg, #102a43 0%, #1d4ed8 45%, #4338ca 100%)",
      glowColor:  "rgba(59,130,246,0.4)",
      accentText: "text-blue-300",
    },
    {
      title: "BTC/ETH Stock Analysis Dashboard",
      subtitle: "FinTech · NLP",
      description: "Real-time technical indicators (MACD, RSI, ADX, OBV) with NLP-based sentiment scoring from live news headlines delivering buy/hold/sell signals.",
      tech: ["Python", "Streamlit", "NLP", "Sentiment Analysis", "Technical Analysis"],
      githubLink: "https://github.com/bharathssa/Comprehensive-Indian-Stock-Analyzer",
      gradient:   "linear-gradient(135deg, #1a1200 0%, #78350f 50%, #d97706 100%)",
      glowColor:  "rgba(217,119,6,0.4)",
      accentText: "text-amber-300",
    },
    {
      title: "Cable Approval Validation (AI/ML)",
      subtitle: "Manufacturing · Classification",
      description: "ML pipeline extracting 300+ legacy PDF records via tabula-py, training 5 classifiers to predict wire harness pass/fail — cutting test requirements from 30–40 checks to 5–6.",
      tech: ["Decision Tree", "Random Forest", "SVM", "tabula-py", "Python"],
      gradient:   "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
      glowColor:  "rgba(100,116,139,0.4)",
      accentText: "text-slate-300",
    },
    {
      title: "Shared Expense Tracker",
      subtitle: "Utility App · Streamlit",
      description: "Participant management, multiple split methods (equal, manual, person-specific), real-time balance calculations and PDF export — ideal for group trips and shared budgets.",
      tech: ["Python", "Streamlit", "PDF Export", "Real-time"],
      githubLink: "https://github.com/bharathssa/Expense-Tracker-with-Detailed-Transactions",
      gradient:   "linear-gradient(135deg, #0c1e14 0%, #14532d 50%, #16a34a 100%)",
      glowColor:  "rgba(22,163,74,0.4)",
      accentText: "text-green-300",
    },
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingReveal.ref} className={`reveal text-center mb-16 ${headingReveal.visible ? "visible" : ""}`}>
          <p className="text-[#0a84ff] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Portfolio</p>
          <h2 className="font-black text-gradient-hero" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}>
            Technical Personal Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} featured={p.featured} />
          ))}
        </div>
      </div>
    </section>
  );
};
