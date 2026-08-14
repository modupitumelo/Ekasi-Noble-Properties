import { useState } from 'react';
import { Phone, Mail, MapPinned, Send, ArrowRight } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '@/data';

const SERVICES = ['Property Sales', 'Property Rentals', 'Property Management', 'Group Buying'];

export function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <footer className="relative bg-ink text-white/80 overflow-hidden">
      {/* Decorative top line */}
      <div className="h-px bg-gradient-to-r from-sky via-sky-soft to-sky" />

      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl sm:text-3xl text-white">
              Ready to own your piece of South Africa?
            </h3>
            <p className="mt-2 text-white/70">
              Our team will help you find a home that fits your life and your budget — blacklisted welcome.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-sky px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(14,165,233,0.7)] hover:bg-sky-deep transition-colors group"
          >
            Start your enquiry
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-8xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          {/* Logo only, no text */}
          <img src="/logo1.png" alt="Ekasi Noble Properties" className="h-14 w-14 object-contain brightness-0 invert" />
          <p className="mt-4 text-sm text-white/65 leading-relaxed">
            Ekasi Noble Properties is committed to transforming the real estate landscape in South Africa's townships.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-sky-soft mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-sky-soft transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-sky-soft mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s} className="text-white/70">{s}</li>
            ))}
          </ul>
          <h4 className="text-xs uppercase tracking-[0.2em] text-sky-soft mt-6 mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            {CONTACT_INFO.phones.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-sky-soft/80" />
                <a href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-sky-soft">{p}</a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-sky-soft/80" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-sky-soft">{CONTACT_INFO.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPinned className="h-3.5 w-3.5 text-sky-soft/80 mt-0.5" />
              <span>{CONTACT_INFO.address.join(', ')}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-sky-soft mb-4">Newsletter</h4>
          <p className="text-sm text-white/65 mb-3">Subscribe to our newsletter for updates</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) {
                setSent(true);
                setEmail('');
                setTimeout(() => setSent(false), 3500);
              }
            }}
            className="flex items-center gap-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 min-w-0 rounded-full bg-white/8 border border-white/15 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-sky focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-sky text-white hover:bg-sky-deep transition-colors shrink-0"
              aria-label="Subscribe"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
          {sent && (
            <p className="mt-2 text-xs text-sky-soft">Thank you — you're subscribed.</p>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 py-5 text-center text-xs text-white/50">
          © 2026 Ekasi Noble Properties. All rights reserved.
        </div>
      </div>

      {/* Soft glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky/10 blur-3xl" />
    </footer>
  );
}
