"use client";

import { motion } from "framer-motion";
import { ArrowDown, Compass, Sparkles, MapPin, Landmark } from "lucide-react";

interface HeroProps {
  onExploreClick?: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  const handleScrollToMap = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const element = document.getElementById("interactive-map");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-canvas-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#e11d48]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-[#0284c7]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Animated Outline/Silhouette of India Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 select-none overflow-hidden">
        <motion.svg
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          viewBox="0 0 800 900"
          className="w-[850px] h-[950px] stroke-[#d4af37]/40 fill-none stroke-[1.2]"
        >
          <path
            d="M 390 80 
               C 420 70, 470 110, 480 140 
               C 490 170, 520 190, 540 210
               C 560 230, 610 230, 630 250
               C 660 280, 710 270, 740 290
               C 760 310, 750 340, 730 360
               C 700 390, 650 380, 620 400
               C 590 420, 580 440, 570 470
               C 560 500, 580 540, 570 580
               C 550 630, 510 680, 480 730
               C 450 780, 420 830, 400 860
               C 380 830, 360 760, 340 710
               C 310 650, 280 590, 270 530
               C 260 480, 240 440, 230 390
               C 210 330, 220 280, 240 240
               C 270 200, 310 180, 340 140
               Z"
            strokeDasharray="8 6"
            className="animate-pulse"
          />
          {/* Sacred geometry circular concentric rings */}
          <circle cx="400" cy="450" r="280" stroke="rgba(212, 175, 55, 0.15)" strokeWidth="1" />
          <circle cx="400" cy="450" r="200" stroke="rgba(212, 175, 55, 0.1)" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="400" cy="450" r="100" stroke="rgba(212, 175, 55, 0.12)" strokeWidth="1" />
        </motion.svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Academic Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16151f] border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.15)] mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#e5c158] uppercase">
            Interactive Digital Museum & Educational Archive
          </span>
        </motion.div>

        {/* Cinematic Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-[#f5f2eb] uppercase leading-[1.08] mb-6"
        >
          THE ART MAP
          <span className="block text-gold-gradient font-serif font-normal italic tracking-normal mt-1 sm:mt-2 text-3xl sm:text-5xl md:text-6xl">
            OF INDIA
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-xl sm:text-2xl md:text-3xl text-[#d4af37] font-medium tracking-wide mb-6"
        >
          Explore the Regions That Shaped Indian Art
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-[#c7beaf] font-light leading-relaxed mb-10 text-balance"
        >
          From <span className="text-[#f5f2eb] font-medium">Madhubani in Bihar</span> to{" "}
          <span className="text-[#f5f2eb] font-medium">Chola bronzes in Tamil Nadu</span>, discover the sacred geometries,
          courtly miniatures, temple frescoes, and living tribal traditions that emerged across the Indian subcontinent.
        </motion.p>

        {/* Primary & Secondary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-14"
        >
          <button
            onClick={handleScrollToMap}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-sans font-bold text-sm tracking-widest uppercase text-[#0d0d12] bg-gradient-to-r from-[#f6e6b4] via-[#d4af37] to-[#aa801e] hover:brightness-110 shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#0d0d12] group-hover:rotate-90 transition-transform duration-500" />
            <span>EXPLORE THE MAP →</span>
          </button>

          <a
            href="#journey"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-sans text-xs tracking-widest uppercase text-[#ede5d8] bg-[#171622]/80 hover:bg-[#201e2c] border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-300"
          >
            <Landmark className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>VIEW TRADITIONS TRAIL</span>
          </a>
        </motion.div>

        {/* Mini Preview Highlights Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full max-w-3xl pt-8 border-t border-[#d4af37]/15 text-left"
        >
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#f5f2eb]">18+ Regions</div>
              <div className="text-[10px] text-[#9c9382]">Georeferenced Map</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-[#059669]/10 flex items-center justify-center text-[#059669]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#f5f2eb]">30+ Traditions</div>
              <div className="text-[10px] text-[#9c9382]">Tribal to Classical</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-[#c026d3]/10 flex items-center justify-center text-[#c026d3]">
              <Landmark className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#f5f2eb]">5,000+ Years</div>
              <div className="text-[10px] text-[#9c9382]">Indus to Modern</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-[#ea580c]/10 flex items-center justify-center text-[#ea580c]">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#f5f2eb]">7 Categories</div>
              <div className="text-[10px] text-[#9c9382]">Interactive Filters</div>
            </div>
          </div>
        </motion.div>

        {/* Scroll down indicator */}
        <div className="mt-10 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#d4af37]">Scroll to Discover</span>
          <ArrowDown className="w-4 h-4 text-[#d4af37] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
