import { useState } from 'react';
import {
  Coins,
  TrendingUp,
  Download,
  FileText,
  CreditCard,
  Upload,
  Phone,
  Mail,
  Info,
  CheckCircle2,
  Clock,
  ArrowUpRight,
} from 'lucide-react';
import { CONTACT_INFO } from '@/data';

const STOKVEL_STEPS = [
  { icon: Download, title: 'Download & Sign Up', body: 'Download the Stokfella app or visit www.stokfella.com and sign up. Choose the Noble Property Stokvel Group.' },
  { icon: FileText, title: 'Complete Documentation', body: 'Fill out the beneficiary form with accurate details, especially email and contact numbers.' },
  { icon: CreditCard, title: 'Make Payment', body: 'Minimum R100,000 with 15% interest over 36 months (R15,000 ROI). Total payout: R115,000. Use the "Pay" tab for EFT payments.' },
  { icon: Upload, title: 'Submit Proof', body: 'Email proof of payment to info@ekasinobleproperties.com' },
];

const STOKVEL_NOTES = [
  'Electronic payments (EFT) may take 2-3 working days to reflect',
  'StokFella is an authorised Financial (FSP48812) and Credit service provider (NCRCP17277)',
  'T&Cs Apply',
];

const SHARES_STEPS = [
  { icon: ArrowUpRight, title: 'Visit & Sign Up', body: 'Visit www.ekasinobleproperties.com/shares and complete the registration process.' },
  { icon: Coins, title: 'Choose Investment', body: 'Select the number of shares you wish to purchase. Minimum R1,000 per share plus R500 joining fee.' },
  { icon: CreditCard, title: 'Make Payment', body: 'Use the "pay" tab for EFT payments. Banking details will be sent via email.' },
  { icon: Upload, title: 'Submit Proof', body: 'Email proof of payment to info@ekasinobleproperties.com' },
];

const SHARES_NOTES = [
  'Electronic payments (EFT) may take 2-3 working days to reflect',
  'Your profile will include three tabs: pay, buy, and more',
  'Payment reference will be provided via email',
  'StokFella is an authorised Financial (FSP48812) and Credit service provider (NCRCP17277)',
  'T&Cs Apply',
];

export function Investment() {
  const [tab, setTab] = useState<'stokvel' | 'shares'>('stokvel');

  return (
    <section id="invest" className="relative py-24 sm:py-32 bg-gradient-to-b from-sand-2 to-sand">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-sky-deep font-semibold">
            Investment Opportunities
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1]">
            Grow your wealth through our innovative property stokvel options.
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-10 inline-flex rounded-full bg-white border border-line p-1">
          <button
            onClick={() => setTab('stokvel')}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              tab === 'stokvel' ? 'bg-ink text-sky-soft shadow' : 'text-ink-muted hover:text-ink'
            }`}
          >
            Noble Property Stokvel
          </button>
          <button
            onClick={() => setTab('shares')}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              tab === 'shares' ? 'bg-ink text-sky-soft shadow' : 'text-ink-muted hover:text-ink'
            }`}
          >
            Public Shares
          </button>
        </div>

        {tab === 'stokvel' ? (
          <div className="mt-10 grid lg:grid-cols-5 gap-6">
            {/* Left: details */}
            <div className="lg:col-span-2 rounded-2xl bg-ink text-white p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center h-12 w-12 rounded-xl bg-sky/15 text-sky-soft">
                  <Coins className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl text-white">Noble Property Stokvel</h3>
                  <p className="text-xs text-white/60">Earn 15% ROI after 36 months</p>
                </div>
              </div>

              <div className="mt-7 space-y-5">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="text-[11px] uppercase tracking-wider text-white/55">Minimum Investment</div>
                  <div className="mt-1 font-display text-2xl text-sky-soft">R10,000 + R500 joining fee</div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="text-[11px] uppercase tracking-wider text-white/55">Return on Investment</div>
                  <div className="mt-1 font-display text-2xl text-sky-soft">15% after 36 months</div>
                  <div className="mt-1 text-xs text-white/65">Example: R100,000 investment = R15,000 ROI</div>
                </div>
              </div>

              <div className="mt-7 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <Info className="h-4 w-4 text-sky-soft" />
                  Important Information
                </div>
                <ul className="mt-3 space-y-2">
                  {STOKVEL_NOTES.map((n) => (
                    <li key={n} className="flex items-start gap-2 text-xs text-white/75">
                      <CheckCircle2 className="h-3.5 w-3.5 text-sky-soft mt-0.5 shrink-0" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 text-xs text-white/70">
                {CONTACT_INFO.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-sky-soft py-1">
                    <Phone className="h-3.5 w-3.5 text-sky-soft" /> {p}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: steps */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
              {STOKVEL_STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="group relative rounded-2xl bg-white border border-line p-6 hover:border-sky/40 hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.18)] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center justify-center h-11 w-11 rounded-xl bg-ink text-sky-soft group-hover:bg-sky group-hover:text-white transition-colors">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-3xl text-line group-hover:text-sky/30 transition-colors">
                        0{i + 1}
                      </span>
                    </div>
                    <h4 className="mt-4 font-display text-lg text-ink">{s.title}</h4>
                    <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">{s.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="mt-10 grid lg:grid-cols-5 gap-6">
            {/* Left: details */}
            <div className="lg:col-span-2 rounded-2xl bg-ink text-white p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center h-12 w-12 rounded-xl bg-sky/15 text-sky-soft">
                  <TrendingUp className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl text-white">Noble Property Public Shares</h3>
                  <div className="mt-0.5 inline-flex items-center gap-1.5 rounded-full bg-sky/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-soft">
                    <Clock className="h-3 w-3" /> Opening Soon
                  </div>
                </div>
              </div>

              <div className="mt-7 space-y-5">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="text-[11px] uppercase tracking-wider text-white/55">Share Investment</div>
                  <div className="mt-1 font-display text-2xl text-sky-soft">R1,000 per share + R500 joining fee</div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="text-[11px] uppercase tracking-wider text-white/55">Payment Process</div>
                  <div className="mt-1 text-sm text-white/85">To be confirmed ✅</div>
                  <div className="mt-1 text-xs text-white/65">Processing time: Call our office now to join the waiting list!</div>
                </div>
              </div>

              <div className="mt-7 pt-6 border-t border-white/10">
                <div className="text-xs text-white/60 mb-3">Contact Information</div>
                <a href={`tel:${CONTACT_INFO.phones[0].replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-white hover:text-sky-soft py-1">
                  <Phone className="h-4 w-4 text-sky-soft" /> {CONTACT_INFO.phones[0]}
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 text-sm text-white hover:text-sky-soft py-1">
                  <Mail className="h-4 w-4 text-sky-soft" /> {CONTACT_INFO.email}
                </a>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <Info className="h-4 w-4 text-sky-soft" />
                  Important Information
                </div>
                <ul className="mt-3 space-y-2">
                  {SHARES_NOTES.map((n) => (
                    <li key={n} className="flex items-start gap-2 text-xs text-white/75">
                      <CheckCircle2 className="h-3.5 w-3.5 text-sky-soft mt-0.5 shrink-0" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: steps */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
              {SHARES_STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="group relative rounded-2xl bg-white border border-line p-6 hover:border-sky/40 hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.18)] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center justify-center h-11 w-11 rounded-xl bg-ink text-sky-soft group-hover:bg-sky group-hover:text-white transition-colors">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-3xl text-line group-hover:text-sky/30 transition-colors">
                        0{i + 1}
                      </span>
                    </div>
                    <h4 className="mt-4 font-display text-lg text-ink">{s.title}</h4>
                    <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">{s.body}</p>
                  </div>
                );
              })}

              <div className="sm:col-span-2 rounded-2xl bg-gradient-to-r from-ink to-ink-soft text-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-display text-lg text-white">Contact Us for More Information</h4>
                  <p className="text-sm text-white/70 mt-1">Join the waiting list and we'll reach out with the next steps.</p>
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-sky px-5 py-3 text-sm font-semibold text-white hover:bg-sky-deep transition-colors whitespace-nowrap">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
