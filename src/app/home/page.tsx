"use client";

import { useState } from "react";
import Link from "next/link";
// 1. Import useRouter from next/navigation
import { useRouter } from "next/navigation"; 
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { LampContainer } from "@/components/ui/lamp";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  // This state is no longer needed for filtering if we redirect
  // const [activeCategory, setActiveCategory] = useState("All"); 

  // 2. Initialize the router
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

  // ... (servicesList and facultyList arrays remain unchanged) ...

  // This logic is no longer needed on the homepage
  /*
  const filteredServices = activeCategory === "All"
    ? servicesList
    : servicesList.filter(srv => srv.category === activeCategory || srv.title === "Explore our services");
  */

  return (
    <main className="flex flex-col w-full bg-brand-light text-brand-dark overflow-x-hidden">
      
      {/* ... (Hero and Stats sections remain unchanged) ... */}

      {/* 3. SERVICES GRID */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-purple mb-3">
            PhD Research Consultation, Thesis & Dissertation Coaching Services
          </h2>
          <p className="text-gray-600 text-sm">Structured guidance across every phase of your research journey.</p>
        </div>

        {/* Category Filter Pills - MODIFIED onClick handler */}
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-3 mb-16">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              // 3. When clicked, push to the services page with a query param
              onClick={() => {
                if (cat === "All") {
                  router.push('/services');
                } else {
                  // Assumes your service page reads the 'category' query param
                  router.push(`/services?category=${encodeURIComponent(cat)}`); 
                }
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 border hover:scale-105 ${
                // We cannot rely on internal state anymore for styling,
                // or we can keep track via URLSearchParams if needed.
                // For simplicity, we default to 'bg-white' or manage active state via URL.
                'bg-white text-gray-700 border-gray-300 hover:border-brand-purple hover:text-brand-purple'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SERVICES CARD GRID - Updated to display ALL services or handle no filtering here */}
        {/* Since we redirect, this grid just needs to display the main 8 cards defined in servicesList */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((srv, idx) => (
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

      {/* ... (Rest of the page remains unchanged) ... */}

    </main>
  );
}