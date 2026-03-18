import { FormEvent, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'garden-revival',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/nathalieflusin@orange.fr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          'Service Type': formData.projectType,
          message: formData.message,
          _subject: `Nouveau contact jardin - ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', projectType: 'garden-revival', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-8 mb-20">
        <div className="flex flex-col md:flex-row items-end gap-12">
          <div className="flex-1">
            <span className="text-secondary text-xs uppercase tracking-[0.2em] font-label mb-4 block">
              {t('contact.label')}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-[1.1]">
              {t('contact.title1')} <br /> <span className="text-primary italic">{t('contact.title.highlight')}</span>
            </h1>
          </div>
          <div className="flex-1 md:max-w-md pb-4">
            <p className="text-on-surface-variant leading-relaxed font-body">
              {t('contact.desc')}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 space-y-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-secondary font-label mb-6">
                {t('contact.channels')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest font-label mb-1">
                      {t('contact.email.label')}
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
                      {t('contact.phone.label')}
                    </p>
                    <a href="tel:+33663930764" className="text-on-surface font-body font-medium hover:text-primary transition-colors">06 63 93 07 64</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-secondary font-label mb-6">
                {t('contact.background')}
              </h3>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">school</span>
                <div className="font-body text-on-surface leading-relaxed">
                  {t('contact.school')}
                  <br />
                  {t('contact.school.location')}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-secondary font-label mb-6">
                {t('contact.area')}
              </h3>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <div className="font-body text-on-surface leading-relaxed">
                  {t('contact.area.radius')}
                  <br />
                  <span className="text-sm text-on-surface-variant">{t('contact.area.note')}</span>
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
                {t('contact.expert.label')}
              </p>
              <p className="text-sm font-body text-on-surface">
                {t('contact.expert.desc')}
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
                  {t('contact.form.name')}
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary focus:bg-surface-container-high transition-all font-body text-on-surface placeholder:text-outline-variant/60"
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t('contact.form.name.placeholder')}
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
                  {t('contact.form.email')}
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary focus:bg-surface-container-high transition-all font-body text-on-surface placeholder:text-outline-variant/60"
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t('contact.form.email.placeholder')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                className="text-xs uppercase tracking-widest font-label text-on-surface-variant"
                htmlFor="phone"
              >
                {t('contact.form.phone')}
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary focus:bg-surface-container-high transition-all font-body text-on-surface placeholder:text-outline-variant/60"
                id="phone"
                name="phone"
                type="tel"
                placeholder={t('contact.form.phone.placeholder')}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="space-y-4">
              <label className="text-xs uppercase tracking-widest font-label text-on-surface-variant">
                {t('contact.form.service')}
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
                    {t('contact.form.service.revival')}
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
                    {t('contact.form.service.construction')}
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
                    {t('contact.form.service.ecological')}
                  </span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label
                className="text-xs uppercase tracking-widest font-label text-on-surface-variant"
                htmlFor="message"
              >
                {t('contact.form.message')}
              </label>
              <textarea
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary focus:bg-surface-container-high transition-all font-body text-on-surface placeholder:text-outline-variant/60 resize-none"
                id="message"
                name="message"
                rows={5}
                placeholder={t('contact.form.message.placeholder')}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>

            {status === 'success' && (
              <div className="bg-primary/10 text-primary p-6 rounded-md text-center font-body">
                {language === 'fr'
                  ? 'Merci ! Votre demande a bien \u00e9t\u00e9 envoy\u00e9e. Nathalie vous r\u00e9pondra sous 48 heures.'
                  : 'Thank you! Your request has been sent. Nathalie will respond within 48 hours.'}
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-50 text-red-700 p-6 rounded-md text-center font-body">
                {language === 'fr'
                  ? 'Une erreur est survenue. Veuillez r\u00e9essayer ou envoyer un email directement.'
                  : 'An error occurred. Please try again or send an email directly.'}
              </div>
            )}

            <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant max-w-xs font-label opacity-60">
                {t('contact.form.disclaimer')}
              </p>
              <button
                className="w-full md:w-auto bg-primary text-on-primary px-12 py-4 text-xs uppercase tracking-[0.2em] font-label rounded-sm hover:opacity-95 active:scale-95 transition-all shadow-lg shadow-primary/10 disabled:opacity-50"
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending'
                  ? (language === 'fr' ? 'Envoi en cours...' : 'Sending...')
                  : t('contact.form.submit')}
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
                {t('contact.process.1.title')}
              </h4>
              <p className="text-sm font-body text-on-surface-variant leading-relaxed">
                {t('contact.process.1.desc')}
              </p>
            </div>
            <div className="space-y-4">
              <span className="text-3xl font-headline font-bold text-primary">02</span>
              <h4 className="text-xs uppercase tracking-widest font-label text-on-surface">
                {t('contact.process.2.title')}
              </h4>
              <p className="text-sm font-body text-on-surface-variant leading-relaxed">
                {t('contact.process.2.desc')}
              </p>
            </div>
            <div className="space-y-4">
              <span className="text-3xl font-headline font-bold text-primary">03</span>
              <h4 className="text-xs uppercase tracking-widest font-label text-on-surface">
                {t('contact.process.3.title')}
              </h4>
              <p className="text-sm font-body text-on-surface-variant leading-relaxed">
                {t('contact.process.3.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
