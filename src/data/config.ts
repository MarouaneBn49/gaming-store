/* Configuration globale du site */
export const SITE_CONFIG = {
  name: "Gamer store",
  description:
    "Votre destination gaming au Maroc — PC portables gamer Razer, ROG, Legion, MSI, TUF. Livraison gratuite partout au Maroc.",
  whatsappNumber: "212694613907",
  instagram: "@gamer_store_maroc",
  instagramUrl: "https://instagram.com/gamer_store_maroc",
  address: "Boulevard Mohammed V, Tanger, Maroc",
  phone: "+212 6 94 61 39 07",
  hours: "Lun - Sam : 10h00 - 21h00 | Dim : Fermé",
};

/* Génère un lien WhatsApp avec message pré-rempli */
export function getWhatsAppLink(productName?: string): string {
  const base = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=`;
  const message = productName
    ? encodeURIComponent(
        `Bonjour Gamer store ! 👋\n\nJe suis intéressé par le ${productName}. Est-il disponible ? Merci !`
      )
    : encodeURIComponent(
        `Bonjour Gamer store ! 👋\n\nJe voudrais avoir plus d'informations sur vos produits. Merci !`
      );
  return base + message;
}
