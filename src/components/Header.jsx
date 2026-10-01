import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#2A1B14] shadow-lg border-b border-[#D8B98A]/20'
          : 'bg-gradient-to-b from-[#2A1B14]/95 via-[#2A1B14]/70 to-transparent'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-3.5 sm:py-5'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-1.5 text-lg sm:text-2xl font-bold tracking-wider text-white group"
          >
            <span>PLY DOT COM</span>
            <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-[#D8B98A] group-hover:scale-125 transition-transform duration-300"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-5 lg:space-x-8">
            {siteContent.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-xs lg:text-sm font-medium text-[#F6F1E8]/85 hover:text-[#D8B98A] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Call CTA Button (Desktop >= md) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${siteContent.business.phoneTel}`}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#D8B98A] text-[#2A1B14] hover:bg-[#c9a773] text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile & Tablet Toggle Controls (< md) */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-white hover:opacity-80 transition-opacity focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <div className="w-6 h-4 flex flex-col justify-between" aria-hidden="true">
                  <span className="w-full h-[2px] bg-white rounded-full"></span>
                  <span className="w-full h-[2px] bg-white rounded-full"></span>
                  <span className="w-full h-[2px] bg-white rounded-full"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation (< md) - Opens completely within viewport with vertical scroll */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-[#2A1B14] border-t border-[#D8B98A]/20 shadow-2xl max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain">
          <nav className="flex flex-col px-5 sm:px-6 py-4 space-y-1">
            {siteContent.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-base font-medium text-[#F6F1E8] hover:text-[#D8B98A] hover:bg-white/5 px-3 py-3 rounded-lg border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#D8B98A]/60">&rarr;</span>
              </a>
            ))}
            <div className="pt-3 pb-2">
              <a
                href={`tel:${siteContent.business.phoneTel}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#D8B98A] text-[#2A1B14] font-semibold text-sm sm:text-base hover:bg-[#c9a773] transition-colors shadow-md text-center"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call {siteContent.business.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
