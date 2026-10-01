import React from 'react';
import { siteContent } from '../data/siteContent';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2A1B14] text-[#F6F1E8] py-8 border-t border-[#D8B98A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Wordmark */}
          <div className="flex items-center gap-1.5 text-lg font-bold tracking-wider">
            <span>PLY DOT COM</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B98A]"></span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-xs sm:text-sm text-[#F6F1E8]/75">
            {siteContent.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-[#D8B98A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-xs text-[#F6F1E8]/50 text-center md:text-right">
            © {currentYear} NRAVIXA. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}
