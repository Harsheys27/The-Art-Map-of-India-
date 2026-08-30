"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ArtMap from "@/components/ArtMap";
import RegionExplorer from "@/components/RegionExplorer";
import ArtForms from "@/components/ArtForms";
import TraditionsJourney from "@/components/TraditionsJourney";
import Artists from "@/components/Artists";
import Facts from "@/components/Facts";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import FinalCta from "@/components/FinalCta";
import Sources from "@/components/Sources";
import Footer from "@/components/Footer";
import { ART_REGIONS } from "@/data/regions";
import { ArtRegion } from "@/data/types";
import { FilterCategory } from "@/components/MapFilters";

export default function Home() {
  const [selectedRegionId, setSelectedRegionId] = useState<string>("bihar");
  const [activeSection, setActiveSection] = useState<string>("hero");

  const handleSelectRegion = (region: ArtRegion) => {
    setSelectedRegionId(region.id);
  };

  const handleSelectRegionId = (regionId: string) => {
    setSelectedRegionId(regionId);
  };

  const handleCategoryFilter = (category: FilterCategory) => {
    // When a category is selected from ArtForms, find a region in that category
    if (category !== "ALL") {
      const match = ART_REGIONS.find((r) => r.category === category);
      if (match) {
        setSelectedRegionId(match.id);
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#09090c] text-[#ede5d8] selection:bg-[#d4af37]/30 selection:text-[#fbf5e8]">
      {/* Sticky Museum Navbar */}
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />

      {/* Cinematic Hero */}
      <Hero
        onExploreClick={() => {
          const mapEl = document.getElementById("interactive-map");
          if (mapEl) {
            mapEl.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />

      {/* The Visual Centerpiece: Interactive Art Map of India */}
      <ArtMap
        regions={ART_REGIONS}
        initialSelectedRegionId={selectedRegionId}
        onRegionChange={handleSelectRegion}
      />

      {/* Regional Art Explorer Cards */}
      <RegionExplorer
        regions={ART_REGIONS}
        onSelectRegion={handleSelectRegion}
      />

      {/* One Country. Many Art Forms. */}
      <ArtForms onSelectCategory={handleCategoryFilter} />

      {/* Traditions in Motion: Animated Geographic Journey */}
      <TraditionsJourney onSelectRegionId={handleSelectRegionId} />

      {/* Masters & Living Traditions */}
      <Artists />

      {/* Did You Know? Exhibition Facts */}
      <Facts />

      {/* Representative Artwork Gallery with Lightbox */}
      <Gallery regions={ART_REGIONS} />

      {/* India's Artistic Landscape Statistics */}
      <Stats />

      {/* Final Section CTA */}
      <FinalCta />

      {/* Academic Sources & Institutional Citations */}
      <Sources />

      {/* Museum Footer */}
      <Footer />
    </main>
  );
}
