
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTilt } from "@/hooks/use-tilt";

const MetricCard = ({ value, label, sublabel, delay }: {
  value: string; label: string; sublabel: string; delay: string;
}) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt(10);
  const reveal = useScrollReveal();

  return (
    <div ref={reveal.ref} className={`reveal ${reveal.visible ? "visible" : ""}`} style={{ transitionDelay: delay }}>
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="tilt-card glass rounded-2xl p-6 text-center relative overflow-hidden group cursor-default"
      >
        <div data-shimmer className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none transition-opacity duration-300" />
        <div className="text-3xl font-black text-gradient-blue mb-1 group-hover:scale-105 transition-transform duration-300">
          {value}
        </div>
        <div className="text-[#f5f5f7] text-sm font-semibold mb-0.5">{label}</div>
        <div className="text-[#636366] text-xs">{sublabel}</div>
      </div>
    </div>
  );
};

const RoleCard = ({ icon, title, desc, gradient, delay }: {
  icon: string; title: string; desc: string; gradient: string; delay: string;
}) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt(12);
  const reveal = useScrollReveal();

  return (
    <div ref={reveal.ref} className={`reveal ${reveal.visible ? "visible" : ""}`} style={{ transitionDelay: delay }}>
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="tilt-card glass rounded-2xl p-6 relative overflow-hidden group h-full cursor-default"
      >
        {/* Gradient edge highlight on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 rounded-2xl`} />
        <div data-shimmer className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none transition-opacity duration-300" />

        <div className="relative z-10">
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
            {icon}
          </div>
          <h3 className={`font-bold text-base mb-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
            {title}
          </h3>
          <p className="text-[#86868b] text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export const About = () => {
  const headingReveal = useScrollReveal();

  const metrics = [
    { value: "300K+", label: "SKU-Location Pairs",  sublabel: "Managed at HP",          delay: "0s"    },
    { value: "15+",   label: "Power BI Dashboards", sublabel: "Deployed globally",       delay: "0.08s" },
    { value: "28%",   label: "R&D Cost Reduction",  sublabel: "Delivered at Molex",      delay: "0.16s" },
    { value: "20%",   label: "Cycle Time Cut",       sublabel: "TUV Rheinland",           delay: "0.24s" },
  ];

  const roles = [
    { icon: "⚡", title: "Microsoft Fabric Engineer",  gradient: "from-blue-400 to-cyan-400",    desc: "DP-700 Certified · Scalable pipelines, data governance & Azure ecosystem delivery",                    delay: "0s"    },
    { icon: "🤖", title: "AI & LLM Engineering",       gradient: "from-purple-400 to-pink-400",  desc: "LangChain, RAG, N8N orchestration — production-grade AI data workflows",                              delay: "0.1s"  },
    { icon: "📊", title: "BI & Data Visualisation",    gradient: "from-teal-400 to-cyan-400",    desc: "15+ Power BI dashboards enabling self-service analytics for global stakeholders",                      delay: "0.2s"  },
    { icon: "🔬", title: "ML & Predictive Analytics",  gradient: "from-orange-400 to-pink-400",  desc: "End-to-end ML pipelines from raw data acquisition to model deployment",                               delay: "0.3s"  },
  ];

  return (
    <section id="about" className="py-32 relative">
      {/* Subtle section separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div
          ref={headingReveal.ref}
          className={`reveal text-center mb-16 ${headingReveal.visible ? "visible" : ""}`}
        >
          <p className="text-[#0a84ff] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Introduction</p>
          <h2 className="font-black text-gradient-hero mb-6" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}>
            Overview.
          </h2>
          <p className="text-[#86868b] text-lg max-w-3xl mx-auto leading-relaxed">
            <span className="text-[#f5f5f7] font-semibold">Microsoft Certified Fabric Data Engineer (DP-700)</span> with 6+ years of experience
            designing{" "}<span className="text-blue-400">scalable data pipelines</span>,{" "}
            <span className="text-purple-400">AI-enabled analytics</span>, and{" "}
            <span className="text-cyan-400">self-service BI solutions</span>{" "}
            across global enterprise environments. Currently completing a{" "}
            <span className="text-blue-400 font-medium">Master of Business Analytics (FinTech)</span> at the University of Auckland.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>

        {/* Role cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {roles.map((r) => (
            <RoleCard key={r.title} {...r} />
          ))}
        </div>

        {/* Available badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-[#86868b] text-sm">Available for Data Engineering &amp; Analytics opportunities in New Zealand</span>
          </div>
        </div>

      </div>
    </section>
  );
};
