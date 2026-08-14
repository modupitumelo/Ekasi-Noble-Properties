import { lazy, Suspense } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { WhatsAppFab } from '@/components/WhatsAppFab';
import { Loader } from '@/components/Loader';
import { ScrollToTop } from '@/components/ScrollToTop';

const Properties = lazy(() => import('@/components/Properties').then((m) => ({ default: m.Properties })));
const Locations = lazy(() => import('@/components/Locations').then((m) => ({ default: m.Locations })));
const Gallery = lazy(() => import('@/components/Gallery').then((m) => ({ default: m.Gallery })));
const Investment = lazy(() => import('@/components/Investment').then((m) => ({ default: m.Investment })));
const Portfolio = lazy(() => import('@/components/Portfolio').then((m) => ({ default: m.Portfolio })));
const Team = lazy(() => import('@/components/Team').then((m) => ({ default: m.Team })));
const Faq = lazy(() => import('@/components/Faq').then((m) => ({ default: m.Faq })));
const Events = lazy(() => import('@/components/Events').then((m) => ({ default: m.Events })));
const Contact = lazy(() => import('@/components/Contact').then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import('@/components/Footer').then((m) => ({ default: m.Footer })));

const MARQUEE_ITEMS = [
  'Property Sales', 'Rent to Own', 'Group Buying', 'Noble Property Stokvel',
  'Public Shares', 'Blacklisted Welcome', 'Strategic Locations', 'Quality Developments',
];

function Marquee() {
  return (
    <div className="relative bg-ink text-white py-4 overflow-hidden border-y border-white/10">
      <div className="flex w-max">
        {MARQUEE_ITEMS.map((item) => (
          <div key={item} className="flex items-center">
            <span className="px-6 font-display text-sm sm:text-base text-white/80 whitespace-nowrap">{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-sky-soft/70" />
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-sand text-ink">
      <Loader />
      <Navbar />
      <ScrollToTop />
      <WhatsAppFab />
      <main>
        <Hero />
        <About />
        <Suspense fallback={null}>
          <Properties />
          <Marquee />
          <Locations />
          <Gallery />
          <Investment />
          <Portfolio />
          <Team />
          <Faq />
          <Events />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
