'use client';

import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/lib/destinations';

const PREVIEW_COUNT = 6;

export default function DestinationsPreview() {
  const preview = destinations.slice(0, PREVIEW_COUNT);

  return (
    <section className="bg-[#F5EFE6] py-24 px-6">
      <div className="text-center mb-14">
        <p className="text-[#C4943A] text-lg uppercase tracking-[0.2em] mb-4 font-light">Ready to go?</p>
        <h2 className="text-4xl md:text-5xl font-light text-[#20304A] tracking-tight mb-5">
          Featured 3-Day Itineraries
        </h2>
        <p className="text-[#5a5050] text-lg max-w-xl mx-auto leading-relaxed font-light">
          Curated hotels, tours, and day-by-day plans — with direct booking links and a Keffy
          concierge behind every trip.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {preview.map((dest) => (
          <Link key={dest.slug} href={`/destinations/${dest.slug}`} className="block no-underline group">
            <article className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer">

              {/* 16:9 natural aspect ratio */}
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={dest.heroImage}
                  alt={`${dest.name}, ${dest.country}`}
                  fill
                  quality={90}
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-lg block mb-0.5">{dest.emoji}</span>
                  <h3 className="font-light text-white text-xl leading-tight drop-shadow">{dest.name}</h3>
                  <p className="text-white/55 text-xs uppercase tracking-widest mt-0.5">{dest.country}</p>
                </div>
                <span className="absolute top-3 right-3 bg-[#C4943A]/90 text-[#20304A] text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  3 Days
                </span>
              </div>

              <div className="p-5">
                <p className="text-[#4a4040] text-sm leading-relaxed mb-4 line-clamp-2">{dest.tagline}</p>
                <div className="border-t border-[#EDE8DF] pt-3.5 flex justify-between items-center">
                  <span className="text-[#8a7a66] text-xs uppercase tracking-wider">Explore {dest.name}</span>
                  <span className="text-[#C4943A] text-sm font-semibold group-hover:translate-x-1 transition-transform">View →</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link href="/destinations"
          className="inline-block bg-[#20304A] hover:bg-[#2a4272] text-white px-10 py-4 text-sm font-bold uppercase tracking-widest transition-colors rounded no-underline">
          View All Destinations
        </Link>
      </div>
    </section>
  );
}
