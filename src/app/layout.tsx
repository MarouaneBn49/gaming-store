import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

/* Police Inter pour le texte courant */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

/* Police Orbitron pour les titres gaming */
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Gamer Store Maroc — PC Portables Gamer à Tanger",
  description:
    "Votre destination gaming au Maroc. PC portables gamer Razer, ASUS ROG, Lenovo Legion, MSI, TUF. Livraison gratuite partout au Maroc. Paiement à la livraison.",
  keywords: [
    "PC gamer Maroc",
    "PC portable gaming Tanger",
    "Razer Maroc",
    "ROG Strix Maroc",
    "Lenovo Legion Maroc",
    "MSI gamer Maroc",
    "livraison gratuite Maroc",
  ],
  openGraph: {
    title: "Gamer Store Maroc",
    description:
      "PC portables gamer haut de gamme — Livraison gratuite partout au Maroc",
    type: "website",
    locale: "fr_MA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
