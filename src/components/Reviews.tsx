"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  /* Nombre d'avis visibles selon la taille d'écran */
  const getVisibleCount = useCallback(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }, []);

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    setVisibleCount(getVisibleCount());
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getVisibleCount]);

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  /* Auto-défilement */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const visibleReviews = reviews.slice(current, current + visibleCount);

  return (
    <section id="avis" className="py-20 md:py-28 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-light text-sm font-bold uppercase tracking-widest">
            Témoignages
          </span>
          <h2 className="font-title text-3xl md:text-5xl font-black mt-3 mb-4">
            Avis de nos <span className="text-gradient">clients</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Plus de 500 clients satisfaits à travers tout le Maroc. Découvrez
            leurs retours.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Boutons navigation */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-dark-200 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Précédent"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-dark-200 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Suivant"
          >
            <ChevronRight size={18} />
          </button>

          {/* Cartes d'avis */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
            {visibleReviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-dark-100 border border-white/5 rounded-2xl p-6 relative"
              >
                {/* Icône citation */}
                <Quote
                  size={24}
                  className="text-primary/20 absolute top-4 right-4"
                />

                {/* Étoiles */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-600"
                      }
                    />
                  ))}
                </div>

                {/* Texte */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Auteur */}
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-primary/30"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-sm font-bold">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Indicateurs */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-primary w-6"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
