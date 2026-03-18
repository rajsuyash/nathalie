import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <main className="pt-32 pb-20">
      <header className="max-w-7xl mx-auto px-8 mb-20">
        <span className="text-secondary text-xs uppercase tracking-widest font-label mb-4 block">
          {t('portfolio.label')}
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface max-w-4xl leading-tight">
          {t('portfolio.title1')}<span className="text-primary italic">{t('portfolio.title.highlight')}</span> environment.
        </h1>
        <div className="mt-12 ml-0 md:ml-32 max-w-xl">
          <p className="text-on-surface-variant text-lg leading-relaxed font-body">
            {t('portfolio.desc')}
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 group cursor-pointer">
            <div className="relative overflow-hidden rounded-md aspect-[16/10] bg-surface-container-low transition-all duration-500 group-hover:bg-surface-container">
              <img
                className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfMjuIqDc3MtHEw0XTxWQhFU12fTgclHW8CKnW4u8KHAg07pAU1jTsi6ZUw8LTH9xLU-CEfridpeue1tOgpkvWcu8pLbG2O_7LcFSYNsXPrU0r8mWjD5SUQLbGWrrBzxSYt8cip56igBuW20vl64ZBEsalb5YNlfXyTPaqEGY0RmrCEcV4E5vSqknwdvZw9dVoss85jWEb0d5AS9Jyfv6tRsnSAzR3Ig3mdaAGeQ4BDfuB9ITa3KMcbNeppopws1xyqdqJxNwK10k"
                alt="Modern geometric garden with concrete paths and lush ferns"
              />
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-primary/40 to-transparent">
                <span className="text-primary-fixed-dim text-xs uppercase tracking-widest mb-2 block font-label">
                  {t('portfolio.project1.label')}
                </span>
                <h3 className="text-on-primary text-3xl font-bold tracking-tight">
                  {t('portfolio.project1.title')}
                </h3>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 group cursor-pointer">
            <div className="relative overflow-hidden rounded-md aspect-[4/5] bg-surface-container-low">
              <img
                className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3756nDMQwWhhwGeIaPRgbBGcEKW9Ppj7gBUI1WTSF366tz_2aMKVfUE1ep9wjslIVy5qRp0VuNpNW6YZ7OVnLumpV2f8PFBvo9Usx6fEzObSn-6oWDnGdEfRPMmcBnmzvKf0QLGr4bm6Kt9X2Cq7nT-1JAj8JSUNjuBVyqX8n0alOkIlAoY-dEMamyNzGzbbqJpVzBpkcIuTOTYtNWh9AdSx6j3AxB8TOUiZWLo1ri9EN9PbICgEetwAAFl7p1i0Bgm3vHn1wu_I"
                alt="Minimalist courtyard with single olive tree and gravel"
              />
              <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-primary/40 to-transparent">
                <span className="text-primary-fixed-dim text-xs uppercase tracking-widest mb-1 block font-label">
                  {t('portfolio.project2.label')}
                </span>
                <h3 className="text-on-primary text-xl font-bold tracking-tight">
                  {t('portfolio.project2.title')}
                </h3>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 group cursor-pointer">
            <div className="relative overflow-hidden rounded-md aspect-[1/1] bg-surface-container-low">
              <img
                className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDPBLtyfTkljq_igVBkG0yviCzmmYMtLMRWRenjYm4MbzN4md3_EGm5ilMzzHej3tCqHJPmUYQLOpNpWchH__CHllrSVSZpdGKMqf066K6h8P5wtdIQKki66QBYpII0DvugUYnRbmUkkTUKP2pjGLSA-ioN7WVc5mVPC-RVzlEgDJ5ihmfQ5kawOCRU9rukJ1YgydzWDNtMmJFvxe6qgvBhb-2dWvzpuZCckUtlNMrIEnkwQeEdDM7OJDaldrCYkv54hHwKOxd8-I"
                alt="Lush wildflower meadow with architectural wooden deck"
              />
              <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-primary/40 to-transparent">
                <span className="text-primary-fixed-dim text-xs uppercase tracking-widest mb-1 block font-label">
                  {t('portfolio.project3.label')}
                </span>
                <h3 className="text-on-primary text-xl font-bold tracking-tight">
                  {t('portfolio.project3.title')}
                </h3>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 group cursor-pointer">
            <div className="relative overflow-hidden rounded-md aspect-[21/9] bg-surface-container-low">
              <img
                className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW4nk4u0oa8RoN_Edlj10LoFXGJpbPSXo2RjJCbXuidj9nytJVi7s-FiNYLsjFMx-oC3iA-8lwnzS3PsnEoGzXMLmpsuGD0RiJzTBD--jsE74BqBntuXXampXI7ofJPNHm6dAyJymqJqmlrLSTgg8TA6tXPYgCNZEHmToQ_FZwOk_AQdmbzZ5wNeoaYZxiPFqx9BaELR82TBdaZTwix3khvBDENd4MILdZKEvMTZIYEs7fPfRL6n3Ex5-NBndjrK-Wdro2C5_33U8"
                alt="Infinity edge pool overlooking a terraced pine forest"
              />
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-primary/40 to-transparent">
                <span className="text-primary-fixed-dim text-xs uppercase tracking-widest mb-2 block font-label">
                  {t('portfolio.project4.label')}
                </span>
                <h3 className="text-on-primary text-3xl font-bold tracking-tight">
                  {t('portfolio.project4.title')}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 mt-32">
        <div className="bg-surface-container-low p-1 rounded-md">
          <div className="bg-surface-container-lowest grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-sm">
            <div className="relative h-full min-h-[400px]">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB32JGHccfN_wN-xUNhAwASXM90UOEXviA857yTVMmjvAvyCI04ybBSV1cYWlLMQQOg9ID6DJ38sl3hm0N__t5pV7W9RvOYsxIs0162Lp-dc9q8cCha_-fiO3ZOR4_1eBg_jEMmJVwMXjaAibll9ACjOohSfC5GwcdpXYzxqqN9hiDw2R_Ht8KhcsySiqF95KWoWcER_o5Cpagvh0ptbuyAuTe8N4UM1W0uvcq7mLkIigjNhk6KFiJVtRTGZr2z3eneBgtVcM-7b5U"
                alt="Close up of structural green planting and limestone walls"
              />
            </div>

            <div className="p-12 md:p-20 flex flex-col justify-center">
              <span className="text-secondary text-xs uppercase tracking-widest font-label mb-6 block">
                {t('portfolio.focus.label')}
              </span>
              <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-8">
                {t('portfolio.focus.title')}
              </h2>
              <div className="space-y-6">
                <p className="text-on-surface-variant font-body leading-relaxed">
                  {t('portfolio.focus.desc')}
                </p>
                <div className="pt-8 grid grid-cols-2 gap-8">
                  <div>
                    <span className="text-on-surface font-semibold text-sm block mb-1">
                      {t('portfolio.focus.flora')}
                    </span>
                    <p className="text-on-surface-variant text-sm">
                      {t('portfolio.focus.flora.desc')}
                    </p>
                  </div>
                  <div>
                    <span className="text-on-surface font-semibold text-sm block mb-1">
                      {t('portfolio.focus.materials')}
                    </span>
                    <p className="text-on-surface-variant text-sm">
                      {t('portfolio.focus.materials.desc')}
                    </p>
                  </div>
                </div>
                <div className="pt-10">
                  <button className="flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300">
                    <span className="text-xs uppercase tracking-widest font-label">
                      {t('portfolio.focus.cta')}
                    </span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-40 bg-primary py-24 px-8 text-center">
        <h2 className="text-on-primary text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
          {t('portfolio.cta.title')}
        </h2>
        <p className="text-on-primary-container max-w-xl mx-auto mb-12 text-lg">
          {t('portfolio.cta.desc')}
        </p>
        <Link
          to="/contact"
          className="inline-block bg-secondary-container text-on-secondary-container px-10 py-4 rounded-sm font-label text-xs uppercase tracking-widest hover:bg-on-secondary transition-colors duration-300"
        >
          {t('portfolio.cta.button')}
        </Link>
      </section>
    </main>
  );
}
