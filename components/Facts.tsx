"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, ChevronLeft, ChevronRight, Sparkles, MapPin, Layers, ArrowRight } from "lucide-react";
import { ART_FACTS } from "@/data/facts";

export default function Facts() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const fact = ART_FACTS[currentIdx];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % ART_FACTS.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + ART_FACTS.length) % ART_FACTS.length);
  };

  return (
    <section id="did-you-know" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#d4af37]/15">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16151f] border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-3">
          <Lightbulb className="w-3.5 h-3.5 text-[#e5c158]" />
          <span>Curator's Insights & Historical Trivia</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#f5f2eb]">
          DID YOU KNOW?
        </h2>
        <p className="text-sm sm:text-base text-[#baa995] font-light max-w-xl mx-auto mt-2">
          Discover lesser-known historical secrets, scientific connections, and cultural phenomena behind India's artistic legacy.
        </p>
      </div>

      {/* Main Interactive Fact Card with Smooth Transitions */}
      <div className="relative bg-gradient-to-br from-[#161522] via-[#12111a] to-[#0c0b11] border border-[#d4af37]/35 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-black overflow-hidden min-h-[360px] flex flex-col justify-between">
        {/* Ambient Gold Glow */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={fact.id}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="flex-1 flex flex-col justify-between"
          >
            {/* Top metadata row */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-display font-bold text-gold-gradient">
                  {fact.number}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#8e8473] border-l border-white/20 pl-2.5">
                  Museum Artifact Fact
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#d4af37]/15 text-[#f6e6b4] border border-[#d4af37]/30 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#d4af37]" />
                  {fact.region}
                </span>
                <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[11px] bg-white/5 text-[#c2b9a7] border border-white/10 uppercase">
                  {fact.category}
                </span>
              </div>
            </div>

            {/* Fact Heading & Body */}
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-[#f5f2eb] mb-4 leading-snug">
                "{fact.title}"
              </h3>
              <p className="text-base sm:text-lg text-[#ede5d8] font-serif italic leading-relaxed mb-4">
                {fact.fact}
              </p>
              <p className="text-xs sm:text-sm text-[#bdae9c] font-light leading-relaxed">
                {fact.detail}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer Navigation Bar */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5">
            {ART_FACTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === currentIdx ? "w-8 bg-[#d4af37]" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to fact ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 hover:bg-white/15 text-[#ede5d8] transition-colors"
              aria-label="Previous fact"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-[#0d0d12] bg-[#d4af37] hover:bg-[#e5c158] flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
            >
              <span>NEXT FACT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
