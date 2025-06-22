
export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate AI enthusiast focused on Deep Learning and Time Series Analysis, 
              dedicated to driving impactful solutions through cutting-edge technologies.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With over 6 years of experience in the field, I specialize in building robust data 
              pipelines, implementing machine learning models, and creating scalable analytics solutions 
              that drive business value.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-slate-700/50 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden border-4 border-gradient-to-br from-blue-400 to-purple-400 shadow-2xl">
                  <img 
                    src="/lovable-uploads/9f1da6e7-2ce1-4338-b04d-a156e2530dab.png" 
                    alt="Bharath Chandran" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="text-xl text-gray-300">Data Engineer</div>
                <div className="text-lg text-gray-400">Auckland, New Zealand</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
