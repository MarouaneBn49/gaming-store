"use client";

import { motion, useInView } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import { useRef } from "react";
import { SITE_CONFIG } from "@/data/config";

/* Posts Instagram placeholder (images de PC gamer / setups RGB) */
const posts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop",
    likes: "324",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&h=400&fit=crop",
    likes: "512",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=400&fit=crop",
    likes: "287",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=400&h=400&fit=crop",
    likes: "456",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop",
    likes: "198",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop",
    likes: "673",
  },
];

export default function InstagramSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-dark-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-neon-purple text-sm font-bold uppercase tracking-widest">
            Instagram
          </span>
          <h2 className="font-title text-3xl md:text-5xl font-black mt-3 mb-4">
            Suivez-nous sur{" "}
            <span className="text-gradient">Instagram</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            Rejoignez notre communauté pour du contenu exclusif, des offres
            spéciales et les dernières nouveautés gaming.
          </p>
          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
          >
            <Instagram size={18} />
            {SITE_CONFIG.instagram}
            <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* Grille Instagram */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <img
                src={post.image}
                alt={`Post Instagram ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay au survol */}
              <div className="absolute inset-0 bg-neon-purple/0 group-hover:bg-neon-purple/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <Instagram size={24} className="mx-auto mb-1" />
                  <span className="text-xs font-bold">{post.likes} likes</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
