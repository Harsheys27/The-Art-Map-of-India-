"use client";

import { motion } from "framer-motion";
import { Compass, Sparkles, ArrowUp } from "lucide-react";

export default function FinalCta() {
  const handleScrollToMap = () => {
    const mapElement = document.getElementById("interactive-map");
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-[#d4af37]/15 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16151f] border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Epilogue & Continuation</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-[#f5f2eb] mb-6 leading-tight">
          EVERY REGION TELLS A STORY.
        </h2>

        <p className="text-base sm:text-xl text-[#d4ccbd] font-serif italic max-w-2xl mx-auto leading-relaxed mb-10">
          "Indian art is not one tradition. It is a collection of thousands of regional expressions shaped by history, geography, communities and generations."
        </p>

        <button
          onClick={handleScrollToMap}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-sans font-bold text-sm tracking-widest uppercase text-[#0d0d12] bg-gradient-to-r from-[#f6e6b4] via-[#d4af37] to-[#aa801e] hover:brightness-110 shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
        >
          <Compass className="w-4 h-4 text-[#0d0d12] group-hover:rotate-90 transition-transform duration-500" />
          <span>EXPLORE THE MAP AGAIN</span>
          <ArrowUp className="w-4 h-4 text-[#0d0d12]" />
        </button>
      </div>
    </section>
  );
}
