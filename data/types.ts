export type ArtCategory =
  | "Painting"
  | "Sculpture"
  | "Textile"
  | "Folk Art"
  | "Architecture"
  | "Mural"
  | "Miniature";

export interface Artwork {
  id: string;
  title: string;
  period: string;
  medium: string;
  description: string;
  imageUrl: string;
  locationCreated: string;
  currentLocation?: string;
  significance?: string;
}

export interface ArtRegion {
  id: string;
  name: string;
  state: string;
  stateGeoName: string; // matches GeoJSON NAME_1
  capitalCity?: string;
  coordinates: [number, number]; // [longitude, latitude]
  primaryTraditions: string[];
  category: ArtCategory;
  artForms: string[];
  historicalPeriod: string;
  overview: string;
  description: string;
  historicalContext: string;
  culturalSignificance: string;
  keyCommunitiesOrArtists: string[];
  notableArtworks: Artwork[];
  interestingFact: string;
  materialsAndTechniques: string[];
  unescoStatus?: string;
  representativeColor?: string;
}

export interface ArtFormCategoryInfo {
  id: string;
  name: ArtCategory;
  title: string;
  tagline: string;
  description: string;
  featuredTraditions: string[];
  primaryRegions: string[];
  sampleArtwork: string;
  imageUrl: string;
  accentColor: string;
  iconName: string;
  traditionCount: number;
}

export interface ArtistOrTradition {
  id: string;
  name: string;
  role: "Individual Master" | "Community / Living Guild";
  region: string;
  state: string;
  era: string;
  specialization: string;
  biography: string;
  keyContributions: string[];
  famousWorks: string[];
  imageUrl: string;
  legacy: string;
}

export interface ArtFact {
  id: number;
  number: string;
  title: string;
  fact: string;
  detail: string;
  region: string;
  category: string;
}

export interface TimelineJourneyPoint {
  order: number;
  regionId: string;
  regionName: string;
  state: string;
  tradition: string;
  century: string;
  geographicalSignificance: string;
  materialHighlight: string;
  imageUrl: string;
}

export interface SourceReference {
  id: string;
  institution: string;
  type: "National Museum" | "Academic Archive" | "Statutory Body" | "World Heritage";
  description: string;
  url?: string;
  citationNotes: string;
}
