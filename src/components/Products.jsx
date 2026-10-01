import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Products({ onOpenEnquiry }) {
  const { products } = siteContent;

  const handleEnquireClick = (product) => {
    if (onOpenEnquiry) {
      onOpenEnquiry(product);
    }
  };

  return (
    <section id="products" className="py-10 sm:py-28 bg-[#FAF7F2] sm:bg-[#FAF6EF] relative border-y border-[#D8B98A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#9C6D38] sm:text-[#6B4226] uppercase block mb-1.5 sm:mb-2">
              {products.badge}
            </span>
            <h2 className="text-[30px] sm:text-4xl lg:text-5xl font-black sm:font-bold text-[#1E140E] sm:text-[#2A1B14] tracking-tight leading-[1.12] sm:leading-tight mb-2 sm:mb-3">
              <span className="block sm:inline">Plywood for </span>
              <span className="block sm:inline">Every Need.</span>
            </h2>
            <p className="hidden sm:block text-sm sm:text-base text-[#6E655F]">
              {products.subheading}
            </p>
          </div>

          <div className="hidden sm:block shrink-0">
            <button
              onClick={() => onOpenEnquiry(null)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#6B4226] text-[#6B4226] hover:bg-[#6B4226] hover:text-white font-semibold text-sm transition-all duration-300 shadow-warm-sm hover:shadow-warm-md cursor-pointer"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7">
          {products.items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleEnquireClick(item)}
              className="product-card group flex flex-col bg-white rounded-2xl p-3.5 sm:p-0 overflow-hidden border border-[#EDE5D8] sm:border-[#D8B98A]/35 shadow-[0_2px_10px_rgba(42,27,20,0.04)] sm:shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Product Image Frame with rounded corners on mobile */}
              <div className="relative h-32 xs:h-36 sm:h-56 rounded-xl sm:rounded-none overflow-hidden bg-[#2A1B14]/5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Mobile Layout (< sm): Title + Description on left, Circular Arrow Button on right */}
              <div className="sm:hidden pt-3 pb-0.5 px-0.5 flex items-center justify-between gap-3">
                <div className="flex-1 pr-1">
                  <h3 className="text-[17px] font-bold text-[#1E140E] group-hover:text-[#7E4F28] transition-colors leading-snug mb-0.5">
                    {item.name}
                  </h3>
                  <p className="text-[13px] text-[#786F66] leading-snug">
                    {item.description}
                  </p>
                </div>

                {/* Circular Action Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEnquireClick(item);
                  }}
                  className="w-10 h-10 rounded-full bg-[#7E4F28] hover:bg-[#684020] text-white flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                  aria-label={`Enquire about ${item.name}`}
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Desktop Layout (>= sm): Full card with button */}
              <div className="hidden sm:flex p-6 flex-1 flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#2A1B14] group-hover:text-[#6B4226] transition-colors mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#6E655F] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Enquire CTA Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEnquireClick(item);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#6B4226] hover:bg-[#52321c] text-white text-sm font-semibold transition-all duration-200 shadow-sm group-hover:shadow-md cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Products Action for full feature parity */}
        <div className="sm:hidden mt-6 text-center">
          <button
            type="button"
            onClick={() => onOpenEnquiry(null)}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#7E4F28] text-[#7E4F28] hover:bg-[#7E4F28] hover:text-white font-semibold text-sm transition-all duration-200 active:scale-98 shadow-sm cursor-pointer"
          >
            <span>View All Products & Enquire</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
