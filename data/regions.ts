import { ArtRegion } from "./types";

export const ART_REGIONS: ArtRegion[] = [
  {
    id: "bihar",
    name: "Mithila / Madhubani",
    state: "Bihar",
    stateGeoName: "Bihar",
    capitalCity: "Patna",
    coordinates: [85.9, 26.35], // [lng, lat]
    primaryTraditions: ["Madhubani / Mithila Painting", "Sikki Grass Craft", "Manjusha Art"],
    category: "Folk Art",
    artForms: ["Painting", "Folk Art", "Ritual Art"],
    historicalPeriod: "Ancient origin; 14th Century CE documented; Global revival post-1934",
    overview: "World-renowned ritualistic folk painting practiced traditionally by women of the Mithila region on mud walls and handmade paper.",
    description:
      "Madhubani painting, also known as Mithila art, is characterized by its eye-catching geometrical patterns, distinct double-line borders, and vibrant natural color palette. Originating as ritual wall murals (Bhitti Chitra) and floor floorings (Aripan) created during weddings and festivals, it portrays Hindu deities, nature, flora, fauna, and cosmic symbols of fertility and prosperity.",
    historicalContext:
      "According to oral traditions, Madhubani art originated during the Ramayana era when King Janaka commissioned artists to paint his daughter Sita's wedding to Prince Rama. In 1934, following a massive earthquake in Bihar, British colonial officer William G. Archer discovered these striking murals on the exposed interior walls of collapsed village homes. During the 1966-68 drought, Pupul Jayakar and the All India Handicrafts Board encouraged local women to transfer their wall paintings onto handmade paper to generate sustainable livelihood, launching Mithila art to global acclaim.",
    culturalSignificance:
      "Traditionally divided into distinct styles—Kachni (delicate monochrome hatching), Bharni (solid mineral fills), Godna (concentric tattoo motifs), and Tantrik (sacred geometries)—Madhubani art embodies female empowerment, ecological reverence, and the preservation of sacred folklore passed matrilineally through generations.",
    keyCommunitiesOrArtists: [
      "Baua Devi (Padma Shri)",
      "Mahasundari Devi (Padma Shri)",
      "Sita Devi (Padma Shri)",
      "Ganga Devi (Padma Shri)",
      "Karpuri Devi",
      "Mithila Women Guilds of Ranti & Jitwarpur"
    ],
    materialsAndTechniques: [
      "Bamboo sticks and bird feathers as fine nibs",
      "Natural pigments: lampblack (Kajal), turmeric (Haldi), Indigo, kusum flowers, peepal bark",
      "Handmade paper treated with cow-dung wash",
      "Double-line border framing with intricate floral filler motifs"
    ],
    interestingFact:
      "In 2012, artists painted sacred Madhubani deities directly on thousands of highway trees in Madhubani forest. Because of the religious reverence for the paintings, not a single tree was cut down by loggers!",
    unescoStatus: "GI (Geographical Indication) Tagged since 2007",
    representativeColor: "#d97706",
    notableArtworks: [
      {
        id: "madhubani-kohbar",
        title: "Kohbar Ghar Mural (Nuptial Chamber Painting)",
        period: "Traditional 20th Century Heritage",
        medium: "Natural organic dyes on handmade cow-dung washed paper",
        description: "The sacred centerpiece of Mithila weddings, featuring the lotus pond (Kamal-van), bamboo grove (symbol of lineage), fish, turtles, and the Sun and Moon representing cosmic vitality.",
        imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Jitwarpur, Madhubani",
        currentLocation: "National Crafts Museum, New Delhi",
        significance: "Embodies fertility, union, and cosmic harmony in traditional Mithila weddings."
      },
      {
        id: "madhubani-radha-krishna",
        title: "Radha Krishna in Kadamba Grove",
        period: "Late 20th Century",
        medium: "Mineral pigments and soot line work on paper",
        description: "Intricate depiction of divine love framed by peacock motifs, stylized Kadamba leaves, and fish swimming in sacred ponds.",
        imageUrl: "https://images.unsplash.com/photo-1582561148419-7c87023c915f?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Ranti Village, Bihar",
        currentLocation: "Mithila Museum, Niigata, Japan"
      }
    ]
  },
  {
    id: "maharashtra",
    name: "Ajanta & Warli Heartland",
    state: "Maharashtra",
    stateGeoName: "Maharashtra",
    capitalCity: "Mumbai",
    coordinates: [75.7, 19.8],
    primaryTraditions: ["Ajanta Cave Murals", "Warli Tribal Art", "Paithani Weaving", "Ellora Rock Sculptures"],
    category: "Mural",
    artForms: ["Mural", "Painting", "Sculpture", "Textile"],
    historicalPeriod: "2nd Century BCE - 5th Century CE (Ajanta); 10th Century BCE origins (Warli)",
    overview: "Home to the pinnacle of classical Buddhist mural painting at Ajanta and the elemental monochrome ritual wall art of the Warli tribe.",
    description:
      "Maharashtra holds a twin legacy of magnificent classical rock-cut cave paintings at Ajanta and the timeless indigenous Warli tribal art of the Sahyadri mountains. While Ajanta's tempera frescoes display sublime spiritual grace, naturalistic shading, and courtly narratives, Warli art communicates human harmony with nature through basic geometric shapes—circles, triangles, and squares.",
    historicalContext:
      "The 30 rock-hewn caves of Ajanta were carved during the Satavahana and Vakataka dynasties under King Harishena (c. 460–477 CE). Preserved by centuries of jungle foliage, they were rediscovered in 1819 by John Smith. Warli art, dating back millennia to Neolithic rock shelters, was brought to international prominence in the 1970s by master artist Jivya Soma Mashe, who transitioned it from ritual wedding walls (Lagnacha Chawk) into fine contemporary canvases.",
    culturalSignificance:
      "Ajanta represents the zenith of Asian classical art, heavily influencing Buddhist frescoes across Sri Lanka (Sigiriya), Central Asia (Dunhuang), and Southeast Asia. Warli art celebrates Palaghat (the goddess of fertility), ancestral agricultural cycles, and the ecstatic community 'Tarpa Dance'.",
    keyCommunitiesOrArtists: [
      "Vakataka Master Guilds (Ajanta & Ellora)",
      "Jivya Soma Mashe (Padma Shri)",
      "Balu Jivya Mashe",
      "Warli Indigenous Community of Palghar & Dahanu",
      "Rashtrakuta Sculptors (Kailash Temple)"
    ],
    materialsAndTechniques: [
      "Ajanta: Mud-plaster base mixed with rice husks, rock-powder tempera, lapis lazuli, ochres",
      "Warli: Rice flour paste with gum binder applied with chewed bamboo twigs on cow-dung mud walls",
      "Ellora: Monolithic single-rock carving from top down",
      "Paithani: Pure silk with zari tapestry gold-woven pallus"
    ],
    interestingFact:
      "In Warli paintings, the circle represents the sun and moon, the triangle represents mountains and trees, and the square signifies sacred human-enclosed land or the goddess's altar. No diagonal lines are drawn without meaning!",
    unescoStatus: "Ajanta & Ellora Caves are UNESCO World Heritage Sites (Inscribed 1983)",
    representativeColor: "#059669",
    notableArtworks: [
      {
        id: "ajanta-padmapani",
        title: "Bodhisattva Padmapani (Cave 1)",
        period: "Late 5th Century CE (Vakataka Period)",
        medium: "Mineral pigments on mud-plaster rock-wall (tempera/fresco-secco)",
        description: "The quintessential masterpiece of Indian classical art depicting Bodhisattva Avalokiteshvara holding a blue lotus, radiating serene compassion with subtle tribhanga posture and pearl-jeweled crown.",
        imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Ajanta Caves, Aurangabad District",
        currentLocation: "Cave 1, Ajanta World Heritage Site",
        significance: "Globally acknowledged as the crowning pinnacle of classical Indian mural painting."
      },
      {
        id: "warli-tarpa-dance",
        title: "Tarpa Dance & The Cycle of Seasons",
        period: "Contemporary Tribal Masterpiece",
        medium: "Rice paste and water on Geru (red ochre) coated canvas",
        description: "Dozens of stylized human figures holding hands in an expansive spiral dance around the village musician playing the trumpet-like Tarpa horn, symbolizing the unending wheel of life.",
        imageUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Palghar District, Maharashtra",
        currentLocation: "National Gallery of Modern Art, Mumbai"
      }
    ]
  },
  {
    id: "tamil-nadu",
    name: "Thanjavur & Chola Realm",
    state: "Tamil Nadu",
    stateGeoName: "Tamil Nadu",
    capitalCity: "Chennai",
    coordinates: [79.13, 10.78],
    primaryTraditions: ["Chola Lost-Wax Bronze Castings", "Thanjavur (Tanjore) Gold Leaf Painting", "Dravidian Temple Architecture", "Kanchipuram Silk"],
    category: "Sculpture",
    artForms: ["Sculpture", "Painting", "Architecture", "Textile"],
    historicalPeriod: "9th - 13th Century CE (Chola Bronzes); 16th - 18th Century CE (Thanjavur Painting)",
    overview: "The cradle of sublime sacred metal sculpture, golden gesso relief paintings, and monumental Dravidian gopurams.",
    description:
      "Tamil Nadu's artistic zenith flowered under the Imperial Cholas (9th–13th century CE), who perfected the 'cire perdue' (lost-wax) technique to cast world-famous sacred bronzes like Shiva Nataraja. In later centuries under Nayaka and Maratha patronage, Thanjavur developed its opulent Tanjore paintings enriched with 22-karat gold foil, Jaipur gemstones, and embossed gesso relief.",
    historicalContext:
      "Under Emperor Rajaraja Chola I and his son Rajendra Chola I, master Sthapatis (sculptor-priests) established casting centers in Swamimalai along the Kaveri river basin. The lost-wax technique followed strict canons of divine proportion laid down in the Shilpa Shastras. Auguste Rodin praised the Chola Nataraja as the most perfect sculptural representation of the rhythmic movement of the cosmos in world art history.",
    culturalSignificance:
      "The Chola Nataraja bronze unites religion, art, science, and philosophy in a single image. The cosmic dance depicts Srishti (creation), Sthiti (preservation), Samhara (dissolution), Tirobhava (illusion), and Anugraha (salvation).",
    keyCommunitiesOrArtists: [
      "Swamimalai Sthapatis (Master Bronze Casters of Kaveri Delta)",
      "Rajaraja Chola I & Queen Sembiyan Mahadevi (Great Royal Patrons)",
      "Thanjavur Maratha Court Guilds",
      "Kanchipuram Master Weavers"
    ],
    materialsAndTechniques: [
      "Lost-wax casting (Madhu-chhishta Vidhana) using beeswax, dammar resin, and Cauvery river alluvium clay",
      "Ashtadhatu (eight-metal) and Panchaloha (five-metal: copper, zinc, tin, gold, silver) alloys",
      "Tanjore Painting: Teakwood board, Arabic gum gesso, pure gold foil, semi-precious stones"
    ],
    interestingFact:
      "A 2-meter statue of the Chola Nataraja gifted by the Indian government stands prominently at CERN (the European Organization for Nuclear Research) in Geneva, symbolizing the modern scientific dance of subatomic particles.",
    unescoStatus: "Great Living Chola Temples (Brihadisvara, Gangaikondacholapuram, Airavatesvara) are UNESCO World Heritage Sites",
    representativeColor: "#b45309",
    notableArtworks: [
      {
        id: "chola-nataraja",
        title: "Shiva Nataraja (Lord of the Cosmic Dance)",
        period: "10th - 11th Century CE (Imperial Chola Dynasty)",
        medium: "Panchaloha (five-metal alloy) solid bronze casting via lost-wax process",
        description: "Shiva dancing within a flaming halo (Prabhamandala), holding the drum of creation (Damaru) and fire of destruction (Agni), crushing the dwarf of ignorance (Apasmara) while granting fearlessness (Abhaya Mudra).",
        imageUrl: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Swamimalai / Thanjavur",
        currentLocation: "Government Museum, Egmore, Chennai / National Museum, New Delhi",
        significance: "Universally regarded as one of the greatest sculptural achievements of human civilization."
      },
      {
        id: "tanjore-krishna",
        title: "Navaneetha Krishna Tanjore Painting",
        period: "18th Century Maratha Court Period",
        medium: "22K gold leaf, Jaipur stones, and natural pigment on gesso-embossed wood",
        description: "Lustrous icon of infant Krishna butter-thief framed in elaborate gilded arches, glowing with raised gold relief work and vibrant gem inlays.",
        imageUrl: "https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Thanjavur Royal Court",
        currentLocation: "Thanjavur Art Gallery, Thanjavur Palace"
      }
    ]
  },
  {
    id: "odisha",
    name: "Puri & Raghurajpur Heritage",
    state: "Odisha",
    stateGeoName: "Orissa",
    capitalCity: "Bhubaneswar",
    coordinates: [85.83, 19.81],
    primaryTraditions: ["Pattachitra Painting", "Tala Pattachitra (Palm Leaf Engraving)", "Pipili Appliqué Work", "Konark Kalinga Stone Architecture"],
    category: "Painting",
    artForms: ["Painting", "Folk Art", "Sculpture", "Architecture"],
    historicalPeriod: "5th Century BCE origins; 12th Century CE Golden Age under Eastern Gangas",
    overview: "Intricate cloth scrolls and etched palm-leaf manuscripts dedicated to Lord Jagannath, featuring razor-sharp black line work and rich natural mineral tones.",
    description:
      "Pattachitra (from Sanskrit 'Patta' meaning cloth and 'Chitra' meaning painting) is one of the oldest and most detailed living visual art forms of Eastern India. Originating in the sacred temple rituals of Lord Jagannath in Puri, hereditary Chitrakar painters meticulously coat woven cotton cloth with tamarind seed paste and chalk powder before painting divine legends, Dasavatara cycles, and the playful love of Radha-Krishna.",
    historicalContext:
      "Pattachitra paintings historically substituted for the holy deities in Puri Temple during 'Anavasara' (a 15-day period when the wooden idols of Jagannath, Balabhadra, and Subhadra are kept in seclusion following the Snana Yatra bathing festival). The village of Raghurajpur near Puri was declared India's first Heritage Crafts Village in 2000, where every single household continues this master tradition.",
    culturalSignificance:
      "The style features strictly defined iconographic rules: almond-shaped eyes, sharp hooked noses, decorative floral framing, and vivid storytelling drawn without preliminary pencil sketching.",
    keyCommunitiesOrArtists: [
      "Chitrakar Community of Raghurajpur & Dandasahi",
      "Jagannath Mahapatra (Master Craftsman)",
      "Rabindra Nath Sahu",
      "Kalinga Guild of Temple Sculptors (Konark & Lingaraj)"
    ],
    materialsAndTechniques: [
      "Patta base: Cotton canvas layered with tamarind seed gum (Niryas kalpa) and chalk stone powder",
      "Pigments from crushed conch shells (white), Hingula (red), Haritala (yellow), lamp soot (black), and Geru (ochre)",
      "Tala Pattachitra: Seasoned dried palm leaves incised with iron stylus and blackened with bean leaf juice and charcoal",
      "Brushes crafted from mouse hair tied to thin bamboo handles for micro-detailing"
    ],
    interestingFact:
      "Palm leaf manuscripts (Tala Pattachitra) are so durable that multi-layered folding palm-leaf scrolls from the 16th century survive today without deterioration, thanks to turmeric treatment and smoke seasoning.",
    unescoStatus: "Sun Temple, Konark is a UNESCO World Heritage Site (1984); Raghurajpur is a recognized Heritage Craft Village",
    representativeColor: "#0284c7",
    notableArtworks: [
      {
        id: "pattachitra-dasavatara",
        title: "Dasavatara of Lord Vishnu Pattachitra",
        period: "Traditional Eastern Ganga School Continuum",
        medium: "Conch shell, cinnabar, and stone pigments on tamarind-primed cloth",
        description: "The ten avatars of Vishnu radiating symmetrically around the central seated Mahavishnu, framed by dense floral borders and miniature narrative vignettes.",
        imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Raghurajpur Heritage Village, Puri",
        currentLocation: "Odisha State Museum, Bhubaneswar",
        significance: "The defining masterwork of classical Odishan temple scroll art."
      },
      {
        id: "konark-sun-chariot",
        title: "Konark Wheel & Surasundari Sculptures",
        period: "13th Century CE (King Narasimhadeva I)",
        medium: "Chlorite and Khondalite stone relief carving",
        description: "Intricately carved 24 monumental chariot wheels and celestial musicians (Surasundaris) capturing the cosmic passage of time with breathtaking botanical and figurative details.",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Konark, Odisha",
        currentLocation: "Konark Sun Temple Site"
      }
    ]
  },
  {
    id: "west-bengal",
    name: "Kolkata & Kalighat Nexus",
    state: "West Bengal",
    stateGeoName: "West Bengal",
    capitalCity: "Kolkata",
    coordinates: [88.36, 22.57],
    primaryTraditions: ["Kalighat Painting", "Bengal School of Art", "Bankura Terracotta", "Dokra Metalcraft", "Kantha Embroidery"],
    category: "Painting",
    artForms: ["Painting", "Folk Art", "Sculpture", "Textile"],
    historicalPeriod: "19th Century CE (Kalighat); Early 20th Century (Bengal Renaissance)",
    overview: "Birthplace of modern Indian nationalist painting through the Bengal School, urban satirical Kalighat pats, and ancient terracotta temples.",
    description:
      "West Bengal stands as a powerhouse of Indian artistic transformation. In the 19th century around Kolkata's Kalighat temple, rural scroll painters created bold, expressive, shaded watercolor prints mocking the westernized 'Babu' aristocracy. In the early 20th century, Abanindranath Tagore and E.B. Havell founded the Bengal School of Art, fusing Japanese wash techniques, Ajanta frescoes, and Mughal miniatures to create a modern Indian visual identity.",
    historicalContext:
      "Kalighat paintings evolved as inexpensive souvenirs purchased by pilgrims and visitors to Kolkata. Later, legendary artists like Jamini Roy abandoned academic realism to adopt folk Bengali patua idioms. Simultaneously, Rabindranath Tagore established Kala Bhavana at Visva-Bharati University in Santiniketan, nurturing visionary masters like Nandalal Bose, Benode Behari Mukherjee, and Ramkinkar Baij.",
    culturalSignificance:
      "Kalighat art was one of the earliest Indian urban art forms to engage directly with social commentary, gender dynamics, and colonial satire. The Bengal School broke the hegemony of Western academic realism and pioneered modern Indian art.",
    keyCommunitiesOrArtists: [
      "Abanindranath Tagore",
      "Nandalal Bose",
      "Jamini Roy",
      "Gaganendranath Tagore",
      "Patuas of Kalighat & Pingla",
      "Terracotta Guilds of Bishnupur"
    ],
    materialsAndTechniques: [
      "Kalighat: Rapid calligraphic brush strokes, water-based opaque tempera on mill-made paper with delicate shading",
      "Bengal Wash: Repeated layering and washing of watercolor in water baths to produce a luminous, misty atmospheric depth",
      "Terracotta: Local alluvial clay baked into intricate relief tiles on temple facades",
      "Kantha: Running stitch layering old recycled sarees with colored thread embroidery"
    ],
    interestingFact:
      "Fernand Léger and modern European modernists drew direct parallels between the volumetric shaded curves of Kalighat paintings and European Cubism!",
    unescoStatus: "Santiniketan inscribed as a UNESCO World Heritage Site (2023); Durga Puja inscribed on UNESCO Representative List of Intangible Cultural Heritage (2021)",
    representativeColor: "#e11d48",
    notableArtworks: [
      {
        id: "bengal-bharat-mata",
        title: "Bharat Mata (Mother India)",
        period: "1905 CE (Swadeshi Movement)",
        medium: "Japanese watercolor wash technique on paper",
        description: "Abanindranath Tagore's iconic portrait of Mother India depicted as a saffron-clad ascetic maiden holding four sacred gifts: food (sheaf of paddy), clothing (white cloth), learning (vedas), and spiritual devotion (japamala).",
        imageUrl: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Kolkata, Bengal",
        currentLocation: "Victoria Memorial Hall / Rabindra Bharati Society, Kolkata",
        significance: "The seminal masterwork of the Indian Nationalist Art Movement."
      },
      {
        id: "kalighat-cat-prawn",
        title: "Cat with Prawn (Kalighat Satirical Pat)",
        period: "c. 1880 - 1890 CE",
        medium: "Opaque watercolor and silver paint on paper",
        description: "Famous satire depicting a Vaishnavite ascetic hypocritically transformed into a cat sneaking a lobster, executed with bold sweeping contours and dramatic rhythmic volume.",
        imageUrl: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Kalighat Temple Environs, Kolkata",
        currentLocation: "Victoria and Albert Museum, London / National Gallery of Modern Art, New Delhi"
      }
    ]
  },
  {
    id: "rajasthan",
    name: "Mewar, Kishangarh & Marwar",
    state: "Rajasthan",
    stateGeoName: "Rajasthan",
    capitalCity: "Jaipur",
    coordinates: [74.0, 26.5],
    primaryTraditions: ["Rajasthani Miniature Painting", "Pichwai Art of Nathdwara", "Phad Painting", "Blue Pottery of Jaipur", "Bandhani Tie-Dye"],
    category: "Miniature",
    artForms: ["Miniature", "Painting", "Textile", "Folk Art"],
    historicalPeriod: "16th - 19th Century CE Golden Era",
    overview: "The jewel of Indian courtly painting, celebrated for glowing jewel pigments, lyrical romanticism, and devotional Nathdwara Pichwais.",
    description:
      "Rajasthani miniature painting blossomed across royal ateliers in Mewar, Bundi, Kota, Kishangarh, Jodhpur, and Bikaner. Flourishing with intense emotional lyricism, vibrant palettes of crushed lapis and emeralds, and glowing burnished gold leaf, these paintings visualized the celestial love of Krishna, Ragamala musical modes, Barahmasa (twelve seasons), and courtly hunting scenes.",
    historicalContext:
      "Emerging from Western Indian Jain manuscript painting traditions and influenced by Mughal court refinement, Rajput kingdoms created their own distinct aesthetics. In Kishangarh, under the devout poet-king Savant Singh (Nagari Das), master painter Nihal Chand created the ethereal beauty of 'Bani Thani'—celebrated worldwide as the 'Mona Lisa of India'. In Nathdwara, the Pushtimarg sect created colossal devotional Pichwai textile backdrops for Shrinathji.",
    culturalSignificance:
      "Rajasthani painting represents the synthesis of bhakti mysticism and royal court splendor. Each sub-school developed distinct hallmarks: Mewar for robust emotional figures, Bundi for lush jungle foliage and stormy skies, and Kishangarh for elongated lotus eyes and arched brows.",
    keyCommunitiesOrArtists: [
      "Nihal Chand (Master of Kishangarh)",
      "Sahibdin (Mewar Atelier Head)",
      "Nainsukh (Pahari-Rajput nexus)",
      "Joshi Chitrakars of Bhilwara (Phad Painting)",
      "Pichwai Artisan Guilds of Nathdwara"
    ],
    materialsAndTechniques: [
      "Handmade Vasli paper layered with conch shell primer and burnished with agate stone",
      "Pure gemstone and mineral colors: lapis lazuli (ultramarine), malachite (green), cinnabar (red), orpiment (yellow)",
      "Pure 24-karat gold and silver leaf application (Varq)",
      "Single-hair squirrel tail brushes for hairline precision"
    ],
    interestingFact:
      "To test whether a Rajasthani miniature's gold work was pure, royal patrons would hold the painting against candlelight; genuine burnished gold leaf would catch the flame with a warm, unmistakable amber glow!",
    unescoStatus: "Hill Forts of Rajasthan & Jaipur City are UNESCO World Heritage Sites",
    representativeColor: "#c026d3",
    notableArtworks: [
      {
        id: "kishangarh-bani-thani",
        title: "Radha as Bani Thani (The Indian Mona Lisa)",
        period: "c. 1750 CE (Kishangarh School)",
        medium: "Gouache, gold, and mineral pigments on burnished Vasli paper",
        description: "Nihal Chand's legendary portrait of Radha characterized by exaggerated lotus-petal eyes, sharply sculpted arched eyebrows, slender neck, delicate fingers holding lotus buds, and a translucent gold-bordered veil.",
        imageUrl: "https://images.unsplash.com/photo-1582561148419-7c87023c915f?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Kishangarh Atelier, Rajasthan",
        currentLocation: "National Museum, New Delhi",
        significance: "Universally acknowledged as the crowning jewel of Indian miniature painting."
      },
      {
        id: "pichwai-shrinathji",
        title: "Sharad Purnima Pichwai for Shrinathji",
        period: "19th Century CE (Nathdwara Tradition)",
        medium: "Natural mineral dyes and gold paint on starched cotton cloth",
        description: "Grand temple backdrop depicting Lord Krishna playing the flute under the autumn full moon, surrounded by devoted Gopis and sacred cows adorned with peacock feathers.",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Nathdwara, Rajasthan",
        currentLocation: "City Palace Museum, Udaipur"
      }
    ]
  },
  {
    id: "gujarat",
    name: "Patan, Kutch & Saurashtra",
    state: "Gujarat",
    stateGeoName: "Gujarat",
    capitalCity: "Gandhinagar",
    coordinates: [71.5, 22.5],
    primaryTraditions: ["Patan Double-Ikat Patola", "Rogan Art of Nirona", "Pithora Ritual Painting", "Kutch Lippan Mud-Mirror Art", "Bandhani & Ajrakh Block Print"],
    category: "Textile",
    artForms: ["Textile", "Folk Art", "Painting", "Architecture"],
    historicalPeriod: "11th Century CE (Solanki Dynasty) to Present Day",
    overview: "Home to the world's most intricate double-ikat textiles, sacred tribal Pithora murals, and rare castor oil Rogan art.",
    description:
      "Gujarat is a global textile and folk art capital. Patan Patola represents the absolute pinnacle of double-ikat silk weaving, where both warp and weft yarns are individually tie-dyed with mathematical precision before weaving. In the arid plains of Kutch, artisans preserve ancient crafts like Rogan painting (boiled castor oil paste applied with metal stylus) and Lippan Kaam (mud-and-mirror relief murals). In eastern tribal belts, the Rathwa community paints sacred Pithora murals to honor their ancestral deities.",
    historicalContext:
      "In the 12th century, King Kumarpala of the Solanki dynasty invited 700 master Salvi weavers from Maharashtra and Karnataka to settle in Patan to create auspicious Patola drapes for daily temple rituals. A single authentic Patola saree takes 6 months to a year to weave and lasts over 300 years without fading.",
    culturalSignificance:
      "A famous Gujarati proverb honors the indestructible endurance of Patola: 'Padi Patole Bhaat, Phate Pan Fitey Nahi' (The design imprinted on a Patola may tear with age, but its color and brilliance shall never fade).",
    keyCommunitiesOrArtists: [
      "Salvi Master Weavers of Patan",
      "Khatri Abdul Gafur & Family (Rogan Art, Padma Shri)",
      "Rathwa Tribal Pithoro Painters (Chhota Udepur)",
      "Rabari & Meghwal Embroiderers of Kutch"
    ],
    materialsAndTechniques: [
      "Patan Patola: Mulberry silk warp and weft dyed up to 8 times with pomegranate, madder, turmeric, and marigold",
      "Rogan Art: Boiled castor seed oil reduced over two days into sticky paste mixed with mineral pigments, drawn freehand with brass stylus on fabric",
      "Lippan: Clay, camel dung binder, and small convex glass mirrors (Aabhla)",
      "Ajrakh: Resist printing using natural indigo, harda, and iron acetate"
    ],
    interestingFact:
      "Only a single family in the remote village of Nirona, Kutch—the Khatri family—preserves the 400-year-old art of freehand Rogan painting on earth today!",
    unescoStatus: "Rani ki Vav (The Queen's Stepwell) in Patan is a UNESCO World Heritage Site (2014)",
    representativeColor: "#0d9488",
    notableArtworks: [
      {
        id: "patan-patola-saree",
        title: "Navratna Chhabdi Patan Patola Silk",
        period: "12th Century Tradition Continuum",
        medium: "Pure Mulberry silk hand-dyed with natural madder, indigo, and turmeric via double-ikat",
        description: "Intricate grid of geometric baskets of flowers (Chhabdi), parrots, elephants, and dancing girls identical on both sides of the silk fabric.",
        imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Salvi Wad, Patan",
        currentLocation: "Patan Patola Heritage Museum / Calico Museum of Textiles, Ahmedabad",
        significance: "Considered the most complex and mathematically rigorous textile weaving technique in the world."
      },
      {
        id: "kutch-rogan-tree",
        title: "Rogan Tree of Life",
        period: "Contemporary Masterpiece",
        medium: "Boiled castor oil pigment paste manipulated with brass rod on silk",
        description: "Symmetrical Tree of Life motif filled with delicate floral scrolls, created by mirroring wet pigment across the folded fabric.",
        imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Nirona Village, Kutch",
        currentLocation: "Presented as official state gift to foreign heads of state by the Prime Minister of India"
      }
    ]
  },
  {
    id: "madhya-pradesh",
    name: "Gondwana & Khajuraho Heartland",
    state: "Madhya Pradesh",
    stateGeoName: "Madhya Pradesh",
    capitalCity: "Bhopal",
    coordinates: [78.6, 23.4],
    primaryTraditions: ["Gond Tribal Art", "Bhimbetka Prehistoric Rock Art", "Khajuraho Nagara Temple Sculpture", "Bagh Block Print", "Chanderi Weaving"],
    category: "Folk Art",
    artForms: ["Folk Art", "Sculpture", "Architecture", "Painting", "Textile"],
    historicalPeriod: "10,000 BCE (Bhimbetka); 10th - 11th Century CE (Chandela Khajuraho); Modern Gond Revival",
    overview: "Heartland of India's oldest rock art shelters, sensuous Chandela temple sculptures, and the mesmerizing dot-and-line cosmos of Gond artists.",
    description:
      "Madhya Pradesh spans 10,000 years of visual culture—from the prehistoric hunting paintings of Bhimbetka caves to the exquisite stone relief work of Khajuraho's Chandela temples, and the vibrant modern idiom of Gond art. Gond painting is rooted in the belief that 'looking at a good image begets good luck' (Akharbhav), filling tree, animal, and ancestral spirits with intricate signature pattern fills (dots, dashes, fish scales, and droplets).",
    historicalContext:
      "Historically, Gond Pradhan bards sung epics of the Gond kingdom and painted sacred Digna floor designs. In the 1980s, modern artist J. Swaminathan discovered the prodigious talent of 17-year-old Jangarh Singh Shyam in the village of Patangarh and invited him to Bharat Bhavan in Bhopal. Jangarh created an unprecedented contemporary tribal art movement known as 'Jangarh Kalam', exhibiting in Paris, Tokyo, and London.",
    culturalSignificance:
      "Gond art visualizes the profound animistic worldview of tribal India, where every tree (Mahua, Saja), river, tiger, and bird possesses a sentient spirit and cosmic interconnectedness.",
    keyCommunitiesOrArtists: [
      "Jangarh Singh Shyam (Pioneer of Jangarh Kalam)",
      "Bhajju Shyam (Padma Shri)",
      "Venkat Raman Singh Shyam",
      "Durga Bai Vyam (Padma Shri)",
      "Chandela Master Sculptors (Khajuraho)"
    ],
    materialsAndTechniques: [
      "Prehistoric Bhimbetka: Hematite red iron ore, manganese black, white limestone, animal fat binders",
      "Traditional Gond: Chuna (limestone), Geru (red earth), yellow Ramraj clay, black charcoal, cow-dung paste",
      "Modern Gond: Fine acrylic and ink pens on archival paper, canvas, and murals",
      "Khajuraho: Warm buff sandstone carved with deep undercut reliefs"
    ],
    interestingFact:
      "Every master Gond painter invents their own unique personal pattern signature—one artist uses drops of water, another fish scales, another woven grain lines—so an expert can immediately identify the painter without looking at the name!",
    unescoStatus: "Bhimbetka Rock Shelters (2003), Khajuraho Group of Monuments (1986), and Buddhist Monuments at Sanchi (1989) are UNESCO World Heritage Sites",
    representativeColor: "#ea580c",
    notableArtworks: [
      {
        id: "gond-tree-spirits",
        title: "The Mahua Tree of Life & Forest Spirits",
        period: "Jangarh Kalam Contemporary Era",
        medium: "Acrylic and archival ink on handmade canvas",
        description: "Luminous intertwining Mahua branches sheltering birds, flying deer, and forest spirits rendered with thousands of rhythmic colored dots and micro-lines.",
        imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Patangarh / Bhopal",
        currentLocation: "Bharat Bhavan, Bhopal / National Gallery of Modern Art, New Delhi",
        significance: "Iconic representation of the living animist cosmology of Gondwana."
      },
      {
        id: "khajuraho-kandariya",
        title: "Kandariya Mahadeva Temple Sculptures",
        period: "c. 1025 - 1050 CE (Chandela Dynasty)",
        medium: "Sandstone high-relief architectural sculpture",
        description: "Towering shikhara resembling Mount Meru, adorned with over 800 celestial figures, celestial apsaras applying kohl, and intricate iconographic panels.",
        imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Khajuraho, Chhatarpur District",
        currentLocation: "Khajuraho World Heritage Site"
      }
    ]
  },
  {
    id: "karnataka",
    name: "Mysore & Vijayanagara Heritage",
    state: "Karnataka",
    stateGeoName: "Karnataka",
    capitalCity: "Bengaluru",
    coordinates: [76.65, 12.3],
    primaryTraditions: ["Mysore Traditional Painting", "Hampi Vijayanagara Architecture", "Hoysala Stone Carvings (Belur/Halebidu)", "Channapatna Lacquer Craft", "Ilkal & Mysore Silk"],
    category: "Painting",
    artForms: ["Painting", "Architecture", "Sculpture", "Textile"],
    historicalPeriod: "14th - 16th Century CE (Vijayanagara); 18th - 19th Century CE (Wodeyar Mysore Renaissance)",
    overview: "Famous for subtle gold-foil gesso paintings, delicate Hoysala soapstone filigree, and royal Vijayanagara monumental architecture.",
    description:
      "Karnataka's visual heritage bridges the architectural marvels of Hampi and the delicate refinement of Mysore classical painting. Mysore paintings are characterized by their muted, elegant color tones, expressive eyes, and subtle 'Gesso' relief work overlaid with pure 24-karat gold leaf (thinner and less raised than Thanjavur art).",
    historicalContext:
      "Following the fall of the Vijayanagara Empire after the Battle of Talikota (1565), royal artists migrated to Mysore under the patronage of Raja Wodeyar I and later the great ruler Mummadi Krishnaraja Wodeyar III (1794–1868), who authored the encyclopedic treatise 'Sritattvanidhi' detailing Hindu iconographic canons.",
    culturalSignificance:
      "Mysore painting emphasizes spiritual intimacy, lyrical calmness (Shanta Rasa), and naturalistic facial anatomy, depicting Ganesha, Rajarajeshwari, and scenes from the Bhagavata Purana.",
    keyCommunitiesOrArtists: [
      "Mummadi Krishnaraja Wodeyar III (Patron and Scholar-King)",
      "Y. Subramanya Raju",
      "Hoysala Master Sculptor Jakanachari",
      "Mysore Chitragar Guilds"
    ],
    materialsAndTechniques: [
      "Gesso paste made from zinc oxide (white lead) and pure gum arabic (Makku)",
      "Pure thin 24K gold foil pressed gently onto dried gesso embossing",
      "Smooth paper on wood board treated with tamarind-seed paste and chalk",
      "Chloritic schist (soapstone) for Hoysala filigree carvings"
    ],
    interestingFact:
      "Unlike Tanjore paintings which use bold raised plaster and colored glass gems, classical Mysore paintings use very low, subtle gesso relief and watercolor tones, giving them a much more delicate, aristocratic look under natural light.",
    unescoStatus: "Group of Monuments at Hampi (1986), Pattadakal (1987), and Sacred Ensembles of the Hoysalas (Belur, Halebidu, Somanathapura - Inscribed 2023) are UNESCO World Heritage Sites",
    representativeColor: "#8b5cf6",
    notableArtworks: [
      {
        id: "mysore-rajarajeshwari",
        title: "Goddess Sri Rajarajeshwari Mysore Painting",
        period: "19th Century Wodeyar Court Era",
        medium: "24K pure gold foil, gesso relief, and watercolor on board",
        description: "Serene four-armed goddess seated on a lotus throne, holding sugarcane bow, flower arrows, noose, and goad, crowned with gilded gesso tiaras and intricate drapery.",
        imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Mysore Royal Atelier",
        currentLocation: "Jaganmohan Palace Art Gallery, Mysore",
        significance: "Exemplifies the sublime spiritual refinement and gesso technique of the Mysore school."
      },
      {
        id: "hampi-stone-chariot",
        title: "Stone Chariot of Vittala Temple, Hampi",
        period: "16th Century CE (Vijayanagara Empire / King Krishnadevaraya)",
        medium: "Granite monolithic architectural shrine",
        description: "Ornate Garuda shrine sculpted in the form of an imperial processional chariot with revolving wheels and intricately carved elephant statues.",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Hampi, Vijayanagara",
        currentLocation: "Vittala Temple Complex, Hampi World Heritage Site"
      }
    ]
  },
  {
    id: "andhra-pradesh",
    name: "Srikalahasti & Machilipatnam",
    state: "Andhra Pradesh & Telangana",
    stateGeoName: "Andhra Pradesh",
    capitalCity: "Amaravati / Hyderabad",
    coordinates: [79.7, 13.75],
    primaryTraditions: ["Kalamkari Painting (Srikalahasti & Machilipatnam)", "Lepakshi Murals & Sculpture", "Kondapalli Wooden Toys", "Bidriware of Hyderabad/Telangana", "Pochampally Ikat"],
    category: "Textile",
    artForms: ["Textile", "Painting", "Mural", "Folk Art"],
    historicalPeriod: "11th Century CE (Chola/Vijayanagara) to 17th Century Golconda Sultanate",
    overview: "Home to ancient freehand pen-and-dye Kalamkari temple scrolls and the sublime 16th-century murals of Lepakshi.",
    description:
      "Kalamkari (from Persian 'Kalam' meaning pen and 'Kari' meaning craftsmanship) is an exquisite ancient textile art practiced in two distinctive traditions: the freehand spiritual temple hangings drawn with bamboo pens at Srikalahasti, and the carved wooden block-printed decorative patterns of Machilipatnam on the Coromandel coast.",
    historicalContext:
      "In ancient times, groups of wandering bards, storytellers, and musicians called 'Chitrakattis' traveled between villages illustrating Hindu epics using large fabric scrolls dyed with forest plants. The art received royal patronage from the Vijayanagara kings and later the Golconda Sultans, who exported magnificent 'Chintz' Kalamkari textiles across Europe and Persia.",
    culturalSignificance:
      "Srikalahasti Kalamkari is one of the few textile traditions where every single line, face, and narrative panel is drawn entirely freehand with a bamboo stylus, requiring up to 23 distinct washing, bleaching, mordanting, and natural dyeing stages with river water.",
    keyCommunitiesOrArtists: [
      "Gurappa Chetty (Padma Shri)",
      "J. Niranjan",
      "Srikalahasti Master Kalamkari Guilds",
      "Machilipatnam Block Carvers",
      "Lepakshi Virupanna Artisans"
    ],
    materialsAndTechniques: [
      "Pointed bamboo kalam fitted with felt/wool reservoir to hold natural dyes",
      "Bleaching with buffalo milk and Myrobalan (Karakkai) nut extract",
      "Dyes: fermented jaggery and iron scrap (black Kasimi), madder root (red), indigo (blue), pomegranate rind (yellow)",
      "Washed repeatedly in the flowing natural minerals of the Swarnamukhi River"
    ],
    interestingFact:
      "Buffalo milk is an essential ingredient in Kalamkari: the natural fat in buffalo milk prevents the vegetable dye from bleeding through the porous cotton canvas when drawn with the bamboo pen!",
    unescoStatus: "Monuments of Srikalahasti, Lepakshi, and Ramappa Temple (UNESCO World Heritage Inscribed 2021) represent regional architectural heights",
    representativeColor: "#065f46",
    notableArtworks: [
      {
        id: "kalamkari-tree-of-life",
        title: "Tree of Life Srikalahasti Kalamkari",
        period: "Traditional Sacred Scroll Masterwork",
        medium: "Natural plant and mineral dyes applied with bamboo pen on handloom cotton",
        description: "Expansive cosmic tree teeming with blooming lotuses, peacocks, deer, and singing birds, rooted in sacred waters surrounded by Ramayana narrative episodes.",
        imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Srikalahasti, Tirupati District",
        currentLocation: "Victoria and Albert Museum, London / National Crafts Museum, New Delhi",
        significance: "The definitive masterpiece of Indian freehand natural-dye pen art."
      },
      {
        id: "lepakshi-ceiling-mural",
        title: "Veerabhadra Temple Ceiling Murals",
        period: "1530 - 1540 CE (Vijayanagara Empire)",
        medium: "Natural mineral fresco on temple ceiling plaster",
        description: "Monumental ceiling fresco depicting the legend of Kiratarjuniya and the coronation of Prince Manunitikanda Chola, showing intricate textile patterns and profile figures.",
        imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Lepakshi, Sri Sathya Sai District",
        currentLocation: "Veerabhadra Temple Ceiling, Lepakshi"
      }
    ]
  },
  {
    id: "kerala",
    name: "Cochin, Padmanabhapuram & Malabar",
    state: "Kerala",
    stateGeoName: "Kerala",
    capitalCity: "Thiruvananthapuram",
    coordinates: [76.27, 9.93],
    primaryTraditions: ["Kerala Temple Murals (Chitra Kala)", "Theyyam Ritual Art & Masks", "Aranmula Metal Mirror", "Kathakali Vesham Makeup & Headgear", "Kasavu Weaving"],
    category: "Mural",
    artForms: ["Mural", "Painting", "Folk Art", "Sculpture"],
    historicalPeriod: "8th - 18th Century CE Golden Age",
    overview: "Distinguished by grand, vibrant temple frescoes painted in the sacred Panchavarna five-color scheme with expressive curved forms.",
    description:
      "Kerala mural painting is one of the world's great fresco traditions, adorning the interior walls of ancient temples, churches, and royal palaces (such as Mattancherry Palace in Kochi and Padmanabhapuram Palace). The murals are characterized by stylized dynamic postures, elaborate hair ornaments, large evocative eyes, and strict adherence to the Panchavarna (five sacred natural colors: red, yellow, green, black, white).",
    historicalContext:
      "Derived from the classical Sanskrit text 'Tantra Samuccaya' and 'Chithrasoothram', Kerala murals reached their peak between the 14th and 18th centuries under the Zamorins of Calicut and the Travancore Maharajas. After a devastating fire destroyed murals in Guruvayur in 1970, the Guruvayur Devaswom founded the Institute of Mural Painting to train young masters in this sacred lineage.",
    culturalSignificance:
      "The murals depict iconic Puranic scenes—the Anantasayana Vishnu, Nataraja, Gajendra Moksha, and Venu Gopala—infusing deep spiritual dynamism, theatrical grace, and organic unity with tropical Kerala architecture.",
    keyCommunitiesOrArtists: [
      "Mammiyoor Krishnankutty Nair (Master Revitalist)",
      "K.K. Warrier",
      "Guruvayur Mural Institute Masters",
      "Traditional Asari and Vaniya Artisan Guilds"
    ],
    materialsAndTechniques: [
      "Wall preparation: 3 to 5 layers of lime plaster mixed with tender coconut water and sand",
      "Panchavarna pigments: Yellow ochre and Red ochre (crushed laterite rock), Green (Eravikkara leaf juice), White (ground sea shells), Black (soot from sesame oil lamps)",
      "Brushes made from feather quills, animal hair, and dried grasses (Koorcha)"
    ],
    interestingFact:
      "In classical Kerala murals, deities are colored according to their spiritual nature (Gunas): Sattvic divine beings in serene green, Rajasic heroic beings in luminous gold/red, and Tamasic beings in black/white!",
    unescoStatus: "Mattancherry Palace is on the UNESCO World Heritage Tentative List; Theyyam & Kathakali are celebrated elements of Indian intangible cultural heritage",
    representativeColor: "#15803d",
    notableArtworks: [
      {
        id: "kerala-gajendra-moksha",
        title: "Gajendra Moksha Mural",
        period: "Early 18th Century CE (Travancore Royal Court)",
        medium: "Panchavarna mineral and herbal pigments on lime-plaster wall",
        description: "Massive 3-meter wall painting depicting Lord Vishnu on Garuda descending to rescue the elephant king Gajendra from the crocodile, filled with celestial gods, rishis, and aquatic flora.",
        imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Krishnapuram Palace, Kayamkulam",
        currentLocation: "Krishnapuram Palace Museum",
        significance: "The largest single surviving mural panel in Kerala art history."
      },
      {
        id: "kerala-mattancherry-ramayana",
        title: "Ramayana Scenes at Mattancherry Palace",
        period: "16th - 17th Century CE",
        medium: "Natural fresco-secco on wall",
        description: "Vibrant narrative cycles depicting the coronation of Rama, lively forest scenes, and multi-armed deities in the royal bedchamber.",
        imageUrl: "https://images.unsplash.com/photo-1582561148419-7c87023c915f?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Mattancherry Palace (Dutch Palace), Kochi",
        currentLocation: "Mattancherry Palace, Kochi"
      }
    ]
  },
  {
    id: "kashmir",
    name: "Kashmir Valley & Ladakh Foothills",
    state: "Jammu & Kashmir",
    stateGeoName: "Jammu and Kashmir",
    capitalCity: "Srinagar",
    coordinates: [74.8, 34.1],
    primaryTraditions: ["Kashmiri Papier-Mâché", "Kani Pashmina Shawls", "Walnut Wood Carving", "Kashmir Miniature & Calligraphy", "Basohli Painting Nexus"],
    category: "Folk Art",
    artForms: ["Folk Art", "Textile", "Miniature", "Sculpture"],
    historicalPeriod: "14th Century CE (Sultan Zain-ul-Abidin) to 19th Century",
    overview: "World-renowned for delicate gold-burnished papier-mâché, intricately woven Kani shawls, and exquisite floral Naqqashi painting.",
    description:
      "Kashmir holds a magnificent synthesis of Central Asian, Persian, and Himalayan artistic traditions. Kashmiri Papier-Mâché is a delicate decorative craft introduced in the 14th century, where discarded paper pulp is molded, smoothed with baked clay, and exquisitely hand-painted with Hazara (thousand flowers), Gul-andar-gul (flower within flower), and chinar leaf patterns overlaid with real gold illumination.",
    historicalContext:
      "Sultan Zain-ul-Abidin ('Budshah', 1420–1470 CE) invited master artists, carpet weavers, and lacquer artisans from Samarkand and Persia to settle in the Kashmir valley. The neighboring Jammu hills also birthed the fiery, passionate Basohli and Jammu schools of Pahari painting, famous for glowing beetle-wing inlays.",
    culturalSignificance:
      "Kashmiri art celebrates the breathtaking natural paradise of the valley—almond blossoms, irises, nightingales, and Chinar autumn foliage—transforming domestic objects into museum-grade decorative masterworks.",
    keyCommunitiesOrArtists: [
      "Sultan Zain-ul-Abidin (Father of Kashmiri Craft Guilds)",
      "Mir Sayyid Ali Hamadani",
      "Kashmiri Naqqash (Master Painters) Guild of Srinagar",
      "Kani Weaving Masters of Kanihama"
    ],
    materialsAndTechniques: [
      "Sakhtsazi (molding paper pulp layered with rice glue) and Naqqashi (fine miniature painting)",
      "Safeda (white zinc), Zanghar (verdigris green), gold foil leaf burnished with agate stone",
      "Kani Pashmina: Fine mountain goat underfleece hand-woven with wooden eyeless spools (Tujis)",
      "Carved seasoned Himalayan walnut timber"
    ],
    interestingFact:
      "In imperial France, Empress Joséphine (wife of Napoleon Bonaparte) owned over 400 Kashmiri Pashmina Kani shawls, making them the ultimate global fashion symbol across 19th-century royal Europe!",
    unescoStatus: "Srinagar was designated a UNESCO Creative City of Crafts and Folk Arts in 2021",
    representativeColor: "#0284c7",
    notableArtworks: [
      {
        id: "kashmir-papier-mache-samovar",
        title: "Imperial Hazara Papier-Mâché Box",
        period: "18th - 19th Century CE",
        medium: "Burnished paper pulp, lacquer, natural minerals, and 24K gold foil",
        description: "Dense miniature tapestry of 'thousand flowers' (Hazara) and singing bulbul birds intertwining across gilded lacquer surfaces.",
        imageUrl: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Srinagar, Kashmir Valley",
        currentLocation: "Sri Pratap Singh (SPS) Museum, Srinagar / Victoria and Albert Museum, London",
        significance: "The epitome of Indo-Persian decorative perfection."
      },
      {
        id: "basohli-rasamanjari",
        title: "Basohli Rasamanjari Miniature",
        period: "c. 1690 - 1700 CE (Devidasa of Basohli)",
        medium: "Opaque gouache, gold, and iridescent beetle wing cases on paper",
        description: "Passionate depiction of hero and heroine with large expressive eyes, intense yellow backgrounds, and genuine emerald-green beetle wings mimicking jewelry.",
        imageUrl: "https://images.unsplash.com/photo-1582561148419-7c87023c915f?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Basohli, Jammu Region",
        currentLocation: "National Museum, New Delhi / Dogra Art Museum, Jammu"
      }
    ]
  },
  {
    id: "himachal-pradesh",
    name: "Kangra & Chamba Valley",
    state: "Himachal Pradesh",
    stateGeoName: "Himachal Pradesh",
    capitalCity: "Shimla",
    coordinates: [76.27, 32.1],
    primaryTraditions: ["Kangra Pahari Miniature Painting", "Chamba Rumal Embroidery", "Kullu Shawls", "Kinnauri Wood Carving"],
    category: "Miniature",
    artForms: ["Miniature", "Painting", "Textile", "Folk Art"],
    historicalPeriod: "18th - 19th Century CE",
    overview: "The most delicate and lyrical school of Indian miniature painting, characterized by verdant Himalayan landscapes and tender devotional love.",
    description:
      "Kangra miniature painting represents the romantic pinnacle of Pahari (mountain) art. Emerging in the tranquil shadow of the Dhauladhar range, Kangra paintings are renowned for their poetic softness, porcelain-like facial contours, gentle flowing lines, and lush landscape backdrops celebrating the divine romance of Radha and Krishna.",
    historicalContext:
      "Following the sack of Delhi by Nadir Shah in 1739, Mughal court-trained master artists like Pandit Seu and his brilliant sons Nainsukh and Manaku sought refuge in the Himalayan hill states of Guler and Kangra under the enlightened patronage of Raja Sansar Chand (1765–1823).",
    culturalSignificance:
      "Kangra art immortalized classical Sanskrit and Hindi love poetry—Jayadeva's 'Gita Govinda', Keshavdas's 'Rasikapriya', and Bihari's 'Satsai'—transforming hill landscape topography into celestial Vrindavan groves.",
    keyCommunitiesOrArtists: [
      "Nainsukh of Guler",
      "Manaku of Guler",
      "Pandit Seu",
      "Raja Sansar Chand of Kangra (Royal Patron)",
      "Chamba Royal Embroidery Guilds"
    ],
    materialsAndTechniques: [
      "Sialkoti handmade paper polished with agate stone",
      "Natural organic colors: saffron, lapis lazuli, crushed pearl powder (Mukta), verdigris green",
      "Chamba Rumal: Double-sided satin stitch (Dorukha) making both sides of the silk embroidery identical",
      "Single-hair brush linework"
    ],
    interestingFact:
      "Chamba Rumal embroidery is often called 'needle painting' (Kalam-Tuli Ki Sui) because royal miniature painters drew the outlines with fine brushes before noblewomen stitched them with untwisted silk floss!",
    unescoStatus: "Great Himalayan National Park Conservation Area is a UNESCO World Heritage Site",
    representativeColor: "#6366f1",
    notableArtworks: [
      {
        id: "kangra-radha-krishna",
        title: "Radha Krishna in the Rain (Kangra Gita Govinda)",
        period: "c. 1780 CE (Atelier of Manaku and Nainsukh)",
        medium: "Gouache and gold leaf on burnished paper",
        description: "Krishna sheltering Radha under a black blanket as lightning flashes across dark monsoon clouds above the lush green banks of the Yamuna River.",
        imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Kangra Fort Atelier",
        currentLocation: "National Museum, New Delhi / Bharat Kala Bhavan, Varanasi",
        significance: "Celebrated as the most emotionally tender and lyrical miniature in Indian art history."
      }
    ]
  },
  {
    id: "assam",
    name: "Majuli & Brahmaputra Valley",
    state: "Assam",
    stateGeoName: "Assam",
    capitalCity: "Dispur",
    coordinates: [94.16, 26.95],
    primaryTraditions: ["Majuli Satra Mask Making (Mukha Shilpa)", "Muga & Eri Golden Silk Weaving", "Sanchi Bark Manuscript Painting", "Assam Bell Metal Craft"],
    category: "Folk Art",
    artForms: ["Folk Art", "Textile", "Painting", "Sculpture"],
    historicalPeriod: "15th - 16th Century CE (Neo-Vaishnavite Renaissance)",
    overview: "Center of traditional bamboo-and-clay dramatic masks of Majuli Island, naturally golden Muga silk, and ancient Sanchi bark manuscripts.",
    description:
      "Assam's rich artistic landscape is anchored in the Vaishnavite monasteries (Satras) of Majuli, the world's largest river island. The mask-making tradition of Samaguri Satra produces lightweight theatrical masks of demons, gods, and mythological beasts used in Bhaona religious dance-dramas, made from indigenous bamboo frames, cane, mud, cow-dung, and natural vegetable pigments.",
    historicalContext:
      "The polymath saint, poet, and artist Srimanta Sankardev (1449–1568 CE) founded the Neo-Vaishnavite movement in Assam. To teach epics to villagers, he innovated Bhaona theater, Ankiya Naat plays, and the Vrindavani Vastra—a colossal 16th-century woven silk tapestry depicting Krishna's childhood.",
    culturalSignificance:
      "Muga silk—the naturally shimmering golden silk produced only in Assam by the wild silkworm Antheraea assamensis—is an indestructible royal textile that becomes glossier with every hand wash.",
    keyCommunitiesOrArtists: [
      "Srimanta Sankardev (15th Century Polymath & Artist)",
      "Dr. Hem Chandra Goswami (Padma Shri, Samaguri Satra)",
      "Sualkuchi Silk Master Weavers",
      "Sarthebari Bell Metal Smiths"
    ],
    materialsAndTechniques: [
      "Masks: Split bamboo framework, cane, clay from the Brahmaputra riverbed, cow-dung, jute fibers",
      "Colors: Hengul (red cinnabar), Haital (yellow orpiment), Dhalmati (white clay), and lamp soot",
      "Muga Silk: Handspun wild golden silk woven on traditional throw-shuttle looms",
      "Sanchi Pat: Treated inner bark of the Aquilaria agallocha (agarwood) tree"
    ],
    interestingFact:
      "The colossal 'Vrindavani Vastra' tapestry woven under Sankardev's direct supervision in 1565 CE was preserved for centuries in Tibet and is now housed in the British Museum in London as one of Asia's rarest historical silks!",
    unescoStatus: "Kaziranga and Manas are UNESCO World Heritage Sites; Majuli is nominated on the UNESCO Tentative List",
    representativeColor: "#d97706",
    notableArtworks: [
      {
        id: "majuli-ravana-mask",
        title: "Ten-Headed Ravana Mukha (Majuli Theatrical Mask)",
        period: "Contemporary Satriya Tradition Masterwork",
        medium: "Woven bamboo frame, river clay, jute fibers, cow dung, and natural Hengul-Haital pigments",
        description: "Towering dynamic theatrical mask featuring articulated moving jaws and expressive fiery eyes worn by dancers in traditional Bhaona performances.",
        imageUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Samaguri Satra, Majuli Island",
        currentLocation: "Samaguri Satra Heritage Museum / Indira Gandhi Rashtriya Manav Sangrahalaya, Bhopal",
        significance: "The definitive living heritage of Assamese theatrical sculpture."
      }
    ]
  },
  {
    id: "ladakh",
    name: "Ladakh Monastic Valleys",
    state: "Ladakh",
    stateGeoName: "Jammu and Kashmir",
    capitalCity: "Leh",
    coordinates: [77.58, 34.15],
    primaryTraditions: ["Thangka Buddhist Silk Paintings", "Alchi & Hemis Monastic Murals", "Tibetan Sand Mandalas", "Ladakhi Metalwork & Prayer Wheels"],
    category: "Painting",
    artForms: ["Painting", "Mural", "Textile", "Sculpture"],
    historicalPeriod: "10th - 11th Century CE (Lotsawa Rinchen Zangpo) to Present",
    overview: "Ancient Himalayan Buddhist scroll paintings (Thangkas) and 1000-year-old Kashmiri-influenced Buddhist wall murals preserved in high-altitude monasteries.",
    description:
      "Perched on the high Himalayan plateau, Ladakh preserves some of the world's most pristine Buddhist art. Thangkas are sacred silk scroll paintings mounted on Chinese brocades depicting Buddhas, Bodhisattvas, and cosmological mandalas. The 11th-century frescoes of Alchi monastery are unique for blending classical Kashmiri artistry with Vajrayana Buddhist iconography.",
    historicalContext:
      "During the Second Diffusion of Buddhism (10th–11th century), the Great Translator Lotsawa Rinchen Zangpo brought 32 Kashmiri master artists to build and paint 108 monasteries across Western Tibet and Ladakh, including Alchi Choskor.",
    culturalSignificance:
      "Thangkas are not mere artistic objects; they serve as visual meditation guides (Yantras) following precise mathematical proportions laid down in sacred iconometric treatises.",
    keyCommunitiesOrArtists: [
      "Lotsawa Rinchen Zangpo (10th Century Scholar-Patron)",
      "Traditional Lharip (Monastic Thangka Master Painters)",
      "Hemis & Thiksey Monastic Guilds"
    ],
    materialsAndTechniques: [
      "Cotton canvas stretched on wooden frame and primed with yak-skin glue and chalk paste",
      "Mineral colors: lapis lazuli, malachite green, cinnabar vermillion, gold leaf powder (Ser-chhyag)",
      "Framed in precious silk brocades and consecrated with sacred mantras"
    ],
    interestingFact:
      "The giant silk Thangka of Guru Padmasambhava at Hemis Monastery is unfurled to the public only once every 12 years during the Monkey Year of the Tibetan calendar, stretching over four stories high!",
    unescoStatus: "Alchi Monastery complex is on India's Tentative List for UNESCO World Heritage",
    representativeColor: "#f59e0b",
    notableArtworks: [
      {
        id: "ladakh-green-tara-thangka",
        title: "Sacred Green Tara (Shyama Tara) Thangka",
        period: "17th - 18th Century CE",
        medium: "Mineral pigments and pure gold powder on cotton framed in Chinese silk brocade",
        description: "The goddess of swift compassion seated with right foot extended on a lotus flower, holding night lotuses, surrounded by 21 emanations of Tara.",
        imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Thiksey Monastery, Ladakh",
        currentLocation: "Hemis Monastic Museum / Leh Central Institute of Buddhist Studies"
      }
    ]
  },
  {
    id: "uttar-pradesh",
    name: "Mathura, Varanasi & Lucknow",
    state: "Uttar Pradesh",
    stateGeoName: "Uttar Pradesh",
    capitalCity: "Lucknow",
    coordinates: [80.94, 26.85],
    primaryTraditions: ["Mughal Imperial Miniature Painting", "Mathura School of Sculpture", "Banarasi Zari Silk Weaving", "Lucknow Chikankari Embroidery", "Agra Marble Pietra Dura (Parchin Kari)"],
    category: "Architecture",
    artForms: ["Architecture", "Sculpture", "Painting", "Textile"],
    historicalPeriod: "2nd Century BCE (Mathura); 16th - 17th Century CE (Mughal Golden Age)",
    overview: "Cradle of classical red sandstone sculpture at Mathura, imperial Mughal architecture and miniatures, and luminous Banarasi brocades.",
    description:
      "Uttar Pradesh is the monumental crossroads of Indian artistic synthesis. The ancient Mathura School of the Kushana period sculpted the earliest human icons of the Buddha and Hindu deities in spotted red sandstone. Later under Emperor Akbar, Jahangir, and Shah Jahan, the Mughal atelier fused Persian, Indian, and European traditions into naturalistic court miniatures and architectural wonders like the Taj Mahal with intricate floral marble inlay (Pietra Dura).",
    historicalContext:
      "Emperor Akbar established the imperial Tasvir Khana with over a hundred Hindu and Muslim master painters led by Mir Sayyid Ali and Abd al-Samad. Together they produced monumental illustrated manuscripts including the Hamzanama, Akbarnama, and Razmnama.",
    culturalSignificance:
      "From the delicate white shadow embroidery of Lucknow Chikankari to the gold brocades of Varanasi (Kinkhwab) and the botanical marble inlays of Agra, Uttar Pradesh represents the pinnacle of royal court craftsmanship.",
    keyCommunitiesOrArtists: [
      "Ustad Mansur (Jahangir's Master of Flora & Fauna)",
      "Basawan & Daswanth (Akbar's Chief Masters)",
      "Bichitr & Govardhan",
      "Kushana Master Sculptors of Mathura",
      "Banarasi Zari Master Weavers"
    ],
    materialsAndTechniques: [
      "Spotted red Sikri sandstone and pristine white Makrana marble",
      "Pietra Dura (Parchin Kari): Inlaying semi-precious lapis, carnelian, jasper, and turquoise into carved marble",
      "Banarasi: Pure silk with silver and gold alloy Zari threads",
      "Mughal Gouache: Layered opaque mineral pigments with burnishing"
    ],
    interestingFact:
      "Ustad Mansur, court artist to Mughal Emperor Jahangir, painted the world's first accurate color scientific illustrations of the Dodo bird and the Siberian Crane in the early 17th century!",
    unescoStatus: "Taj Mahal, Agra Fort, and Fatehpur Sikri are UNESCO World Heritage Sites",
    representativeColor: "#0284c7",
    notableArtworks: [
      {
        id: "mughal-mansur-peacock",
        title: "Peacock and Flora Miniature by Ustad Mansur",
        period: "c. 1610 - 1620 CE (Reign of Jahangir)",
        medium: "Opaque watercolor and gold on paper",
        description: "Astonishingly lifelike anatomical study of a peacock with iridescent plumage standing amid delicate wild irises and butterflies, framed by illuminated floral borders.",
        imageUrl: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Imperial Atelier, Agra",
        currentLocation: "National Museum, New Delhi / Victoria and Albert Museum, London",
        significance: "The supreme masterpiece of Mughal natural history painting."
      },
      {
        id: "mathura-standing-buddha",
        title: "Standing Buddha of Mathura",
        period: "5th Century CE (Gupta Empire)",
        medium: "Red sandstone carving",
        description: "Sublime standing Buddha with diaphanous wet-drapery robes, radiating carved halo with lotus rosettes, and inward-looking meditative expression.",
        imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Mathura Atelier",
        currentLocation: "Mathura Museum / Rashtrapati Bhavan, New Delhi"
      }
    ]
  },
  {
    id: "chhattisgarh",
    name: "Bastar Tribal Heartland",
    state: "Chhattisgarh",
    stateGeoName: "Chhattisgarh",
    capitalCity: "Raipur",
    coordinates: [81.8, 19.1],
    primaryTraditions: ["Bastar Dhokra (Lost-Wax Bell Metal)", "Bastar Wrought Iron Craft (Loha Shilp)", "Bastar Terracotta & Wood Carving", "Kosa Silk Weaving"],
    category: "Sculpture",
    artForms: ["Sculpture", "Folk Art", "Textile"],
    historicalPeriod: "4,000-year-old living metallurgical lineage",
    overview: "Heartland of India's ancient lost-wax metalcasting (Dhokra) practiced continuously since the Indus Valley Bronze Age.",
    description:
      "Bastar Dhokra is one of the oldest uninterrupted metallurgical traditions in human history. Practiced by the Ghadwa tribal community, this lost-wax non-ferrous metal casting produces rustic, elongated, thread-like figurines of tribal deities, elephants, musicians, deer, and ritual lamps (Diyas) with distinct coiled wire textures.",
    historicalContext:
      "Dhokra directly continues the metallurgical casting technique seen in the iconic 4,500-year-old 'Dancing Girl of Mohenjo-daro'. The name 'Ghadwa' comes from the act of melting and creating (Ghadna). The craft has achieved global status while preserving its sacred tribal ritual role.",
    culturalSignificance:
      "Dhokra pieces serve as sacred clan totems honoring Mother Earth (Maa Danteshwari), tribal folk hero Anga Dev, and ancestral spirits, embodying an organic simplicity untouched by academic stylization.",
    keyCommunitiesOrArtists: [
      "Ghadwa Artisan Community of Kondagaon and Jagdalpur",
      "Jaidev Baghel (Master Dhokra Sculptor)",
      "Suresh Chandra Baghel",
      "Bastar Loha Shilp Blacksmith Guilds"
    ],
    materialsAndTechniques: [
      "Clay core shaped from river mud and rice husks",
      "Wax threads made from pure beeswax and dammar tree resin (Rala)",
      "Enclosed in multi-layered clay mould and cast in molten scrap brass/bell metal",
      "Hand-polished with sand and mustard oil"
    ],
    interestingFact:
      "Because the clay mould must be broken to extract the finished bronze sculpture, every single authentic Dhokra piece is an absolute one-of-a-kind original—it is physically impossible to cast two identical pieces!",
    unescoStatus: "Bastar Dhokra holds a protected Geographical Indication (GI) tag",
    representativeColor: "#b45309",
    notableArtworks: [
      {
        id: "dhokra-tribal-elephant",
        title: "Ceremonial Bastar Dhokra Elephant with Howdah",
        period: "Contemporary Tribal Bronze Continuum",
        medium: "Lost-wax brass and bell metal casting",
        description: "Stately stylized elephant adorned with coiled wire bell garlands, carrying a tribal deity seated beneath a parasol with signature elongated proportions.",
        imageUrl: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&w=1000&q=80",
        locationCreated: "Kondagaon, Bastar District",
        currentLocation: "National Crafts Museum, New Delhi / Bastar Heritage Centre, Jagdalpur",
        significance: "Direct contemporary descendant of the Indus Valley metallurgical tradition."
      }
    ]
  }
];
