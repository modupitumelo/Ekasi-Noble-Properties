import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  Trees,
  Home,
  TrendingUp,
  Utensils,
  Building2,
  MapPin,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { type PortfolioProject } from '@/data';

const ICONS: Record<string, LucideIcon> = {
  Trees,
  Home,
  TrendingUp,
  Utensils,
  Building2,
  MapPin,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
};

export function ProjectDetail({ project, onClose }: { project: PortfolioProject; onClose: () => void }) {
  const gallery = project.gallery.length ? project.gallery : [project.image];
  const [activeImg, setActiveImg] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const safeGallery = gallery.map((g, i) => (imgErrors[i] ? project.image : g));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/70 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-sand rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-ink/80 text-white flex items-center justify-center hover:bg-sky transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Gallery */}
        <div className="relative h-64 sm:h-80 bg-ink overflow-hidden">
          <img
            src={safeGallery[activeImg]}
            alt={`${project.name} ${activeImg + 1}`}
            className="h-full w-full object-cover"
            onError={() => setImgErrors((prev) => ({ ...prev, [activeImg]: true }))}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-5 right-5">
            <span className="inline-block rounded-full bg-sky px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              {project.tag}
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl text-white">{project.name}</h2>
            <div className="mt-1 flex items-center gap-1.5 text-white/80 text-sm">
              <MapPin className="h-3.5 w-3.5 text-sky-soft" />
              {project.location}
            </div>
          </div>

          {/* Arrows */}
          {gallery.length > 1 && (
            <>
              <button
                onClick={() => setActiveImg((i) => (i - 1 + gallery.length) % gallery.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/15 hover:bg-sky text-white flex items-center justify-center transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setActiveImg((i) => (i + 1) % gallery.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/15 hover:bg-sky text-white flex items-center justify-center transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Dots */}
          {gallery.length > 1 && (
            <div className="absolute bottom-3 right-5 flex items-center gap-1.5">
              {gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeImg ? 'w-6 bg-sky-soft' : 'w-1.5 bg-white/40'
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="max-h-[60vh] overflow-y-auto p-6 sm:p-10">
          {/* Highlights */}
          {project.highlights.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {project.highlights.map((h) => {
                const Icon = ICONS[h.icon] ?? MapPin;
                return (
                  <div key={h.title} className="rounded-xl bg-white border border-line p-5">
                    <span className="flex items-center justify-center h-10 w-10 rounded-lg bg-sky/15 text-sky-deep">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h4 className="mt-3 font-display text-sm text-ink">{h.title}</h4>
                    <p className="mt-1 text-xs text-ink-muted leading-relaxed">{h.body}</p>
                  </div>
                );
              })}
            </div>
          )}

          {/* About sections */}
          <div className="space-y-8">
            {project.about.map((sec) => (
              <div key={sec.heading}>
                <h3 className="font-display text-xl text-ink">{sec.heading}</h3>
                <div className="mt-3 space-y-3">
                  {sec.paragraphs.map((p, i) => (
                    <p key={i} className="text-sm text-ink-muted leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Investment */}
          {project.investment && (
            <div className="mt-10 rounded-2xl bg-ink text-white p-6 sm:p-8">
              <h3 className="font-display text-xl text-white">{project.investment.heading}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{project.investment.intro}</p>

              {project.investment.details.length > 0 && (
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {project.investment.details.map((d) => (
                    <div key={d.label} className="rounded-xl bg-white/5 border border-white/10 p-4">
                      <div className="text-[11px] uppercase tracking-wider text-white/55">{d.label}</div>
                      <div className="mt-1 font-display text-lg text-sky-soft">{d.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {project.investment.options.length > 0 && (
                <div className="mt-5 grid sm:grid-cols-2 gap-3">
                  {project.investment.options.map((o) => (
                    <div key={o.title} className="rounded-xl bg-white/5 border border-white/10 p-4">
                      <div className="flex items-center gap-2 text-sky-soft text-xs font-semibold uppercase tracking-wide">
                        <CheckCircle2 className="h-4 w-4" />
                        {o.title}
                      </div>
                      <p className="mt-2 text-sm text-white/75 leading-relaxed">{o.body}</p>
                    </div>
                  ))}
                </div>
              )}

              {project.investment.extras.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {project.investment.extras.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-xs text-white/75">
                      <CheckCircle2 className="h-3.5 w-3.5 text-sky-soft mt-0.5 shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Contact note + CTA */}
          {project.contactNote && (
            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky/15 to-sand-2 border border-sky/30 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-ink-muted leading-relaxed max-w-xl">{project.contactNote}</p>
              <a
                href="#contact"
                onClick={onClose}
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-sky px-5 py-3 text-sm font-semibold text-white hover:bg-sky-deep transition-colors group"
              >
                Contact Us Today
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
