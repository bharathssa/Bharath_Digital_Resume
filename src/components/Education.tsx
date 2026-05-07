
import { GraduationCap, Award, Star, Trophy, Users } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Master of Business Analytics (FinTech)",
      school: "University of Auckland, New Zealand",
      period: "Mar 2025 – Present",
      status: "Currently Pursuing",
      highlights: [
        "A+ in BUSINFO 702 – Information Management (Certificate of Excellence)",
        "Student Choice Best Analysis Award — BUSINFO 704, for leading data modelling, visualisation and custom variable importance analysis",
      ]
    },
    {
      degree: "PG Diploma in Data Engineering",
      school: "Intellipaat, Bangalore",
      period: "May 2024 – May 2025",
    },
    {
      degree: "Master of Business Administration",
      school: "University of Madras, Chennai",
      period: "Jun 2019 – Sept 2021",
      grade: "1st Class with Distinction · CGPA 7.7"
    },
    {
      degree: "B.Tech Mechanical Engineering",
      school: "SRM Institute of Science & Technology, Chennai",
      period: "Jul 2013 – May 2017",
      grade: "1st Class with Distinction · CGPA 8.8"
    }
  ];

  const certifications = [
    {
      title: "Microsoft Certified: Fabric Data Engineer Associate",
      code: "DP-700",
      detail: "Earned December 2025",
      link: "https://learn.microsoft.com/en-us/credentials/certifications/fabric-data-engineer-associate/",
      featured: true,
      icon: "🏆"
    },
    {
      title: "HackerRank – 5★ Gold Badge in Python",
      code: null,
      detail: "5-star Gold rating in Python",
      link: "https://www.hackerrank.com/bharathssa16",
      featured: false,
      icon: "⭐"
    },
    {
      title: "HackerRank – 5★ Gold Badge in SQL",
      code: null,
      detail: "5-star Gold rating in SQL",
      link: "https://www.hackerrank.com/bharathssa16",
      featured: false,
      icon: "⭐"
    },
    {
      title: "Kaggle Competition Participant",
      code: null,
      detail: "Active Kaggle profile with competition entries",
      link: "https://www.kaggle.com/",
      featured: false,
      icon: "📊"
    },
  ];

  const community = [
    {
      icon: <Users size={20} />,
      title: "Product Foundry Auckland",
      period: "Mar 2025 – Present",
      detail: "Selected application-based AI developer community · Weekly sessions on autonomous agent systems, MLOps, and AI product engineering with a global peer group."
    },
    {
      icon: <Trophy size={20} />,
      title: "University of Auckland – Academic Distinctions",
      period: "2025",
      detail: "A+ · BUSINFO 702 (Certificate of Excellence) · Student Choice Best Analysis Award · BUSINFO 704"
    },
  ];

  return (
    <section id="education" className="py-20 pt-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education & Credentials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-3">
              <GraduationCap size={24} />
              Education
            </h3>
            <div className="space-y-5">
              {education.map((edu, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-purple-400 mb-1">{edu.degree}</h4>
                  <p className="text-gray-300 font-medium mb-1">{edu.school}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                  {edu.status && (
                    <span className="inline-block text-blue-400 text-xs font-medium bg-blue-400/10 border border-blue-400/30 rounded-full px-3 py-0.5 mb-2">
                      {edu.status}
                    </span>
                  )}
                  {edu.grade && (
                    <p className="text-green-400 text-sm">{edu.grade}</p>
                  )}
                  {edu.highlights && (
                    <ul className="mt-3 space-y-1">
                      {edu.highlights.map((h, hi) => (
                        <li key={hi} className="flex items-start gap-2 text-sm text-gray-300">
                          <Star size={12} className="text-yellow-400 mt-1 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Community */}
          <div className="space-y-10">

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-3">
                <Award size={24} />
                Certifications & Achievements
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`bg-slate-800/50 backdrop-blur-sm border rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300 ${
                      cert.featured
                        ? "border-blue-400/40 bg-gradient-to-r from-blue-500/5 to-purple-500/5"
                        : "border-slate-700/50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{cert.icon}</span>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h4 className={`font-semibold text-sm ${cert.featured ? "text-blue-300" : "text-gray-200"}`}>
                            {cert.title}
                          </h4>
                          {cert.code && (
                            <span className="text-xs bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-full px-2 py-0.5 font-mono">
                              {cert.code}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400 text-xs">{cert.detail}</p>
                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-cyan-400 hover:text-cyan-300 mt-1 inline-block underline underline-offset-2"
                          >
                            View Credential →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community & Additional */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-3">
                <Users size={24} />
                Community & Additional
              </h3>
              <div className="space-y-4">
                {community.map((item, i) => (
                  <div key={i} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="text-purple-400 mt-0.5 flex-shrink-0">{item.icon}</div>
                      <div>
                        <h4 className="text-gray-200 font-semibold text-sm mb-0.5">{item.title}</h4>
                        <p className="text-gray-400 text-xs mb-1">{item.period}</p>
                        <p className="text-gray-400 text-xs leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="p-5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Work Rights</h4>
                  <ul className="space-y-1.5 text-gray-300 text-sm">
                    <li>• Student Visa — restricted working rights in New Zealand</li>
                    <li>• Open to immediate opportunities in Data Engineering, Analytics &amp; AI roles</li>
                    <li>• Local NZ work experience — Woolworths NZ (Apr 2025 – present)</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
