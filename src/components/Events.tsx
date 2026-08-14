import { useState } from 'react';
import { CalendarDays, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { MONTHS } from '@/data';

const CURRENT_YEAR = 2026;
const CURRENT_MONTH_INDEX = 6; // July (0-indexed)

export function Events() {
  const [monthIdx, setMonthIdx] = useState(CURRENT_MONTH_INDEX);

  const month = MONTHS[monthIdx];

  return (
    <section id="events" className="relative py-24 sm:py-32 bg-ink text-white overflow-hidden">
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky/10 blur-3xl" />

      <div className="relative mx-auto max-w-8xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-sky-soft font-semibold">
            Upcoming Events
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1]">
            Join us to learn more about property investment and homeownership.
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          {/* Month picker */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-white/55">Select month</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setMonthIdx((i) => (i - 1 + 12) % 12)}
                    className="h-8 w-8 rounded-full bg-white/10 hover:bg-sky hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Previous month"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setMonthIdx((i) => (i + 1) % 12)}
                    className="h-8 w-8 rounded-full bg-white/10 hover:bg-sky hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Next month"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {MONTHS.map((m, i) => (
                  <button
                    key={m}
                    onClick={() => setMonthIdx(i)}
                    className={`rounded-lg px-2 py-2 text-[11px] font-medium transition-colors ${
                      i === monthIdx
                        ? 'bg-sky text-white'
                        : 'bg-white/5 text-white/65 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {m.slice(0, 3)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Event display */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 p-7 sm:p-9 h-full flex flex-col">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center h-12 w-12 rounded-xl bg-sky/15 text-sky-soft">
                  <CalendarDays className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/55">Showing events for</div>
                  <div className="font-display text-2xl text-white">{month} {CURRENT_YEAR}</div>
                </div>
              </div>

              <div className="mt-8 flex-1 flex flex-col items-center justify-center text-center py-8">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white/5 border border-white/10 mb-4">
                  <Sparkles className="h-7 w-7 text-sky-soft/70" />
                </div>
                <h3 className="font-display text-xl text-white">
                  No events scheduled for {month} {CURRENT_YEAR}
                </h3>
                <p className="mt-2 text-sm text-white/60 max-w-sm">
                  Check back soon for upcoming events, or follow our newsletter for announcements.
                </p>
              </div>

              <div className="mt-2 pt-5 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs text-white/55">
                <span>Tip:</span>
                <span className="rounded-full bg-white/5 px-3 py-1">Browse other months with the arrows</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
