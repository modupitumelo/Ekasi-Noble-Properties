import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPinned,
  Clock,
  Send,
  CheckCircle2,
  User,
  Building2,
} from 'lucide-react';
import {
  CONTACT_INFO,
  PROPERTY_TYPES,
  CONTACT_TIMES,
  BUDGET_RANGES,
  EMPLOYMENT_STATUS,
} from '@/data';

const inputBase =
  'w-full rounded-xl bg-white border border-line px-4 py-3 text-sm text-ink placeholder-ink-muted/60 focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/20 transition-colors';

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    contactTime: '',
    budget: '',
    employment: '',
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch('https://formspree.io/f/xdaqrowj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-sand">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-sky-deep font-semibold">
            Contact Us
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1]">
            Get in touch with our expert team to find your dream property.
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-line p-6 sm:p-8">
              {sent ? (
                <div className="py-16 flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-sky/15 text-sky-deep">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-ink">Enquiry submitted</h3>
                  <p className="mt-2 text-sm text-ink-muted max-w-sm">
                    Thank you, {form.name || 'friend'}. Our team will reach out to you shortly — usually within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({
                        name: '', email: '', phone: '', propertyType: '',
                        contactTime: '', budget: '', employment: '', message: '',
                      });
                    }}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky hover:text-white transition-colors"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-ink/80 mb-1.5 block">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted/60" />
                        <input
                          required
                          value={form.name}
                          onChange={(e) => update('name', e.target.value)}
                          placeholder="Your full name"
                          className={`${inputBase} pl-10`}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-ink/80 mb-1.5 block">Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted/60" />
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          placeholder="you@example.com"
                          className={`${inputBase} pl-10`}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-ink/80 mb-1.5 block">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted/60" />
                      <input
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="Your phone number"
                        className={`${inputBase} pl-10`}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-ink/80 mb-1.5 block">Property Interest</label>
                      <select
                        value={form.propertyType}
                        onChange={(e) => update('propertyType', e.target.value)}
                        className={inputBase}
                      >
                        <option value="">Select property type</option>
                        {PROPERTY_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-ink/80 mb-1.5 block">Preferred Contact Time</label>
                      <select
                        value={form.contactTime}
                        onChange={(e) => update('contactTime', e.target.value)}
                        className={inputBase}
                      >
                        <option value="">Select time</option>
                        {CONTACT_TIMES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-ink/80 mb-1.5 block">Budget Range</label>
                      <select
                        value={form.budget}
                        onChange={(e) => update('budget', e.target.value)}
                        className={inputBase}
                      >
                        <option value="">Select budget</option>
                        {BUDGET_RANGES.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-ink/80 mb-1.5 block">Employment Status</label>
                      <select
                        value={form.employment}
                        onChange={(e) => update('employment', e.target.value)}
                        className={inputBase}
                      >
                        <option value="">Select status</option>
                        {EMPLOYMENT_STATUS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-ink/80 mb-1.5 block">Additional Information</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="Please include any specific questions or requirements you have..."
                      className={`${inputBase} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-sky px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(14,165,233,0.7)] hover:bg-sky-deep transition-colors group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Sending...' : 'Submit Enquiry'}
                    <Send className="h-4 w-4" />
                  </button>
                  {error && (
                    <p className="text-sm text-red-600 text-center">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl bg-ink text-white p-7">
              <h3 className="font-display text-xl text-white">Contact Information</h3>

              <div className="mt-6 space-y-5">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-sky-soft mb-2">
                    <Phone className="h-3.5 w-3.5" /> Call Us
                  </div>
                  <div className="space-y-1">
                    {CONTACT_INFO.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block text-sm text-white/85 hover:text-sky-soft transition-colors">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-sky-soft mb-2">
                    <Mail className="h-3.5 w-3.5" /> Email Us
                  </div>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-white/85 hover:text-sky-soft transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-sky-soft mb-2">
                    <MapPinned className="h-3.5 w-3.5" /> Visit Us
                  </div>
                  <div className="text-sm text-white/85 space-y-0.5">
                    {CONTACT_INFO.address.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-sky-soft mb-2">
                    <Clock className="h-3.5 w-3.5" /> Office Hours
                  </div>
                  <div className="space-y-1.5">
                    {CONTACT_INFO.hours.map((h) => (
                      <div key={h.day} className="flex items-center justify-between text-sm">
                        <span className="text-white/70">{h.day}</span>
                        <span className="text-white/90 font-medium">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-sky/15 to-sand-2 border border-sky/30 p-6">
              <div className="flex items-center gap-2 text-sky-deep">
                <Building2 className="h-5 w-5" />
                <span className="font-display text-base text-ink">We're committed to helping you</span>
              </div>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                We're committed to helping you find your dream property. Contact us today to schedule a consultation — blacklisted welcome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
