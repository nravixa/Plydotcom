import React, { useState, useEffect } from 'react';
import { siteContent } from '../data/siteContent';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const { business } = siteContent;

  const encodedMsg = encodeURIComponent(business.whatsappDefaultMessage);
  const whatsappUrl = `https://wa.me/${business.whatsappNumber}?text=${encodedMsg}`;

  useEffect(() => {
    const updateVisibility = () => {
      const aboutEl = document.getElementById('about');
      const whyUsEl = document.getElementById('why-us');

      if (!aboutEl || !whyUsEl) {
        setIsVisible(false);
        return;
      }

      const aboutRect = aboutEl.getBoundingClientRect();
      const whyUsRect = whyUsEl.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Visible starting from ABOUT PLY DOT COM (top of About is in/above 70% viewport)
      const hasReachedAbout = aboutRect.top <= windowHeight * 0.7;

      // Remains visible through OUR PRODUCTS and WHY CHOOSE PLY DOT COM
      // Disappears after WHY CHOOSE PLY DOT COM section ends
      const isBeforeWhyUsEnds = whyUsRect.bottom >= 40;

      setIsVisible(hasReachedAbout && isBeforeWhyUsEnds);
    };

    // Initial check
    updateVisibility();

    // Scroll and resize listeners
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility, { passive: true });

    // IntersectionObserver observing key boundary sections for instant notification
    const observer = new IntersectionObserver(
      () => {
        updateVisibility();
      },
      {
        root: null,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    const sections = ['home', 'about', 'products', 'why-us', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
      observer.disconnect();
    };
  }, []);

  return (
    <aside
      aria-label="WhatsApp Contact"
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3 transition-all duration-300 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-6 scale-90 pointer-events-none'
      }`}
    >
      {/* Tooltip Bubble (desktop & tablet) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 bg-white text-[#222222] text-xs font-semibold rounded-xl shadow-warm-lg border border-[#D8B98A]/30 animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Need help? Chat on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 ml-1 text-xs"
            aria-label="Dismiss tooltip"
          >
            ×
          </button>
        </div>
      )}

      {/* Floating Circular Green Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ply Dot Com on WhatsApp"
        tabIndex={isVisible ? 0 : -1}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer ring-4 ring-white/50"
      >
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          stroke="currentColor"
          strokeWidth="0"
          fill="currentColor"
          className="transition-transform group-hover:rotate-6 sm:w-[30px] sm:h-[30px]"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </aside>
  );
}
