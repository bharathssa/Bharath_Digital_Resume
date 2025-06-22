
export const About = () => {
  console.log("About component rendered");

  const roles = [
    {
      title: "Software Developer",
      icon: "💎",
      description: "Building scalable applications with modern technologies",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "React Native Developer", 
      icon: "📱",
      description: "Creating cross-platform mobile experiences",
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      title: "Backend Developer",
      icon: "🔧",
      description: "Designing robust server-side architectures",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Engineer/Analyst",
      icon: "📊",
      description: "Transforming data into actionable insights",
      gradient: "from-pink-500 to-orange-500"
    }
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

        <div className="mb-16">
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto text-center">
            I'm a proficient Full Stack Developer with extensive experience in Python and SQL, 
            specializing in Machine Learning, Django, and Data Engineering. I also possess expertise in 
            JavaScript and frameworks such as React and Node.js, along with backend development. 
            Additionally, I have hands-on experience with AWS services, Apache Spark, and Snowflake.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <div 
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${role.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {role.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent`}>
                  {role.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {role.description}
                </p>
              </div>

              {/* Animated background pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="w-full h-full bg-gradient-to-br from-white to-transparent rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300">Available for new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};
