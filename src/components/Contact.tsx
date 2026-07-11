"use client";

import { motion, useInView } from "framer-motion";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { useRef } from "react";
import { SITE_CONFIG, getWhatsAppLink } from "@/data/config";

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-dark relative overflow-hidden"
    >
      {/* Décorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-purple/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-cyan text-sm font-bold uppercase tracking-widest">
            Contact
          </span>
          <h2 className="font-title text-3xl md:text-5xl font-black mt-3 mb-4">
            Prêt à <span className="text-gradient">équiper</span> votre setup ?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Contactez-nous directement sur WhatsApp pour une réponse rapide.
            Notre équipe est à votre service !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* CTA WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#20BA5C] text-white px-10 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(37,211,102,0.3)] mb-8"
            >
              <MessageCircle size={32} />
              <div className="text-left">
                <p className="text-sm opacity-80">Écrivez-nous sur</p>
                <p className="text-xl">WhatsApp</p>
              </div>
            </a>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={20} className="text-neon-purple" />
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                  className="hover:text-neon-purple transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={20} className="text-neon-cyan" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock size={20} className="text-neon-purple" />
                <span>{SITE_CONFIG.hours}</span>
              </div>
            </div>
          </motion.div>

          {/* Carte / Image du magasin */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-2xl overflow-hidden border border-white/5"
          >
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop"
              alt="Magasin Gamer Store Maroc à Tanger"
              className="w-full h-64 md:h-80 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-title text-lg font-bold">
                Gamer Store Maroc
              </p>
              <p className="text-gray-400 text-sm">{SITE_CONFIG.address}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
