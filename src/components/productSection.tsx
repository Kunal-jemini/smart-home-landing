import Image from "next/image";
import { featuredProducts, Product } from "@/data/products";

export default function ProductsSection() {
  // Grab only the top 3 products
  const topProducts = featuredProducts.slice(0, 3);

  return (
    <section id="products" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4 font-semibold">
            Our Products
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Products
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Handpicked smart home devices to get you started
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#shop-by"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-base rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20"
          >
            Browse All Categories
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex flex-col bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden hover:border-emerald-500/50 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-emerald-500/15 transition-all duration-500">

      {/* 1. Image Block (Fixed Aspect Ratio + Edge-to-Edge) */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-950">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover opacity-80 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-110"
        />

        {/* Subtle inner gradient to blend the image into the card body */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />

        {/* Glassmorphism Category Pill */}
        <span className="absolute top-4 left-4 z-10 px-3.5 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs font-semibold tracking-wide rounded-full border border-white/20 shadow-xl">
          {product.category}
        </span>
      </div>

      {/* 2. Card Body (Reduced padding to p-6 for better proportions) */}
      <div className="flex flex-col flex-1 p-6 relative z-10">

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 line-clamp-1 mb-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* 3. Bottom Row: Price & Action Button (Side-by-Side) */}
        <div className="flex items-center justify-between pt-5 border-t border-slate-800/80 mt-auto">
          
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-0.5">
              Price
            </span>
            <span className="text-xl md:text-2xl font-black text-white tracking-tight">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
          </div>

          {/* Modern Floating Action Button */}
          <button className="flex items-center justify-center w-12 h-12 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          
        </div>

      </div>
    </article>
  );
}