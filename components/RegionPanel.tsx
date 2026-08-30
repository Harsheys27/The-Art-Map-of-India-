"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Compass,
  Sparkles,
  Calendar,
  Layers,
  Users,
  Award,
  BookOpen,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Lightbulb,
} from "lucide-react";
import { ArtRegion, Artwork } from "@/data/types";

interface RegionPanelProps {
  region: ArtRegion | null;
  onClose: () => void;
  onSelectNextRegion: () => void;
  onViewArtwork: (artwork: Artwork, region: ArtRegion) => void;
}

export default function RegionPanel({
  region,
  onClose,
  onSelectNextRegion,
  onViewArtwork,
}: RegionPanelProps) {
  if (!region) return null;

  return (
    <AnimatePresence>
      <motion.aside
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 80 }}
        transition={{ type: "spring", damping: 28, stiffness: 260 }}
        className="w-full lg:w-[480px] xl:w-[540px] flex-shrink-0 bg-[#0f0e15]/95 backdrop-blur-2xl border border-[#d4af37]/30 lg:rounded-3xl rounded-t-3xl shadow-2xl shadow-black flex flex-col h-[75vh] lg:h-[820px] max-h-[90vh] overflow-hidden z-30"
      >
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-[#d4af37]/20 flex items-center justify-between bg-gradient-to-r from-[#171622] to-[#12111a]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-ping" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#d4af37]">
              Regional Exhibition Dossier
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#b0a797] hover:text-[#f5f2eb] hover:bg-white/10 transition-colors"
            aria-label="Close region panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 text-[#ede5d8]">
          {/* Region Titles */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#d4af37] uppercase tracking-widest mb-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>{region.state} • {region.capitalCity ? `Capital: ${region.capitalCity}` : "Geographic Zone"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#f5f2eb] leading-tight">
              {region.name}
            </h2>
            <p className="text-lg font-serif italic text-gold-gradient mt-1">
              {region.primaryTraditions[0]}
            </p>
          </div>

          {/* Category & Period Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#d4af37]/15 text-[#f6e6b4] border border-[#d4af37]/40">
              {region.category}
            </span>
            {region.artForms.map((af) => (
              <span
                key={af}
                className="px-2.5 py-1 rounded-full text-[11px] bg-white/5 text-[#c4baaa] border border-white/10"
              >
                {af}
              </span>
            ))}
            {region.unescoStatus && (
              <span className="px-3 py-1 rounded-full text-[11px] bg-[#0284c7]/15 text-[#38bdf8] border border-[#0284c7]/30 flex items-center gap-1">
                <Award className="w-3 h-3" />
                {region.unescoStatus}
              </span>
            )}
          </div>

          {/* Historical Era & Timeframe */}
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-[#c9bfae]">
            <Calendar className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#f5f2eb]">Historical Period: </strong>
              {region.historicalPeriod}
            </div>
          </div>

          {/* Featured Representative Artwork Image Card */}
          {region.notableArtworks.length > 0 && (
            <div className="group relative rounded-2xl overflow-hidden border border-[#d4af37]/30 bg-black/60 shadow-xl">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={region.notableArtworks[0].imageUrl}
                  alt={region.notableArtworks[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d13] via-transparent to-black/30" />
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] uppercase font-bold tracking-wider text-[#d4af37] border border-[#d4af37]/40">
                    Featured Masterpiece
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-[#14131c]">
                <h3 className="font-display text-lg font-bold text-[#f5f2eb] mb-1">
                  {region.notableArtworks[0].title}
                </h3>
                <p className="text-xs text-[#baa78d] mb-4 line-clamp-2">
                  {region.notableArtworks[0].description}
                </p>
                <button
                  onClick={() => onViewArtwork(region.notableArtworks[0], region)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold tracking-wider uppercase text-[#0d0d12] bg-gradient-to-r from-[#f6e6b4] via-[#d4af37] to-[#aa801e] hover:brightness-110 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <span>VIEW ARTWORK IN EXHIBITION</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#0d0d12]" />
                </button>
              </div>
            </div>
          )}

          {/* Detailed Description */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#d4af37] mb-2 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" />
              Art Tradition Overview
            </h3>
            <p className="text-sm text-[#d4ccbd] leading-relaxed font-light">
              {region.description}
            </p>
          </div>

          {/* Historical Background */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#f5f2eb] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              Historical Background & Origins
            </h3>
            <p className="text-xs text-[#b8ad9b] leading-relaxed">
              {region.historicalContext}
            </p>
          </div>

          {/* Cultural Significance */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#d4af37] mb-2 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" />
              Cultural & Spiritual Significance
            </h3>
            <p className="text-sm text-[#d4ccbd] leading-relaxed font-light">
              {region.culturalSignificance}
            </p>
          </div>

          {/* Materials & Techniques */}
          {region.materialsAndTechniques.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#b5aa96] mb-2.5 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
                Materials & Indigenous Techniques
              </h3>
              <ul className="space-y-1.5">
                {region.materialsAndTechniques.map((mat, i) => (
                  <li key={i} className="text-xs text-[#c4baaa] flex items-start gap-2">
                    <span className="text-[#d4af37] font-bold mt-0.5">•</span>
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Important Artists / Living Communities */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#b5aa96] mb-2.5 flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-[#d4af37]" />
              Master Artists & Living Communities
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {region.keyCommunitiesOrArtists.map((artist, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-[#1c1b26] border border-[#d4af37]/20 text-xs text-[#ede5d8]"
                >
                  {artist}
                </span>
              ))}
            </div>
          </div>

          {/* Interesting Historical Fact */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#d4af37]/15 to-[#aa801e]/5 border border-[#d4af37]/35 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-[#f6e6b4] uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-[#e5c158]" />
              <span>Did You Know?</span>
            </div>
            <p className="text-xs text-[#ede5d8] leading-relaxed italic">
              "{region.interestingFact}"
            </p>
          </div>

          {/* Secondary Artworks List if multiple */}
          {region.notableArtworks.length > 1 && (
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#9e9381] mb-3">
                More Notable Artworks from this Region
              </h3>
              <div className="space-y-2.5">
                {region.notableArtworks.slice(1).map((artwork) => (
                  <div
                    key={artwork.id}
                    onClick={() => onViewArtwork(artwork, region)}
                    className="p-3 rounded-xl bg-white/5 hover:bg-[#d4af37]/10 border border-white/5 hover:border-[#d4af37]/30 flex items-center justify-between cursor-pointer transition-all"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#f5f2eb]">
                        {artwork.title}
                      </div>
                      <div className="text-[11px] text-[#9c917f]">
                        {artwork.medium}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#d4af37]" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-[#d4af37]/20 bg-[#12111a] flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-full text-xs font-semibold text-[#a89e8e] hover:text-[#f5f2eb] hover:bg-white/5 transition-colors"
          >
            Close Panel
          </button>

          <button
            onClick={onSelectNextRegion}
            className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-[#0d0d12] bg-[#d4af37] hover:bg-[#e5c158] flex items-center gap-2 transition-all shadow-md active:translate-y-0.5 cursor-pointer"
          >
            <span>EXPLORE NEXT REGION</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}
