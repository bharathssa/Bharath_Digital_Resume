
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTilt } from "@/hooks/use-tilt";
import { SkillsSphere } from "./SkillsSphere";
import {
  SiPython, SiR, SiDatabricks, SiSnowflake,
  SiApacheairflow, SiPandas, SiNumpy, SiScikitlearn,
  SiJupyter, SiDbt, SiApachespark, SiDocker,
  SiMysql, SiLangchain, SiN8N,
} from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";
import type { IconType } from "react-icons";

interface Category {
  icon: string;
  name: string;
  gradient: string;
  borderGlow: string;
  skills: string[];
}

interface TechIcon {
  icon: IconType;
  name: string;
  color: string;
}

const techStack: TechIcon[] = [
  { icon: SiPython,        name: "Python",       color: "#3776AB" },
  { icon: TbBrandAzure,    name: "Azure",         color: "#0078D4" },
  { icon: SiDatabricks,    name: "Databricks",    color: "#FF3621" },
  { icon: SiSnowflake,     name: "Snowflake",     color: "#29B5E8" },
  { icon: SiApachespark,   name: "PySpark",       color: "#E25A1C" },
  { icon: SiApacheairflow, name: "Airflow",       color: "#017CEE" },
  { icon: SiDbt,           name: "dbt",           color: "#FF694B" },
  { icon: SiPandas,        name: "Pandas",        color: "#6C4CC1" },
  { icon: SiNumpy,         name: "NumPy",         color: "#4DABCF" },
  { icon: SiScikitlearn,   name: "Scikit-learn",  color: "#F7931E" },
  { icon: SiLangchain,     name: "LangChain",     color: "#1C3D5A" },
  { icon: SiN8N,           name: "N8N",           color: "#EA4B71" },
  { icon: SiJupyter,       name: "Jupyter",       color: "#F37626" },
  { icon: SiMysql,         name: "SQL",           color: "#4479A1" },
  { icon: SiR,             name: "R",             color: "#276DC3" },
  { icon: SiDocker,        name: "Docker",        color: "#2496ED" },
];

const TechIconStrip = () => (
  <div className="relative overflow-hidden mb-14 py-2">
    {/* Fade edges */}
    <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none"
      style={{ background: "linear-gradient(to right, #060608, transparent)" }} />
    <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none"
      style={{ background: "linear-gradient(to left, #060608, transparent)" }} />

    <div className="flex gap-6 tech-marquee">
      {/* Duplicate the list for seamless loop */}
      {[...techStack, ...techStack].map((tech, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-2 flex-shrink-0 group cursor-default"
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center glass border border-white/[0.06] group-hover:border-white/20 transition-all duration-300 group-hover:scale-110"
            style={{ boxShadow: `0 0 0 0 ${tech.color}00` }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 18px 2px ${tech.color}55`;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 ${tech.color}00`;
            }}
          >
            <tech.icon size={26} style={{ color: tech.color }} />
          </div>
          <span className="text-[11px] text-[#86868b] group-hover:text-white transition-colors duration-200 whitespace-nowrap">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const CategoryCard = ({ cat, index }: { cat: Category; index: number }) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt(8);
  const reveal = useScrollReveal();

  return (
    <div
      ref={reveal.ref}
      className={`reveal ${reveal.visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="tilt-card glass rounded-2xl p-6 relative overflow-hidden group h-full cursor-default"
      >
        <div data-shimmer className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none" />
        <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 rounded-2xl`} />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">{cat.icon}</span>
            <h3 className={`font-bold text-sm bg-gradient-to-r ${cat.gradient} bg-clip-text text-transparent`}>
              {cat.name}
            </h3>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {cat.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs glass px-2.5 py-1 rounded-full text-[#a1a1a6] hover:text-white border-white/[0.06] hover:border-white/20 transition-all duration-200 hover:scale-105 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Skills = () => {
  const headingReveal = useScrollReveal();
  const sphereReveal  = useScrollReveal();

  const categories: Category[] = [
    {
      icon: "🤖",
      name: "Machine Learning",
      gradient: "from-blue-400 to-cyan-400",
      borderGlow: "rgba(10,132,255,0.3)",
      skills: ["Decision Tree", "Random Forest", "Boosting", "Logistic Regression", "SVM", "PCA", "KNN", "K-means", "DBSCAN", "Hierarchical Clusters"],
    },
    {
      icon: "⚡",
      name: "AI & LLM Tools",
      gradient: "from-purple-400 to-pink-400",
      borderGlow: "rgba(191,90,242,0.3)",
      skills: ["LangChain", "RAG", "N8N", "Prompt Engineering", "Agent Orchestration"],
    },
    {
      icon: "🐍",
      name: "Python Libraries",
      gradient: "from-cyan-400 to-teal-400",
      borderGlow: "rgba(50,210,198,0.3)",
      skills: ["NumPy", "Pandas", "Matplotlib", "Sklearn", "Seaborn", "XGBoost", "LightGBM"],
    },
    {
      icon: "☁️",
      name: "Cloud & Big Data",
      gradient: "from-blue-400 to-indigo-400",
      borderGlow: "rgba(99,102,241,0.3)",
      skills: ["Azure Databricks", "Azure Data Factory", "Data Lake Gen2", "Snowflake", "dbt", "Airflow", "PySpark"],
    },
    {
      icon: "💻",
      name: "Programming",
      gradient: "from-orange-400 to-pink-400",
      borderGlow: "rgba(251,146,60,0.3)",
      skills: ["Python", "SQL", "R"],
    },
    {
      icon: "📊",
      name: "Dashboards & BI",
      gradient: "from-yellow-400 to-orange-400",
      borderGlow: "rgba(234,179,8,0.3)",
      skills: ["Power BI", "Excel", "Tableau"],
    },
    {
      icon: "📐",
      name: "Foundations",
      gradient: "from-slate-400 to-gray-400",
      borderGlow: "rgba(148,163,184,0.3)",
      skills: ["Statistics", "Linear Algebra", "Calculus", "SAP", "Data Governance", "ETL/ELT"],
    },
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div ref={headingReveal.ref} className={`reveal text-center mb-16 ${headingReveal.visible ? "visible" : ""}`}>
          <p className="text-[#0a84ff] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Expertise</p>
          <h2 className="font-black text-gradient-hero" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}>
            Skills & Technologies
          </h2>
        </div>

        {/* 3D Sphere */}
        <div
          ref={sphereReveal.ref}
          className={`reveal mb-10 ${sphereReveal.visible ? "visible" : ""}`}
        >
          <div className="glass rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 rounded-3xl" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(10,132,255,0.08) 0%, transparent 70%)" }} />
            <div className="text-center mb-4 relative z-10">
              <p className="text-[#86868b] text-sm">Interactive 3D Sphere · Drag to rotate · Scroll to zoom</p>
            </div>
            <SkillsSphere />
          </div>
        </div>

        {/* Tech Icon Marquee */}
        <TechIconStrip />

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.name} cat={cat} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};
