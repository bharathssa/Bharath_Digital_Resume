import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactSphere } from "./ContactSphere";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const contactInfo = [
  { icon: Mail,   label: "Email",    value: "bharathssa16@gmail.com",       color: "#0a84ff" },
  { icon: Phone,  label: "Phone",    value: "+64-225960039",                color: "#bf5af2" },
  { icon: MapPin, label: "Location", value: "Flat Bush, Auckland, New Zealand", color: "#30d5c8" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/bharathchandran98/", icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-400 hover:border-blue-400/50" },
  { href: "https://github.com/bharathssa",                  icon: Github,   label: "GitHub",   color: "hover:text-purple-400 hover:border-purple-400/50" },
];

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const headingReveal = useScrollReveal();
  const sphereReveal  = useScrollReveal();
  const infoReveal    = useScrollReveal();
  const formReveal    = useScrollReveal();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current || isSubmitting) return;

    setIsSubmitting(true);
    emailjs
      .sendForm("service_pjcsz18", "template_izi6np7", form.current, "JyahNpsxKrJARL14K")
      .then(() => {
        toast.success("Message sent successfully!", {
          description: "Thanks for reaching out — I'll get back to you soon.",
        });
        form.current?.reset();
      })
      .catch(() => {
        toast.error("Something went wrong.", {
          description: "Please try again, or email me directly.",
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div ref={headingReveal.ref} className={`reveal text-center mb-16 ${headingReveal.visible ? "visible" : ""}`}>
          <p className="text-[#0a84ff] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Get In Touch</p>
          <h2 className="font-black text-gradient-hero mb-5" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}>
            Let's Connect
          </h2>
          <p className="text-[#86868b] text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on your next data science project or discuss opportunities?
            Let's turn data into insights together.
          </p>
        </div>

        {/* 3D Contact Sphere */}
        <div ref={sphereReveal.ref} className={`reveal mb-10 ${sphereReveal.visible ? "visible" : ""}`}>
          <div className="glass rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 rounded-3xl" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.08) 0%, transparent 70%)" }} />
            <div className="text-center mb-2 relative z-10">
              <h3 className="text-xl font-semibold text-cyan-300 mb-1">Interactive Contact Sphere</h3>
              <p className="text-[#86868b] text-sm">Hover over the spheres to interact</p>
            </div>
            <ContactSphere />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">

          {/* Contact info */}
          <div
            ref={infoReveal.ref}
            className={`reveal-left space-y-4 ${infoReveal.visible ? "visible" : ""}`}
          >
            {contactInfo.map(({ icon: Icon, label, value, color }) => (
              <div
                key={label}
                className="flex items-center gap-4 glass rounded-2xl p-4 border border-white/[0.06] hover:border-white/20 transition-all duration-300 group"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}1a`, border: `1px solid ${color}40` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wide" style={{ color }}>{label}</div>
                  <div className="text-[#f5f5f7] text-sm mt-0.5">{value}</div>
                </div>
              </div>
            ))}

            <div className="flex gap-2 pt-2">
              {socialLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={l.label}
                  aria-label={l.label}
                  className={`p-3 glass rounded-full text-[#86868b] border border-white/[0.06] transition-all duration-300 hover:scale-110 hover:bg-white/[0.08] ${l.color}`}
                >
                  <l.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Message form */}
          <div
            ref={formReveal.ref}
            className={`reveal-right glass rounded-2xl p-8 ${formReveal.visible ? "visible" : ""}`}
          >
            <h3 className="text-xl font-semibold text-gradient-blue mb-6">Send me a message</h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#a1a1a6] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-[#f5f5f7] placeholder:text-[#636366] focus:outline-none focus:border-[#0a84ff]/60 focus:bg-white/[0.05] transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#a1a1a6] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-[#f5f5f7] placeholder:text-[#636366] focus:outline-none focus:border-[#0a84ff]/60 focus:bg-white/[0.05] transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#a1a1a6] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-[#f5f5f7] placeholder:text-[#636366] focus:outline-none focus:border-[#0a84ff]/60 focus:bg-white/[0.05] transition-colors duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0a84ff] hover:bg-[#0071e3] text-white py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-blue-500/25 disabled:opacity-60 disabled:hover:scale-100"
              >
                {isSubmitting ? "Sending…" : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
