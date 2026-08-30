"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Users, Sparkles, Award, MapPin, X, Calendar, BookOpen, CheckCircle } from "lucide-react";
import { ARTISTS_AND_TRADITIONS } from "@/data/artists";
import { ArtistOrTradition } from "@/data/types";

export default function Artists() {
  const [selectedRole, setSelectedRole] = useState<"ALL" | "Individual Master" | "Community / Living Guild">("ALL");
  const [activeItem, setActiveItem] = useState<ArtistOrTradition | null>(null);

  const filtered = selectedRole === "ALL"
    ? ARTISTS_AND_TRADITIONS
    : ARTISTS_AND_TRADITIONS.filter((a) => a.role === selectedRole);

  return (
    <section id="artists" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#d4af37]/15">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16151f] border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-4">
          <Users className="w-3.5 h-3.5" />
          <span>Lineage & Custodians of Heritage</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#f5f2eb] mb-4">
          MASTERS & LIVING TRADITIONS
        </h2>
        <p className="text-sm sm:text-base text-[#bdae9c] font-light leading-relaxed">
          Indian art thrives through both visionary modern masters and centuries-old hereditary guilds. Discover the individuals and indigenous communities who preserved these traditions across generations.
        </p>

        {/* Filter Toggle */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {[
            { id: "ALL", label: "All Custodians" },
            { id: "Individual Master", label: "Individual Masters" },
            { id: "Community / Living Guild", label: "Living Community Guilds" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedRole(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                selectedRole === tab.id
                  ? "bg-[#d4af37] text-[#0d0d12] shadow-lg shadow-[#d4af37]/20"
                  : "bg-[#14131c] text-[#a89e8e] hover:text-[#f5f2eb] hover:bg-white/5 border border-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Artist Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((item, idx) => {
          const isGuild = item.role === "Community / Living Guild";

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
              onClick={() => setActiveItem(item)}
              className="group bg-[#12111a] border border-[#d4af37]/20 hover:border-[#d4af37]/60 rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-52 w-full overflow-hidden bg-black/60">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12111a] via-black/30 to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      isGuild
                        ? "bg-[#ea580c]/80 text-[#ffedd5] border border-[#ea580c]"
                        : "bg-[#d4af37]/80 text-[#0d0d12] border border-[#f6e6b4]"
                    }`}
                  >
                    {isGuild ? "Living Community" : "Master Artist"}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs text-[#ede5d8]">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{item.state}</span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-display font-bold text-[#f5f2eb] group-hover:text-[#d4af37] transition-colors mb-1">
                    {item.name}
                  </h3>
                  <div className="text-xs text-[#d4af37] font-medium mb-3">
                    {item.era}
                  </div>
                  <p className="text-xs text-[#b0a594] font-light line-clamp-3 leading-relaxed mb-4">
                    {item.biography}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#d4af37] font-bold tracking-wider uppercase">
                  <span>VIEW BIOGRAPHY</span>
                  <span>→</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Artist / Community Detail Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="absolute inset-0"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#13121b] border border-[#d4af37]/40 rounded-3xl p-6 sm:p-8 z-10 max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-[#ede5d8] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#d4af37] mb-2">
                <Sparkles className="w-4 h-4" />
                <span>{activeItem.role} • {activeItem.region}, {activeItem.state}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#f5f2eb] mb-1">
                {activeItem.name}
              </h3>
              <div className="text-xs text-[#c59b27] font-mono mb-4">
                Active Era: {activeItem.era}
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[#ede5d8] mb-6">
                <strong>Specialization: </strong>
                {activeItem.specialization}
              </div>

              <div className="mb-6">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#9c9180] mb-2">
                  Historical Profile & Impact
                </h4>
                <p className="text-sm text-[#d4ccbd] leading-relaxed font-light">
                  {activeItem.biography}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#9c9180] mb-2.5">
                  Key Milestones & Contributions
                </h4>
                <ul className="space-y-2">
                  {activeItem.keyContributions.map((contrib, idx) => (
                    <li key={idx} className="text-xs text-[#c9bfae] flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                      <span>{contrib}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {activeItem.famousWorks.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#9c9180] mb-2">
                    Famous Works & Series
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeItem.famousWorks.map((work, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs text-[#f6e6b4]"
                      >
                        {work}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-4 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs text-[#f5f2eb]">
                <strong>Heritage Legacy: </strong>
                {activeItem.legacy}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
