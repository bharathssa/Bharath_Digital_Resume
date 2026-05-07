import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactSphere } from "./ContactSphere";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pjcsz18",
        "template_izi6np7",
        form.current!,
        "JyahNpsxKrJARL14K"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current?.reset();
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-800/20 to-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Ready to collaborate on your next data science project or discuss opportunities? 
            Let's turn data into insights together.
          </p>
        </div>

        {/* 3D Contact Sphere */}
        <div className="mb-16 bg-slate-800/20 rounded-2xl p-8 border border-slate-600/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Interactive Contact Sphere</h3>
            <p className="text-gray-400">Hover over the spheres to interact</p>
          </div>
          <ContactSphere />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 group bg-slate-800/20 p-4 rounded-xl border border-slate-600/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-400">Email</h3>
                <p className="text-gray-300">bharathssa16@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group bg-slate-800/20 p-4 rounded-xl border border-slate-600/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-400">Phone</h3>
                <p className="text-gray-300">+64-225960039</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group bg-slate-800/20 p-4 rounded-xl border border-slate-600/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-400">Location</h3>
                <p className="text-gray-300">16 Gore Street, Auckland Central, Auckland, New Zealand</p>
              </div>
            </div>

            <div className="flex space-x-4 pt-6">
              <a 
                href="https://www.linkedin.com/in/bharathchandran98/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/30 rounded-full text-blue-400 hover:bg-blue-400/10 border border-blue-400/20 hover:border-blue-400/60 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/bharathssa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/30 rounded-full text-purple-400 hover:bg-purple-400/10 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-600/30 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">Send me a message</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-900/30 border border-slate-500/30 rounded-lg text-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-900/30 border border-slate-500/30 rounded-lg text-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/30 border border-slate-500/30 rounded-lg text-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-300 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
