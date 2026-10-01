import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Hero({ onOpenEnquiry }) {
  const { hero, business } = siteContent;

  const scrollToProducts = (e) => {
    e.preventDefault();
    const target = document.querySelector('#products');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between bg-[#2A1B14] text-white pt-28 pb-12 overflow-hidden"
    >
      {/* Background Image with Dark Walnut Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.bgImage}
          alt="Modern wooden interior showcasing premium plywood craftsmanship"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Multilayer gradient for atmospheric depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A1B14]/95 via-[#2A1B14]/80 to-[#2A1B14]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A1B14] via-transparent to-[#2A1B14]/60" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="max-w-2xl lg:max-w-3xl hero-content-block">
          {/* Tagline Badge */}
          <div className="hero-anim-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D8B98A]/15 border border-[#D8B98A]/30 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B98A]"></span>
            <span className="text-xs font-semibold tracking-widest text-[#D8B98A] uppercase">
              {hero.badge}
            </span>
          </div>

          {/* Business Brand Heading */}
          <h1 className="hero-anim-item text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3">
            PLY DOT COM
          </h1>

          {/* Headline */}
          <h2 className="hero-anim-item text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#F6F1E8] leading-tight mb-5">
            {hero.subtitle}
          </h2>

          {/* Description */}
          <p className="hero-anim-item text-base sm:text-lg text-[#F6F1E8]/85 font-normal leading-relaxed max-w-xl mb-8">
            {hero.description}
          </p>

          {/* Action Buttons */}
          <div className="hero-anim-item flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              href={`tel:${business.phoneTel}`}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#D8B98A] text-[#2A1B14] font-semibold text-sm sm:text-base hover:bg-[#c9a773] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{hero.primaryCta}</span>
            </a>

            <a
              href="#products"
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F6F1E8] border border-white/25 font-semibold text-sm sm:text-base backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{hero.secondaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-[#F6F1E8]/70">
          <div className="flex items-center space-x-2 font-medium tracking-wide">
            {hero.categories.map((cat, idx) => (
              <React.Fragment key={cat}>
                <span>{cat}</span>
                {idx < hero.categories.length - 1 && (
                  <span className="text-[#D8B98A]/50">/</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center space-x-4 font-mono text-xs text-[#D8B98A]">
            {hero.indicators.map((ind, idx) => (
              <span
                key={ind}
                className={`${idx === 0 ? 'text-white font-bold border-b border-[#D8B98A] pb-0.5' : 'text-white/40'}`}
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
