import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import EnquiryModal from './components/EnquiryModal';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const mainRef = useRef(null);

  const handleOpenEnquiry = (product = null) => {
    setSelectedProduct(product);
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initialize Lenis Smooth Scroll only if reduced motion is false
    let lenis = null;
    let rafId = null;

    if (!prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      });

      // Synchronize Lenis with GSAP ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      const updateTicker = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);

      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    // GSAP Scroll Animations
    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        // Hero entrance stagger
        gsap.from('.hero-anim-item', {
          y: 25,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.15,
        });

        // Use matchMedia to tailor animations for Desktop/Tablet vs Mobile
        const mm = gsap.matchMedia();

        // Tablet & Desktop (>= 768px)
        mm.add('(min-width: 768px)', () => {
          gsap.from('.about-image-container', {
            scrollTrigger: {
              trigger: '#about',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
            x: -30,
            opacity: 0,
            duration: 0.85,
            ease: 'power2.out',
          });

          gsap.from('.about-text-container', {
            scrollTrigger: {
              trigger: '#about',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
            x: 30,
            opacity: 0,
            duration: 0.85,
            ease: 'power2.out',
          });

          // Product cards stagger reveal on desktop
          gsap.from('.product-card', {
            scrollTrigger: {
              trigger: '#products',
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
            y: 35,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power2.out',
          });

          // Why Choose Us cards stagger
          gsap.from('.why-us-item', {
            scrollTrigger: {
              trigger: '#why-us',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
            y: 25,
            opacity: 0,
            duration: 0.65,
            stagger: 0.09,
            ease: 'power2.out',
          });

          // Contact block reveal
          gsap.from('.contact-text-block', {
            scrollTrigger: {
              trigger: '#contact',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
            y: 25,
            opacity: 0,
            duration: 0.75,
            ease: 'power2.out',
          });

          gsap.from('.contact-info-block', {
            scrollTrigger: {
              trigger: '#contact',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.1,
            ease: 'power2.out',
          });
        });

        // Mobile (< 768px): Never hide products or content with opacity: 0 upfront
        mm.add('(max-width: 767px)', () => {
          // Products and cards remain naturally visible with opacity 1 at all times
          gsap.set(['.product-card', '.why-us-item', '.about-image-container', '.about-text-container'], {
            opacity: 1,
            clearProps: 'opacity,transform,visibility',
          });
        });
      }
    }, mainRef);

    const handleWindowLoad = () => {
      ScrollTrigger.refresh();
      if (lenis) lenis.resize();
    };

    window.addEventListener('load', handleWindowLoad);

    return () => {
      window.removeEventListener('load', handleWindowLoad);
      ctx.revert();
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) {
        lenis.destroy();
      }
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen flex flex-col bg-[#F6F1E8] text-[#222222]">
      {/* Sticky / Glass Navigation Header */}
      <Header />

      {/* Main Landing Page Sections */}
      <main className="flex-1">
        <Hero onOpenEnquiry={handleOpenEnquiry} />
        <About />
        <Products onOpenEnquiry={handleOpenEnquiry} />
        <WhyUs />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={handleCloseEnquiry}
        selectedProduct={selectedProduct}
      />
    </div>
  );
}
