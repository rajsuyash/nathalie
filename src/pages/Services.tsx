import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <main className="pt-32 pb-20">
      <header className="max-w-7xl mx-auto px-8 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-label text-xs uppercase tracking-widest block mb-4">
              Garden Consulting
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-tight tracking-tighter">
              Transform Your <br />
              Garden <span className="text-primary italic">Vision.</span>
            </h1>
          </div>
          <p className="max-w-xs text-on-surface-variant font-light leading-relaxed mb-2">
            Personalized consulting sessions to help you become the craftsman of your own corner of nature.
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="bg-surface-container-low p-10 md:p-12 rounded-md">
            <span className="material-symbols-outlined text-primary mb-6 text-5xl">eco</span>
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">
              What I Offer
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">park</span>
                <div>
                  <h3 className="font-semibold text-on-surface mb-2">Reviving Your Garden</h3>
                  <p className="text-sm">Increase planting density, add color, harmonize flowerbeds, and experience the seasons</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">architecture</span>
                <div>
                  <h3 className="font-semibold text-on-surface mb-2">Construction Planning</h3>
                  <p className="text-sm">Refine your choice before a construction project or extension</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">deck</span>
                <div>
                  <h3 className="font-semibold text-on-surface mb-2">Outdoor Spaces</h3>
                  <p className="text-sm">Give back your welcoming terrace, care for your entry, enhance perspectives, minimize confrontations</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">compost</span>
                <div>
                  <h3 className="font-semibold text-on-surface mb-2">Thriving Garden</h3>
                  <p className="text-sm">Nourish your soil, learn proper plant combinations, discover gardening tips for easier maintenance</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">nature</span>
                <div>
                  <h3 className="font-semibold text-on-surface mb-2">Ecological Garden</h3>
                  <p className="text-sm">Tips on biodiversity and using natural products</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary text-on-primary p-10 md:p-12 rounded-md flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined mb-6 text-5xl">payments</span>
              <h2 className="font-headline text-3xl font-bold mb-8">
                Pricing
              </h2>
              <div className="space-y-8">
                <div className="border-b border-on-primary/20 pb-6">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="font-semibold text-xl">Hourly Session</h3>
                    <span className="text-3xl font-bold">€80</span>
                  </div>
                  <p className="text-on-primary/80 text-sm">
                    One hour session (travel included within 20km radius)
                  </p>
                  <p className="text-on-primary/60 text-xs mt-2">
                    Every half hour extra: €40 • 1h30 session: €120
                  </p>
                </div>

                <div className="bg-on-primary/10 p-6 rounded-md">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="font-semibold text-xl">3-Hour Package</h3>
                    <span className="text-3xl font-bold">€210</span>
                  </div>
                  <p className="text-on-primary/80 text-sm">
                    Best value for comprehensive garden transformation
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-on-primary/20">
              <p className="text-sm text-on-primary/70 italic">
                "A garden to your image — from creation to maintenance, I teach you the right techniques, combinations, and harmony of flowerbeds. You become the craftsman of your corner of nature."
              </p>
            </div>
          </div>
        </div>

        <div className="bg-surface-container p-12 md:p-16 rounded-md text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-6">
            About Nathalie Flusin
          </h2>
          <p className="text-on-surface-variant text-lg mb-4 max-w-2xl mx-auto">
            Landscape Gardener, Passionate Guide in Gardening
          </p>
          <p className="text-secondary text-sm uppercase tracking-widest mb-8">
            Higher School of Landscape Architecture of Versailles - ENSP
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+33663930764"
              className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">call</span>
              <span className="font-medium">06 63 93 07 64</span>
            </a>
            <span className="hidden md:block text-outline-variant">•</span>
            <a
              href="mailto:nathalieflusin@orange.fr"
              className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">mail</span>
              <span className="font-medium">nathalieflusin@orange.fr</span>
            </a>
          </div>
        </div>
      </section>

      <section className="mt-20 bg-surface-container px-8 py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary mb-8 tracking-tighter">
            Ready to Transform Your Garden?
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-2xl mx-auto">
            Book a consultation session and start your journey toward a thriving, ecological garden that reflects your vision.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-primary text-on-primary px-10 py-4 rounded-sm font-label text-xs uppercase tracking-widest hover:bg-primary/90 transition-all"
            >
              Request Consultation
            </Link>
            <a
              href="mailto:nathalieflusin@orange.fr"
              className="bg-transparent border border-primary/20 text-primary px-10 py-4 rounded-sm font-label text-xs uppercase tracking-widest hover:bg-primary/5 transition-all"
            >
              Email Directly
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}