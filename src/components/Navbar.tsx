import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '@/data';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)]' : 'shadow-none'
      }`}
    >
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Brand — logo only, no text, no circle */}
          <a href="#home" className="flex items-center group">
            <img
              src="/logo1.png"
              alt="Ekasi Noble Properties"
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-3.5 py-2 text-sm font-medium text-ink/75 hover:text-ink transition-colors group"
              >
                {l.label}
                <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-sky scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-sky px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(14,165,233,0.6)] hover:bg-sky-deep hover:shadow-[0_10px_24px_-8px_rgba(3,105,161,0.7)] transition-all duration-300"
            >
              <Phone className="h-3.5 w-3.5" />
              Enquire Now
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-ink bg-ink/5 hover:bg-ink/10 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-line`}
      >
        <nav className="px-5 pb-6 pt-2 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-lg text-ink/85 hover:bg-sky/10 hover:text-sky-deep transition-colors text-base font-medium border-b border-line/60 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            {CONTACT_INFO.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky px-5 py-3 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" />
                {phone}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}