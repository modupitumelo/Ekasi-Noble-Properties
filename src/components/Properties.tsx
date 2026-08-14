import { useState } from 'react';
import { BedDouble, Bath, Maximize, Users, MapPin, ArrowRight, Check } from 'lucide-react';
import { PROPERTIES, type Property } from '@/data';

const FILTERS = ['All', 'For Sale', 'Crowdfunding', 'Group Buying'] as const;
type Filter = (typeof FILTERS)[number];

function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-line">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full bg-ink/85 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-sky-soft">
              {t}
            </span>
          ))}
        </div>
        {p.badge && (
          <span className="absolute top-3 right-3 rounded-full bg-sky px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            {p.badge}
          </span>
        )}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/95 text-xs">
          <MapPin className="h-3.5 w-3.5 text-sky-soft" />
          {p.location}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display text-lg text-ink leading-snug">{p.name}</h3>
        <p className="mt-2 text-sm text-ink-muted leading-relaxed line-clamp-3">{p.description}</p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-ink-muted">
          {p.beds && (
            <span className="inline-flex items-center gap-1.5">
              <BedDouble className="h-3.5 w-3.5 text-sky-deep" /> {p.beds}
            </span>
          )}
          {p.baths && (
            <span className="inline-flex items-center gap-1.5">
              <Bath className="h-3.5 w-3.5 text-sky-deep" /> {p.baths}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            {p.id === 'group-soldout' ? (
              <Users className="h-3.5 w-3.5 text-sky-deep" />
            ) : (
              <Maximize className="h-3.5 w-3.5 text-sky-deep" />
            )}
            {p.size}
          </span>
        </div>

        <div className="mt-5 pt-4 border-t border-line flex items-end justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-ink-muted">Price</div>
            <div className="font-display text-xl text-ink">{p.price}</div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white hover:bg-sky hover:text-white transition-colors"
          >
            Enquire
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function Properties() {
  const [filter, setFilter] = useState<Filter>('All');

  const featured = PROPERTIES.filter((p) => p.featured);
  const filtered =
    filter === 'All'
      ? PROPERTIES
      : PROPERTIES.filter((p) => p.tags.includes(filter as Property['tags'][number]));

  return (
    <section id="properties" className="relative py-24 sm:py-32 bg-gradient-to-b from-sand to-sand-2">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-sky-deep font-semibold">
            Featured Properties
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1]">
            Exclusive properties & investment opportunities in prime locations.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <div key={p.id}>
              <PropertyCard p={p} />
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl text-ink">All Properties</h3>
              <p className="mt-1.5 text-sm text-ink-muted">
                Filter by ownership pathway to find the right fit for you.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                    filter === f
                      ? 'bg-ink text-sky-soft shadow-md'
                      : 'bg-white text-ink-muted border border-line hover:border-sky/50 hover:text-ink'
                  }`}
                >
                  {filter === f && <Check className="h-3 w-3" />}
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <div key={p.id}>
                <PropertyCard p={p} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-ink-muted py-12">No properties in this category right now.</p>
          )}
        </div>
      </div>
    </section>
  );
}
