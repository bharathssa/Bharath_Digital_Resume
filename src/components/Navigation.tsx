
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("home");

  const navItems = [
    { name: "Home",       href: "#home"       },
    { name: "About",      href: "#about"      },
    { name: "Experience", href: "#experience" },
    { name: "Skills",     href: "#skills"     },
    { name: "Projects",   href: "#projects"   },
    { name: "Education",  href: "#education"  },
    { name: "Contact",    href: "#contact"    },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navItems.map(i => i.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center pt-4 px-4">

      {/* ── Desktop pill ── */}
      <div
        className={`hidden md:flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg shadow-black/40"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Wordmark */}
        <span className="text-sm font-bold text-gradient-blue mr-3 pl-1 tracking-tight">BC</span>

        {navItems.map((item) => {
          const isActive = active === item.href.slice(1);
          return (
            <a
              key={item.name}
              href={item.href}
              className={`relative px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${
                isActive
                  ? "text-white bg-white/10"
                  : "text-[#86868b] hover:text-white hover:bg-white/5"
              }`}
            >
              {item.name}
              {isActive && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400" />
              )}
            </a>
          );
        })}
      </div>

      {/* ── Mobile toggle ── */}
      <div className="md:hidden w-full flex justify-between items-center px-2">
        <span className="text-sm font-bold text-gradient-blue tracking-tight">BC</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 glass rounded-xl text-[#86868b] hover:text-white transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 glass rounded-2xl p-3 shadow-2xl shadow-black/50 animate-scale-in">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 text-sm text-[#86868b] hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
