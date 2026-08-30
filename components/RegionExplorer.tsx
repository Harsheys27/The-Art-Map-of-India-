"use client";

import { motion } from "framer-motion";
import { Compass, MapPin, ArrowRight, Sparkles, Layers } from "lucide-react";
import { ArtRegion } from "@/data/types";

interface RegionExplorerProps {
  regions: ArtRegion[];
  onSelectRegion: (region: ArtRegion) => void;
}

export default function RegionExplorer({ regions, onSelectRegion }: RegionExplorerProps) {
  const handleCardClick = (region: ArtRegion) => {
    onSelectRegion(region);
    const mapElement = document.getElementById("interactive-map");
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="regions" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16151f] border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>Geographic Art Index</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#f5f2eb] mb-4">
          EXPLORE INDIA'S ARTISTIC REGIONS
        </h2>
        <p className="text-sm sm:text-base text-[#bdae9c] font-light leading-relaxed">
          From the temple towns of the Kaveri delta to the high Himalayan monastic valleys, click any region below to focus the interactive map and unlock its complete art dossier.
        </p>
      </div>

      {/* Grid of Regional Art Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {regions.map((region, idx) => (
          <motion.div
            key={region.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
            onClick={() => handleCardClick(region)}
            className="group relative bg-[#12111a] border border-[#d4af37]/20 hover:border-[#d4af37]/60 rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] transition-all duration-500 cursor-pointer flex flex-col justify-between"
          >
            {/* Card Header Image */}
            <div className="relative h-48 w-full overflow-hidden bg-black/50">
              <img
                src={
                  region.notableArtworks[0]?.imageUrl ||
                  "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
                }
                alt={region.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12111a] via-black/20 to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/40">
                  {region.category}
                </span>
              </div>

              {/* State Name */}
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-[#f5f2eb] drop-shadow-md font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{region.state}</span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-display font-bold text-[#f5f2eb] group-hover:text-[#d4af37] transition-colors mb-1">
                  {region.name}
                </h3>
                <div className="text-xs font-serif italic text-[#c59b27] mb-3 line-clamp-1">
                  {region.primaryTraditions[0]}
                </div>
                <p className="text-xs text-[#b8ad9b] font-light line-clamp-3 leading-relaxed mb-4">
                  {region.overview || region.description}
                </p>
              </div>

              {/* Footer Button */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[11px] text-[#8e8473]">
                  <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{region.notableArtworks.length} Featured Works</span>
                </div>
                <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#d4af37] group-hover:text-[#f6e6b4] group-hover:translate-x-1 transition-all">
                  <span>EXPLORE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
