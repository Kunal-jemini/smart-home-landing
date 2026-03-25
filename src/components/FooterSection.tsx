// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-[2fr,1fr,1fr]">
          <div>
            <p className="text-lg font-semibold">SmartHome Brand</p>
            <p className="mt-3 text-sm text-slate-400">
              Intelligent devices and orchestration for modern Indian homes.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
              Products
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#products">Featured</a></li>
              <li><a href="#shop-by">Shop by segment</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
              Company
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#about">About us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SmartHome Brand. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#">Privacy policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}