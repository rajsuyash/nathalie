import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-90 transition-transform duration-[20s] hover:scale-110"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAb7Djz2OLJH1hwpfD9u4uUzWLWTVOxJ8tLVzcSRFBJ1BJ_fA8lD6H21KORp--HVoF1u1mA74ZA1gE9PFAShpjw2NLNA4JCkay2IXzwZTv3wQx2I4NeYm_p3tnGU20Lszfb6Ee7NbY0HHch0OEAUCj3gVU8MgaQmvda1O0iNG8YtIjuOFvtzD-azPdLGFdhiDYVJQddOGecfG3BfCEpvw_CB27TZlpI4edD641sptnKg7_ntL2GdVv3TNGVAlziTrcOCojua-XWJxs')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-20">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-secondary font-medium mb-4 block">
              Garden Consulting
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold text-on-surface leading-[0.95] tracking-tighter mb-8">
              Craft Your <br /> <span className="text-primary">Garden.</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg mb-12 font-light leading-relaxed">
              Personalized consulting to help you transform your garden into a thriving, ecological sanctuary. Learn the right techniques and become the craftsman of your corner of nature.
            </p>
            <div className="flex items-center space-x-8">
              <Link
                to="/portfolio"
                className="bg-primary text-on-primary px-10 py-4 rounded-sm text-sm uppercase tracking-widest font-bold shadow-2xl shadow-primary/20 hover:translate-y-[-2px] transition-all"
              >
                View Portfolio
              </Link>
              <Link
                to="/contact"
                className="group flex items-center space-x-2 text-primary font-semibold tracking-wide"
              >
                <span className="text-sm uppercase tracking-widest">Inquiry</span>
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 right-8 hidden lg:block">
          <div className="flex flex-col items-end space-y-4">
            <div className="w-16 h-[1px] bg-primary"></div>
            <span className="text-xs uppercase tracking-[0.2em] vertical-rl rotate-180 text-primary font-bold">
              Est. 2024
            </span>
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface-container-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-on-surface mb-6">
                What You'll <br /> Learn & Achieve
              </h2>
            </div>
            <p className="text-sm uppercase tracking-widest text-secondary font-bold border-b border-secondary/20 pb-2">
              Consulting Services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-outline-variant/10">
            <div className="group bg-surface-container-lowest p-12 transition-all hover:bg-primary hover:text-on-primary duration-500">
              <span className="text-4xl font-headline font-extrabold mb-8 block opacity-20 group-hover:opacity-100 transition-opacity">
                01
              </span>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Garden Revival</h3>
              <p className="text-on-surface-variant group-hover:text-on-primary/80 mb-10 leading-relaxed font-light">
                Increase planting density, add vibrant color, harmonize flowerbeds, and create a garden that evolves beautifully through the seasons.
              </p>
              <span className="material-symbols-outlined text-4xl">park</span>
            </div>

            <div className="group bg-surface-container-lowest p-12 transition-all hover:bg-primary hover:text-on-primary duration-500">
              <span className="text-4xl font-headline font-extrabold mb-8 block opacity-20 group-hover:opacity-100 transition-opacity">
                02
              </span>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Thriving Ecosystem</h3>
              <p className="text-on-surface-variant group-hover:text-on-primary/80 mb-10 leading-relaxed font-light">
                Learn to nourish your soil, discover optimal plant combinations, and master gardening techniques for easier, sustainable maintenance.
              </p>
              <span className="material-symbols-outlined text-4xl">compost</span>
            </div>

            <div className="group bg-surface-container-lowest p-12 transition-all hover:bg-primary hover:text-on-primary duration-500">
              <span className="text-4xl font-headline font-extrabold mb-8 block opacity-20 group-hover:opacity-100 transition-opacity">
                03
              </span>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Ecological Living</h3>
              <p className="text-on-surface-variant group-hover:text-on-primary/80 mb-10 leading-relaxed font-light">
                Embrace biodiversity and natural products to create a garden that supports local ecosystems and thrives in harmony with nature.
              </p>
              <span className="material-symbols-outlined text-4xl">eco</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl font-bold tracking-tighter">Recent Commissions</h2>
            <div className="flex items-center space-x-4">
              <div className="h-[2px] w-24 bg-surface-container-highest"></div>
              <span className="text-xs uppercase tracking-widest font-bold text-secondary">
                A Curated Archive
              </span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 h-auto md:h-[800px]">
            <div className="col-span-12 md:col-span-8 relative overflow-hidden rounded-sm group">
              <img
                alt="Modern pool house landscape"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHLwP4pkiNl2T2iIB-nv_yrwDBSks3p1g5a72oJ54vYjIft4HBuBDzrqrotOvr4qKXl2UZB7OkQftXb0qXPlxj8cSh_xDb9vGS6rNp_d_VHHBloC5X_MxA1o-MdgLyETtkL7PwrTp1DyJ7wUYlajp7LiNTOfzjFBKmKVqMDrJaMGLtnpvWyyyPrlh3nJc65RgSKBrKLG8JccDMwak2Q0I3EGf57rGRtTJspObdp6LRlOsRKMAKu7tNIBcVw-AR2QW06FW-SZh8V8E"
              />
              <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/60 to-transparent w-full">
                <p className="text-white/60 text-xs uppercase tracking-widest mb-2">
                  Private Residence — Aspen
                </p>
                <h4 className="text-white text-2xl font-bold">The Alpine Sanctuary</h4>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-8">
              <div className="relative overflow-hidden rounded-sm group">
                <img
                  alt="Modern garden path"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhhIfF2kvQzhL6A7fdhOKdTSnwJCLWh68HPs-1efRZjOg3l61kbRqIsdnYjmbF54RLCgoEveGkFPEcsdcAwKhdhuL3eN9mnygp5YY9c4fclb9pqra-wiz8pajTe4Tq0BWEE24bmtCZNqPkMTBLjZzy5XDsOQCsHXB8fNlnbq9GEIyojggrVaWR9U475c28nVLVbKru4gWMoxxXFzLhLUklNuI3jIM3_e_RU4kvg4cd9DR_BdsugFigUGJJmtfSSifTURzdoLVh-EA"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="relative overflow-hidden rounded-sm group">
                <img
                  alt="Minimalist courtyard"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEowrQHaJuP7Jnw8rWviEiegQ_3bGhMraO74nFZMfkW8cAb5jI9Gr9sUKtqLgUaVmEe6Jfr7fJLSIKV0Zo-ORJlPf8ebVenMZfbX2aHRMKwep6cLbJXfMqrC0bAWjxqDiyXWa1gIUBeMJwZJxOHTTKG9LbFMuQvAS-4Sy7cDXVuj2oxdJ4TbZMTEzK8ubvrQPPVqWatrP6PVB0qrdFVFAWTF0ZZqYr3PT9Vv8FTwK5e0K8QKkH8XqfdYl6eSu5DyI2ULaWXnYc_kQ"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface-container relative">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] bg-surface-container-highest rounded-sm overflow-hidden shadow-2xl">
              <img
                alt="Founder at work"
                className="w-full h-full object-cover grayscale sepia-[.2]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOnvRx5dCr0NoJiSfGAKmuFBHRNOfmdTI_hTc0wB8oVpRr6wR2r-j2D5KZqsbNw2IBM_E7vpIHQ7bNS6JMo_UwZNC38Sj86PZaYCZQkgoohGkgwYq2zuqlWGFSIZy4EyrfOAc7HwjA4FNwjVoDuhoX6F2wv9EN6j9ic95eHNH5YkD1U8qGsGSvvA9qHrIXzI6hAVitvlKbBjeFngiJ6z3uDlM3G9zCqFM23m8Cy3BKEtVs5q8LdPiLG5yCALeAYTE5WpyG7BexQt4"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-primary text-on-primary p-10 hidden lg:block rounded-sm max-w-xs">
              <p className="text-sm italic leading-relaxed font-light">
                "A garden to your image — you become the craftsman of your corner of nature."
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <span className="text-xs uppercase tracking-widest text-secondary font-bold mb-6 block">
              About Nathalie
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">
              Your Guide to Garden <span className="text-primary italic">Mastery</span>.
            </h2>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed mb-10">
              Landscape gardener passionate about helping you become the craftsman of your own corner of nature. Trained at the prestigious Higher School of Landscape Architecture of Versailles (ENSP), I share my expertise to help you create and maintain a garden that reflects your vision.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">
                    Personalized Learning
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    From creation to maintenance, learn the right techniques, combinations, and harmony for your unique space.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">
                    Practical Expertise
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    Hands-on guidance for construction planning, terrace design, and creating welcoming outdoor spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-on-primary">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            Begin Your Garden Transformation
          </h2>
          <p className="text-on-primary/70 text-lg mb-4 max-w-2xl mx-auto font-light">
            Book a personalized consulting session and learn to create the garden of your dreams.
          </p>
          <p className="text-on-primary/90 text-xl mb-12 font-semibold">
            €80/hour • 3-hour package: €210
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-block bg-secondary-container text-on-secondary-container px-12 py-5 rounded-sm text-sm uppercase tracking-[0.2em] font-extrabold hover:bg-white transition-colors"
            >
              Request a Consultation
            </Link>
            <a
              href="mailto:nathalieflusin@orange.fr"
              className="inline-block bg-transparent border-2 border-on-primary text-on-primary px-12 py-5 rounded-sm text-sm uppercase tracking-[0.2em] font-extrabold hover:bg-on-primary hover:text-primary transition-colors"
            >
              Email Nathalie
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}