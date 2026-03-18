import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'garden-revival',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <main className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-8 mb-20">
        <div className="flex flex-col md:flex-row items-end gap-12">
          <div className="flex-1">
            <span className="text-secondary text-xs uppercase tracking-[0.2em] font-label mb-4 block">
              Book a Consultation
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-[1.1]">
              Let's Create Your <br /> <span className="text-primary italic">Garden.</span>
            </h1>
          </div>
          <div className="flex-1 md:max-w-md pb-4">
            <p className="text-on-surface-variant leading-relaxed font-body">
              Whether you want to revive your garden, plan a construction project, or evolve toward an ecological sanctuary, personalized consulting will help you achieve your vision.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 space-y-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-secondary font-label mb-6">
                Contact Channels
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest font-label mb-1">
                      Electronic Mail
                    </p>
                    <a href="mailto:nathalieflusin@orange.fr" className="text-on-surface font-body font-medium hover:text-primary transition-colors">
                      nathalieflusin@orange.fr
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest font-label mb-1">
                      Direct Line
                    </p>
                    <a href="tel:+33663930764" className="text-on-surface font-body font-medium hover:text-primary transition-colors">06 63 93 07 64</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-secondary font-label mb-6">
                Professional Background
              </h3>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">school</span>
                <div className="font-body text-on-surface leading-relaxed">
                  Higher School of Landscape Architecture
                  <br />
                  Versailles - ENSP
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-secondary font-label mb-6">
                Service Area
              </h3>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <div className="font-body text-on-surface leading-relaxed">
                  Within 20km radius
                  <br />
                  <span className="text-sm text-on-surface-variant">Travel included in pricing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden bg-surface-container-low aspect-square rounded-md">
            <img
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpBlt7Wzq0GkUQIWlaNbirGMH7ctHnN9xc3Fcrhlr2gFnfAnvGmahV6ZERbNnum_L-P7x8mMqGNvn8AvFdkuypCkF_fGdxIicgXP7Sjb3B6Elbv_7DbSwn8srFFb3clsmEwJJoPrDhMmgPoln4v4-b4i38cu8gfgKXvaE6Z87ZOsXlWSEjl-Hlt7ameGBUl_daLcWGu4PPHlDFPXaF0sGuctzA7ypRAwnaE--lEybyTq44lH23Z6FERGoZMfWLGZmut2O_vIn4C1s"
              alt="Top down architectural garden design blueprint"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-surface-container-lowest/90 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] font-label text-primary mb-2">
                Expert Guidance
              </p>
              <p className="text-sm font-body text-on-surface">
                Passionate landscape gardener helping you craft your natural sanctuary.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 bg-surface-container-low p-8 md:p-12 rounded-md">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label
                  className="text-xs uppercase tracking-widest font-label text-on-surface-variant"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary focus:bg-surface-container-high transition-all font-body text-on-surface placeholder:text-outline-variant/60"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Elias Thorne"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-xs uppercase tracking-widest font-label text-on-surface-variant"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary focus:bg-surface-container-high transition-all font-body text-on-surface placeholder:text-outline-variant/60"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="elias@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-xs uppercase tracking-widest font-label text-on-surface-variant">
                Service Interest
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="cursor-pointer group">
                  <input
                    className="hidden peer"
                    type="radio"
                    name="project_type"
                    value="garden-revival"
                    checked={formData.projectType === 'garden-revival'}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  />
                  <span className="px-6 py-2 border border-outline-variant peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-transparent text-sm font-body transition-all inline-block hover:border-primary">
                    Garden Revival
                  </span>
                </label>
                <label className="cursor-pointer group">
                  <input
                    className="hidden peer"
                    type="radio"
                    name="project_type"
                    value="construction"
                    checked={formData.projectType === 'construction'}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  />
                  <span className="px-6 py-2 border border-outline-variant peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-transparent text-sm font-body transition-all inline-block hover:border-primary">
                    Construction Planning
                  </span>
                </label>
                <label className="cursor-pointer group">
                  <input
                    className="hidden peer"
                    type="radio"
                    name="project_type"
                    value="ecological"
                    checked={formData.projectType === 'ecological'}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  />
                  <span className="px-6 py-2 border border-outline-variant peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-transparent text-sm font-body transition-all inline-block hover:border-primary">
                    Ecological Garden
                  </span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label
                className="text-xs uppercase tracking-widest font-label text-on-surface-variant"
                htmlFor="message"
              >
                Your Garden Vision
              </label>
              <textarea
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary focus:bg-surface-container-high transition-all font-body text-on-surface placeholder:text-outline-variant/60 resize-none"
                id="message"
                name="message"
                rows={5}
                placeholder="Describe your current garden situation and what you'd like to achieve..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>

            <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant max-w-xs font-label opacity-60">
                By submitting, you request a consultation session. Nathalie will respond within 48 hours to schedule your appointment.
              </p>
              <button
                className="w-full md:w-auto bg-primary text-on-primary px-12 py-4 text-xs uppercase tracking-[0.2em] font-label rounded-sm hover:opacity-95 active:scale-95 transition-all shadow-lg shadow-primary/10"
                type="submit"
              >
                Request Consultation
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 mt-32">
        <div className="bg-surface-container p-12 md:p-20 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <span className="text-3xl font-headline font-bold text-primary">01</span>
              <h4 className="text-xs uppercase tracking-widest font-label text-on-surface">
                Consultation
              </h4>
              <p className="text-sm font-body text-on-surface-variant leading-relaxed">
                A site visit to understand the topography and your specific aesthetic vision.
              </p>
            </div>
            <div className="space-y-4">
              <span className="text-3xl font-headline font-bold text-primary">02</span>
              <h4 className="text-xs uppercase tracking-widest font-label text-on-surface">
                Conceptualization
              </h4>
              <p className="text-sm font-body text-on-surface-variant leading-relaxed">
                Detailed blueprints and plant palettes curated specifically for your zone.
              </p>
            </div>
            <div className="space-y-4">
              <span className="text-3xl font-headline font-bold text-primary">03</span>
              <h4 className="text-xs uppercase tracking-widest font-label text-on-surface">
                Execution
              </h4>
              <p className="text-sm font-body text-on-surface-variant leading-relaxed">
                Implementation with rigorous attention to structural integrity and health.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}