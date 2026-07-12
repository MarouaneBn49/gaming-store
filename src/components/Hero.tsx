"use client";

import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import { getWhatsAppLink } from "@/data/config";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=1920&h=1080&fit=crop"
          alt="Setup gaming RGB"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Overlay dégradé */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark" />
        {/* Overlay grille subtile */}
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
          <span className="text-xs md:text-sm text-gray-300 font-medium">
            Livraison gratuite partout au Maroc
          </span>
        </motion.div>

        {/* Titre principal animé */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6"
        >
          Le meilleur du{" "}
          <span className="text-gradient">gaming</span>
          <br />
          livré chez vous
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          PC portables gamer haut de gamme — Razer, ASUS ROG, Lenovo Legion,
          MSI, TUF. Basés à Tanger, livraison offerte dans tout le Maroc.
        </motion.p>

        {/* Boutons CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Bouton WhatsApp principal */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5C] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
          >
            <MessageCircle
              size={22}
              className="group-hover:rotate-12 transition-transform"
            />
            Commander sur WhatsApp
          </a>

          {/* Bouton secondaire */}
          <a
            href="#produits"
            className="flex items-center gap-2 border border-white/20 hover:border-primary/50 text-gray-300 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/5"
          >
            Voir les produits
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={28} className="text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
