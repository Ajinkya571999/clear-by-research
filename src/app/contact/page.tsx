"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Globe, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do you ensure Academic Integrity?",
      a: "All E-Clearby consultants adhere to a strict ethical framework. We provide developmental support, guidance, and critical review to enhance your own original research work, ensuring compliance with institutional policies.",
    },
    {
      q: "What is the consultation process?",
      a: "After submitting your enquiry, our senior advisors review your research requirements and schedule a one-on-one discussion to map out a customized timeline and service plan.",
    },
    {
      q: "How are your fees structured?",
      a: "Our fees are milestone-based, offering flexible installment options to ensure complete transparency before any project phase begins.",
    },
  ];

  return (
    <div className="w-full flex flex-col bg-brand-light text-brand-dark">
      
      {/* 1. HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 w-full">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-purple mb-3">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
          Our research consultants are ready to assist you. Expect a detailed response to your enquiry within 24 business hours.
        </p>
      </section>

      {/* 2. MAIN CONTACT SECTION (Form + Office Card) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: The Reusable Form (7 Cols) */}
          <div className="lg:col-span-7">
            <ContactForm variant="contact" />
          </div>

          {/* Right Side: Academic Liaison Office Card (5 Cols) with Exact Icons */}
          <div className="lg:col-span-5">
            <div className="bg-brand-purple text-white p-8 md:p-10 shadow-lg rounded-sm h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif font-bold text-brand-gold mb-8 pb-3 border-b border-white/10">
                  Academic Liaison Office
                </h3>
                
                <div className="space-y-6 text-sm">
                  
                  {/* Email Enquiry */}
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-brand-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Email Enquiry</p>
                      <a href="mailto:contact@clearbyresearch.com" className="text-gray-200 hover:text-white transition font-medium">
                        contact@clearbyresearch.com
                      </a>
                    </div>
                  </div>

                  {/* Direct Line */}
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-brand-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Direct Line</p>
                      <p className="text-gray-200 font-medium">+91-7020 112146</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-brand-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Add</p>
                      <address className="text-gray-200 not-italic leading-relaxed text-xs">
                        VJ Indilife Sus-Pashan Road,<br />
                        Vardayani Society, Sutarwadi,<br />
                        Pashan Pune, Maharashtra 411021
                      </address>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start gap-4">
                    <Globe className="w-5 h-5 text-brand-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">website</p>
                      <a href="https://clearbyresearch.com" className="text-gray-200 hover:text-white transition font-medium">
                        www.clearbyresearch.com
                      </a>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-brand-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Operating Hours</p>
                      <p className="text-gray-200 font-bold">10:00 - 19:00 IST</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">Closed on Indian National Holidays</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. COMMON ENQUIRIES (FAQ Accordion) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
        <h2 className="text-3xl font-serif font-bold text-brand-purple text-center mb-12">
          Common Enquiries
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-sm bg-white shadow-sm overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)} 
                className="w-full px-6 py-4 text-left font-serif font-bold text-brand-purple flex justify-between items-center text-base"
              >
                <span>{faq.q}</span>
                <span className="text-brand-gold text-sm">{openFaq === idx ? "▲" : "▼"}</span>
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-5 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}