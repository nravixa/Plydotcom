import React from 'react';
import { Gem, Layers, Headphones, MapPin } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function WhyUs() {
  const { whyUs } = siteContent;

  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'Gem':
        return <Gem className="w-6 h-6 text-[#6B4226]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#6B4226]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#6B4226]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#6B4226]" />;
      default:
        return <Gem className="w-6 h-6 text-[#6B4226]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#F6F1E8] relative overflow-hidden">
      {/* Right side wood planks accent image with seamless gradient blending */}
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
        <div className="mb-14">
          <span className="text-xs font-bold tracking-widest text-[#6B4226] uppercase block mb-2">
            {whyUs.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1B14] tracking-tight">
            {whyUs.heading}
          </h2>
        </div>

        {/* 4 Feature Columns / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {whyUs.items.map((item, index) => (
            <div
              key={item.id}
              className="why-us-item group p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#D8B98A]/30 shadow-warm-sm hover:shadow-warm-md hover:bg-white transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF6EF] border border-[#D8B98A]/40 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#D8B98A]/20 transition-all duration-300">
                {getFeatureIcon(item.icon)}
              </div>
              <h3 className="text-lg font-bold text-[#2A1B14] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#6E655F] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
