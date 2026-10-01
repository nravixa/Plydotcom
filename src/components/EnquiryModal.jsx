import React, { useState, useEffect } from 'react';
import { X, Phone, MessageSquare, Send, Check } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function EnquiryModal({ isOpen, onClose, selectedProduct }) {
  const { products, business } = siteContent;
  const [productName, setProductName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setProductName(selectedProduct.name);
    } else {
      setProductName('General Plywood Enquiry');
    }
  }, [selectedProduct, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const text = `Hello Ply Dot Com,\n\nI am interested in: *${productName}*\nName: ${customerName || 'Customer'}\nPhone: ${phone || 'Not specified'}\nNote: ${message || 'Please provide pricing and availability details.'}`;
    const url = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm p-4 sm:p-6 flex items-start sm:items-center justify-center py-6 sm:py-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg my-auto bg-white rounded-2xl shadow-2xl border border-[#D8B98A]/40 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#2A1B14] text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-xs font-bold tracking-widest text-[#D8B98A] uppercase block mb-1">
            PLY DOT COM ENQUIRY
          </span>
          <h3 className="text-xl sm:text-2xl font-bold">
            Product & Pricing Inquiry
          </h3>
          <p className="text-xs sm:text-sm text-[#F6F1E8]/75 mt-1">
            Get prompt availability and quotation from our Sus-Pashan team.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleWhatsAppSend} className="p-6 space-y-4">
          {/* Selected Product */}
          <div>
            <label className="block text-xs font-bold text-[#2A1B14] uppercase tracking-wider mb-1.5">
              Product Category
            </label>
            <select
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8B98A]/60 bg-[#FAF6EF] text-sm text-[#222222] font-medium focus:outline-none focus:ring-2 focus:ring-[#6B4226]"
            >
              <option value="General Plywood Enquiry">General Plywood Enquiry</option>
              {products.items.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          {/* Customer Name */}
          <div>
            <label className="block text-xs font-bold text-[#2A1B14] uppercase tracking-wider mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8B98A]/60 bg-[#FAF6EF] text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#6B4226]"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-xs font-bold text-[#2A1B14] uppercase tracking-wider mb-1.5">
              Phone / WhatsApp Number
            </label>
            <input
              type="tel"
              placeholder="e.g. 98XXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8B98A]/60 bg-[#FAF6EF] text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#6B4226]"
            />
          </div>

          {/* Message / Quantity notes */}
          <div>
            <label className="block text-xs font-bold text-[#2A1B14] uppercase tracking-wider mb-1.5">
              Requirement Details / Quantity (Optional)
            </label>
            <textarea
              rows="3"
              placeholder="e.g. Required 19mm commercial plywood 10 sheets for wardrobe work."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8B98A]/60 bg-[#FAF6EF] text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#6B4226]"
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white font-semibold text-sm transition-all duration-200 shadow-md cursor-pointer"
            >
              {isSubmitted ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Opening WhatsApp...</span>
                </>
              ) : (
                <>
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </>
              )}
            </button>

            <a
              href={`tel:${business.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#6B4226] hover:bg-[#52321c] text-white font-semibold text-sm transition-all duration-200 shadow-md cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Direct</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
