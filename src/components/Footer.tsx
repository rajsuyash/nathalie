import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full mt-20 bg-stone-100 dark:bg-emerald-950">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 py-16 max-w-7xl mx-auto">
        <div className="space-y-4">
          <div className="text-lg font-bold text-emerald-900 dark:text-emerald-50">
            Nathalie Flusin
          </div>
          <p className="text-sm text-stone-500 dark:text-stone-400 font-body max-w-xs">
            Landscape gardener passionate about helping you create and maintain your ideal garden. ENSP Versailles graduate.
          </p>
        </div>

        <div>
          <h5 className="text-xs uppercase font-label text-emerald-900 dark:text-emerald-50 mb-6">
            Navigation
          </h5>
          <div className="flex flex-col gap-4">
            <Link
              to="/services"
              className="text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors text-sm font-body"
            >
              Services & Pricing
            </Link>
            <Link
              to="/portfolio"
              className="text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors text-sm font-body"
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="text-emerald-800 dark:text-emerald-200 underline text-sm font-body"
            >
              Contact
            </Link>
            <a
              href="mailto:nathalieflusin@orange.fr"
              className="text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors text-sm font-body"
            >
              Email
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between items-start md:items-end">
          <p className="text-xs text-stone-500 dark:text-stone-400 font-label uppercase text-left md:text-right">
            © 2024 Nathalie Flusin
            <br />
            Garden Consulting Services
          </p>
          <div className="flex gap-4 mt-8">
            <span className="material-symbols-outlined text-primary opacity-50">eco</span>
            <span className="material-symbols-outlined text-primary opacity-50">nature</span>
          </div>
        </div>
      </div>
    </footer>
  );
}