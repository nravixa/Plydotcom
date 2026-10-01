import React from 'react';
import { CheckCircle2, Layers, MapPin } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function About() {
  const { about } = siteContent;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck':
      case 'CheckCircle':
        return <CheckCircle2 className="w-5 h-5 text-[#6B4226]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#6B4226]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#6B4226]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#6B4226]" />;
    }
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F6F1E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with natural warm styling */}
          <div className="lg:col-span-6 about-image-container">
            <div className="relative group">
              {/* Subtle background decoration accent */}
              <div className="absolute -inset-3 bg-[#D8B98A]/25 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              
              <div className="relative overflow-hidden rounded-xl bg-[#FAF6EF] border border-[#D8B98A]/40 shadow-warm-lg">
                <img
                  src={about.image}
                  alt="Premium stacked plywood sheets ready for furniture and interiors"
                  className="w-full h-80 sm:h-96 md:h-[420px] object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 about-text-container">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-widest text-[#6B4226] uppercase">
                {about.badge}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1B14] leading-tight tracking-tight mb-6">
              {about.heading}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#222222]/85 font-normal leading-relaxed mb-10">
              {about.description}
            </p>

            {/* 3 Core Highlights */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 border-t border-[#D8B98A]/30">
              {about.highlights.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3 p-3 rounded-xl bg-white/50 border border-[#D8B98A]/25 shadow-warm-sm"
                >
                  <div className="p-2 rounded-lg bg-[#FAF6EF] border border-[#D8B98A]/40 text-[#6B4226] shrink-0">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#2A1B14]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
