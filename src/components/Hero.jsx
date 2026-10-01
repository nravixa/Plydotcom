import React from 'react';
import { Phone, ArrowRight, MapPin } from 'lucide-react';
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

  const scrollToAbout = (e) => {
    e.preventDefault();
    const target = document.querySelector('#about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] h-[100dvh] sm:min-h-screen sm:h-auto flex flex-col justify-between bg-[#2A1B14] text-white pt-20 sm:pt-28 pb-4 sm:pb-12 overflow-hidden"
    >
      {/* Background Image with Responsive Mobile/Desktop Handling */}
      <div className="absolute inset-0 z-0">
        <picture className="w-full h-full block">
          <source
            media="(max-width: 767px)"
            srcSet={hero.bgMobileImage || '/images/hero_mobile_interior.jpg'}
          />
          <img
            src={hero.bgImage}
            alt="Modern wooden interior showcasing premium plywood craftsmanship"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          />
        </picture>
        {/* Multilayer gradient for atmospheric depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent sm:from-[#2A1B14]/95 sm:via-[#2A1B14]/80 sm:to-[#2A1B14]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 sm:from-[#2A1B14]/60 sm:via-transparent sm:to-[#2A1B14]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full my-auto py-4 sm:py-12">
        <div className="max-w-2xl lg:max-w-3xl hero-content-block">
          
          {/* Tagline Badge / Mobile Subtitle */}
          <div className="hero-anim-item mb-2.5 sm:mb-4">
            {/* Desktop badge */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D8B98A]/15 border border-[#D8B98A]/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8B98A]"></span>
              <span className="text-xs font-semibold tracking-widest text-[#D8B98A] uppercase">
                {hero.badge}
              </span>
            </div>

            {/* Mobile Subtitle matching reference */}
            <p className="sm:hidden text-[13px] font-semibold tracking-[0.2em] text-[#E8DCCB] uppercase leading-relaxed">
              QUALITY PLYWOOD<br />FOR BETTER SPACES
            </p>
          </div>

          {/* Business Brand Heading */}
          <h1 className="hero-anim-item text-[44px] xs:text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3 sm:mb-4 leading-[1.04] sm:leading-tight">
            <span className="block sm:inline">PLY DOT </span>
            <span className="block sm:inline">COM</span>
          </h1>

          {/* Desktop Headline */}
          <h2 className="hidden sm:block hero-anim-item text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#F6F1E8] leading-tight mb-5">
            {hero.subtitle}
          </h2>

          {/* Description */}
          <p className="hero-anim-item text-[15px] sm:text-lg text-[#EDE6DC] font-normal leading-relaxed max-w-[280px] xs:max-w-xs sm:max-w-xl mb-6 sm:mb-8">
            Reliable plywood solutions for furniture, interiors and construction needs.
          </p>

          {/* Action Buttons */}
          <div className="hero-anim-item flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
            <a
              href={`tel:${business.phoneTel}`}
              className="inline-flex items-center justify-center gap-2.5 w-[190px] sm:w-auto px-6 sm:px-7 py-3.5 rounded-full bg-[#D69A52] hover:bg-[#c68940] text-[#1E130B] font-semibold text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{hero.primaryCta}</span>
            </a>

            <a
              href="#products"
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center gap-2 w-[190px] sm:w-auto px-6 sm:px-7 py-3.5 rounded-full bg-black/35 hover:bg-black/50 text-[#F6F1E8] border border-white/35 font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-lg"
            >
              <span>{hero.secondaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Row: Location on Left, Scroll absolutely centered */}
      <div className="sm:hidden relative z-10 w-full px-5 pb-5 pt-1 flex items-center justify-between">
        {/* Location Pin */}
        <a
          href={business.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/95 hover:text-white transition-opacity z-10"
        >
          <MapPin className="w-4 h-4 text-white flex-shrink-0" />
          <div className="text-[12px] leading-tight font-medium text-white/95">
            <div>{hero.location?.line1 || "Sas - Parve,"}</div>
            <div>{hero.location?.line2 || "Pune"}</div>
          </div>
        </a>

        {/* Scroll Indicator Centered */}
        <a
          href="#about"
          onClick={scrollToAbout}
          className="absolute left-1/2 -translate-x-1/2 bottom-5 flex flex-col items-center gap-1.5 text-white/80 hover:text-white transition-opacity"
        >
          <span className="text-[10px] tracking-[0.25em] font-medium uppercase text-white/85">
            SCROLL
          </span>
          <div className="w-8 h-[2.5px] bg-white/80 rounded-full"></div>
        </a>

        {/* Space reservation for floating WhatsApp */}
        <div className="w-12 h-6" aria-hidden="true"></div>
      </div>

      {/* Desktop & Tablet Hero Bottom Bar */}
      <div className="hidden sm:block relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 pb-2 border-t border-white/10">
        <div className="flex flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#F6F1E8]/70">
          {/* Location Pin Link */}
          <a
            href={business.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/90 hover:text-white transition-opacity group cursor-pointer"
            title="Open Sus, Pune location on Google Maps"
          >
            <MapPin className="w-4 h-4 text-[#D8B98A] group-hover:scale-110 transition-transform" />
            <span className="font-medium text-white/90">
              {hero.location?.line1 || "Sas - Parve,"} {hero.location?.line2 || "Pune"}
            </span>
          </a>

          {/* Categories */}
          <div className="hidden md:flex items-center space-x-2 font-medium tracking-wide">
            {hero.categories.map((cat, idx) => (
              <React.Fragment key={cat}>
                <span>{cat}</span>
                {idx < hero.categories.length - 1 && (
                  <span className="text-[#D8B98A]/50">/</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Scroll Down Action & Indicators */}
          <div className="flex items-center gap-6">
            <a
              href="#about"
              onClick={scrollToAbout}
              className="flex items-center gap-2 text-xs text-white/80 hover:text-[#D8B98A] transition-colors cursor-pointer group"
              title="Scroll to About section"
            >
              <span className="tracking-widest uppercase font-mono text-[11px]">SCROLL</span>
              <div className="w-5 h-[2px] bg-white/60 group-hover:bg-[#D8B98A] transition-colors"></div>
            </a>

            <div className="hidden lg:flex items-center space-x-3 font-mono text-xs text-[#D8B98A]">
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
      </div>
    </section>
  );
}
