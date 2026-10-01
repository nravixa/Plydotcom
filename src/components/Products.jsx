import React from 'react';
import { ArrowRight, MessageSquare, ChevronRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Products({ onOpenEnquiry }) {
  const { products } = siteContent;

  const handleEnquireClick = (product) => {
    if (onOpenEnquiry) {
      onOpenEnquiry(product);
    }
  };

  return (
    <section id="products" className="py-16 sm:py-28 bg-[#FAF6EF] relative border-y border-[#D8B98A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#6B4226] uppercase block mb-2">
              {products.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1B14] tracking-tight mb-3">
              {products.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#6E655F]">
              {products.subheading}
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenEnquiry(null)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#6B4226] text-[#6B4226] hover:bg-[#6B4226] hover:text-white font-semibold text-sm transition-all duration-300 shadow-warm-sm hover:shadow-warm-md cursor-pointer"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {products.items.map((item, index) => (
            <div
              key={item.id}
              className="product-card group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#D8B98A]/35 shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Product Image Frame */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-[#2A1B14]/5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-600 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
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
                  onClick={() => handleEnquireClick(item)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#6B4226] hover:bg-[#52321c] text-white text-sm font-semibold transition-all duration-200 shadow-sm group-hover:shadow-md cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
