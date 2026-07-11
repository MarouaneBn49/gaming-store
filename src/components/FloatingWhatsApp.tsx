"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/data/config";

/**
 * Bouton WhatsApp flottant — visible sur toutes les sections.
 * Positionné en bas à droite avec une animation pulse.
 */
export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg whatsapp-pulse"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle size={26} />
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-dark-200 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
        Besoin d&apos;aide ?
      </span>
    </motion.a>
  );
}
