
import { GraduationCap, Award } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Master of Business Analytics",
      school: "University of Auckland, New Zealand",
      period: "Mar 2025 - Present",
      status: "Currently Pursuing"
    },
    {
      degree: "PG Diploma Programme in Data Engineering",
      school: "Intellipaat, Bangalore",
      period: "May 2024 - May 2025"
    },
    {
      degree: "Master of Business Administration",
      school: "University of Madras, Chennai",
      period: "Jun 2019 – Sept 2021",
      grade: "Secured 1st Class with distinction - CGPA 7.7"
    },
    {
      degree: "B. TECH Mechanical Engineering",
      school: "SRM Institute of Science & Technology, Chennai",
      period: "Jul 2013 – May 2017",
      grade: "Secured 1st Class with distinction - CGPA 8.8"
    }
  ];

  const certifications = [
    "PG Diploma Programme in Data Engineering: Profile Link",
    "Udemy - Machine Learning A-Z: Hands-on Python & R In Data Science",
    "Hacker Rank - Profile link & Kaggle Competition: Profile link",
    "Secured 5-star Gold Badge in Python and Secured 5-star Gold Badge rating in SQL"
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center">
              <GraduationCap className="mr-3" size={24} />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-300 font-medium mb-2">{edu.school}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                  {edu.status && (
                    <p className="text-blue-400 text-sm italic">{edu.status}</p>
                  )}
                  {edu.grade && (
                    <p className="text-green-400 text-sm">{edu.grade}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center">
              <Award className="mr-3" size={24} />
              Out of the Box
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300">
                  <p className="text-gray-300 leading-relaxed">{cert}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Additional Information</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Work Rights: Restricted working rights in New Zealand (Student Visa)</li>
                <li>• Availability: Open to immediate opportunities in Data Science, Analytics, and Engineering roles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
