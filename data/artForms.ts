import { ArtFormCategoryInfo } from "./types";

export const ART_FORM_CATEGORIES: ArtFormCategoryInfo[] = [
  {
    id: "painting",
    name: "Painting",
    title: "Sacred & Classical Painting",
    tagline: "From ritual canvas scrolls to temple temperas and courtly masterpieces.",
    description:
      "Indian painting encompasses ancient cave frescoes, temple scrolls, cloth Pattachitra, and regional court traditions. Driven by deep philosophical narratives, intricate line drawings, and natural mineral dyes extracted from earth, lapis, and crushed shells.",
    featuredTraditions: [
      "Madhubani / Mithila Art",
      "Pattachitra of Odisha",
      "Mysore Gold Gesso Painting",
      "Kalighat Patua Art",
      "Bengal Renaissance School"
    ],
    primaryRegions: ["Bihar", "Odisha", "Karnataka", "West Bengal", "Ladakh"],
    sampleArtwork: "Bodhisattva Padmapani / Dasavatara Pattachitra",
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#d97706",
    iconName: "Palette",
    traditionCount: 14
  },
  {
    id: "sculpture",
    name: "Sculpture",
    title: "Sacred Metallurgy & Stone Carving",
    tagline: "Lost-wax cast bronzes, monolithic rock temples, and delicate sandstone reliefs.",
    description:
      "Indian sculptural heritage spans five millennia, from the Indus Valley bronze dancing girl to the sublime lost-wax Chola Nataraja, rock-hewn monoliths of Ellora, and Bastar Dhokra bell metal traditions.",
    featuredTraditions: [
      "Chola Lost-Wax Sacred Bronzes",
      "Bastar Dhokra Metallurgical Craft",
      "Mathura & Sarnath Sandstone Statuary",
      "Konark & Khajuraho Reliefs",
      "Hoysala Soapstone Filigree"
    ],
    primaryRegions: ["Tamil Nadu", "Chhattisgarh", "Madhya Pradesh", "Karnataka", "Uttar Pradesh"],
    sampleArtwork: "Shiva Nataraja / Bastar Ceremonial Elephant",
    imageUrl: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#b45309",
    iconName: "Gem",
    traditionCount: 11
  },
  {
    id: "textile",
    name: "Textile",
    title: "Living Loom & Natural Dye Arts",
    tagline: "Intricate double-ikats, pen-drawn Kalamkaris, and imperial royal silks.",
    description:
      "India dressed the ancient and medieval world with its mastery over cotton and silk. Techniques include double-ikat weaving in Patan, pen-drawn botanical dye art in Srikalahasti, and royal Banarasi and Kanchipuram zari brocades.",
    featuredTraditions: [
      "Patan Double-Ikat Patola",
      "Srikalahasti Freehand Kalamkari",
      "Kashmiri Kani Pashmina",
      "Banarasi & Kanchipuram Zari Silks",
      "Assam Golden Muga Weaving"
    ],
    primaryRegions: ["Gujarat", "Andhra Pradesh", "Jammu & Kashmir", "Tamil Nadu", "Assam"],
    sampleArtwork: "Tree of Life Kalamkari / Navratna Patan Patola",
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#059669",
    iconName: "Layers",
    traditionCount: 16
  },
  {
    id: "folk-art",
    name: "Folk Art",
    title: "Indigenous & Tribal Cosmologies",
    tagline: "Animist mythologies, ritual floor paintings, and community celebrations.",
    description:
      "Rooted in oral traditions and indigenous worldviews, Indian tribal and folk art bridges sacred ritual with daily life. Exemplified by Gond nature canvases, Warli geometric dance murals, and Majuli theatrical masks.",
    featuredTraditions: [
      "Gond Dot-and-Line Cosmologies",
      "Warli Ritual Wall Paintings",
      "Majuli Island Theatrical Masks",
      "Pithora Rathwa Murals",
      "Kashmiri Papier-Mâché Guilds"
    ],
    primaryRegions: ["Madhya Pradesh", "Maharashtra", "Assam", "Gujarat", "Kashmir"],
    sampleArtwork: "Tarpa Dance / Gond Mahua Tree of Life",
    imageUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#ea580c",
    iconName: "Sparkles",
    traditionCount: 18
  },
  {
    id: "mural",
    name: "Mural",
    title: "Classical & Temple Murals",
    tagline: "Ancient cave temperas, Panchavarna frescoes, and palace ceiling cycles.",
    description:
      "Vast narrative wall paintings adorning rock-cut sanctuaries and royal sanctums. Characterized by Ajanta's luminous Buddhist iconography, Kerala's Panchavarna five-color frescoes, and Lepakshi's grand ceiling epics.",
    featuredTraditions: [
      "Ajanta Cave Buddhist Frescoes",
      "Kerala Temple Murals (Mattancherry & Krishnapuram)",
      "Lepakshi Vijayanagara Ceiling Murals",
      "Alchi Monastic Wall Frescoes",
      "Bhimbetka Prehistoric Petroglyphs"
    ],
    primaryRegions: ["Maharashtra", "Kerala", "Andhra Pradesh", "Ladakh", "Madhya Pradesh"],
    sampleArtwork: "Gajendra Moksha / Ajanta Padmapani",
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#10b981",
    iconName: "Brush",
    traditionCount: 9
  },
  {
    id: "miniature",
    name: "Miniature",
    title: "Courtly & Devotional Miniatures",
    tagline: "Burnished gold foils, jewel pigments, and poetic love lyrics.",
    description:
      "Flourishing under Rajput, Mughal, and Pahari royal patrons, miniature painting is famous for razor-sharp single-hair brush precision, glowing gemstone pigments (lapis, cinnabar, malachite), and sublime poetic devotion.",
    featuredTraditions: [
      "Rajasthani Miniature (Kishangarh, Mewar, Bundi)",
      "Pahari Kangra & Basohli Schools",
      "Mughal Imperial Natural History & Manuscript Illumination",
      "Nathdwara Devotional Pichwai",
      "Deccani Court Painting"
    ],
    primaryRegions: ["Rajasthan", "Himachal Pradesh", "Uttar Pradesh", "Jammu & Kashmir"],
    sampleArtwork: "Radha as Bani Thani / Kangra Gita Govinda",
    imageUrl: "https://images.unsplash.com/photo-1582561148419-7c87023c915f?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#c026d3",
    iconName: "Flame",
    traditionCount: 12
  },
  {
    id: "architecture",
    name: "Architecture",
    title: "Monumental Sacred Architecture",
    tagline: "Monolithic rock-cut temples, soaring Dravidian gopurams, and marble wonders.",
    description:
      "Indian architectural science (Vastu and Shilpa Shastra) synthesized mathematical geometry, cosmological symbolism, and master stonecraft. Spanning Nagara, Dravida, and Vesara styles alongside Islamic and Indo-Saracenic masterworks.",
    featuredTraditions: [
      "Dravidian Gopuram Architecture (Thanjavur, Madurai)",
      "Kalinga Sun Temple (Konark)",
      "Nagara Temple Shikhara (Khajuraho, Sanchi)",
      "Mughal Inlay & Pietra Dura (Agra, Fatehpur Sikri)",
      "Vijayanagara Granite Ensembles (Hampi)"
    ],
    primaryRegions: ["Tamil Nadu", "Odisha", "Madhya Pradesh", "Uttar Pradesh", "Karnataka"],
    sampleArtwork: "Brihadisvara Temple Vimana / Konark Sun Chariot",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#8b5cf6",
    iconName: "Landmark",
    traditionCount: 15
  }
];
