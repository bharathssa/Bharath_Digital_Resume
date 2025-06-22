
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
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* 3D Skills Sphere */}
        <div className="mb-16">
          <SkillsSphere />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-gray-300 rounded-full border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300"
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
