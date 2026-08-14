import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/data';

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-sand-2">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-sky-deep font-semibold">
            Frequently Asked Questions
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1]">
            Everything you need to know about our properties and process.
          </h2>
        </div>

        <div className="mt-12 max-w-3xl space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border bg-white overflow-hidden ${
                  isOpen ? 'border-sky/40 shadow-[0_8px_30px_-8px_rgba(14,165,233,0.2)]' : 'border-line'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-base text-ink">{f.q}</span>
                  <ChevronDown
                    className={`shrink-0 h-4 w-4 text-sky-deep ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-ink-muted leading-relaxed">{f.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
