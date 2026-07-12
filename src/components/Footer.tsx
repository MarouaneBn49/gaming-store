"use client";

import { Instagram, MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { SITE_CONFIG, getWhatsAppLink } from "@/data/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-100 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Colonne 1 : Branding */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Gamer store"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-title text-base md:text-lg font-bold tracking-wider">
                GAMER <span className="text-gradient">store</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Votre destination gaming au Maroc. PC portables gamer haut de
              gamme, livraison gratuite et paiement à la livraison.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <h3 className="font-title text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "Produits", href: "#produits" },
                { label: "Pourquoi nous", href: "#pourquoi" },
                { label: "Avis clients", href: "#avis" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Infos */}
          <div>
            <h3 className="font-title text-sm font-bold uppercase tracking-wider text-white mb-4">
              Informations
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                <span>{SITE_CONFIG.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} {SITE_CONFIG.name}. Tous droits réservés.
          </p>
          <p className="text-gray-600 text-xs">
            Livraison gratuite partout au Maroc 🇲🇦
          </p>
        </div>
      </div>
    </footer>
  );
}
