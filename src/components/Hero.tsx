
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Bharath Chandran
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Highly skilled Data Engineer with 6+ years of expertise in Machine Learning, 
            Model Deployment, Data pipelines, Data Analytics, Data Visualization
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
            
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/bharath-chandran" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800/50 text-gray-300 hover:text-blue-400 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/bharath-chandran" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800/50 text-gray-300 hover:text-blue-400 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
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
