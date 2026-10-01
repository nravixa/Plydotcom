import React from 'react';
import { ShieldCheck, Layers, Headphones, MapPin } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function WhyUs() {
  const { whyUs } = siteContent;

  const getFeatureIcon = (iconName) => {
    const iconClasses = "w-9 h-9 sm:w-10 sm:h-10 text-[#9C6D38] stroke-[1.8]";
    switch (iconName) {
      case 'ShieldCheck':
      case 'Gem':
        return <ShieldCheck className={iconClasses} />;
      case 'Layers':
        return <Layers className={iconClasses} />;
      case 'Headphones':
        return <Headphones className={iconClasses} />;
      case 'MapPin':
        return <MapPin className={iconClasses} />;
      default:
        return <ShieldCheck className={iconClasses} />;
    }
  };

  return (
    <section id="why-us" className="py-12 sm:py-28 bg-[#FAF7F2] sm:bg-[#F6F1E8] relative overflow-hidden">
      {/* Right side wood planks accent image for desktop */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/3 z-0 pointer-events-none opacity-40 mix-blend-multiply">
        <img
          src={whyUs.bgImage}
          alt="Layered high-quality wood planks"
          className="w-full h-full object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F6F1E8] via-[#F6F1E8]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6 sm:mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#9C6D38] uppercase block mb-1.5 sm:mb-2">
            {whyUs.badge}
          </span>
          <h2 className="text-[30px] sm:text-4xl lg:text-5xl font-black text-[#1E140E] sm:text-[#2A1B14] tracking-tight leading-[1.12] sm:leading-tight">
            <span className="block sm:inline">Simple Reasons </span>
            <span className="block sm:inline">to Choose Us.</span>
          </h2>
        </div>

        {/* 2x2 Grid on Mobile, 4 Columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {whyUs.items.map((item) => (
            <div
              key={item.id}
              className="why-us-item group p-4 sm:p-7 rounded-2xl bg-white border border-[#EDE5D8] sm:border-[#D8B98A]/30 shadow-[0_2px_10px_rgba(42,27,20,0.03)] sm:shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-3 sm:mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {getFeatureIcon(item.icon)}
              </div>
              <h3 className="text-[15px] sm:text-lg font-bold text-[#1E140E] sm:text-[#2A1B14] leading-tight mb-2">
                {item.title}
              </h3>
              <p className="text-[11.5px] sm:text-sm text-[#786F66] sm:text-[#6E655F] leading-snug sm:leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Showcase Banner Image matching reference mockup */}
        <div className="mt-4 sm:mt-8 rounded-2xl overflow-hidden border border-[#EDE5D8] shadow-[0_2px_12px_rgba(42,27,20,0.05)]">
          <img
            src={whyUs.showcaseImage || '/images/why_us_interior.jpg'}
            alt="Modern interior showcasing finished plywood cabinetry and dining setup"
            className="w-full h-48 xs:h-56 sm:h-80 lg:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}
