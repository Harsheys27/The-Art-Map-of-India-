"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { motion, AnimatePresence } from "framer-motion";
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  Info,
  MapPin,
  Compass,
  Layers,
  ArrowRight,
  Maximize2,
} from "lucide-react";
import { ArtRegion, Artwork } from "@/data/types";
import { FilterCategory } from "./MapFilters";
import MapMarker from "./MapMarker";
import MapFilters from "./MapFilters";
import SearchBar from "./SearchBar";
import RegionPanel from "./RegionPanel";
import ArtworkModal from "./ArtworkModal";

interface ArtMapProps {
  regions: ArtRegion[];
  initialSelectedRegionId?: string;
  onRegionChange?: (region: ArtRegion) => void;
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Painting: { bg: "#d97706", text: "#fef3c7", border: "#f59e0b" },
  Sculpture: { bg: "#b45309", text: "#ffedd5", border: "#d97706" },
  Textile: { bg: "#059669", text: "#d1fae5", border: "#10b981" },
  "Folk Art": { bg: "#ea580c", text: "#ffedd5", border: "#f97316" },
  Architecture: { bg: "#8b5cf6", text: "#ede9fe", border: "#a78bfa" },
  Mural: { bg: "#10b981", text: "#d1fae5", border: "#34d399" },
  Miniature: { bg: "#c026d3", text: "#fae8ff", border: "#e879f9" },
};

export default function ArtMap({
  regions,
  initialSelectedRegionId = "bihar",
  onRegionChange,
}: ArtMapProps) {
  const [geoData, setGeoData] = useState<any>(null);
  const [selectedRegion, setSelectedRegion] = useState<ArtRegion | null>(
    () => regions.find((r) => r.id === initialSelectedRegionId) || regions[0]
  );
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("ALL");
  const [hoveredRegion, setHoveredRegion] = useState<ArtRegion | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [hoveredStateName, setHoveredStateName] = useState<string | null>(null);
  const [modalArtwork, setModalArtwork] = useState<{ artwork: Artwork; region: ArtRegion } | null>(null);

  // Zoom & Pan transformation state
  const [transform, setTransform] = useState({ k: 1, x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const svgContainerRef = useRef<HTMLDivElement>(null);

  // Dimension setup for D3 projection
  const width = 640;
  const height = 750;

  // D3 Mercator projection tailored for India's geographic bounds
  const projection = useMemo(() => {
    return geoMercator()
      .center([82.5, 22.0]) // Centered on central India
      .scale(1020)
      .translate([width / 2, height / 2 + 10]);
  }, [width, height]);

  const pathGenerator = useMemo(() => geoPath().projection(projection), [projection]);

  // Load optimized India GeoJSON
  useEffect(() => {
    fetch("/data/india_states_fast.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load map");
        return res.json();
      })
      .then((data) => setGeoData(data))
      .catch((err) => {
        console.warn("Falling back to simplified geojson:", err);
        fetch("/data/india_states_simplified.json")
          .then((res) => res.json())
          .then((data) => setGeoData(data))
          .catch((e) => console.error("Could not load any geojson", e));
      });
  }, []);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<FilterCategory, number> = {
      ALL: regions.length,
      Painting: 0,
      Sculpture: 0,
      Textile: 0,
      "Folk Art": 0,
      Architecture: 0,
      Mural: 0,
      Miniature: 0,
    };
    regions.forEach((r) => {
      if (counts[r.category] !== undefined) {
        counts[r.category]++;
      }
    });
    return counts;
  }, [regions]);

  // Filtered regions
  const visibleRegions = useMemo(() => {
    if (activeFilter === "ALL") return regions;
    return regions.filter((r) => r.category === activeFilter);
  }, [regions, activeFilter]);

  // Handle region select
  const handleSelectRegion = useCallback(
    (region: ArtRegion) => {
      setSelectedRegion(region);
      if (onRegionChange) {
        onRegionChange(region);
      }

      // Smoothly pan map slightly toward selected region
      const coords = projection(region.coordinates);
      if (coords) {
        const [targetX, targetY] = coords;
        // Keep within reasonable bounds
        setTransform((prev) => ({
          k: Math.max(prev.k, 1.25),
          x: (width / 2 - targetX) * 0.45,
          y: (height / 2 - targetY) * 0.45,
        }));
      }
    },
    [projection, onRegionChange, width, height]
  );

  // Cycle to next region
  const handleSelectNextRegion = useCallback(() => {
    if (!selectedRegion) return;
    const currentIndex = regions.findIndex((r) => r.id === selectedRegion.id);
    const nextIndex = (currentIndex + 1) % regions.length;
    handleSelectRegion(regions[nextIndex]);
  }, [selectedRegion, regions, handleSelectRegion]);

  // Zoom handlers
  const handleZoomIn = () => {
    setTransform((prev) => ({
      ...prev,
      k: Math.min(prev.k * 1.35, 3.8),
    }));
  };

  const handleZoomOut = () => {
    setTransform((prev) => ({
      ...prev,
      k: Math.max(prev.k / 1.35, 0.9),
      x: prev.k <= 1.2 ? 0 : prev.x,
      y: prev.k <= 1.2 ? 0 : prev.y,
    }));
  };

  const handleResetView = () => {
    setTransform({ k: 1, x: 0, y: 0 });
  };

  // Mouse pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - transform.x, y: e.clientY - transform.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setTransform((prev) => ({
      ...prev,
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section id="interactive-map" className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
            <Compass className="w-4 h-4" />
            <span>Interactive Cartography & Exploration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#f5f2eb]">
            THE DIGITAL ART MAP OF INDIA
          </h2>
          <p className="text-sm sm:text-base text-[#baa995] font-light max-w-2xl mt-1">
            Click on any historical art region to open its exhibition dossier, explore iconic masterpieces, and trace ancestral techniques.
          </p>
        </div>

        {/* Search Bar on Desktop & Tablet */}
        <div className="w-full md:w-auto">
          <SearchBar regions={regions} onSelectRegion={handleSelectRegion} />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="mb-6">
        <MapFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          categoryCounts={categoryCounts}
        />
      </div>

      {/* Main Map + Region Panel Workspace Layout */}
      <div className="relative flex flex-col lg:flex-row items-stretch gap-6">
        {/* Left / Center: Interactive Map Canvas Box */}
        <div className="relative flex-1 bg-[#0e0d14] border border-[#d4af37]/25 rounded-3xl overflow-hidden shadow-2xl min-h-[580px] sm:min-h-[680px] lg:min-h-[820px] flex flex-col">
          {/* Top floating Map HUD / Context Bar */}
          <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2 bg-[#12111a]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#d4af37]/30 text-xs text-[#ede5d8] shadow-md pointer-events-auto">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>{visibleRegions.length} Art Traditions Active</span>
              {hoveredStateName && (
                <span className="text-[#d4af37] border-l border-white/20 pl-2 font-medium">
                  {hoveredStateName}
                </span>
              )}
            </div>

            {/* Quick Helper Badge */}
            <div className="hidden sm:flex items-center gap-1.5 bg-[#12111a]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[11px] text-[#9c9180] pointer-events-auto">
              <Info className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Drag to pan • Click pins to inspect</span>
            </div>
          </div>

          {/* Interactive Zoom Controls */}
          <div className="absolute bottom-6 right-6 z-20 flex flex-col gap-2 bg-[#13121bf0] backdrop-blur-md p-1.5 rounded-2xl border border-[#d4af37]/30 shadow-xl">
            <button
              onClick={handleZoomIn}
              className="p-2.5 rounded-xl text-[#f5f2eb] hover:text-[#d4af37] hover:bg-white/10 transition-colors cursor-pointer"
              title="Zoom in (+)"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-2.5 rounded-xl text-[#f5f2eb] hover:text-[#d4af37] hover:bg-white/10 transition-colors cursor-pointer"
              title="Zoom out (-)"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <button
              onClick={handleResetView}
              className="p-2.5 rounded-xl text-[#d4af37] hover:bg-[#d4af37]/20 transition-colors cursor-pointer"
              title="Reset View"
              aria-label="Reset map view"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive SVG Mapping Canvas */}
          <div
            ref={svgContainerRef}
            className="w-full flex-1 flex items-center justify-center cursor-grab active:cursor-grabbing select-none overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="w-full h-full max-h-[820px]"
              style={{
                transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.k})`,
                transformOrigin: "center center",
                transition: isDragging ? "none" : "transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
            >
              <defs>
                {/* Subtle Radial Gradient for Map Background Water */}
                <radialGradient id="mapGlow" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#1a1926" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0a090f" stopOpacity="1" />
                </radialGradient>
                {/* State outline shadow */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#d4af37" floodOpacity="0.4" />
                </filter>
              </defs>

              {/* Background ambient rect */}
              <rect width={width} height={height} fill="url(#mapGlow)" />

              {/* Subtle Geodetic Grid Lat/Lng lines */}
              <g opacity="0.08" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="3 6">
                <line x1="0" y1="180" x2={width} y2="180" />
                <line x1="0" y1="360" x2={width} y2="360" />
                <line x1="0" y1="540" x2={width} y2="540" />
                <line x1="160" y1="0" x2="160" y2={height} />
                <line x1="320" y1="0" x2="320" y2={height} />
                <line x1="480" y1="0" x2="480" y2={height} />
              </g>

              {/* Render Official Indian States GeoJSON Boundaries */}
              {geoData && geoData.features && (
                <g className="states-group">
                  {geoData.features.map((feature: any, index: number) => {
                    const stateName = feature.properties?.NAME_1 || feature.properties?.name || "";
                    const isStateSelected = selectedRegion && selectedRegion.stateGeoName.toLowerCase() === stateName.toLowerCase();
                    const isStateHovered = hoveredStateName === stateName;

                    return (
                      <path
                        key={`state-${index}`}
                        d={pathGenerator(feature) || ""}
                        className="transition-all duration-300 cursor-pointer"
                        fill={
                          isStateSelected
                            ? "rgba(212, 175, 55, 0.22)"
                            : isStateHovered
                            ? "rgba(212, 175, 55, 0.12)"
                            : "rgba(28, 26, 38, 0.75)"
                        }
                        stroke={
                          isStateSelected
                            ? "#e5c158"
                            : isStateHovered
                            ? "rgba(212, 175, 55, 0.6)"
                            : "rgba(212, 175, 55, 0.22)"
                        }
                        strokeWidth={isStateSelected ? "1.8" : isStateHovered ? "1.2" : "0.75"}
                        onMouseEnter={() => setHoveredStateName(stateName)}
                        onMouseLeave={() => setHoveredStateName(null)}
                      />
                    );
                  })}
                </g>
              )}

              {/* Render Art Markers */}
              <g className="markers-group">
                {regions.map((region) => {
                  const coords = projection(region.coordinates);
                  if (!coords) return null;
                  const [x, y] = coords;
                  const isSelected = selectedRegion?.id === region.id;
                  const isHovered = hoveredRegion?.id === region.id;
                  const isVisible = activeFilter === "ALL" || region.category === activeFilter;

                  return (
                    <MapMarker
                      key={region.id}
                      region={region}
                      x={x}
                      y={y}
                      isSelected={isSelected}
                      isHovered={isHovered}
                      isVisible={isVisible}
                      onSelect={handleSelectRegion}
                      onHover={(reg, pos) => {
                        setHoveredRegion(reg);
                        if (pos) setTooltipPos(pos);
                      }}
                    />
                  );
                })}
              </g>
            </svg>
          </div>

          {/* Hover Tooltip Card */}
          {hoveredRegion && (
            <div
              className="absolute pointer-events-none z-40 p-3 rounded-2xl bg-[#100f18]/95 backdrop-blur-xl border border-[#d4af37]/45 shadow-2xl max-w-xs text-left transition-all duration-200"
              style={{
                top: "70px",
                left: "24px",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#d4af37]">
                  {hoveredRegion.state}
                </span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/10 text-[#dcd2c0] uppercase">
                  {hoveredRegion.category}
                </span>
              </div>
              <div className="text-sm font-bold text-[#f5f2eb] font-display">
                {hoveredRegion.name}
              </div>
              <div className="text-xs text-[#d4af37] font-serif italic mb-2">
                {hoveredRegion.primaryTraditions[0]}
              </div>

              {hoveredRegion.notableArtworks.length > 0 && (
                <div className="flex items-center gap-2.5 pt-2 border-t border-white/10">
                  <img
                    src={hoveredRegion.notableArtworks[0].imageUrl}
                    alt={hoveredRegion.notableArtworks[0].title}
                    className="w-10 h-10 rounded-lg object-cover border border-white/10"
                  />
                  <div>
                    <div className="text-[11px] font-semibold text-[#ede5d8] line-clamp-1">
                      {hoveredRegion.notableArtworks[0].title}
                    </div>
                    <div className="text-[10px] text-[#9c9180]">
                      Click marker to view dossier →
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Bottom Left Legend Box */}
          <div className="absolute bottom-4 left-4 z-20 hidden md:flex flex-wrap items-center gap-2 bg-[#100f18]/90 backdrop-blur-md p-3 rounded-2xl border border-[#d4af37]/20 text-[11px]">
            <span className="text-[#a89e8e] font-semibold uppercase tracking-wider text-[10px] mr-1">
              Legend:
            </span>
            {Object.entries(CATEGORY_COLORS).map(([cat, col]) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat as FilterCategory)}
                className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md transition-all ${
                  activeFilter === cat ? "bg-white/15 ring-1 ring-[#d4af37]" : "hover:bg-white/5"
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: col.bg }}
                />
                <span className="text-[#ded5c5]">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Museum Region Detail Panel */}
        <RegionPanel
          region={selectedRegion}
          onClose={() => setSelectedRegion(null)}
          onSelectNextRegion={handleSelectNextRegion}
          onViewArtwork={(artwork, reg) => setModalArtwork({ artwork, region: reg })}
        />
      </div>

      {/* Lightbox Artwork Modal */}
      {modalArtwork && (
        <ArtworkModal
          artwork={modalArtwork.artwork}
          regionName={modalArtwork.region.name}
          stateName={modalArtwork.region.state}
          onClose={() => setModalArtwork(null)}
        />
      )}
    </section>
  );
}
