"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { LampContainer } from "@/components/ui/lamp";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter(); 

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categories = [
    "All",
    "PhD",
    "Master's",
    "Research & Publication",
    "Data Analysis",
    "Implementation / Simulation",
    "Academic Support"
  ];

  const servicesList = [
    { title: "Topic Consultation", desc: "Help select and refine your research topic", category: "PhD", action: "Consult", link: "/services/phd-topic-consultation", icon: "💡" },
    { title: "Proposal Development", desc: "Develop compelling research proposals", category: "PhD", action: "Get Help", link: "/services/research-proposal-development", icon: "📄" },
    { title: "Literature Review", desc: "Comprehensive review of existing research and knowledge gaps", category: "PhD", action: "Learn More", link: "/services/literature-review-writing-service", icon: "📖" },
    { title: "Research Manuscript Development", desc: "Help select and refine your research", category: "Research & Publication", action: "Consult", link: "/services/research-paper-support", icon: "📑" },
    { title: "Data Analysis", desc: "Support for quantitative/qualitative analysis", category: "Data Analysis", action: "Learn More", link: "/services/phd-thesis-data-analysis-service", icon: "📊" },
    { title: "Expert Implementation", desc: "Hands-on support for implementation", category: "Implementation / Simulation", action: "Consult", link: "/services/software-implementation-help-for-phd-research", icon: "⚙️" },
    { title: "Thesis & Dissertation Writing", desc: "Comprehensive structural and writing support", category: "PhD", action: "Consult", link: "/services/phd-thesis-writing-services", icon: "✍️" },
    { title: "Explore our services", desc: "Browse our complete catalog of 40+ academic support services", category: "All", action: "Explore", link: "/services", icon: "📖" },
  ];

  return (
    <main className="flex flex-col w-full bg-brand-light text-brand-dark overflow-x-hidden">
      
      {/* 3. SERVICES GRID */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-purple mb-3">
            PhD Research Consultation, Thesis & Dissertation Coaching Services
          </h2>
          <p className="text-gray-600 text-sm">Structured guidance across every phase of your research journey.</p>
        </div>

        {/* Category Filter Pills - Redirects to /services with query params */}
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-3 mb-16">
          {categories.map((cat: string, idx: number) => (
            <button
              key={idx}
              onClick={() => {
                if (cat === "All") {
                  router.push('/services');
                } else {
                  router.push(`/services?category=${encodeURIComponent(cat)}`); 
                }
              }}
              className="px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 border bg-white text-gray-700 border-gray-300 hover:border-brand-purple hover:text-brand-purple hover:scale-105"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SERVICES CARD GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((srv: { title: string; desc: string; category: string; action: string; link: string; icon: string }, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-8 border border-gray-200 shadow-sm hover:shadow-xl transition rounded-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-serif font-bold text-brand-purple mb-3">{srv.title}</h3>
                <p className="text-xs text-gray-600 mb-6 leading-relaxed">{srv.desc}</p>
              </div>
              <Link href={srv.link || "/services"} className="text-xs font-bold text-brand-gold uppercase tracking-wider hover:text-brand-purple transition inline-flex items-center gap-1 group">
                {srv.action} <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}