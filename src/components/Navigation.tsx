import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Language switcher bar */}
      <div className="bg-primary text-on-primary">
        <div className="flex justify-end items-center max-w-7xl mx-auto px-8 py-1.5">
          <div className="flex items-center gap-1 text-xs font-label uppercase tracking-widest">
            <button
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1 rounded-sm transition-all ${
                language === 'fr'
                  ? 'bg-on-primary text-primary font-bold'
                  : 'text-on-primary/70 hover:text-on-primary'
              }`}
            >
              FR
            </button>
            <span className="text-on-primary/30">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-sm transition-all ${
                language === 'en'
                  ? 'bg-on-primary text-primary font-bold'
                  : 'text-on-primary/70 hover:text-on-primary'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-stone-50/80 dark:bg-emerald-950/80 backdrop-blur-md">
        <div className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
          <Link
            to="/"
            className="text-xl font-bold tracking-tighter text-emerald-900 dark:text-emerald-50 font-headline"
          >
            Nathalie Flusin
          </Link>

          <div className="hidden md:flex items-center gap-12">
            <Link
              to="/services"
              className={`text-xs uppercase tracking-widest font-label transition-colors ${
                isActive('/services')
                  ? 'text-emerald-900 dark:text-emerald-50 font-semibold border-b-2 border-emerald-800 dark:border-emerald-200 pb-1'
                  : 'text-stone-600 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-200'
              }`}
            >
              {t('nav.services')}
            </Link>
            <Link
              to="/portfolio"
              className={`text-xs uppercase tracking-widest font-label transition-colors ${
                isActive('/portfolio')
                  ? 'text-emerald-900 dark:text-emerald-50 font-semibold border-b-2 border-emerald-800 dark:border-emerald-200 pb-1'
                  : 'text-stone-600 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-200'
              }`}
            >
              {t('nav.portfolio')}
            </Link>
            <Link
              to="/contact"
              className="bg-primary text-on-primary px-6 py-2 rounded-sm text-xs uppercase tracking-widest font-label hover:opacity-90 active:scale-95 transition-all duration-200"
            >
              {t('nav.contact')}
            </Link>
          </div>

          <button
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-stone-50 dark:bg-emerald-950 px-8 py-6 border-t border-outline-variant/20">
            <div className="flex flex-col gap-4">
              <Link
                to="/services"
                className="text-xs uppercase tracking-widest font-label text-stone-600 dark:text-stone-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
              <Link
                to="/portfolio"
                className="text-xs uppercase tracking-widest font-label text-stone-600 dark:text-stone-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.portfolio')}
              </Link>
              <Link
                to="/contact"
                className="bg-primary text-on-primary px-6 py-2 rounded-sm text-xs uppercase tracking-widest font-label text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
