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
        isScrolled
          ? 'bg-[#2A1B14]/95 backdrop-blur-md py-3 shadow-lg border-b border-[#D8B98A]/20'
          : 'bg-gradient-to-b from-[#2A1B14]/90 via-[#2A1B14]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-1.5 text-xl sm:text-2xl font-bold tracking-wider text-white group"
          >
            <span>PLY DOT COM</span>
            <span className="w-2 h-2 rounded-full bg-[#D8B98A] group-hover:scale-125 transition-transform duration-300"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {siteContent.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-[#F6F1E8]/85 hover:text-[#D8B98A] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Call CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${siteContent.business.phoneTel}`}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#D8B98A] text-[#2A1B14] hover:bg-[#c9a773] text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${siteContent.business.phoneTel}`}
              className="inline-flex sm:hidden items-center justify-center p-2 rounded-full bg-[#D8B98A] text-[#2A1B14]"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4 fill-current" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#2A1B14] border-b border-[#D8B98A]/20 px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4">
            {siteContent.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-base font-medium text-[#F6F1E8] hover:text-[#D8B98A] py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={`tel:${siteContent.business.phoneTel}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#D8B98A] text-[#2A1B14] font-semibold text-center"
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
