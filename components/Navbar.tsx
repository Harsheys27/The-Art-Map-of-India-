"use client";

import { useState, useEffect } from "react";
import { Compass, Menu, X, Sparkles, MapPin, Palette, BookOpen, User, Layers, Info } from "lucide-react";

interface NavbarProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
}

export default function Navbar({ activeSection = "map", onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Map", href: "#interactive-map", id: "map", icon: MapPin },
    { name: "Regions", href: "#regions", id: "regions", icon: Compass },
    { name: "Art Forms", href: "#art-forms", id: "art-forms", icon: Palette },
    { name: "Traditions", href: "#journey", id: "journey", icon: Sparkles },
    { name: "Artists", href: "#artists", id: "artists", icon: User },
    { name: "Gallery", href: "#gallery", id: "gallery", icon: Layers },
    { name: "About", href: "#did-you-know", id: "about", icon: Info },
    { name: "Sources", href: "#sources", id: "sources", icon: BookOpen },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#09090cd9] backdrop-blur-md border-b border-[#d4af37]/20 py-3 shadow-2xl shadow-black/80"
          : "bg-gradient-to-b from-[#09090c]/90 via-[#09090c]/60 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero", "hero")}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-9 h-9 rounded-full border border-[#d4af37]/60 flex items-center justify-center bg-[#15141c] text-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.25)] group-hover:border-[#e5c158] transition-all">
            <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
          </div>
          <div>
            <span className="block font-display text-sm md:text-base tracking-[0.2em] font-semibold text-[#f5f2eb] group-hover:text-[#d4af37] transition-colors">
              THE ART MAP OF INDIA
            </span>
            <span className="block text-[10px] tracking-[0.25em] text-[#d4af37]/80 uppercase font-sans">
              Digital Museum Edition
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.id)}
                className={`px-3 py-1.5 rounded-full text-xs tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#d4af37]/15 text-[#f6e6b4] border border-[#d4af37]/40 shadow-[0_0_10px_rgba(212,175,55,0.15)]"
                    : "text-[#c2b9a7] hover:text-[#f5f2eb] hover:bg-white/5 border border-transparent"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#d4af37]" : "text-[#8e8574]"}`} />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#interactive-map"
            onClick={(e) => handleLinkClick(e, "#interactive-map", "map")}
            className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-[#0d0d12] bg-gradient-to-r from-[#e5c158] via-[#d4af37] to-[#aa801e] hover:brightness-110 shadow-lg shadow-[#d4af37]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            EXPLORE MAP
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#ede5d8] hover:text-[#d4af37] hover:bg-white/5 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e0d13]/95 backdrop-blur-xl border-b border-[#d4af37]/20 px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.id)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm tracking-wide text-[#ede5d8] hover:text-[#d4af37] hover:bg-white/5 border border-transparent hover:border-[#d4af37]/20"
                >
                  <Icon className="w-4 h-4 text-[#d4af37]" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <a
              href="#interactive-map"
              onClick={(e) => handleLinkClick(e, "#interactive-map", "map")}
              className="mt-3 text-center py-3 rounded-lg text-xs font-bold tracking-widest text-[#0d0d12] bg-gradient-to-r from-[#e5c158] via-[#d4af37] to-[#aa801e]"
            >
              EXPLORE INTERACTIVE MAP →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
