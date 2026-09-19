"use client";

import { useState } from "react";
import Link from "next/link";

interface ServiceItem {
  slug: string;
  title: string;
  category: string;
  desc: string;
}

export default function ServicesFilters({ services }: { services: ServiceItem[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  // Extract unique categories safely
  const uniqueCategories = Array.from(new Set(services.map(s => s.category).filter(Boolean)));
  const filters = ['All', ...uniqueCategories];

  // Filter services safely handling case sensitivity
  const filteredServices = activeFilter === 'All' 
    ? services 
    : services.filter(service => service.category?.trim().toLowerCase() === activeFilter.trim().toLowerCase());

  return (
    <>
      {/* 2. CATEGORY FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter, idx) => (
            <button 
              key={idx} 
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-medium border rounded-sm transition ${
                activeFilter === filter 
                  ? 'bg-brand-purple text-white border-brand-purple shadow-sm' 
                  : 'bg-white text-gray-600 border-gray-300 hover:border-brand-purple hover:text-brand-purple'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, idx) => (
              <div key={idx} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition rounded-sm flex flex-col">
                <div className="w-10 h-10 bg-brand-light text-brand-purple flex items-center justify-center rounded mb-6">
                  <span className="font-serif font-bold italic">S</span>
                </div>
                <span className="text-xs font-bold text-brand-gold tracking-wider mb-2 uppercase">{service.category}</span>
                <h3 className="text-xl font-serif font-bold text-brand-purple mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-6 flex-grow">{service.desc}</p>
                <Link href={`/services/${service.slug}`} className="text-sm font-bold text-brand-purple hover:text-brand-gold transition mt-auto">
                  Learn more →
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-500 text-sm">
              No services found for this category.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
