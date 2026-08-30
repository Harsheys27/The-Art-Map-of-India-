"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Sparkles, BookOpen, Layers, Award } from "lucide-react";
import { Artwork } from "@/data/types";

interface ArtworkModalProps {
  artwork: Artwork | null;
  regionName?: string;
  stateName?: string;
  onClose: () => void;
}

export default function ArtworkModal({
  artwork,
  regionName,
  stateName,
  onClose,
}: ArtworkModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!artwork) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#12111a] border border-[#d4af37]/40 rounded-3xl overflow-hidden shadow-2xl shadow-black z-10 max-h-[90vh] flex flex-col md:flex-row"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-[#ede5d8] hover:text-[#d4af37] hover:bg-black/90 transition-all border border-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: High-Res Image Display */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[300px] bg-[#09090c] flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-[#d4af37]/20">
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12111a] via-transparent to-black/30 pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#f5f2eb] drop-shadow-md">
              <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                Masterpiece Exhibition View
              </span>
            </div>
          </div>

          {/* Right: Academic Context & Provenance */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[60vh] md:max-h-[85vh]">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
              <Award className="w-4 h-4" />
              <span>{regionName ? `${regionName}, ${stateName}` : "Indian Heritage Masterwork"}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#f5f2eb] mb-3 leading-snug">
              {artwork.title}
            </h2>

            {/* Quick Metadata badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-[#d1c8b8]">
                <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{artwork.period}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-[#d1c8b8]">
                <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{artwork.medium}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-wider font-bold text-[#9e9381] mb-2">
                Artwork Overview
              </h3>
              <p className="text-sm text-[#ede5d8] leading-relaxed font-light">
                {artwork.description}
              </p>
            </div>

            {/* Significance */}
            {artwork.significance && (
              <div className="p-4 rounded-xl bg-[#d4af37]/8 border border-[#d4af37]/25 mb-6">
                <div className="text-xs font-bold text-[#e5c158] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Cultural Significance
                </div>
                <div className="text-xs text-[#ede5d8] leading-relaxed">
                  {artwork.significance}
                </div>
              </div>
            )}

            {/* Provenance and Current Location */}
            <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-[#a39987]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span><strong>Origin:</strong> {artwork.locationCreated}</span>
              </div>
              {artwork.currentLocation && (
                <div className="flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span><strong>Repository / Location:</strong> {artwork.currentLocation}</span>
                </div>
              )}
            </div>

            <button
              onClick={onClose}
              className="mt-8 w-full py-3 rounded-full text-xs font-bold tracking-widest uppercase text-[#0d0d12] bg-[#d4af37] hover:bg-[#e5c158] transition-colors"
            >
              CLOSE VIEWER
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
