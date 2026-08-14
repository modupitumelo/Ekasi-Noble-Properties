import { MapPin, ArrowRight } from 'lucide-react';
import { LOCATIONS } from '@/data';

export function Locations() {
  return (
    <section className="relative py-24 sm:py-32 bg-ink text-white overflow-hidden">
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-[60rem] rounded-full bg-sky/10 blur-3xl" />

      <div className="relative mx-auto max-w-8xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-sky-soft font-semibold">
            Available Locations
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1]">
            Strategically located properties in growing communities.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LOCATIONS.map((loc) => (
            <a
              key={loc.name}
              href="#properties"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-sky/40 transition-colors"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.name}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-white text-sm font-semibold">
                    <MapPin className="h-4 w-4 text-sky-soft" />
                    {loc.name}
                  </span>
                  <ArrowRight className="h-4 w-4 text-sky-soft opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="px-5 py-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-white/60">Units available</span>
                <span className="font-display text-2xl text-sky-soft">{loc.units}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
