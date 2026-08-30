"use client";

import { motion } from "framer-motion";
import { ArtRegion, ArtCategory } from "@/data/types";

interface MapMarkerProps {
  region: ArtRegion;
  x: number;
  y: number;
  isSelected: boolean;
  isHovered: boolean;
  isVisible: boolean;
  onSelect: (region: ArtRegion) => void;
  onHover: (region: ArtRegion | null, pos?: { x: number; y: number }) => void;
}

const CATEGORY_COLORS: Record<ArtCategory, { primary: string; glow: string; border: string }> = {
  Painting: { primary: "#d97706", glow: "rgba(217, 119, 6, 0.6)", border: "#fde68a" },
  Sculpture: { primary: "#b45309", glow: "rgba(180, 83, 9, 0.6)", border: "#fed7aa" },
  Textile: { primary: "#059669", glow: "rgba(5, 150, 105, 0.6)", border: "#a7f3d0" },
  "Folk Art": { primary: "#ea580c", glow: "rgba(234, 88, 12, 0.6)", border: "#fed7aa" },
  Architecture: { primary: "#8b5cf6", glow: "rgba(139, 92, 246, 0.6)", border: "#ddd6fe" },
  Mural: { primary: "#10b981", glow: "rgba(16, 185, 129, 0.6)", border: "#a7f3d0" },
  Miniature: { primary: "#c026d3", glow: "rgba(192, 38, 211, 0.6)", border: "#f5d0fe" },
};

export default function MapMarker({
  region,
  x,
  y,
  isSelected,
  isHovered,
  isVisible,
  onSelect,
  onHover,
}: MapMarkerProps) {
  const colorData = CATEGORY_COLORS[region.category] || CATEGORY_COLORS.Painting;

  if (!isVisible) return null;

  return (
    <g
      className="cursor-pointer transition-all select-none"
      transform={`translate(${x}, ${y})`}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(region);
      }}
      onMouseEnter={() => onHover(region, { x, y })}
      onMouseLeave={() => onHover(null)}
      tabIndex={0}
      role="button"
      aria-label={`${region.name} - ${region.primaryTraditions[0]}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(region);
        }
      }}
    >
      {/* Outer Pulse Wave for Selected or Highlighted */}
      {(isSelected || isHovered) && (
        <circle
          r="26"
          fill="none"
          stroke={isSelected ? "#d4af37" : colorData.border}
          strokeWidth="1.5"
          opacity="0.8"
          className="animate-ping"
          style={{ transformOrigin: "0 0" }}
        />
      )}

      {/* Static Glow Base Ring */}
      <circle
        r={isSelected ? "18" : isHovered ? "16" : "12"}
        fill={colorData.glow}
        opacity={isSelected ? "0.85" : "0.45"}
        className="transition-all duration-300"
      />

      {/* Main Outer Core */}
      <circle
        r={isSelected ? "11" : isHovered ? "9" : "7.5"}
        fill="#13121a"
        stroke={isSelected ? "#f6e6b4" : colorData.primary}
        strokeWidth={isSelected ? "2.5" : "1.8"}
        className="transition-all duration-300 shadow-lg"
      />

      {/* Inner Center Jewel */}
      <circle
        r={isSelected ? "5.5" : isHovered ? "4.5" : "3.5"}
        fill={isSelected ? "#d4af37" : colorData.primary}
        className="transition-all duration-300"
      />

      {/* Category Marker Badge Symbol / Monogram */}
      {isSelected && (
        <circle
          r="1.8"
          fill="#ffffff"
        />
      )}

      {/* Floating State/Tradition Pin Label on Desktop */}
      <g
        className="transition-opacity duration-300 pointer-events-none"
        transform="translate(14, -6)"
      >
        <rect
          x="-4"
          y="-10"
          width={Math.max(region.name.length * 6.5 + 16, 75)}
          height="20"
          rx="4"
          fill="#0c0b11f0"
          stroke={isSelected ? "#d4af37" : "rgba(212, 175, 55, 0.3)"}
          strokeWidth={isSelected ? "1.2" : "0.7"}
        />
        <text
          x="4"
          y="3.5"
          fill={isSelected ? "#f6e6b4" : "#ede5d8"}
          fontSize="9"
          fontWeight={isSelected ? "700" : "500"}
          fontFamily="var(--font-sans), sans-serif"
          letterSpacing="0.03em"
        >
          {region.name}
        </text>
      </g>
    </g>
  );
}
