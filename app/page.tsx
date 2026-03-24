import Image from 'next/image';
import Link from 'next/link';
import DestinationsPreview from '@/components/DestinationsPreview';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#20304A]">

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#20304A] border-b border-[#C4943A]/20">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
            <Link href="/" className="no-underline">
            <Image
              src="/images/keffy-logo-nb.png"
              alt="Keffy"
              width={110}
              height={44}
              className="object-contain"
              priority
            />
          </Link>
          <div className="flex items-center gap-6">
            <Link href="#about" className="text-white/70 hover:text-white text-sm transition-colors no-underline">
              About
            </Link>
            <Link href="/destinations" className="text-white/70 hover:text-[#C4943A] text-sm transition-colors no-underline">
              Destinations
            </Link>
            <a
              href="https://keffy.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C4943A] hover:bg-[#e0b05a] text-[#20304A] px-5 py-2 text-sm font-bold uppercase tracking-widest transition-colors rounded no-underline"
            >
              Try Keffy
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#20304A] via-[#20304A]/90 to-[#20304A]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(196,148,58,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(196,148,58,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-[#C4943A] text-lg uppercase tracking-[0.2em] mb-4 font-light">
            Your Personal Travel Concierge
          </p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight tracking-tight">
            Experience Travel{' '}
            <span className="text-[#C4943A]">Differently</span>
          </h1>
          <p className="text-white/70 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Experience seamless travel with the assistance of a luxury travel consultant powered
            by artificial intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://keffy.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C4943A] hover:bg-[#e0b05a] text-[#20304A] px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors rounded no-underline"
            >
              Try Keffy Early Beta
            </a>
            <Link
              href="/destinations"
              className="border border-[#C4943A] text-[#C4943A] hover:bg-[#C4943A] hover:text-[#20304A] px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors rounded no-underline"
            >
              Browse Itineraries
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────────── */}
      <section id="about" className="bg-[#F5EFE6] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C4943A] text-lg uppercase tracking-[0.2em] mb-4 font-light">
            Our Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#20304A] mb-8 tracking-tight">
            Above All Is the Experience
          </h2>
          <p className="text-[#3a3530] text-lg md:text-xl leading-relaxed mb-6 font-light">
            Keffy brings the wisdom and warmth of a seasoned travel consultant to everyone. We
            believe travel planning should be a joy, not a chore — a conversation with someone
            who genuinely cares about creating your perfect journey.
          </p>
          <p className="text-[#3a3530] text-lg md:text-xl leading-relaxed font-light">
            Like a trusted friend who knows all the hidden gems, Keffy combines deep travel
            expertise with modern technology to curate experiences that bring genuine happiness.
            We don&apos;t just book trips; we craft memories.
          </p>
          <div className="mt-10 w-16 h-px bg-[#C4943A] mx-auto" />
          <p className="mt-6 text-[#8a7a66] italic text-lg">
            Curating extraordinary journeys, one conversation at a time.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────── */}
      <section className="bg-[#20304A] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C4943A] text-lg uppercase tracking-[0.2em] mb-4 font-light">
              Simple by design
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
              How Keffy Works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                num: '01',
                title: 'Share Your Dreams',
                body: 'Tell Keffy about your ideal trip in natural conversation. Where you want to go, what excites you, how you love to travel.',
              },
              {
                num: '02',
                title: 'Curated Recommendations',
                body: 'Keffy crafts personalized suggestions combining luxury travel expertise with deep knowledge of destinations worldwide.',
              },
              {
                num: '03',
                title: 'Seamless Booking',
                body: 'Book everything through trusted partners with a single click. Keffy handles the details so you can focus on the excitement.',
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="text-[#C4943A] font-light text-5xl mb-4 opacity-60">{step.num}</div>
                <div className="w-12 h-px bg-[#C4943A]/40 mx-auto mb-6" />
                <h3 className="text-white text-xl font-light mb-4">{step.title}</h3>
                <p className="text-white/60 leading-relaxed font-light">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ───────────────────────────────────────────── */}
      <section className="bg-[#F5EFE6] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4943A] text-lg uppercase tracking-[0.2em] mb-4 font-light">
              The world awaits
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-[#20304A] tracking-tight">
              Destinations Await
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="aspect-square relative overflow-hidden rounded-lg bg-[#20304A]/10">
                <Image
                  src={`/images/photo${n}.jpg`}
                  alt={`Destination ${n}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS PREVIEW ────────────────────────────────────── */}
      <DestinationsPreview />

      {/* ── BOTTOM CTA ──────────────────────────────────────────────── */}
      <section className="bg-[#20304A] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#C4943A] text-lg uppercase tracking-[0.2em] mb-4 font-light">
            Ready to go?
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Try Keffy Today
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed font-light">
            Keffy is live in early beta! Start planning your next adventure with AI-powered travel
            expertise. We&apos;d love your feedback as we continue to improve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href="https://keffy.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C4943A] hover:bg-[#e0b05a] text-[#20304A] px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors rounded no-underline"
            >
              Start Planning at Keffy.ai
            </a>
            <a
              href="mailto:general@keffyai.com?subject=Keffy%20Feedback&body=Hi%20Keffy%20team%2C%0A%0AI'd%20like%20to%20share%20some%20feedback%3A%0A%0A"
              className="border border-[#C4943A] text-[#C4943A] hover:bg-[#C4943A] hover:text-[#20304A] px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors rounded no-underline"
            >
              Share Feedback
            </a>
          </div>

          <p className="text-white/50 text-xs uppercase tracking-widest mb-6">Follow our journey</p>
          <div className="flex justify-center gap-6">
            <a href="https://www.instagram.com/keffy.ai" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#C4943A] transition-colors" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@keffy.ai" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#C4943A] transition-colors" aria-label="TikTok">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>
            </a>
            <a href="https://www.facebook.com/keffy.ai" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#C4943A] transition-colors" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.x.com/keffyai" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#C4943A] transition-colors" aria-label="X">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="bg-[#141e2e] py-8 px-6 text-center">
        <div className="flex justify-center mb-4">
          <Image
            src="/images/keffy-logo-nb.png"
            alt="Keffy"
            width={100}
            height={40}
            className="object-contain opacity-70"
          />
        </div>
        <p className="text-white/30 text-sm">© {new Date().getFullYear()} Keffy. All rights reserved.</p>
        <p className="text-white/20 text-xs mt-1">Powered by AI. Guided by Experience.</p>
      </footer>
    </main>
  );
}
