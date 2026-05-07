
export const About = () => {
  const roles = [
    {
      title: "Microsoft Fabric Engineer",
      icon: "⚡",
      description: "DP-700 Certified · Scalable pipelines, data governance & Azure ecosystem delivery across global enterprise",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI & LLM Engineering",
      icon: "🤖",
      description: "LangChain, RAG, N8N orchestration — turning AI models into production-grade data workflows",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "BI & Data Visualisation",
      icon: "📊",
      description: "15+ Power BI dashboards enabling self-service analytics and independent decision-making for global stakeholders",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      title: "ML & Predictive Analytics",
      icon: "🔬",
      description: "End-to-end ML pipelines — from raw data acquisition to model deployment and operational insight delivery",
      gradient: "from-orange-500 to-pink-500"
    }
  ];

  const metrics = [
    { value: "300K+", label: "SKU-Location Pairs", sublabel: "Managed at HP" },
    { value: "15+", label: "Power BI Dashboards", sublabel: "Deployed globally" },
    { value: "28%", label: "R&D Cost Reduction", sublabel: "Delivered at Molex" },
    { value: "20%", label: "Cycle Time Reduction", sublabel: "At TUV Rheinland" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-cyan-400 text-lg font-medium tracking-wide uppercase">Introduction</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Overview.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="mb-12">
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto text-center">
            <span className="text-white font-semibold">Microsoft Certified Fabric Data Engineer (DP-700)</span> with 6+ years of experience
            designing and delivering{" "}
            <span className="text-cyan-400">scalable data pipelines</span>,{" "}
            <span className="text-purple-400">AI-enabled analytics</span>, and{" "}
            <span className="text-blue-400">self-service BI solutions</span> across global enterprise environments.
            Skilled in modern data platforms, data governance, and translating business requirements into
            trusted, insight-ready data assets. Currently completing a{" "}
            <span className="text-cyan-400 font-medium">Master of Business Analytics (FinTech)</span> at the University of Auckland.
          </p>
        </div>

        {/* Key Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 text-center hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1 group-hover:from-cyan-300 group-hover:to-purple-400 transition-all duration-300">
                {metric.value}
              </div>
              <div className="text-gray-200 text-sm font-medium">{metric.label}</div>
              <div className="text-gray-500 text-xs mt-1">{metric.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Role cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${role.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {role.icon}
                </div>
                <h3 className={`text-lg font-semibold mb-3 bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent`}>
                  {role.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {role.description}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="w-full h-full bg-gradient-to-br from-white to-transparent rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300">Available for Data Engineering &amp; Analytics opportunities in New Zealand</span>
          </div>
        </div>
      </div>
    </section>
  );
};
