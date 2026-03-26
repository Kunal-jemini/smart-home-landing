import BentoGrid from "./bento/BentoGrid";

export default function ShopBySection() {
  return (
    <section id="shop-by" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-yellow-500 mb-3 font-semibold">
              Categories
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Shop by Segment
            </h2>
          </div>
          <p className="hidden md:block text-slate-500 text-sm max-w-xs text-right leading-relaxed">
            11 smart home categories for every room and lifestyle
          </p>
        </div>
        <BentoGrid />
      </div>
    </section>
  );
}