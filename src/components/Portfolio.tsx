import { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { PORTFOLIO, type PortfolioProject } from '@/data';
import { ProjectDetail } from '@/components/ProjectDetail';

export function Portfolio() {
  const [selected, setSelected] = useState<PortfolioProject | null>(null);

  return (
    <section className="relative py-24 sm:py-32 bg-sand">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-sky-deep font-semibold">
            Our Portfolio · Featured Projects
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1]">
            Exclusive developments designed for luxury, comfort & exceptional investment.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {PORTFOLIO.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-2xl border border-line bg-white hover:shadow-[0_30px_70px_-30px_rgba(15,23,42,0.3)] transition-shadow"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-sky px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  {p.tag}
                </span>
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-display text-2xl text-white">{p.name}</h3>
                  <div className="mt-1 flex items-center gap-1.5 text-white/80 text-sm">
                    <MapPin className="h-3.5 w-3.5 text-sky-soft" />
                    {p.location}
                  </div>
                </div>
              </div>
              <div className="p-6 flex items-center justify-between gap-4">
                <p className="text-sm text-ink-muted leading-relaxed">{p.body}</p>
                <button
                  onClick={() => setSelected(p)}
                  className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-xs font-semibold text-white hover:bg-sky hover:text-white transition-colors"
                >
                  View Details
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && <ProjectDetail project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
