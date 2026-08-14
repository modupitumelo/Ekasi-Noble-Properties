import { Mail, Award } from 'lucide-react';
import { TEAM } from '@/data';

export function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-32 bg-gradient-to-b from-sand to-sand-2">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-sky-deep font-semibold">
            Meet Our Team
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1]">
            Expert agents dedicated to finding your perfect property.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="relative overflow-hidden rounded-2xl bg-white border border-line"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent sm:bg-gradient-to-r" />
                </div>

                <div className="flex-1 p-6 sm:p-7 flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl text-ink">{m.name}</h3>
                      <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-sky/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-sky-deep">
                        {m.role}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-1.5 text-xs text-ink-muted">
                    <Award className="h-3.5 w-3.5 text-sky-deep" />
                    {m.experience}
                  </div>

                  <p className="mt-3 text-sm text-ink-muted leading-relaxed">{m.bio}</p>

                  <a
                    href={`mailto:${m.email}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-sky-deep transition-colors w-fit"
                  >
                    <Mail className="h-4 w-4" />
                    {m.email}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
