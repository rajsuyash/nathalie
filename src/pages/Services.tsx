import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  return (
    <main className="pt-32 pb-20">
      <header className="max-w-7xl mx-auto px-8 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-label text-xs uppercase tracking-widest block mb-4">
              {t('services.header.label')}
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-tight tracking-tighter">
              {t('services.header.title1')} <br />
              {t('services.header.title2')} <span className="text-primary italic">{t('services.header.title.highlight')}</span>
            </h1>
          </div>
          <p className="max-w-xs text-on-surface-variant font-light leading-relaxed mb-2">
            {t('services.header.desc')}
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="bg-surface-container-low p-10 md:p-12 rounded-md">
            <span className="material-symbols-outlined text-primary mb-6 text-5xl">eco</span>
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">
              {t('services.offer.title')}
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">park</span>
                <div>
                  <h3 className="font-semibold text-on-surface mb-2">{t('services.offer.1.title')}</h3>
                  <p className="text-sm">{t('services.offer.1.desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">architecture</span>
                <div>
                  <h3 className="font-semibold text-on-surface mb-2">{t('services.offer.2.title')}</h3>
                  <p className="text-sm">{t('services.offer.2.desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">deck</span>
                <div>
                  <h3 className="font-semibold text-on-surface mb-2">{t('services.offer.3.title')}</h3>
                  <p className="text-sm">{t('services.offer.3.desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">compost</span>
                <div>
                  <h3 className="font-semibold text-on-surface mb-2">{t('services.offer.4.title')}</h3>
                  <p className="text-sm">{t('services.offer.4.desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">nature</span>
                <div>
                  <h3 className="font-semibold text-on-surface mb-2">{t('services.offer.5.title')}</h3>
                  <p className="text-sm">{t('services.offer.5.desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary text-on-primary p-10 md:p-12 rounded-md flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined mb-6 text-5xl">payments</span>
              <h2 className="font-headline text-3xl font-bold mb-8">
                {t('services.pricing.title')}
              </h2>
              <div className="space-y-8">
                <div className="border-b border-on-primary/20 pb-6">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="font-semibold text-xl">{t('services.pricing.hourly.title')}</h3>
                    <span className="text-3xl font-bold">&euro;80</span>
                  </div>
                  <p className="text-on-primary/80 text-sm">
                    {t('services.pricing.hourly.desc')}
                  </p>
                  <p className="text-on-primary/60 text-xs mt-2">
                    {t('services.pricing.hourly.extra')}
                  </p>
                </div>

                <div className="bg-on-primary/10 p-6 rounded-md">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="font-semibold text-xl">{t('services.pricing.package.title')}</h3>
                    <span className="text-3xl font-bold">&euro;210</span>
                  </div>
                  <p className="text-on-primary/80 text-sm">
                    {t('services.pricing.package.desc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-on-primary/20">
              <p className="text-sm text-on-primary/70 italic">
                {t('services.pricing.quote')}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-surface-container p-12 md:p-16 rounded-md text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-6">
            {t('services.about.title')}
          </h2>
          <p className="text-on-surface-variant text-lg mb-4 max-w-2xl mx-auto">
            {t('services.about.subtitle')}
          </p>
          <p className="text-secondary text-sm uppercase tracking-widest mb-8">
            {t('services.about.school')}
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+33663930764"
              className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">call</span>
              <span className="font-medium">06 63 93 07 64</span>
            </a>
            <span className="hidden md:block text-outline-variant">&bull;</span>
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
            {t('services.cta.title')}
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-2xl mx-auto">
            {t('services.cta.desc')}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-primary text-on-primary px-10 py-4 rounded-sm font-label text-xs uppercase tracking-widest hover:bg-primary/90 transition-all"
            >
              {t('services.cta.button1')}
            </Link>
            <a
              href="mailto:nathalieflusin@orange.fr"
              className="bg-transparent border border-primary/20 text-primary px-10 py-4 rounded-sm font-label text-xs uppercase tracking-widest hover:bg-primary/5 transition-all"
            >
              {t('services.cta.button2')}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
