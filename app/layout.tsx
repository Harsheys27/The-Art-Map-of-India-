import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Art Map of India | Explore the Regions That Shaped Indian Art",
  description:
    "An interactive digital museum and educational exploration of Indian regional art traditions, from Madhubani in Bihar to Chola bronzes in Tamil Nadu, Ajanta cave murals, Pattachitra, Warli art, and Kalamkari.",
  keywords: [
    "Indian Art",
    "Art Map of India",
    "Madhubani Painting",
    "Chola Bronzes",
    "Ajanta Caves",
    "Warli Art",
    "Pattachitra",
    "Kalamkari",
    "Indian Art History",
    "Traditional Indian Crafts",
  ],
  authors: [{ name: "Indian Art Form Academic Project" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cinzel.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#09090b] text-[#f5f2eb] font-sans antialiased selection:bg-[#d4af37]/30 selection:text-[#fbf5e8] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
