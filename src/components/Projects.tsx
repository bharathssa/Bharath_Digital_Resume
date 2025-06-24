
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Retirement Planning Simulation App",
      description: "Developed a Python-based retirement planning simulation app using Monte Carlo techniques and scenario modeling to forecast 35-year financial outcomes, enabling strategic investment in superannuation, foreign equities, and bitcoin; grew project to $3.5M from minimal input through dynamic asset glide path and delivered actionable recommendations on asset allocation, lifestyle upgrades, and drawdown planning.",
      tech: ["Python", "Monte Carlo", "Financial Modeling", "Streamlit"],
      link: "https://financialadvisornz.streamlit.app/"
    },
    {
      title: "Customer Segmentation & Marketing ROI",
      description: "Developed a logistic regression model and customer segmentation strategy to predict campaign responders and optimize marketing ROI.",
      tech: ["Python", "Logistic Regression", "Customer Analytics"],
      link: "#"
    },
    {
      title: "Expense Tracking App",
      description: "Developed a Python-based Streamlit app for tracking shared expenses, featuring participant management, multiple split methods (equal, manual, person-specific), real-time balance calculations, editable transaction logs, and PDF export—ideal for trips and shared budgets.",
      tech: ["Python", "Streamlit", "PDF Export", "Real-time Calculations"],
      link: "https://github.com/bharathssa/Expense-Tracker-with-Detailed-Transactions/tree/main"
    },
    {
      title: "Stock Analysis Web Application",
      description: "Developed a comprehensive stock analysis web application using Python and Streamlit, designed for Indian equity markets. The app integrates real-time data from Google Sheets, computes technical indicators (MACD, RSI, ADX, OBV), and presents dynamic candlestick charts with trend insights. Implemented fundamental analysis and NLP-based sentiment scoring from live news headlines to deliver buy/hold/sell signals, empowering users to make informed investment decisions through an intuitive dashboard.",
      tech: ["Python", "Streamlit", "Technical Analysis", "NLP", "Sentiment Analysis"],
      link: "https://github.com/bharathssa/Comprehensive-Indian-Stock-Analyzer"
    },
    {
      title: "Inventory Optimization & Demand Forecasting",
      description: "Developed predictive analytics models improving forecasting accuracy.",
      tech: ["Time Series Analysis", "Python", "Forecasting"],
      link: "#"
    },
    {
      title: "Cable Test Validation using AI",
      description: "Implemented ML models reducing testing time and R&D costs.",
      tech: ["Machine Learning", "Python", "Classification"],
      link: "#"
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
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group">
              <h3 className="text-xl font-semibold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-gray-300 rounded border border-purple-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <a
                  href={project.link.startsWith("http") ? project.link : "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-blue-400/30 text-blue-400 hover:bg-blue-400/10"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </a>

                <a
                  href={project.link.startsWith("http") ? project.link : "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-purple-400/30 text-purple-400 hover:bg-purple-400/10"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
