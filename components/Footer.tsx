"use client";

import { Compass, Sparkles, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#09090c] border-t border-[#d4af37]/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-[#9e9381]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Brand Logo & College Assignment Note */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="w-8 h-8 rounded-full border border-[#d4af37]/60 flex items-center justify-center bg-[#15141c] text-[#d4af37]">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-base tracking-widest text-[#f5f2eb]">
                THE ART MAP OF INDIA
              </span>
            </div>
            <p className="text-xs text-[#b0a594] font-light max-w-md">
              College Academic Project for <strong className="text-[#f5f2eb]">Indian Art Form</strong>. An interactive digital museum exploring regional artistic geography, techniques, and masters.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#d1c8b8]">
            <a href="#interactive-map" className="hover:text-[#d4af37] transition-colors">
              Interactive Map
            </a>
            <a href="#regions" className="hover:text-[#d4af37] transition-colors">
              Regions
            </a>
            <a href="#art-forms" className="hover:text-[#d4af37] transition-colors">
              Art Forms
            </a>
            <a href="#journey" className="hover:text-[#d4af37] transition-colors">
              Traditions Trail
            </a>
            <a href="#artists" className="hover:text-[#d4af37] transition-colors">
              Artists
            </a>
            <a href="#gallery" className="hover:text-[#d4af37] transition-colors">
              Gallery
            </a>
            <a href="#sources" className="hover:text-[#d4af37] transition-colors">
              Sources
            </a>
          </div>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-[#15141c] border border-[#d4af37]/30 hover:border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/15 transition-all shadow-md cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright and academic attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#70685b]">
          <div>
            © {new Date().getFullYear()} The Art Map of India. Built for Academic Presentation & Cultural Heritage Documentation.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with reverence for Indian Classical & Folk Heritage</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
