
import { Calendar, MapPin, Tag } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Team Member – Customer Operations",
      company: "Woolworths New Zealand",
      location: "Auckland, NZ",
      period: "Apr 2025 – Present",
      tag: "Local NZ Experience",
      tagStyle: "text-green-400 border-green-400/40 bg-green-400/10",
      achievements: [],
      description: [
        "Gaining local New Zealand work experience in customer operations, stock management, and team coordination.",
        "Supporting daily store operations across checkout, produce, and online fulfilment with 98%+ accuracy in order picking and shelf replenishment.",
        "Fulfilled 50+ online orders per shift, contributing to positive customer satisfaction and on-time delivery metrics.",
      ]
    },
    {
      title: "Data Engineer",
      company: "Hewlett-Packard",
      location: "Bangalore, India",
      period: "Jun 2022 – Mar 2025",
      tag: "Core Data Engineering",
      tagStyle: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
      context: "Enterprise Data Platform – Scalable Pipelines, AI-Enabled Analytics & Self-Service BI across AME, APJ and EMEA",
      achievements: ["300K+ SKUs", "15+ Dashboards", "3 Global Regions"],
      description: [
        "Designed and maintained automated, reliable data pipelines ingesting and transforming data from SAP, ERP and legacy systems into a centralised platform (Data Lake Gen2, Databricks, Data Factory), ensuring high-quality trusted data assets across 300K+ global SKU-location pairs.",
        "Prepared AI-ready data assets for forecasting and optimisation models — cleansing, transforming and structuring 12–24 months of high-volume demand data — enabling near real-time inventory insights and decision-making for supply chain planners across three global regions.",
        "Developed 15+ Power BI dashboards and semantic data models covering fill rate, demand trends, SKU forecasts and excess inventory — enabling business stakeholders to independently explore and act on data without engineering dependency.",
        "Implemented data governance and quality frameworks across core datasets — data validation rules, reconciliation checks, exception logging and audit trails — ensuring compliance and improving stakeholder trust.",
        "Drove API integrations and multi-source data acquisition from SAP, ERP, BMT and legacy systems, maintaining clean data flows for Part master, SKU master, vendor lead times and order planning across all business units.",
      ]
    },
    {
      title: "Engineer – Product",
      company: "Molex India Pvt. Ltd",
      location: "Bangalore, India",
      period: "Aug 2020 – May 2022",
      tag: "AI / ML Engineering",
      tagStyle: "text-purple-400 border-purple-400/40 bg-purple-400/10",
      context: "Cable Approval Validation: AI-enabled pass/fail prediction pipeline for wire harness certification",
      achievements: ["28% R&D Saving", "3 hrs/day saved", "300+ PDFs processed"],
      description: [
        "Built an end-to-end data acquisition and transformation pipeline — extracting structured records from 300+ legacy PDF reports using tabula-py, cleansing and engineering a high-quality ML-ready dataset from 30–40 test dimensions.",
        "Developed an AI-enabled classification solution (Decision Tree, Random Forest, KNN, Naive Bayes, SVM) to predict pass/fail outcomes for new wire specifications, reducing test requirements from 30–40 checks to 5–6 for predicted passes.",
        "Applied rigorous data quality practices including domain-informed interpolation for missing values and Confusion Matrix-based model evaluation, minimising Type I errors in safety-critical certification decisions.",
        "Delivered a 28% reduction in R&D expenditure and saved engineers approximately 3 hours per day through data-driven certification decisions.",
      ]
    },
    {
      title: "Data Analyst",
      company: "TUV Rheinland India Pvt. Ltd",
      location: "Bangalore, India",
      period: "Dec 2018 – Jul 2020",
      tag: "BI & Analytics",
      tagStyle: "text-blue-400 border-blue-400/40 bg-blue-400/10",
      context: "KPI Reporting & Business Intelligence – Operational Dashboards for Electronics Device Certification",
      achievements: ["~20% cycle time reduction", "~15% QoQ repeat-test reduction", "8+ Dashboards"],
      description: [
        "Designed 8+ Power BI dashboards surfacing certification turnaround bottlenecks, test pass/fail trends and client compliance gaps — reducing average certification cycle time by approximately 20% through targeted operational improvements.",
        "Identified high-failure test categories (electrical safety, thermal, EMC) via SQL trend analysis, enabling QA teams to proactively reallocate resources and reduce repeat-test incidents by ~15% QoQ.",
        "Produced monthly compliance and revenue reports translating raw operational data into decision-ready insights that supported strategic capacity planning across testing departments.",
      ]
    },
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
              <div key={index} className={`relative flex items-start ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-slate-900 z-10 shadow-lg mt-6"></div>

                {/* Experience card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:bg-slate-700/60 transition-all duration-300 hover:scale-[1.02] shadow-xl">

                    {/* Tag */}
                    <div className="mb-3">
                      <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${exp.tagStyle}`}>
                        <Tag size={10} />
                        {exp.tag}
                      </span>
                    </div>

                    <div className="flex flex-col mb-3">
                      <h3 className="text-xl font-semibold text-blue-400 mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-gray-400 text-sm mb-1">
                        <Calendar size={14} className="mr-2 flex-shrink-0" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-purple-400 font-medium mb-3">
                      <span>{exp.company}</span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin size={14} className="mr-1 flex-shrink-0" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Context subtitle */}
                    {exp.context && (
                      <p className="text-gray-500 text-xs italic mb-3 leading-relaxed">{exp.context}</p>
                    )}

                    {/* Achievement chips */}
                    {exp.achievements.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.achievements.map((a, ai) => (
                          <span key={ai} className="text-xs bg-gradient-to-r from-cyan-500/15 to-blue-500/15 text-cyan-300 border border-cyan-400/20 rounded-full px-2.5 py-0.5 font-medium">
                            {a}
                          </span>
                        ))}
                      </div>
                    )}

                    <ul className="space-y-2 text-gray-300 mt-2">
                      {exp.description.slice(0, 4).map((item, itemIndex) => (
                        <li key={itemIndex} className="leading-relaxed text-sm flex items-start gap-2">
                          <span className="text-cyan-400 mt-1.5 flex-shrink-0">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

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
