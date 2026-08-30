"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Compass, Sparkles, ChevronLeft, ChevronRight, MapPin, Calendar, Layers, ArrowRight } from "lucide-react";
import { TRADITIONS_JOURNEY } from "@/data/timeline";
import { ArtRegion } from "@/data/types";

interface TraditionsJourneyProps {
  onSelectRegionId?: (regionId: string) => void;
}

export default function TraditionsJourney({ onSelectRegionId }: TraditionsJourneyProps) {
  const [activeStep, setActiveStep] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentItem = TRADITIONS_JOURNEY[activeStep];

  const handleNext = () => {
    if (activeStep < TRADITIONS_JOURNEY.length - 1) {
      setActiveStep((prev) => prev + 1);
      scrollToIndex(activeStep + 1);
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
      scrollToIndex(activeStep - 1);
    }
  };

  const scrollToIndex = (idx: number) => {
    if (scrollContainerRef.current) {
      const children = scrollContainerRef.current.children;
      if (children[idx]) {
        (children[idx] as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  const handleExploreOnMap = (regionId: string) => {
    if (onSelectRegionId) {
      onSelectRegionId(regionId);
    }
    const mapElement = document.getElementById("interactive-map");
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#d4af37]/15">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16151f] border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>North-to-South Aesthetic Evolution</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#f5f2eb] mb-4">
          TRADITIONS IN MOTION
        </h2>
        <p className="text-sm sm:text-base text-[#bdae9c] font-light leading-relaxed">
          Embark on an epic 14-stage journey tracing how geography, local materials, trade routes, and royal courts shaped visual cultures from the snow-peaked Himalayas of Kashmir to the backwaters of Kerala.
        </p>
      </div>

      {/* Featured Big Journey Spotlight Box */}
      <div className="relative bg-[#12111a] border border-[#d4af37]/35 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-10 mb-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left image spotlight */}
          <div className="relative w-full lg:w-1/2 h-64 sm:h-80 rounded-2xl overflow-hidden bg-black/60 border border-[#d4af37]/30">
            <img
              src={currentItem.imageUrl}
              alt={currentItem.tradition}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12111a] via-transparent to-black/20" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/70 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/40">
                Stop {String(currentItem.order).padStart(2, "0")} / {TRADITIONS_JOURNEY.length}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#f5f2eb]">
              <span className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                {currentItem.regionName}, {currentItem.state}
              </span>
            </div>
          </div>

          {/* Right text spotlight */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>{currentItem.century}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#f5f2eb] mb-2">
                {currentItem.tradition}
              </h3>

              <p className="text-sm sm:text-base text-[#d4ccbd] font-light leading-relaxed mb-6">
                {currentItem.geographicalSignificance}
              </p>

              {/* Material Highlight Badge */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-8">
                <div className="text-xs uppercase font-bold text-[#e5c158] tracking-wider mb-1 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  Material & Technique Signature
                </div>
                <div className="text-xs text-[#c9bfae]">
                  {currentItem.materialHighlight}
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  disabled={activeStep === 0}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/15 disabled:opacity-30 disabled:pointer-events-none text-[#f5f2eb] transition-colors"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={activeStep === TRADITIONS_JOURNEY.length - 1}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/15 disabled:opacity-30 disabled:pointer-events-none text-[#f5f2eb] transition-colors"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-[#a89e8e] ml-2">
                  {activeStep + 1} of {TRADITIONS_JOURNEY.length}
                </span>
              </div>

              <button
                onClick={() => handleExploreOnMap(currentItem.regionId)}
                className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-[#0d0d12] bg-[#d4af37] hover:bg-[#e5c158] flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <span>LOCATE ON MAP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Trail of Steps */}
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-3 overflow-x-auto pb-4 pt-2 scrollbar-none no-scrollbar"
      >
        {TRADITIONS_JOURNEY.map((item, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={item.order}
              onClick={() => {
                setActiveStep(idx);
                scrollToIndex(idx);
              }}
              className={`flex-shrink-0 text-left p-3.5 rounded-2xl border transition-all duration-300 w-52 cursor-pointer ${
                isActive
                  ? "bg-[#d4af37]/15 border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                  : "bg-[#13121b]/80 border-white/5 hover:border-[#d4af37]/30 hover:bg-[#1a1824]"
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-[#d4af37] mb-1">
                <span>STAGE {String(item.order).padStart(2, "0")}</span>
                <span>{item.state.split("&")[0]}</span>
              </div>
              <div className="text-xs font-bold text-[#f5f2eb] line-clamp-1 mb-0.5">
                {item.regionName}
              </div>
              <div className="text-[11px] text-[#9e9381] line-clamp-1">
                {item.tradition}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
