import React from 'react';
import { Phone, MapPin, Navigation, ExternalLink } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Contact() {
  const { contact, business } = siteContent;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF6EF] relative border-t border-[#D8B98A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Subheading & CTAs */}
          <div className="lg:col-span-5 contact-text-block">
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#6B4226] hover:text-[#2A1B14] uppercase mb-2 group transition-colors cursor-pointer"
              title="Open PLY DOT COM on Google Maps"
            >
              <span>{contact.badge}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </a>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1B14] leading-tight tracking-tight mb-4">
              {contact.heading}
            </h2>

            <p className="text-base text-[#6E655F] leading-relaxed mb-8">
              {contact.subheading}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`tel:${business.phoneTel}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#6B4226] hover:bg-[#53331c] text-white font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Now</span>
              </a>

              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#6B4226] text-[#6B4226] hover:bg-[#6B4226]/10 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Address & Storefront Card */}
          <div className="lg:col-span-7 contact-info-block">
            <div className="bg-white rounded-2xl border border-[#D8B98A]/40 overflow-hidden shadow-warm-lg">
              
              {/* Address and Phone Row */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Address Item (Clickable to Maps) */}
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-2 -m-2 rounded-xl hover:bg-[#FAF6EF] transition-colors cursor-pointer"
                  title="View PLY DOT COM on Google Maps"
                >
                  <div className="p-3 rounded-xl bg-[#FAF6EF] border border-[#D8B98A]/40 text-[#6B4226] shrink-0 mt-0.5 group-hover:bg-[#6B4226] group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xs font-bold text-[#6B4226] uppercase tracking-wider mb-1">
                        Our Location &bull; PLY DOT COM
                      </h3>
                      <ExternalLink className="w-3.5 h-3.5 text-[#6B4226]/60 group-hover:text-[#6B4226] group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-sm sm:text-base text-[#222222] font-medium leading-snug group-hover:text-[#6B4226] transition-colors">
                      {business.address.full}
                    </p>
                  </div>
                </a>

                {/* Phone Item */}
                <div className="flex items-center gap-4 pt-4 border-t border-[#D8B98A]/25">
                  <div className="p-3 rounded-xl bg-[#FAF6EF] border border-[#D8B98A]/40 text-[#6B4226] shrink-0">
                    <Phone className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#6B4226] uppercase tracking-wider mb-1">
                      Call Directly
                    </h3>
                    <a
                      href={`tel:${business.phoneTel}`}
                      className="text-lg sm:text-xl font-bold text-[#2A1B14] hover:text-[#6B4226] transition-colors"
                    >
                      {business.phone}
                    </a>
                  </div>
                </div>

              </div>

              {/* Storefront / Showroom Real Photo Banner (Clickable to Maps) */}
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative h-64 sm:h-72 w-full overflow-hidden border-t border-[#D8B98A]/30 cursor-pointer"
                title="View on Google Maps"
              >
                <img
                  src={contact.storefrontImage}
                  alt="Ply Dot Com showroom and timber distribution facility"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-between p-4">
                  <span className="text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D8B98A]" />
                    Sus - Pashan Branch, Pune
                  </span>
                  <span className="text-xs font-semibold text-[#D8B98A] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#D8B98A]/30 flex items-center gap-1 group-hover:bg-[#6B4226] group-hover:text-white transition-colors">
                    <span>View on Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
