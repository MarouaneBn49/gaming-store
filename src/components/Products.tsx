"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, HardDrive, Monitor, MessageCircle } from "lucide-react";
import { products, type Product } from "@/data/products";
import { getWhatsAppLink } from "@/data/config";
import { useRef } from "react";
import { useInView } from "framer-motion";

/* Composant card individuel pour un produit */
function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-dark-100 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(230,57,70,0.15)]"
    >
      {/* Badge optionnel */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full">
          {product.badge}
        </div>
      )}

      {/* Image du produit */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={product.image}
          alt={`${product.brand} ${product.model}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay au survol */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-transparent to-transparent" />
      </div>

      {/* Informations produit */}
      <div className="p-5">
        {/* Marque et modèle */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-primary-light text-xs font-bold uppercase tracking-wider">
            {product.brand}
          </span>
          <span className="text-gray-500 text-xs">{product.screen}</span>
        </div>
        <h3 className="font-title text-lg font-bold mb-3">{product.model}</h3>

        {/* Specs */}
        <div className="space-y-1.5 mb-4">
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <Cpu size={12} className="text-primary" />
            <span>{product.cpu}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <Zap size={12} className="text-primary-light" />
            <span>{product.gpu}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <HardDrive size={12} className="text-primary" />
            <span>
              {product.ram} — {product.storage}
            </span>
          </div>
        </div>

        {/* Prix et bouton */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div>
            <span className="text-2xl font-title font-black text-gradient">
              {product.price.toLocaleString("fr-MA")} DH
            </span>
          </div>
          <a
            href={getWhatsAppLink(`${product.brand} ${product.model}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white px-4 py-2 rounded-full text-xs font-bold transition-all duration-300"
          >
            <MessageCircle size={14} />
            Commander
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* Section Produits */
export default function Products() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="produits" className="py-20 md:py-28 bg-dark relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête de section */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-light text-sm font-bold uppercase tracking-widest">
            Catalogue
          </span>
          <h2 className="font-title text-3xl md:text-5xl font-black mt-3 mb-4">
            Nos <span className="text-gradient">PC Gamers</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Sélection des meilleurs PC portables gaming. Chaque machine est
            testée et garantie. Paiement à la livraison disponible.
          </p>
        </motion.div>

        {/* Grille de produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
