
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-20 left-20 w-2 h-20 bg-cyan-400 transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-40 right-32 w-16 h-2 bg-purple-400 transform -rotate-12 animate-pulse delay-500"></div>
          <div className="absolute top-32 right-20 w-8 h-8 border-2 border-blue-400 transform rotate-45 animate-spin-slow"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-6">
            <span className="text-cyan-400 text-lg font-medium tracking-wide uppercase">Hi, I'm</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Bharath Chandran
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-2">
            <span className="text-cyan-400">Full Stack Developer</span>
          </div>
          <div className="text-xl md:text-2xl text-gray-300 mb-8">
            and <span className="text-purple-400">Data Enthusiast</span>
          </div>

          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Highly skilled Data Engineer with 6+ years of expertise in Machine Learning, 
            Model Deployment, Data pipelines, Data Analytics, Data Visualization
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
            
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/bharath-chandran" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 border border-slate-700/50 hover:border-cyan-400/50"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/bharath-chandran" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm text-gray-300 hover:text-purple-400 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 border border-slate-700/50 hover:border-purple-400/50"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-gray-400" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};
