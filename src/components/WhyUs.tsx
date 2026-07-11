"use client";

import { motion, useInView } from "framer-motion";
import { Truck, ShieldCheck, Banknote, Headphones } from "lucide-react";
import { useRef } from "react";

/* Données des avantages */
const features = [
  {
    icon: Truck,
    title: "Livraison Gratuite",
    description: "Partout au Maroc, sans frais supplémentaires. Réception en 2-5 jours ouvrés.",
    color: "text-neon-cyan",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]",
  },
  {
    icon: ShieldCheck,
    title: "100% Originaux",
    description: "Tous nos PC sont neufs, scellés et importés directement des fournisseurs officiels.",
    color: "text-neon-purple",
    glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]",
  },
  {
    icon: Banknote,
    title: "Paiement à la Livraison",
    description: "Payez cash à la réception. Zéro risque, zéro prépaiement obligatoire.",
    color: "text-neon-cyan",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]",
  },
  {
    icon: Headphones,
    title: "Support Après-Vente",
    description: "Une équipe disponible pour vous conseiller et résoudre vos problèmes rapidement.",
    color: "text-neon-purple",
    glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]",
  },
];

export default function WhyUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="pourquoi"
      className="py-20 md:py-28 bg-dark-100 relative overflow-hidden"
    >
      {/* Décorations d'arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-purple text-sm font-bold uppercase tracking-widest">
            Nos avantages
          </span>
          <h2 className="font-title text-3xl md:text-5xl font-black mt-3 mb-4">
            Pourquoi <span className="text-gradient">nous choisir</span> ?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Gamer Store Maroc, c&apos;est la confiance, la qualité et le meilleur
            service gaming du Royaume.
          </p>
        </motion.div>

        {/* Grille d'avantages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <FeatureCard key={feature.title} feature={feature} index={i} Icon={Icon} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Composant carte d'avantage */
function FeatureCard({
  feature,
  index,
  Icon,
}: {
  feature: (typeof features)[number];
  index: number;
  Icon: typeof Truck;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`group relative bg-dark border border-white/5 rounded-2xl p-8 text-center hover:border-white/10 transition-all duration-500 ${feature.glow}`}
    >
      {/* Icône animée */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 ${feature.color} mb-5`}
      >
        <Icon size={28} />
      </motion.div>

      <h3 className="font-title text-lg font-bold mb-3">{feature.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}
