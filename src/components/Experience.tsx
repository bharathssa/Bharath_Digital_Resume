
import { Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Team Member – Customer Operations",
      company: "Woolworths New Zealand",
      location: "Auckland, NZ",
      period: "Apr 2025 – Present",
      description: [
        "Provided customer-focused support across store operations, including stock management and direct customer interaction.",
        "Supported daily operations across multiple store zones-checkout, produce, and online fulfillment-ensuring an average 98% accuracy rate in stock display, order picking, and shelf replenishment.",
        "Fulfilled up to 50+ online orders per shift with attention to quality, contributing to positive customer satisfaction metrics and on-time delivery performance.",
        "Provided direct assistance to 100+ customers weekly by locating products, answering queries, and offering a seamless shopping journey, reflecting Woolworths' brand of friendly service.",
        "Maintained compliance with safety protocols and store procedures, reducing risk incidents and ensuring a secure and hygienic retail environment."
      ]
    },
    {
      title: "Data Engineer",
      company: "Hewlett-Packard",
      location: "Bangalore, India",
      period: "Jun 2022 – Mar 2025",
      description: [
        "Invented Optimization and Demand Forecast Prediction using Time Series Analysis.",
        "Detailed study of excess inventory pattern, Customer Activity Status and Fill rate across regions for 24 months and which helped graphics printing business to recover 8% of excess inventory, increase in 15% of active customer across APJ, EMEA and AMS clients.",
        "Deployed 15 distinct Power BI dashboard using various SQL's and understanding logistics to improve HP readability.",
        "Led and facilitated the end-to-end 'GoldenEye Project' as a SuperUser, actively engaging in time series analysis to predict Demand Forecast."
      ]
    },
    {
      title: "Engineer -Product",
      company: "Molex India Pvt. Ltd",
      location: "Bangalore, India",
      period: "Aug 2020 – May 2022",
      description: [
        "Cable Approval Validation: Predict the passing criteria of cable approval by cross sectioning test results using a machine learning algorithm",
        "Retrieved Data from old test reports from PDFs by converting them to tabula-py and stored them in pandas dataframe using CSV format.",
        "Missing values were effectively handled using mathematical functions and interpolation techniques, incorporating domain expertise.",
        "Executed a comprehensive range of classification algorithms, encompassing Decision Trees, Random Forest, K-Nearest Neighbors (KNN), Naive Bayes, and Support Vector Machines (SVM), to address diverse classification challenges."
      ]
    },
    {
      title: "Assistant Engineer",
      company: "TUV Rheinland India Pvt. Ltd",
      location: "Bangalore, India",
      period: "Dec 2018 – Jul 2020",
      description: [
        "Visualizing KPI and Business Concepts in Power BI:",
        "Proficient in Data Reporting and Data Visualization through Power BI, extracting meaningful insights from datalake using SQL.",
        "Developed and maintained robust Data Pipelines and ETL processes using SQL and SSMS for streamlined data management."
      ]
    },
    {
      title: "Junior Engineer",
      company: "SKC Environ Lab Pvt. Ltd",
      location: "Bangalore, India",
      period: "Sep 2017 – Nov 2019",
      description: [
        "Pioneered the design and analysis of various tests using Catia V5, while also preparing comprehensive test reports by collecting and validating measured data and results."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Career Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400 h-full rounded-full opacity-60"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-slate-900 z-10 shadow-lg"></div>
                
                {/* Experience card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:bg-slate-700/60 transition-all duration-300 hover:scale-105 shadow-xl">
                    {/* Date indicator */}
                    <div className={`absolute top-4 ${index % 2 === 0 ? '-right-2' : '-left-2'} w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse`}></div>
                    
                    <div className="flex flex-col mb-4">
                      <h3 className="text-xl font-semibold text-blue-400 mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-gray-400 text-sm mb-2">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-purple-400 font-medium mb-2">
                      <span className="mr-4">{exp.company}</span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
                      {exp.description.slice(0, 3).map((item, itemIndex) => (
                        <li key={itemIndex} className="leading-relaxed text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Progress indicator */}
                    <div className="mt-4 flex justify-center">
                      <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
