"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, ShieldCheck, Landmark } from "lucide-react";
import { ACADEMIC_SOURCES } from "@/data/sources";

export default function Sources() {
  return (
    <section id="sources" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#d4af37]/15">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16151f] border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Academic Bibliography & Curatorial References</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#f5f2eb] mb-4">
          SOURCES & CITATIONS
        </h2>
        <p className="text-sm sm:text-base text-[#baa995] font-light leading-relaxed">
          All historical, iconographic, and anthropological data presented in this educational archive is strictly verified against statutory cultural institutions and academic publications.
        </p>
      </div>

      {/* Sources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ACADEMIC_SOURCES.map((source, idx) => (
          <motion.div
            key={source.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="p-6 rounded-3xl bg-[#12111a] border border-white/10 hover:border-[#d4af37]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-[#d4af37]/10 text-[#e5c158] border border-[#d4af37]/20">
                  {source.type}
                </span>
                <ShieldCheck className="w-4 h-4 text-[#10b981]" />
              </div>

              <h3 className="text-base font-display font-bold text-[#f5f2eb] mb-2">
                {source.institution}
              </h3>

              <p className="text-xs text-[#b8ad9c] font-light leading-relaxed mb-4">
                {source.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-2">
              <div className="text-[11px] text-[#8e8473]">
                <strong className="text-[#c2b9a7]">Research Notes: </strong>
                {source.citationNotes}
              </div>
              {source.url && (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:underline pt-1"
                >
                  <span>Visit Institutional Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
