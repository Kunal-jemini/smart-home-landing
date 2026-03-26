"use client"; // Required for animations

import Image from "next/image";
import { motion } from "framer-motion";
import { featuredProducts, Product } from "@/data/products";

export default function ProductsSection() {
  const topProducts = featuredProducts.slice(0, 3);

  return (
    <section id="products" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-400 mb-4 font-bold">
            Ecosystem
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight text-balance">
            Featured Products
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto font-medium">
            Handpicked smart home devices designed to seamlessly integrate into your daily life.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            >
              <ProductCard product={product} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} 
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <a
            href="#shop-by"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-yellow-400 text-slate-950 font-bold text-base rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-500/25"
          >
            Browse All Categories
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <article className="group relative flex flex-col bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/15 transition-all duration-500">

      {/* 1. Image Block - PICTURE FRAME STYLE */}
      {/* Added p-4 (padding) so the image doesn't touch the card edges */}
      <div className="relative w-full aspect-[12/11] bg-slate-950 p-4">
        
        {/* Inner container that holds the actual curved image */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={index < 3}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Top Badges (Moved inside the rounded image container) */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1.5 bg-slate-900/90 backdrop-blur-md text-yellow-400 text-[10px] font-black tracking-widest uppercase rounded-full border border-yellow-500/30 shadow-lg">
              {product.category}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Card Body */}
      {/* Adjusted padding slightly to match the new image frame proportions */}
      <div className="flex flex-col flex-1 p-6 md:px-8 md:pb-8 pt-2 relative z-20"> 
        
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 tracking-tight mb-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-2">
          {product.description}
        </p>

        {/* 3. Bottom Row: Price & Dynamic Button */}
        <div className="flex items-end justify-between mt-auto">
          
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
              Price
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl md:text-3xl font-black text-white tracking-tighter">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          {/* Expandable Action Button */}
          <button className="group/btn flex items-center justify-center h-12 bg-yellow-500 hover:bg-yellow-400 text-slate-950 rounded-full transition-all duration-300 px-3.5 hover:px-5 shadow-md">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="max-w-0 overflow-hidden group-hover/btn:max-w-[100px] transition-all duration-300 ease-in-out whitespace-nowrap font-bold text-sm group-hover/btn:ml-2">
              Add to Cart
            </span>
          </button>
          
        </div>
      </div>
    </article>
  );
}