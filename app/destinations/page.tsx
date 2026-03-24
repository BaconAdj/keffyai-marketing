import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/lib/destinations';

export const metadata = {
  title: 'Destinations — Keffy',
  description: 'Explore curated 3-day itineraries for the world\'s most captivating cities.',
};

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-[#F5EFE6]">

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <header className="bg-[#20304A] px-6 py-3 flex items-center justify-between sticky top-0 z-50 border-b border-[#C4943A]/20">
        <Link href="/" className="no-underline">
          <Image src="/images/keffy-logo-nb.png" alt="Keffy" width={110} height={44} className="object-contain" priority />
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/destinations" className="text-[#C4943A] text-sm no-underline font-semibold">Destinations</Link>
          <a
            href="https://keffy.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C4943A] hover:bg-[#e0b05a] text-[#20304A] px-5 py-2 text-xs font-bold uppercase tracking-widest transition-colors rounded no-underline"
          >
            Plan with Keffy
          </a>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section
        className="relative py-20 px-6 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #20304A 0%, #2a4272 60%, #20304A 100%)' }}
      >
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(196,148,58,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(196,148,58,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="relative">
          <p className="text-[#C4943A] text-sm uppercase tracking-[0.2em] mb-4 font-light">Curated by Keffy</p>
          <h1 className="text-5xl md:text-6xl font-light text-white tracking-tight mb-5">3-Day Itineraries</h1>
          <p className="text-white/70 text-lg max-w-lg mx-auto leading-relaxed font-light mb-8">
            Every itinerary is paired with handpicked hotels, tours, and booking links. Use them
            as-is, or let Keffy customize a trip around you.
          </p>
          <div className="w-14 h-px bg-[#C4943A]/60 mx-auto" />
        </div>
      </section>

      {/* ── GRID ────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {destinations.map((dest) => (
            <Link key={dest.slug} href={`/destinations/${dest.slug}`} className="block no-underline group">
              <article className="rounded-xl overflow-hidden bg-white shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer h-full flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={dest.heroImage}
                    alt={`${dest.name}, ${dest.country}`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-2xl block mb-1">{dest.emoji}</span>
                    <h2 className="font-light text-white text-2xl leading-tight drop-shadow">{dest.name}</h2>
                    <p className="text-white/60 text-xs uppercase tracking-widest mt-0.5">{dest.country}</p>
                  </div>
                  <span className="absolute top-4 right-4 bg-[#C4943A]/90 text-[#20304A] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    3 Days
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[#4a4040] text-sm leading-relaxed mb-4 flex-1">{dest.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {dest.itinerary.map((day) => (
                      <span key={day.day} className="bg-[#F5EFE6] text-[#20304A] text-xs px-2.5 py-1 rounded-full font-medium">
                        Day {day.day}: {day.title}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-[#EDE8DF] pt-3.5 flex justify-between items-center">
                    <span className="text-[#8a7a66] text-xs uppercase tracking-wider">Explore {dest.name}</span>
                    <span className="text-[#C4943A] text-sm font-semibold group-hover:translate-x-1 transition-transform">View →</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 text-center" style={{ background: 'linear-gradient(135deg, #20304A 0%, #2a4272 100%)' }}>
        <p className="text-[#C4943A] text-sm uppercase tracking-[0.2em] mb-3 font-light">Don&apos;t see your destination?</p>
        <h2 className="text-4xl font-light text-white tracking-tight mb-4">Let Keffy plan it for you</h2>
        <p className="text-white/65 text-lg max-w-md mx-auto leading-relaxed font-light mb-10">
          Tell us where you want to go and Keffy will build a personalized itinerary — hotels,
          tours, transfers, and everything in between.
        </p>
        <a
          href="https://keffy.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#C4943A] hover:bg-[#e0b05a] text-[#20304A] px-10 py-4 text-sm font-bold uppercase tracking-widest transition-colors rounded no-underline"
        >
          Start Planning at Keffy.ai
        </a>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="bg-[#141e2e] py-6 px-6 text-center">
        <Link href="/" className="no-underline inline-block mb-3">
          <Image src="/images/keffy-logo-nb.png" alt="Keffy" width={90} height={36} className="object-contain opacity-60 mx-auto" />
        </Link>
        <p className="text-white/30 text-xs">© {new Date().getFullYear()} Keffy · Powered by AI. Guided by Experience.</p>
      </footer>
    </main>
  );
}
