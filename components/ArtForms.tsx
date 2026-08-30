"use client";

import { motion } from "framer-motion";
import { Palette, Sparkles, ArrowUpRight, Layers, MapPin } from "lucide-react";
import { ART_FORM_CATEGORIES } from "@/data/artForms";
import { FilterCategory } from "./MapFilters";

interface ArtFormsProps {
  onSelectCategory: (category: FilterCategory) => void;
}

export default function ArtForms({ onSelectCategory }: ArtFormsProps) {
  const handleCategoryClick = (categoryName: string) => {
    onSelectCategory(categoryName as FilterCategory);
    const mapElement = document.getElementById("interactive-map");
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="art-forms" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#d4af37]/15">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16151f] border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-4">
          <Palette className="w-3.5 h-3.5" />
          <span>Typology of Indian Visual Arts</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#f5f2eb] mb-4">
          ONE COUNTRY. MANY ART FORMS.
        </h2>
        <p className="text-sm sm:text-base text-[#bdae9c] font-light leading-relaxed">
          Indian artistic expression manifests across seven foundational categories. Select any category to filter the interactive map and explore its regional masters.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ART_FORM_CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            onClick={() => handleCategoryClick(cat.name)}
            className="group relative bg-[#121119] border border-white/10 hover:border-[#d4af37]/60 rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.18)] transition-all duration-500 cursor-pointer flex flex-col justify-between"
          >
            {/* Image Header with Gradient Overlay */}
            <div className="relative h-44 w-full overflow-hidden bg-black/60">
              <img
                src={cat.imageUrl}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121119] via-black/40 to-transparent" />
              
              <div className="absolute top-3 right-3">
                <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#f6e6b4] group-hover:bg-[#d4af37] group-hover:text-[#0d0d12] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              <div className="absolute bottom-3 left-4">
                <span
                  className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#f5f2eb]"
                  style={{ backgroundColor: `${cat.accentColor}cc` }}
                >
                  {cat.name}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-display font-bold text-[#f5f2eb] group-hover:text-[#d4af37] transition-colors mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#b8ad9b] font-light leading-relaxed mb-4">
                  {cat.description}
                </p>

                {/* Prominent Regions */}
                <div className="mb-4">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#9c9180] mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#d4af37]" />
                    Prominent Regions:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.primaryRegions.map((regionName) => (
                      <span
                        key={regionName}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-[#d6cdbe] border border-white/5"
                      >
                        {regionName}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Traditions Count & Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-[#8d8272]">
                  <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{cat.traditionCount} Traditions Cataloged</span>
                </div>

                <span className="text-xs font-bold text-[#d4af37] group-hover:underline">
                  FILTER MAP →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
