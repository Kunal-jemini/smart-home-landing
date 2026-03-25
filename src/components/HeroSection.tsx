// components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-[80vh] min-h-[520px] flex items-center justify-center overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-3xl px-4 text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
          Smart home, made simple
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
          Upgrade your home with intelligent automation
        </h1>
        <p className="text-base md:text-lg text-slate-200">
          Control lighting, climate, security, and more with one seamless ecosystem.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#products"
            className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-sm md:text-base font-medium transition"
          >
            Shop featured products
          </a>
          <a
            href="#shop-by"
            className="px-6 py-3 rounded-full border border-slate-500 hover:border-emerald-400 text-sm md:text-base font-medium transition"
          >
            Explore by category
          </a>
        </div>
      </div>
    </section>
  );
}