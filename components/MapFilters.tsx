"use client";

import { motion } from "framer-motion";
import { ArtCategory } from "@/data/types";
import { Palette, Gem, Layers, Sparkles, Brush, Flame, Landmark } from "lucide-react";

export type FilterCategory = "ALL" | ArtCategory;

interface MapFiltersProps {
  activeFilter: FilterCategory;
  onFilterChange: (category: FilterCategory) => void;
  categoryCounts: Record<FilterCategory, number>;
}

const CATEGORY_ITEMS: { id: FilterCategory; label: string; icon: any; color: string }[] = [
  { id: "ALL", label: "All Traditions", icon: Sparkles, color: "#d4af37" },
  { id: "Painting", label: "Painting", icon: Palette, color: "#d97706" },
  { id: "Sculpture", label: "Sculpture", icon: Gem, color: "#b45309" },
  { id: "Folk Art", label: "Folk Art", icon: Sparkles, color: "#ea580c" },
  { id: "Textile", label: "Textile", icon: Layers, color: "#059669" },
  { id: "Mural", label: "Mural", icon: Brush, color: "#10b981" },
  { id: "Miniature", label: "Miniature", icon: Flame, color: "#c026d3" },
  { id: "Architecture", label: "Architecture", icon: Landmark, color: "#8b5cf6" },
];

export default function MapFilters({
  activeFilter,
  onFilterChange,
  categoryCounts,
}: MapFiltersProps) {
  return (
    <div className="w-full flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
      {CATEGORY_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = activeFilter === item.id;
        const count = categoryCounts[item.id] || 0;

        return (
          <button
            key={item.id}
            onClick={() => onFilterChange(item.id)}
            className={`relative flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium tracking-wider transition-all duration-300 cursor-pointer ${
              isActive
                ? "bg-[#d4af37]/20 text-[#f6e6b4] border border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.25)]"
                : "bg-[#14131b]/80 text-[#b5ac9b] hover:text-[#f5f2eb] hover:bg-[#1f1d2b] border border-white/5"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilterPill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d4af37]/20 via-[#f6e6b4]/10 to-[#d4af37]/20 -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <Icon
              className="w-3.5 h-3.5"
              style={{ color: isActive ? "#e5c158" : item.color }}
            />
            <span className="whitespace-nowrap uppercase text-[11px] font-semibold">{item.label}</span>
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                isActive
                  ? "bg-[#d4af37] text-[#0d0d12]"
                  : "bg-white/5 text-[#8b8273]"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
