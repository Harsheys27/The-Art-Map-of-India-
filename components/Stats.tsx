"use client";

import { motion } from "framer-motion";
import { Compass, Sparkles, Clock, Layers } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      value: "18+",
      label: "Featured Regions",
      detail: "Georeferenced interactive zones across North, South, East, West & Northeast India",
      icon: Compass,
      color: "#d4af37",
    },
    {
      value: "30+",
      label: "Art Traditions",
      detail: "From lost-wax metallurgical casting to sacred cloth Pattachitra & courtly miniatures",
      icon: Sparkles,
      color: "#059669",
    },
    {
      value: "5,000+",
      label: "Years of Heritage",
      detail: "Spanning the prehistoric rock art of Bhimbetka to contemporary tribal innovations",
      icon: Clock,
      color: "#c026d3",
    },
    {
      value: "7",
      label: "Major Art Forms",
      detail: "Painting, Sculpture, Textiles, Folk Art, Mural, Miniature & Sacred Architecture",
      icon: Layers,
      color: "#ea580c",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#d4af37]/15">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16151f] border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curatorial Scope & Metrics</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#f5f2eb]">
          INDIA'S ARTISTIC LANDSCAPE
        </h2>
        <p className="text-sm sm:text-base text-[#baa995] font-light max-w-xl mx-auto mt-2">
          An unprecedented digital aggregation of Indian regional art forms, techniques, and historical lineages.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#12111a] border border-[#d4af37]/25 hover:border-[#d4af37]/60 shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition-all flex flex-col justify-between"
            >
              <div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${stat.color}15`, border: `1px solid ${stat.color}40` }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div className="text-4xl sm:text-5xl font-display font-bold text-[#f5f2eb] mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-[#d4af37] mb-2">
                  {stat.label}
                </div>
              </div>
              <p className="text-xs text-[#9e9381] font-light leading-relaxed mt-2 border-t border-white/5 pt-3">
                {stat.detail}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
