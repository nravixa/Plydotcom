import React from 'react';
import { siteContent } from '../data/siteContent';

export default function Applications({ onOpenEnquiry }) {
  const { applications } = siteContent;

  const handleCardClick = (item) => {
    if (onOpenEnquiry) {
      onOpenEnquiry({ name: `${item.name} Plywood Application` });
    }
  };

  const getApplicationIcon = (icon) => {
    const iconClass = "w-5 h-5 text-[#6B4226] shrink-0";
    switch (icon) {
      case 'furniture':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 4v16M22 4v16M2 8h20M2 17h20" />
            <path d="M6 8v5h12V8" />
          </svg>
        );
      case 'kitchen':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="8" cy="11" r="2" />
            <circle cx="16" cy="11" r="2" />
            <circle cx="8" cy="16" r="0.75" />
            <circle cx="12" cy="16" r="0.75" />
            <circle cx="16" cy="16" r="0.75" />
          </svg>
        );
      case 'wardrobe':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="3" width="16" height="18" rx="1.5" />
            <line x1="12" y1="3" x2="12" y2="21" />
            <line x1="9" y1="10" x2="9" y2="13" />
            <line x1="15" y1="10" x2="15" y2="13" />
          </svg>
        );
      case 'office':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 14h16M4 14v6M20 14v6M8 14V6h8v8" />
          </svg>
        );
      case 'walls':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="7.5" y1="3" x2="7.5" y2="21" />
            <line x1="12" y1="3" x2="12" y2="21" />
            <line x1="16.5" y1="3" x2="16.5" y2="21" />
          </svg>
        );
      case 'construction':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 10L12 3l9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10z" />
            <path d="M9 21V12h6v9" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="applications" className="py-12 sm:py-24 bg-[#FAF7F2] sm:bg-[#FAF6EF] relative border-b border-[#D8B98A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6 sm:mb-10">
          <span className="text-xs font-bold tracking-[0.2em] text-[#9C6D38] uppercase block mb-1.5 sm:mb-2">
            {applications.badge}
          </span>
          <h2 className="text-[30px] sm:text-4xl lg:text-5xl font-black text-[#1E140E] sm:text-[#2A1B14] tracking-tight leading-[1.12] sm:leading-tight mb-2 sm:mb-3">
            <span className="block sm:inline">Used in </span>
            <span className="block sm:inline">Multiple Spaces.</span>
          </h2>
          <p className="text-[13px] sm:text-base text-[#6E655F] leading-relaxed max-w-xl">
            {applications.description}
          </p>
        </div>

        {/* 2x3 Grid on Mobile, 3x2 on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {applications.items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="application-card group bg-white rounded-2xl overflow-hidden border border-[#EDE5D8] shadow-[0_2px_10px_rgba(42,27,20,0.03)] hover:shadow-warm-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              title={`Enquire about plywood for ${item.name}`}
            >
              {/* Application Photo */}
              <div className="relative h-36 xs:h-40 sm:h-52 w-full overflow-hidden bg-[#2A1B14]/5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Bottom Label Row with Icon */}
              <div className="py-2.5 xs:py-3 px-3 xs:px-3.5 bg-white flex items-center gap-2 xs:gap-2.5">
                {getApplicationIcon(item.icon)}
                <span className="text-[13px] xs:text-[14px] sm:text-base font-bold text-[#1E140E]">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
