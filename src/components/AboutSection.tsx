export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-yellow-400 mb-6 font-semibold">
            About
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            SmartCogni —<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-teal-400 to-cyan-400">
              Built with Care
            </span>
          </h2>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Image */}
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&fit=crop"
              alt="Smart home control center"
              className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl shadow-black/50 group-hover:scale-[1.02] transition-all duration-700"
            />
            {/* Decorative overlay */}
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-yellow-400 text-sm uppercase tracking-[0.3em] font-semibold">
                Our Story
              </p>
              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Intelligent homes,<br />
                built with care in India
              </h3>
              <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                We're a team of engineers passionate about making smart homes accessible to every Indian family. No subscriptions. No cloud dependency. Just pure intelligence working for you.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {[
                { num: "50K+", label: "Happy Homes" },
                { num: "12",   label: "Categories" },
                { num: "24/7", label: "Support" },
                { num: "1yr",  label: "Warranty" },
              ].map((stat, i) => (
                <div key={i} className="group">
                  <p className="text-4xl md:text-5xl font-black text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {stat.num}
                  </p>
                  <p className="text-slate-500 text-sm font-medium mt-1 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-slate-800">
              <a href="#products" className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold text-lg rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-yellow-500/25 hover:shadow-yellow-500/40">
                Start Your Smart Home
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}