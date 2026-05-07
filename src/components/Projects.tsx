
import { ExternalLink, Github, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;
  liveLink?: string;
  githubLink?: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "AlphaQuest Capital — BTC Signal Dashboard",
      description: "End-to-end ML pipeline with XGBoost, LightGBM, Random Forest and Gradient Boosting competing to predict daily BTC/ETH price movements. Auto-selects the champion model by F1 score and dynamically allocates a simulated $50M portfolio across 4 market regimes.",
      tech: ["XGBoost", "LightGBM", "Random Forest", "Gradient Boosting", "Python", "F1 Score Optimisation"],
      featured: true,
      liveLink: "https://alphaquest.streamlit.app/",
      githubLink: "https://github.com/bharathssa"
    },
    {
      title: "Monte Carlo Retirement Planning App",
      description: "Python-based retirement planning simulation using Monte Carlo techniques to forecast 35-year financial outcomes across superannuation, equities, and bitcoin. Grew corpus to $3.5M via a dynamic asset glide path with actionable recommendations on allocation and drawdown.",
      tech: ["Python", "Monte Carlo Simulation", "Financial Modelling", "Streamlit"],
      featured: false,
      liveLink: "https://financialadvisornz.streamlit.app/",
      githubLink: "https://github.com/bharathssa"
    },
    {
      title: "Inventory Optimisation & Demand Forecasting",
      description: "Predictive analytics pipeline built at HP — time series analysis across 300K+ SKU-location pairs enabling near real-time inventory insights. Contributed to 8% excess inventory recovery and 15% active customer growth across APJ, EMEA and AMS regions.",
      tech: ["Time Series Analysis", "Python", "Azure Databricks", "Power BI", "Forecasting"],
      featured: false,
    },
    {
      title: "Stock Analysis Web Application",
      description: "Comprehensive stock analysis app for Indian equity markets integrating real-time data, technical indicators (MACD, RSI, ADX, OBV), dynamic candlestick charts, fundamental analysis, and NLP-based sentiment scoring from live news headlines to deliver buy/hold/sell signals.",
      tech: ["Python", "Streamlit", "NLP", "Sentiment Analysis", "Technical Analysis"],
      featured: false,
      githubLink: "https://github.com/bharathssa/Comprehensive-Indian-Stock-Analyzer"
    },
    {
      title: "Cable Approval Validation (AI/ML)",
      description: "End-to-end data pipeline extracting structured records from 300+ legacy PDF reports using tabula-py, then training Decision Tree, Random Forest, KNN, Naive Bayes and SVM classifiers to predict wire harness pass/fail outcomes — cutting test requirements from 30–40 checks down to 5–6.",
      tech: ["Machine Learning", "Python", "tabula-py", "Decision Tree", "Random Forest", "SVM"],
      featured: false,
    },
    {
      title: "Expense Tracker App",
      description: "Python-based Streamlit app for tracking shared expenses with participant management, multiple split methods (equal, manual, person-specific), real-time balance calculations, editable transaction logs, and PDF export — ideal for group trips and shared budgets.",
      tech: ["Python", "Streamlit", "PDF Export", "Real-time Calculations"],
      featured: false,
      githubLink: "https://github.com/bharathssa/Expense-Tracker-with-Detailed-Transactions/tree/main"
    }
  ];

  return (
    <section id="projects" className="py-20 pt-32 bg-slate-800/30 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group flex flex-col ${
                project.featured
                  ? "border-cyan-400/40 shadow-lg shadow-cyan-500/10"
                  : "border-slate-700/50"
              }`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute -top-3 left-4">
                  <span className="inline-flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    <Zap size={10} />
                    Featured
                  </span>
                </div>
              )}

              <h3 className="text-xl font-semibold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors duration-300 mt-1">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-gray-300 rounded border border-purple-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3 mt-auto">
                {project.githubLink ? (
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-blue-400/30 text-blue-400 hover:bg-blue-400/10"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </a>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    disabled
                    className="flex-1 border-slate-600/30 text-slate-500 cursor-not-allowed"
                  >
                    <Github size={16} className="mr-2" />
                    Private
                  </Button>
                )}

                {project.liveLink ? (
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-purple-400/30 text-purple-400 hover:bg-purple-400/10"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live App
                    </Button>
                  </a>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    disabled
                    className="flex-1 border-slate-600/30 text-slate-500 cursor-not-allowed"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    N/A
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
