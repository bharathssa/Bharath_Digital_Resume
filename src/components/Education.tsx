
import { GraduationCap, Award, Star, Users, Trophy } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTilt } from "@/hooks/use-tilt";

const EducationCard = ({ degree, school, period, status, grade, highlights, index }: {
  degree: string; school: string; period: string;
  status?: string; grade?: string; highlights?: string[];
  index: number;
}) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt(7);
  const reveal = useScrollReveal();

  return (
    <div ref={reveal.ref} className={`reveal ${reveal.visible ? "visible" : ""}`} style={{ transitionDelay: `${index * 0.08}s` }}>
      <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
        className="tilt-card glass rounded-2xl p-6 relative overflow-hidden group h-full cursor-default">
        <div data-shimmer className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/[0.05] group-hover:to-purple-500/[0.04] transition-all duration-500 rounded-2xl" />

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h4 className="text-[#f5f5f7] font-bold text-base leading-tight">{degree}</h4>
            {status && (
              <span className="shrink-0 text-xs bg-blue-400/10 text-blue-300 border border-blue-400/20 rounded-full px-2.5 py-0.5 font-medium">{status}</span>
            )}
          </div>
          <p className="text-[#86868b] text-sm font-medium mb-1">{school}</p>
          <p className="text-[#636366] text-xs mb-3">{period}</p>
          {grade && <p className="text-green-400/80 text-xs mb-3">{grade}</p>}
          {highlights && (
            <ul className="space-y-1.5 mt-3 border-t border-white/[0.06] pt-3">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[#86868b]">
                  <Star size={10} className="text-yellow-400 mt-0.5 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const CertCard = ({ icon, title, code, detail, link, featured, index }: {
  icon: string; title: string; code?: string; detail: string;
  link?: string; featured?: boolean; index: number;
}) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt(8);
  const reveal = useScrollReveal();

  return (
    <div ref={reveal.ref} className={`reveal ${reveal.visible ? "visible" : ""}`} style={{ transitionDelay: `${index * 0.06}s` }}>
      <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
        className={`tilt-card rounded-2xl p-5 relative overflow-hidden group h-full cursor-default ${
          featured ? "glass-md border border-blue-400/20" : "glass"
        }`}
      >
        <div data-shimmer className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none" />
        {featured && (
          <div className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 30% 0%, rgba(10,132,255,0.1) 0%, transparent 60%)" }} />
        )}

        <div className="relative z-10 flex items-start gap-3">
          <span className="text-2xl shrink-0">{icon}</span>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className={`text-sm font-semibold ${featured ? "text-blue-200" : "text-[#f5f5f7]"}`}>{title}</span>
              {code && (
                <span className="text-[10px] bg-blue-500/15 text-blue-300 border border-blue-400/25 rounded px-1.5 py-0.5 font-mono font-bold">{code}</span>
              )}
            </div>
            <p className="text-[#636366] text-xs mb-1.5">{detail}</p>
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer"
                className="text-xs text-[#0a84ff] hover:text-blue-300 transition-colors">
                View Credential →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Education = () => {
  const headingReveal = useScrollReveal();

  const eduItems = [
    {
      degree: "Master of Business Analytics (FinTech)",
      school: "University of Auckland, New Zealand",
      period: "Mar 2025 – Jun 2026",
      status: "Completed",
      highlights: [
        "A+ — BUSINFO 702 Information Management (Certificate of Excellence)",
        "Student Choice Best Analysis Award — BUSINFO 704",
      ],
    },
    {
      degree: "PG Diploma in Data Engineering",
      school: "Intellipaat, Bangalore",
      period: "May 2024 – May 2025",
    },
    {
      degree: "Master of Business Administration",
      school: "University of Madras, Chennai",
      period: "Jun 2019 – Sept 2021",
      grade: "1st Class Distinction · CGPA 7.7",
    },
    {
      degree: "B.Tech Mechanical Engineering",
      school: "SRM Institute of Science & Technology",
      period: "Jul 2013 – May 2017",
      grade: "1st Class Distinction · CGPA 8.8",
    },
  ];

  const certs = [
    { icon: "🏆", title: "Microsoft Certified: Fabric Data Engineer Associate", code: "DP-700", detail: "Earned December 2025", link: "https://learn.microsoft.com/en-us/credentials/certifications/fabric-data-engineer-associate/", featured: true },
    { icon: "⭐", title: "HackerRank — 5★ Gold Badge in Python", detail: "5-star Gold rating", link: "https://www.hackerrank.com/bharathssa16" },
    { icon: "⭐", title: "HackerRank — 5★ Gold Badge in SQL",    detail: "5-star Gold rating", link: "https://www.hackerrank.com/bharathssa16" },
    { icon: "📊", title: "Kaggle Competition Participant", detail: "Active competition profile", link: "https://www.kaggle.com/" },
  ];

  const community = [
    {
      icon: <Users size={18} />,
      title: "Product Foundry Auckland",
      period: "Mar 2025 – Present",
      detail: "Application-based AI developer community · Weekly sessions on autonomous agents, MLOps, and AI product engineering.",
    },
    {
      icon: <Trophy size={18} />,
      title: "Academic Distinctions — University of Auckland",
      period: "2025",
      detail: "A+ · BUSINFO 702 Certificate of Excellence · Student Choice Best Analysis Award · BUSINFO 704",
    },
  ];

  const communityReveal = useScrollReveal();

  return (
    <section id="education" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingReveal.ref} className={`reveal text-center mb-16 ${headingReveal.visible ? "visible" : ""}`}>
          <p className="text-[#0a84ff] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Background</p>
          <h2 className="font-black text-gradient-hero" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}>
            Education & Credentials
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={20} className="text-blue-400" />
              <h3 className="text-lg font-bold text-[#f5f5f7]">Education</h3>
            </div>
            <div className="space-y-4">
              {eduItems.map((e, i) => <EducationCard key={e.degree} {...e} index={i} />)}
            </div>
          </div>

          {/* Certs + Community */}
          <div className="space-y-8">

            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award size={20} className="text-purple-400" />
                <h3 className="text-lg font-bold text-[#f5f5f7]">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certs.map((c, i) => <CertCard key={c.title} {...c} index={i} />)}
              </div>
            </div>

            <div
              ref={communityReveal.ref}
              className={`reveal space-y-3 ${communityReveal.visible ? "visible" : ""}`}
            >
              <div className="flex items-center gap-2 mb-6">
                <Users size={20} className="text-cyan-400" />
                <h3 className="text-lg font-bold text-[#f5f5f7]">Community</h3>
              </div>
              {community.map((item, i) => (
                <div key={i} className="glass rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="text-purple-400 mt-0.5 shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-[#f5f5f7] font-semibold text-sm mb-0.5">{item.title}</p>
                      <p className="text-[#636366] text-xs mb-1">{item.period}</p>
                      <p className="text-[#86868b] text-xs leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="glass rounded-2xl p-5 mt-3" style={{ background: "linear-gradient(135deg, rgba(10,132,255,0.06), rgba(191,90,242,0.04))" }}>
                <h4 className="text-[#0a84ff] font-semibold text-sm mb-3">Work Eligibility — New Zealand</h4>
                <ul className="space-y-1.5 text-[#86868b] text-xs">
                  <li>▸ 3-year Post Study Work Visa · Valid until 18 July 2029</li>
                  <li>▸ Full, unrestricted NZ work rights · Available immediately</li>
                  <li>▸ Local NZ experience — Woolworths NZ (Apr 2025 – Nov 2025)</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
