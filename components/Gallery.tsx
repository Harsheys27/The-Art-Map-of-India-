"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Sparkles, MapPin, Eye, ExternalLink } from "lucide-react";
import { ArtRegion, Artwork } from "@/data/types";
import ArtworkModal from "./ArtworkModal";

interface GalleryProps {
  regions: ArtRegion[];
}

export default function Gallery({ regions }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeArtwork, setActiveArtwork] = useState<{ artwork: Artwork; region: ArtRegion } | null>(null);

  // Flatten all artworks across regions with region reference
  const allArtworks = regions.flatMap((region) =>
    region.notableArtworks.map((artwork) => ({
      artwork,
      region,
    }))
  );

  const filtered = selectedCategory === "ALL"
    ? allArtworks
    : allArtworks.filter((item) => item.region.category === selectedCategory);

  const categories = ["ALL", "Painting", "Sculpture", "Textile", "Folk Art", "Mural", "Miniature", "Architecture"];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#d4af37]/15">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16151f] border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>Curated Representative Masterpieces</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#f5f2eb] mb-4">
          INDIAN ARTWORK GALLERY
        </h2>
        <p className="text-sm sm:text-base text-[#baa995] font-light leading-relaxed">
          Examine high-resolution reproductions of celebrated masterpieces across Indian history—from Ajanta's serenity and Chola bronzes to Kishangarh's Bani Thani.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#d4af37] text-[#0d0d12] shadow-lg shadow-[#d4af37]/25"
                  : "bg-[#14131b] text-[#9c9282] hover:text-[#f5f2eb] hover:bg-white/5 border border-white/5"
              }`}
            >
              {cat === "ALL" ? "All Works" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Artwork Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {filtered.map((item, idx) => (
          <motion.div
            key={item.artwork.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
            onClick={() => setActiveArtwork(item)}
            className="group relative bg-[#12111a] border border-[#d4af37]/20 hover:border-[#d4af37]/60 rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500 cursor-pointer flex flex-col justify-between"
          >
            {/* Image Box */}
            <div className="relative h-64 w-full overflow-hidden bg-black/60">
              <img
                src={item.artwork.imageUrl}
                alt={item.artwork.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12111a] via-black/20 to-transparent" />

              {/* Hover overlay prompt */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-[#d4af37] text-[#0d0d12] text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-xl">
                  <Eye className="w-4 h-4" />
                  Inspect Artwork
                </span>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/40">
                  {item.region.category}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-[#d4af37] mb-1 font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.region.name} • {item.region.state}</span>
                </div>
                <h3 className="text-lg font-display font-bold text-[#f5f2eb] group-hover:text-[#d4af37] transition-colors mb-1 line-clamp-1">
                  {item.artwork.title}
                </h3>
                <div className="text-xs font-serif italic text-[#baa995] mb-3">
                  {item.artwork.period}
                </div>
                <p className="text-xs text-[#9e9381] font-light line-clamp-2 leading-relaxed">
                  {item.artwork.description}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#d4af37] font-bold tracking-wider uppercase">
                <span>VIEW DOSSIER</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeArtwork && (
        <ArtworkModal
          artwork={activeArtwork.artwork}
          regionName={activeArtwork.region.name}
          stateName={activeArtwork.region.state}
          onClose={() => setActiveArtwork(null)}
        />
      )}
    </section>
  );
}
