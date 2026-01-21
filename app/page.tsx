import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy/95 to-navy/90 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(201, 169, 97, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
          <div className="keffy-logo text-gold text-7xl md:text-9xl mb-6">
            Keffy
          </div>
          <h1 className="text-3xl md:text-5xl text-white font-light mb-6 tracking-wide">
            Your Personal Travel Concierge
          </h1>
          <p className="text-xl md:text-2xl text-sand/90 mb-12 max-w-3xl mx-auto font-light">
            Experience the world through the eyes of a luxury travel consultant, 
            powered by artificial intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="#waitlist" className="btn-primary text-lg">
              Join the Waitlist
            </Link>
            <Link href="#about" className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-navy text-lg">
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-sand">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="heading-medium mb-8">Above All Is the Experience</h2>
            <div className="space-y-6 text-body">
              <p>
                Keffy brings the wisdom and warmth of a seasoned travel consultant to everyone. 
                We believe travel planning should be a joy, not a chore—a conversation with someone 
                who genuinely cares about creating your perfect journey.
              </p>
              <p>
                Like a trusted friend who knows all the hidden gems, Keffy combines deep travel 
                expertise with modern technology to curate experiences that bring genuine happiness. 
                We don't just book trips; we craft memories.
              </p>
              <p className="text-gold font-semibold text-xl pt-6">
                Curating extraordinary journeys, one conversation at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="heading-medium text-center mb-16">How Keffy Works</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {/* Step 1 */}
            <div className="text-center animate-slide-up">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="heading-small mb-4">Share Your Dreams</h3>
              <p className="text-body">
                Tell Keffy about your ideal trip in natural conversation. 
                Where you want to go, what excites you, how you love to travel.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="heading-small mb-4">Curated Recommendations</h3>
              <p className="text-body">
                Keffy crafts personalized suggestions combining luxury travel expertise 
                with deep knowledge of destinations worldwide.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-small mb-4">Seamless Booking</h3>
              <p className="text-body">
                Book everything through trusted partners with a single click. 
                Keffy handles the details so you can focus on the excitement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section bg-sand">
        <div className="container-custom">
          <h2 className="heading-medium text-center mb-16">Destinations Await</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* Replace these with your actual images */}
            {[
              { src: '/images/photo1.jpg', alt: 'Destination 1' },
              { src: '/images/photo2.jpg', alt: 'Destination 2' },
              { src: '/images/photo3.jpg', alt: 'Destination 3' },
              { src: '/images/photo4.jpg', alt: 'Destination 4' },
              { src: '/images/photo5.jpg', alt: 'Destination 5' },
              { src: '/images/photo6.jpg', alt: 'Destination 6' },
              { src: '/images/photo7.jpg', alt: 'Destination 7' },
              { src: '/images/photo8.jpg', alt: 'Destination 8' },
            ].map((photo, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon / Waitlist Section */}
      <section id="waitlist" className="section bg-navy text-white">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h2 className="heading-medium text-white mb-6">Coming Soon</h2>
          <p className="text-xl text-sand/90 mb-12">
            Keffy is preparing to welcome travelers who seek more than just a booking platform. 
            Join our waitlist to be among the first to experience travel planning reimagined.
          </p>
          
          {/* Email Signup Form */}
          <WaitlistForm />

          {/* Social Media Links */}
          <div className="space-y-4">
            <p className="text-sand/80">Follow our journey:</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-gold hover:text-sand transition-colors" aria-label="Instagram">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gold hover:text-sand transition-colors" aria-label="TikTok">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a href="#" className="text-gold hover:text-sand transition-colors" aria-label="Facebook">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gold hover:text-sand transition-colors" aria-label="Twitter">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy/95 text-sand/70 py-12 px-6">
        <div className="container-custom text-center">
          <div className="keffy-logo text-gold text-5xl mb-4">Keffy</div>
          <p className="text-sm">© 2025 Keffy. All rights reserved.</p>
          <p className="text-xs mt-2">Powered by AI. Guided by Experience.</p>
        </div>
      </footer>
    </main>
  );
}
