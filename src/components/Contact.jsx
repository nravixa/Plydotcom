import React from 'react';
import { Phone, MapPin, ExternalLink } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Contact() {
  const { contact, business } = siteContent;

  return (
    <section id="contact" className="py-12 sm:py-24 bg-[#FAF7F2] sm:bg-[#FAF6EF] relative border-t border-[#D8B98A]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile & Tablet View Layout (< lg) matching mockup */}
        <div className="lg:hidden max-w-xl md:max-w-4xl mx-auto">
          {/* Top Area: Text on Left, Inset Interior Image on Right */}
          <div className="relative mb-6 min-h-[160px] md:min-h-0">
            {/* Subtle Inset Image on Right with smooth gradient fade */}
            <div className="absolute -top-3 -right-4 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 overflow-hidden pointer-events-none">
              <img
                src="/images/hero_mobile_interior.jpg"
                alt="Ply Dot Com interior setting"
                className="w-full h-full object-cover object-right"
              />
              {/* Fade overlays on left and bottom to blend smoothly into the cream background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-transparent" />
            </div>

            <div className="relative z-10 max-w-[240px] xs:max-w-[270px] sm:max-w-md">
              <span className="text-xs font-bold tracking-[0.2em] text-[#9C6D38] uppercase block mb-1.5">
                {contact.badge}
              </span>
              <h2 className="text-[28px] xs:text-[30px] sm:text-4xl font-black text-[#1E140E] leading-[1.12] tracking-tight mb-2.5">
                <span className="block">Let’s Build</span>
                <span className="block">Better Spaces</span>
                <span className="block">Together.</span>
              </h2>
              <p className="text-[12.5px] xs:text-[13px] sm:text-sm text-[#6E655F] leading-snug">
                {contact.subheading}
              </p>
            </div>
          </div>

          {/* Cards: 1 Column on Mobile, 2 Columns on Tablet */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
            {/* Dark Walnut Contact Card */}
            <div className="bg-[#241710] rounded-[22px] p-5 sm:p-6 text-white shadow-warm-lg flex flex-col justify-between">
              <div>
                {/* Location Section */}
                <div className="flex items-start gap-3.5 mb-5">
                  <MapPin className="w-5 h-5 text-[#D69A52] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-bold tracking-[0.18em] text-[#D69A52] uppercase block mb-1">
                      OUR LOCATION
                    </span>
                    <p className="text-[13px] text-[#F6F1E8] font-normal leading-relaxed">
                      Sr No 48, 11//2, Sus - Pashan Rd,<br />
                      near Shell Petrol Pump, Tapkir Vasti,<br />
                      Sus, Pune, Maharashtra 411021
                    </p>
                  </div>
                </div>

                {/* Phone Section */}
                <div className="flex items-start gap-3.5 mb-6">
                  <Phone className="w-5 h-5 text-[#D69A52] shrink-0 mt-0.5 fill-current" />
                  <div>
                    <span className="text-[11px] font-bold tracking-[0.18em] text-[#D69A52] uppercase block mb-1">
                      CALL US
                    </span>
                    <a
                      href={`tel:${business.phoneTel}`}
                      className="text-[15px] font-semibold text-[#F6F1E8] hover:text-[#D69A52] transition-colors"
                    >
                      {business.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2.5">
                {/* Call Now Button */}
                <a
                  href={`tel:${business.phoneTel}`}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-6 rounded-xl bg-[#D69A52] hover:bg-[#c68940] text-[#1E130B] font-semibold text-sm transition-all duration-200 active:scale-98 shadow-md cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call Now</span>
                </a>

                {/* Get Directions Button */}
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-6 rounded-xl border border-[#D69A52]/80 hover:bg-[#D69A52]/10 text-[#F6F1E8] font-semibold text-sm transition-all duration-200 active:scale-98 cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 text-[#F6F1E8]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" transform="rotate(45 12 12)" />
                    <polyline points="9 13 12 10 15 13" />
                  </svg>
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Map Preview Card */}
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-[22px] overflow-hidden border border-[#EDE5D8] shadow-[0_2px_12px_rgba(42,27,20,0.06)] group transition-transform duration-300 active:scale-98"
              title="Open in Google Maps"
            >
              <img
                src="/images/map_sus_pune.jpg"
                alt="Map location of Ply Dot Com near Shell Petrol Pump on Sus - Pashan Rd, Pune"
                className="w-full h-full min-h-[220px] object-cover object-center group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        {/* Desktop View Layout (>= lg) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Subheading & CTAs */}
          <div className="lg:col-span-5 contact-text-block">
            <span className="text-xs font-bold tracking-widest text-[#9C6D38] uppercase block mb-2">
              {contact.badge}
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A1B14] leading-tight tracking-tight mb-4">
              {contact.heading}
            </h2>

            <p className="text-base text-[#6E655F] leading-relaxed mb-8">
              {contact.subheading}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`tel:${business.phoneTel}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#D69A52] hover:bg-[#c68940] text-[#1E130B] font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Now</span>
              </a>

              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#2A1B14] text-[#2A1B14] hover:bg-[#2A1B14] hover:text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Dark Contact Card & Map Card */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Dark Walnut Contact Card */}
            <div className="bg-[#241710] rounded-2xl p-7 text-white shadow-warm-lg">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 text-[#D69A52] text-xs font-bold uppercase tracking-wider mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>OUR LOCATION</span>
                  </div>
                  <p className="text-sm text-[#F6F1E8] leading-relaxed">
                    {business.address.full}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[#D69A52] text-xs font-bold uppercase tracking-wider mb-2">
                    <Phone className="w-4 h-4 fill-current" />
                    <span>CALL US</span>
                  </div>
                  <a
                    href={`tel:${business.phoneTel}`}
                    className="text-lg font-bold text-[#F6F1E8] hover:text-[#D69A52] transition-colors"
                  >
                    {business.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Map Preview Card */}
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border border-[#D8B98A]/40 shadow-warm-md group"
              title="Open in Google Maps"
            >
              <img
                src="/images/map_sus_pune.jpg"
                alt="Map location of Ply Dot Com near Shell Petrol Pump on Sus - Pashan Rd, Pune"
                className="w-full h-64 object-cover object-center group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
