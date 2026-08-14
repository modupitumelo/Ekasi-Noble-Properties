import { ABOUT_PILLARS } from '@/data';

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-sand">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-sky-deep font-semibold">
            About Ekasi Noble Properties
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1]">
            Growing developers, changing the South African housing story.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-ink-muted leading-relaxed">
            As growing property developers, we've overcome challenges to establish ourselves in the South African market. Our mission is to make history by changing lives and providing everyone an opportunity to own a home — even financially restricted individuals, through our innovative solutions.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ABOUT_PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className="group relative rounded-2xl bg-white border border-line p-7 hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.18)] transition-colors"
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-ink text-sky-soft group-hover:bg-sky group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl text-ink">{p.title}</h3>
                <p className="mt-2.5 text-sm text-ink-muted leading-relaxed">{p.body}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute top-1/2 -left-32 h-64 w-64 rounded-full bg-sky/5 blur-3xl" />
    </section>
  );
}
