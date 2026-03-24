import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { destinations, getDestinationBySlug } from '@/lib/destinations';

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const dest = getDestinationBySlug(params.slug);
  if (!dest) return {};
  return {
    title: `${dest.name}, ${dest.country} — 3-Day Itinerary | Keffy`,
    description: dest.description,
  };
}

const TIER_STYLES = {
  Luxury:   { badge: 'bg-amber-50 text-amber-800 border border-amber-300',  bar: 'bg-amber-400' },
  Boutique: { badge: 'bg-blue-50 text-blue-800 border border-blue-300',    bar: 'bg-blue-400'  },
  Value:    { badge: 'bg-green-50 text-green-800 border border-green-300', bar: 'bg-green-500' },
};

const TYPE_BADGE: Record<string, string> = {
  Tour:       'bg-blue-50 text-blue-700',
  Activity:   'bg-purple-50 text-purple-700',
  'Day Trip': 'bg-amber-50 text-amber-700',
  Experience: 'bg-green-50 text-green-700',
};

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const dest = getDestinationBySlug(params.slug);
  if (!dest) notFound();

  return (
    <main className="min-h-screen bg-[#F5EFE6]">

      {/* ── STICKY NAV ──────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-[#20304A] border-b border-[#C4943A]/20 px-6 py-3 flex items-center justify-between">
        <Link href="/" className="no-underline">
          <Image src="/images/keffy-logo-nb.png" alt="Keffy" width={110} height={44} className="object-contain" priority />
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/destinations" className="text-white/60 hover:text-white text-sm no-underline transition-colors hidden sm:block">
            ← All Destinations
          </Link>
          <a
            href={`https://keffy.ai?destination=${dest.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C4943A] hover:bg-[#e0b05a] text-[#20304A] px-5 py-2 text-xs font-bold uppercase tracking-widest transition-colors rounded no-underline"
          >
            Plan This Trip
          </a>
        </div>
      </nav>

      {/* ── HERO PHOTO ──────────────────────────────────────────────── */}
      <header className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={dest.heroImage}
          alt={`${dest.name}, ${dest.country}`}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-6 text-center">
          <p className="text-[#C4943A] text-sm uppercase tracking-[0.2em] mb-2 drop-shadow">
            3-Day Itinerary
          </p>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight leading-none drop-shadow-lg mb-2">
            {dest.name}
          </h1>
          <p className="text-white/60 text-xs uppercase tracking-[0.2em] mb-4">{dest.country}</p>
          <p className="text-white/85 text-base md:text-lg font-light max-w-xl leading-relaxed drop-shadow">
            {dest.tagline}
          </p>
        </div>
      </header>

      {/* ── QUICK INFO BAR ──────────────────────────────────────────── */}
      <div className="bg-white border-b border-[#EDE8DF] px-6 py-4 flex justify-center gap-8 md:gap-14 flex-wrap">
        {[
          { label: 'Duration',  value: '3 Days' },
          { label: 'Best Time', value: dest.bestTime },
          { label: 'Hotels',    value: 'Luxury · Boutique · Value' },
          { label: 'Tours',     value: `${dest.tours.length} Experiences` },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <p className="text-[#8a7a66] text-xs uppercase tracking-widest mb-0.5">{item.label}</p>
            <p className="text-[#20304A] text-sm font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* ── BODY ────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-16">

        {/* About */}
        <section>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-px bg-[#C4943A]" />
            <h2 className="text-[#20304A] text-xl font-light tracking-tight">About This Trip</h2>
            <div className="flex-1 h-px bg-[#EDE8DF]" />
          </div>
          <p className="text-[#3a3530] text-lg leading-relaxed font-light">{dest.description}</p>
        </section>

        {/* Itinerary */}
        <section>
          <div className="flex items-center gap-4 mb-7">
            <div className="w-10 h-px bg-[#C4943A]" />
            <h2 className="text-[#20304A] text-xl font-light tracking-tight">Your 3-Day Itinerary</h2>
            <div className="flex-1 h-px bg-[#EDE8DF]" />
          </div>
          <div className="space-y-4">
            {dest.itinerary.map((day) => (
              <div key={day.day} className="bg-white rounded-xl shadow-sm overflow-hidden flex">
                <div
                  className="w-16 flex-shrink-0 flex flex-col items-center justify-center gap-0.5 py-6"
                  style={{ background: 'linear-gradient(180deg, #20304A, #2a4272)' }}
                >
                  <span className="text-[#C4943A]/70 text-xs uppercase tracking-wider">Day</span>
                  <span className="text-[#C4943A] text-3xl font-light leading-none">{day.day}</span>
                </div>
                <div className="p-5 flex-1">
                  <h3 className="text-[#20304A] text-sm font-semibold mb-3 tracking-tight">{day.title}</h3>
                  <div className="space-y-2.5">
                    {day.highlights.map((h, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C4943A] flex-shrink-0 mt-1.5" />
                        <div>
                          <span className="text-[#1a2a4a] text-sm font-semibold">{h.name}</span>
                          {h.note && <span className="text-[#8a7a66] text-sm"> — {h.note}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hotels */}
        <section>
          <div className="flex items-center gap-4 mb-7">
            <div className="w-10 h-px bg-[#C4943A]" />
            <h2 className="text-[#20304A] text-xl font-light tracking-tight">Where to Stay</h2>
            <div className="flex-1 h-px bg-[#EDE8DF]" />
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {dest.hotels.map((hotel) => {
              const s = TIER_STYLES[hotel.tier];
              return (
                <div key={hotel.name} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className={`h-1 w-full ${s.bar}`} />
                  <div className="p-5 flex flex-col flex-1 gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-[#20304A] text-sm font-semibold leading-snug flex-1">{hotel.name}</h3>
                      <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0 ${s.badge}`}>
                        {hotel.tier}
                      </span>
                    </div>
                    <p className="text-[#4a4040] text-sm leading-relaxed font-light flex-1">{hotel.description}</p>
                    <div className="flex gap-2 pt-1">
                      <a
                        href={hotel.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#20304A] hover:bg-[#2a4272] text-white text-center py-2.5 rounded text-xs font-semibold uppercase tracking-wide transition-colors no-underline"
                      >
                        Book on Booking.com
                      </a>
                      <a
                        href={`https://keffy.ai?destination=${dest.slug}&hotel=${encodeURIComponent(hotel.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#C4943A] hover:bg-[#e0b05a] text-[#20304A] px-3 py-2.5 rounded text-xs font-bold transition-colors no-underline whitespace-nowrap"
                      >
                        Ask Keffy
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tours */}
        <section>
          <div className="flex items-center gap-4 mb-7">
            <div className="w-10 h-px bg-[#C4943A]" />
            <h2 className="text-[#20304A] text-xl font-light tracking-tight">Tours & Experiences</h2>
            <div className="flex-1 h-px bg-[#EDE8DF]" />
          </div>
          <div className="space-y-4">
            {dest.tours.map((tour) => (
              <div key={tour.name} className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-5">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <h3 className="text-[#20304A] text-sm font-semibold">{tour.name}</h3>
                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${TYPE_BADGE[tour.type] ?? 'bg-gray-100 text-gray-700'}`}>
                      {tour.type}
                    </span>
                  </div>
                  <p className="text-[#5a5050] text-sm leading-relaxed font-light">{tour.description}</p>
                </div>
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <a
                    href={tour.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#20304A] hover:bg-[#2a4272] text-white px-4 py-2.5 rounded text-xs font-semibold uppercase tracking-wide transition-colors no-underline text-center whitespace-nowrap"
                  >
                    Book on Tiqets
                  </a>
                  <a
                    href={`https://keffy.ai?destination=${dest.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#C4943A] text-[#C4943A] hover:bg-[#C4943A] hover:text-[#20304A] px-4 py-2.5 rounded text-xs font-semibold text-center transition-colors no-underline whitespace-nowrap"
                  >
                    Ask Keffy
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Keffy CTA */}
        <section
          className="rounded-2xl p-12 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #20304A 0%, #2a4272 100%)' }}
        >
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(196,148,58,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(196,148,58,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          <div className="relative">
            <p className="text-[#C4943A] text-sm uppercase tracking-[0.2em] mb-3 font-light">Make it yours</p>
            <h2 className="text-white text-3xl font-light tracking-tight mb-4">
              Want a personalized version of this trip?
            </h2>
            <p className="text-white/70 text-base leading-relaxed max-w-md mx-auto mb-8 font-light">
              Tell Keffy your dates, budget, travel style, and group size. We&apos;ll build a fully
              customized {dest.name} itinerary — and handle every booking.
            </p>
            <a
              href={`https://keffy.ai?destination=${dest.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C4943A] hover:bg-[#e0b05a] text-[#20304A] px-10 py-4 rounded text-sm font-bold uppercase tracking-widest transition-colors no-underline"
            >
              Plan My {dest.name} Trip →
            </a>
            <p className="text-[#C4943A]/50 text-xs mt-4 uppercase tracking-wider">
              No added cost · Commission-based · Free to use
            </p>
          </div>
        </section>
      </div>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="bg-[#141e2e] py-6 px-6 text-center">
        <Link href="/destinations" className="text-[#C4943A]/50 hover:text-[#C4943A] no-underline mr-6 text-xs">
          ← All Destinations
        </Link>
        <Link href="/" className="no-underline inline-block">
          <Image src="/images/keffy-logo-nb.png" alt="Keffy" width={80} height={32} className="object-contain opacity-50 mx-auto mt-3" />
        </Link>
        <p className="text-white/30 text-xs mt-2">© {new Date().getFullYear()} Keffy · Powered by AI. Guided by Experience.</p>
      </footer>
    </main>
  );
}
