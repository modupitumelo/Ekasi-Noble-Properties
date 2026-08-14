import { ArrowRight, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src="/exterior2.jpg"
          alt="Ekasi Noble Properties development"
          className="h-full w-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-8xl px-5 sm:px-8 pb-20 sm:pb-28 pt-32 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-sky-soft" />
            <span className="text-[11px] uppercase tracking-[0.32em] text-sky-soft font-semibold">
              South African Property Developers
            </span>
          </div>

          <h1 className="mt-6 font-display text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-white tracking-tight">
            Find your group of likeminded individuals investing in securing property in{' '}
            <span className="text-sky-soft">South Africa's thriving communities.</span>
          </h1>

          <p className="mt-7 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
            Discover opportunities that match your lifestyle and property investment goals — with innovative crowdfunding solutions.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="#properties"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_36px_-12px_rgba(14,165,233,0.8)] hover:bg-sky-deep transition-colors"
            >
              View Properties
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#invest"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 backdrop-blur-sm transition-colors"
            >
              Investment Opportunities
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
        <span className="h-12 w-px bg-gradient-to-b from-sky-soft/50 to-transparent" />
      </div>
    </section>
  );
}
