"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { ArtRegion } from "@/data/types";

interface SearchBarProps {
  regions: ArtRegion[];
  onSelectRegion: (region: ArtRegion) => void;
}

export default function SearchBar({ regions, onSelectRegion }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Filter matching regions
  const filtered = query.trim() === ""
    ? []
    : regions.filter((r) => {
        const q = query.toLowerCase();
        const inName = r.name.toLowerCase().includes(q);
        const inState = r.state.toLowerCase().includes(q);
        const inTradition = r.primaryTraditions.some((t) => t.toLowerCase().includes(q));
        const inCategory = r.category.toLowerCase().includes(q);
        const inArtworks = r.notableArtworks.some((a) => a.title.toLowerCase().includes(q));
        const inArtists = r.keyCommunitiesOrArtists.some((a) => a.toLowerCase().includes(q));
        return inName || inState || inTradition || inCategory || inArtworks || inArtists;
      });

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (region: ArtRegion) => {
    onSelectRegion(region);
    setQuery("");
    setIsOpen(false);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter" && selectedIndex >= 0 && selectedIndex < filtered.length) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex]);
    }
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-xl">
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-4 h-4 text-[#d4af37]/70 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setSelectedIndex(-1);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search Indian art, region or tradition (e.g. Madhubani, Warli, Nataraja)..."
          className="w-full pl-11 pr-10 py-3 rounded-full bg-[#12111a]/90 backdrop-blur-md border border-[#d4af37]/30 text-sm text-[#ede5d8] placeholder:text-[#8d8474] focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all shadow-lg"
          aria-label="Search Indian Art Traditions"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute right-3.5 p-1 text-[#a59b8b] hover:text-[#f5f2eb] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Dropdown Suggestions */}
      {isOpen && query.trim() !== "" && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#12111af5] backdrop-blur-xl border border-[#d4af37]/35 rounded-2xl shadow-2xl shadow-black/90 overflow-hidden z-50 max-h-80 overflow-y-auto">
          {filtered.length > 0 ? (
            <div className="py-2">
              <div className="px-4 py-1.5 text-[10px] uppercase tracking-widest font-semibold text-[#d4af37]/80 border-b border-white/5 flex items-center justify-between">
                <span>Matching Art Traditions & Regions</span>
                <span>{filtered.length} found</span>
              </div>
              {filtered.map((region, idx) => {
                const isItemActive = idx === selectedIndex;
                return (
                  <button
                    key={region.id}
                    onClick={() => handleSelect(region)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${
                      isItemActive
                        ? "bg-[#d4af37]/15 border-l-2 border-[#d4af37]"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#f5f2eb] flex items-center gap-2">
                          <span>{region.name}</span>
                          <span className="text-[11px] font-normal text-[#d4af37] px-2 py-0.5 rounded-full bg-[#d4af37]/10">
                            {region.state}
                          </span>
                        </div>
                        <div className="text-xs text-[#b8ad9c] line-clamp-1 mt-0.5">
                          {region.primaryTraditions.join(" • ")}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-[#9e9483]">
                        {region.category}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#d4af37]/60" />
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="p-6 text-center text-sm text-[#9c9282]">
              <Sparkles className="w-6 h-6 mx-auto mb-2 text-[#d4af37]/50" />
              No matching art traditions found for "{query}".
              <div className="text-xs text-[#70685b] mt-1">
                Try searching for "Madhubani", "Ajanta", "Pattachitra", or "Chola".
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
