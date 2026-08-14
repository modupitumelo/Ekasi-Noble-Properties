import { useState, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_EXTERIOR, GALLERY_INTERIOR } from '@/data';

type Filter = 'All' | 'Interior' | 'Exterior';

type Item = { src: string; kind: 'Interior' | 'Exterior' };

const ALL: Item[] = [
  ...GALLERY_INTERIOR.map((src) => ({ src, kind: 'Interior' as const })),
  ...GALLERY_EXTERIOR.map((src) => ({ src, kind: 'Exterior' as const })),
];

const VISIBLE_INITIAL = 8;

export function Gallery() {
  const [filter, setFilter] = useState<Filter>('All');
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(() => {
    const list = filter === 'All' ? ALL : ALL.filter((i) => i.kind === filter);
    return showAll ? list : list.slice(0, VISIBLE_INITIAL);
  }, [filter, showAll]);

  const total = filter === 'All' ? ALL.length : ALL.filter((i) => i.kind === filter).length;

  const filters: Filter[] = ['All', 'Interior', 'Exterior'];

  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i === null ? i : (i - 1 + items.length) % items.length));
  const next = () => setLightbox((i) => (i === null ? i : (i + 1) % items.length));

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-sand">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-sky-deep font-semibold">
              Property Gallery
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1]">
              Beautiful properties & interiors, up close.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => {
                  setFilter(f);
                  setShowAll(false);
                }}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                  filter === f
                    ? 'bg-ink text-sky-soft'
                    : 'bg-white text-ink-muted border border-line hover:border-sky/50 hover:text-ink'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:_balance]">
          {items.map((item, i) => (
            <button
              key={item.src + i}
              onClick={() => setLightbox(i)}
              className="group relative mb-4 block w-full overflow-hidden rounded-xl border border-line break-inside-avoid"
            >
              <img
                src={item.src}
                alt={`${item.kind} ${i + 1}`}
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/15 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {item.kind}
              </span>
            </button>
          ))}
        </div>

        {total > VISIBLE_INITIAL && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-ink hover:text-white transition-colors"
            >
              {showAll ? 'Show Less' : `Show More (${total - VISIBLE_INITIAL} more)`}
            </button>
          </div>
        )}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={closeLightbox}
        >
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 sm:px-6 py-4 pointer-events-none">
            <span className="text-white/70 text-xs tracking-wider pointer-events-auto">
              {lightbox + 1} / {items.length} · {items[lightbox].kind}
            </span>
            <button
              className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors pointer-events-auto"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <button
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white/10 hover:bg-sky hover:text-white text-white flex items-center justify-center transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img
            src={items[lightbox].src}
            alt="Gallery"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[78vh] sm:max-h-[85vh] max-w-[88vw] sm:max-w-[82vw] rounded-xl object-contain shadow-2xl"
          />
          <button
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white/10 hover:bg-sky hover:text-white text-white flex items-center justify-center transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
