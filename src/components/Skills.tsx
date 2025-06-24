
import { SkillsSphere } from "./SkillsSphere";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Machine Learning",
      skills: ["Decision Tree", "Random Forest", "Boosting", "Logistic and Linear Regression", "SVM", "PCA", "KNN", "K-means Clusters", "DBSCAN Clusters", "Hierarchical clusters"]
    },
    {
      category: "Python Libraries", 
      skills: ["NumPy", "Pandas", "Matplotlib", "Sklearn", "Seaborn", "Statsmodels"]
    },
    {
      category: "Deep Learning",
      skills: ["TensorFlow", "ANN", "CNN", "Statistics", "Linear Algebra", "Calculus", "SAP"]
    },
    {
      category: "Programming Languages",
      skills: ["Python", "SQL"]
    },
    {
      category: "Dashboard",
      skills: ["Power BI", "Excel", "Tableau"]
    },
    {
      category: "Big Data and Distributed Systems",
      skills: ["Azure Databricks", "Data factory", "Synapse Analytics", "Pyspark"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900/20 to-slate-800/30"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Explore my technical expertise through this interactive 3D visualization
          </p>
        </div>

        {/* 3D Skills Sphere - Enhanced visibility */}
        <div className="mb-16 bg-slate-800/20 rounded-2xl p-8 border border-slate-700/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Interactive Skills Sphere</h3>
            <p className="text-gray-400">Click and drag to rotate • Scroll to zoom</p>
          </div>
          <SkillsSphere />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-600/30 rounded-lg p-6 hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:border-blue-400/50"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500/15 to-purple-500/15 text-gray-200 rounded-full border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
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
