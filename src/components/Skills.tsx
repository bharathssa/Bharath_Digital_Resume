
import { SkillsSphere } from "./SkillsSphere";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Machine Learning",
      icon: "🤖",
      color: "blue",
      skills: ["Decision Tree", "Random Forest", "Boosting", "Logistic Regression", "Linear Regression", "SVM", "PCA", "KNN", "K-means", "DBSCAN", "Hierarchical Clusters"]
    },
    {
      category: "AI & LLM Tools",
      icon: "⚡",
      color: "purple",
      skills: ["LangChain", "RAG", "N8N", "Prompt Engineering", "Agent Orchestration"]
    },
    {
      category: "Python Libraries",
      icon: "🐍",
      color: "cyan",
      skills: ["NumPy", "Pandas", "Matplotlib", "Sklearn", "Seaborn", "XGBoost", "LightGBM", "Statsmodels"]
    },
    {
      category: "Cloud & Big Data",
      icon: "☁️",
      color: "blue",
      skills: ["Azure Databricks", "Azure Data Factory", "Data Lake Gen2", "Snowflake", "dbt", "Airflow", "PySpark", "Synapse Analytics"]
    },
    {
      category: "Programming Languages",
      icon: "💻",
      color: "purple",
      skills: ["Python", "SQL", "R"]
    },
    {
      category: "Dashboards & BI",
      icon: "📊",
      color: "cyan",
      skills: ["Power BI", "Excel", "Tableau"]
    },
    {
      category: "Foundations & Platforms",
      icon: "📐",
      color: "blue",
      skills: ["Statistics", "Linear Algebra", "Calculus", "SAP", "Data Governance", "ETL / ELT", "Data Modelling"]
    }
  ];

  const colorMap: Record<string, string> = {
    blue: "text-blue-400 bg-gradient-to-r from-blue-500/15 to-blue-500/5 border-blue-400/20 hover:border-blue-400/50",
    purple: "text-purple-400 bg-gradient-to-r from-purple-500/15 to-purple-500/5 border-purple-400/20 hover:border-purple-400/50",
    cyan: "text-cyan-400 bg-gradient-to-r from-cyan-500/15 to-cyan-500/5 border-cyan-400/20 hover:border-cyan-400/50",
  };

  const headerMap: Record<string, string> = {
    blue: "text-blue-400",
    purple: "text-purple-400",
    cyan: "text-cyan-400",
  };

  const dotMap: Record<string, string> = {
    blue: "bg-blue-400",
    purple: "bg-purple-400",
    cyan: "bg-cyan-400",
  };

  return (
    <section id="skills" className="py-20 pt-32 bg-gradient-to-b from-slate-900/20 to-slate-800/30 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Explore my technical expertise through this interactive 3D visualisation
          </p>
        </div>

        {/* 3D Skills Sphere */}
        <div className="mb-16 bg-slate-800/20 rounded-2xl p-8 border border-slate-700/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Interactive Skills Sphere</h3>
            <p className="text-gray-400">Click and drag to rotate · Scroll to zoom</p>
          </div>
          <SkillsSphere />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-600/30 rounded-lg p-6 hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:border-blue-400/50"
            >
              <h3 className={`text-xl font-semibold mb-4 flex items-center gap-3 ${headerMap[category.color]}`}>
                <span className={`w-2 h-2 rounded-full ${dotMap[category.color]}`}></span>
                <span className="text-lg">{category.icon}</span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 text-sm rounded-full border transition-all duration-300 hover:scale-105 ${colorMap[category.color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
