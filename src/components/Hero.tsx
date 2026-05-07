
import { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  // Parallax orbs on mouse move
  useEffect(() => {
    const orb1 = document.getElementById("hero-orb-1");
    const orb2 = document.getElementById("hero-orb-2");
    const orb3 = document.getElementById("hero-orb-3");

    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      if (orb1) orb1.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
      if (orb2) orb2.style.transform = `translate(${-x * 30}px, ${-y * 30}px)`;
      if (orb3) orb3.style.transform = `translate(${x * 20}px, ${-y * 20}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const stats = [
    { value: "6+",    label: "Years' Experience"   },
    { value: "DP-700",label: "MS Fabric Certified" },
    { value: "300K+", label: "SKU-Location Pairs"  },
    { value: "3",     label: "Global Regions"      },
  ];

  const links = [
    { href: "https://www.linkedin.com/in/bharathchandran98/", icon: <Linkedin size={18} />, label: "LinkedIn", color: "hover:text-blue-400 hover:border-blue-400/50" },
    { href: "https://github.com/bharathssa",                  icon: <Github   size={18} />, label: "GitHub",   color: "hover:text-purple-400 hover:border-purple-400/50" },
    { href: "https://bharath.tech",                           icon: <Globe    size={18} />, label: "Web",      color: "hover:text-cyan-400 hover:border-cyan-400/50" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* ── Ambient orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div id="hero-orb-1"
          className="absolute top-[15%] left-[10%] w-[600px] h-[600px] rounded-full
            bg-gradient-radial from-blue-600/20 via-blue-900/8 to-transparent
            blur-[120px] animate-glow-pulse transition-transform duration-700 ease-out"
          style={{ background: "radial-gradient(circle, rgba(10,132,255,0.18) 0%, rgba(10,132,255,0.04) 50%, transparent 70%)" }}
        />
        <div id="hero-orb-2"
          className="absolute bottom-[10%] right-[8%] w-[500px] h-[500px] rounded-full
            blur-[120px] transition-transform duration-700 ease-out"
          style={{ background: "radial-gradient(circle, rgba(191,90,242,0.16) 0%, rgba(191,90,242,0.04) 50%, transparent 70%)" }}
        />
        <div id="hero-orb-3"
          className="absolute top-[55%] left-[55%] w-[400px] h-[400px] rounded-full
            blur-[100px] transition-transform duration-700 ease-out"
          style={{ background: "radial-gradient(circle, rgba(50,210,198,0.12) 0%, transparent 65%)" }}
        />

        {/* Subtle dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Cert badge */}
        <div className="animate-fade-up mb-8" style={{ animationDelay: "0.1s" }}>
          <span className="inline-flex items-center gap-2 glass text-blue-300 text-xs font-medium tracking-widest uppercase px-5 py-2 rounded-full">
            <Award size={13} className="text-blue-400" />
            Microsoft Certified Fabric Data Engineer · DP-700
          </span>
        </div>

        {/* Name */}
        <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h1
            className="font-black leading-none tracking-tight mb-4 text-gradient-hero"
            style={{ fontSize: "clamp(3.8rem, 10vw, 9rem)", letterSpacing: "-0.04em" }}
          >
            Bharath<br />Chandran
          </h1>
        </div>

        {/* Roles */}
        <div className="animate-fade-up flex flex-wrap items-center justify-center gap-3 mb-6" style={{ animationDelay: "0.35s" }}>
          {["Data Engineer", "AI Analytics Specialist", "Microsoft Fabric"].map((r, i) => (
            <span key={i} className={`text-sm font-medium px-3 py-1 rounded-full glass ${
              i === 0 ? "text-blue-300"  :
              i === 1 ? "text-purple-300":
                        "text-cyan-300"
            }`}>{r}</span>
          ))}
        </div>

        {/* Tagline */}
        <p
          className="animate-fade-up text-[#86868b] text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ animationDelay: "0.45s" }}
        >
          6+ years designing scalable data pipelines, AI-enabled analytics &amp; self-service BI
          across global enterprise — AME · APJ · EMEA.
          <br />
          <span className="text-[#a1a1a6]">Currently pursuing MBA (FinTech) · University of Auckland</span>
        </p>

        {/* Stats strip */}
        <div
          ref={statsRef}
          className="animate-fade-up grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-10"
          style={{ animationDelay: "0.55s" }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="glass rounded-2xl px-4 py-4 group hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="text-2xl font-bold text-gradient-blue mb-0.5 group-hover:scale-105 transition-transform">{s.value}</div>
              <div className="text-[#636366] text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="animate-fade-up flex flex-col sm:flex-row gap-3 justify-center items-center" style={{ animationDelay: "0.65s" }}>
          <a href="mailto:bharathssa16@gmail.com">
            <Button className="bg-[#0a84ff] hover:bg-[#0071e3] text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 gap-2">
              <Mail size={16} />
              Get In Touch
            </Button>
          </a>
          <div className="flex gap-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                title={l.label}
                className={`p-3 glass rounded-full text-[#86868b] border border-white/[0.06] transition-all duration-300 hover:scale-110 hover:bg-white/[0.08] ${l.color}`}
              >
                {l.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <ArrowDown size={24} className="text-white" />
      </div>
    </section>
  );
};
