export interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Youssef B.",
    avatar: "https://i.pravatar.cc/100?img=11",
    rating: 5,
    text: "PC reçu en 2 jours à Casablanca ! La qualité est au rendez-vous, le Razer Blade est une pure merveille. Merci Gamer Store Maroc !",
    date: "Il y a 2 semaines",
  },
  {
    id: 2,
    name: "Amina K.",
    avatar: "https://i.pravatar.cc/100?img=32",
    rating: 5,
    text: "Livraison gratuite à Fès, emballage impeccable. Le TUF Gaming tient toutes ses promesses. Je recommande à 100% !",
    date: "Il y a 1 mois",
  },
  {
    id: 3,
    name: "Omar E.",
    avatar: "https://i.pravatar.cc/100?img=53",
    rating: 5,
    text: "Le meilleur prix au Maroc pour un Legion Pro 7i. Service client réactif sur WhatsApp, très professionnel. Paie à la livraison, zéro risque.",
    date: "Il y a 3 semaines",
  },
  {
    id: 4,
    name: "Fatima Z.",
    avatar: "https://i.pravatar.cc/100?img=47",
    rating: 4,
    text: "J'ai acheté le ROG Strix pour mon fils, il est ravi ! Livraison à Marrakech en 3 jours. Seul bémol : j'aurais aimé un sac offert.",
    date: "Il y a 2 mois",
  },
  {
    id: 5,
    name: "Ahmed R.",
    avatar: "https://i.pravatar.cc/100?img=15",
    rating: 5,
    text: "Super expérience ! Le MSI Raider est un monstre de performance. L'équipe est très sérieuse et le paiement à la livraison me rassure beaucoup.",
    date: "Il y a 1 semaine",
  },
  {
    id: 6,
    name: "Sara M.",
    avatar: "https://i.pravatar.cc/100?img=25",
    rating: 5,
    text: "Mon premier PC gamer acheté ici et je ne regrette rien. Conseils personnalisés, livraison rapide à Rabat. C'est le site de référence au Maroc !",
    date: "Il y a 6 jours",
  },
];
