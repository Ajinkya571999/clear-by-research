"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs }: { faqs?: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) {
    return null;
  }

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-brand-purple text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border border-gray-200 rounded-sm bg-brand-light overflow-hidden transition-all">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                >
                  <h4 className="font-serif font-bold text-brand-purple text-base">{faq.q}</h4>
                  <ChevronDown className={`w-5 h-5 text-brand-gold shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-xs text-gray-600 leading-relaxed border-t border-gray-100 mt-2 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}