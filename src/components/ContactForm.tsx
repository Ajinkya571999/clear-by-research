"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ServiceItem {
  slug?: string;
  title?: string;
  h1?: string;
}

interface ContactFormProps {
  variant?: "hero" | "contact";
  services?: ServiceItem[];
}

export default function ContactForm({ variant = "hero", services = [] }: ContactFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
    service: services[0]?.h1 || services[0]?.title || "PhD Topic Consultation",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Combine country code and phone number before sending
    const submissionData = {
      ...formData,
      phone: `${formData.countryCode} ${formData.phone}`,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        // Redirect to the native Next.js thank you page
        router.push("/thank-you");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Hero Variant Layout (Single Column Stack - used in Home & Landing pages)
  if (variant === "hero") {
    return (
      <div className="bg-white text-brand-dark p-8 rounded-sm shadow-2xl relative">
        <h3 className="text-2xl font-serif font-bold mb-1">Get Expert Guidance</h3>
        <p className="text-xs text-gray-500 mb-6">Start your journey to a successful PhD today.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Name</label>
            <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-brand-purple rounded-sm placeholder-gray-400 bg-white" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Phone Number</label>
            <div className="flex">
              <select 
                name="countryCode" 
                value={formData.countryCode} 
                onChange={handleChange}
                className="border border-r-0 border-gray-300 bg-gray-50 text-gray-700 text-xs sm:text-sm rounded-l-sm font-medium px-2 py-3 focus:outline-none focus:border-brand-purple"
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+61">🇦🇺 +61</option>
                <option value="+971">🇦🇪 +971</option>
              </select>
              <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="7020112146" className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-brand-purple rounded-r-sm placeholder-gray-400 bg-white" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Email</label>
            <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="j.doe@university.edu" className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-brand-purple rounded-sm placeholder-gray-400 bg-white" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Select Services</label>
            <select name="service" value={formData.service} onChange={handleChange} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-brand-purple rounded-sm bg-white text-gray-700">
              <option value="" disabled>Select a service...</option>
              {services.map((item, index) => {
                const displayValue = item.h1 || item.title;
                return (
                  <option key={index} value={displayValue}>
                    {displayValue}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Message</label>
            <textarea required name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Tell us about your research..." className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-brand-purple rounded-sm resize-none placeholder-gray-400 bg-white"></textarea>
          </div>
          {status === "error" && <p className="text-red-500 text-xs">Failed to send. Please try again.</p>}
          <button type="submit" disabled={status === "loading"} className="w-full bg-brand-purple text-white font-bold py-3 text-sm hover:bg-opacity-90 transition rounded-sm shadow-md">
            {status === "loading" ? "SUBMITTING..." : "SUBMIT REQUEST"}
          </button>
        </form>
      </div>
    );
  }

  // Contact Page Variant Layout (Multi-column grid design)
  return (
    <div className="bg-white p-8 md:p-10 border border-gray-200 shadow-sm rounded-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Full Name</label>
            <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-brand-purple rounded-sm placeholder-gray-400 bg-white" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Email Address</label>
            <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="j.doe@university.edu" className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-brand-purple rounded-sm placeholder-gray-400 bg-white" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Phone Number</label>
            <div className="flex">
              <select 
                name="countryCode" 
                value={formData.countryCode} 
                onChange={handleChange}
                className="border border-r-0 border-gray-300 bg-gray-50 text-gray-700 text-sm rounded-l-sm font-medium px-3 py-3 focus:outline-none focus:border-brand-purple"
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+61">🇦🇺 +61</option>
                <option value="+971">🇦🇪 +971</option>
              </select>
              <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="7020112146" className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-brand-purple rounded-r-sm placeholder-gray-400 bg-white" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Enquiry Service</label>
            <select name="service" value={formData.service} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-brand-purple rounded-sm bg-white text-gray-700">
              {services.map((item, index) => {
                const displayValue = item.h1 || item.title;
                return (
                  <option key={index} value={displayValue}>
                    {displayValue}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Research Brief / Message</label>
          <textarea required name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Describe your research requirements..." className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-brand-purple rounded-sm resize-none placeholder-gray-400 bg-white"></textarea>
        </div>

        {status === "error" && <p className="text-red-500 text-xs">Failed to send enquiry. Please try again.</p>}

        <button type="submit" disabled={status === "loading"} className="bg-brand-purple text-white font-bold py-3.5 px-8 hover:bg-opacity-90 transition rounded-sm shadow-md text-xs uppercase tracking-wider disabled:opacity-70">
          {status === "loading" ? "SUBMITTING..." : "SUBMIT ENQUIRY"}
        </button>
      </form>

      {/* Trust Badges */}
      <div className="mt-10 pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-gray-700">
        <div className="flex items-center gap-2"><span className="text-brand-gold text-base">🛡</span> Strictly Confidential</div>
        <div className="flex items-center gap-2"><span className="text-brand-gold text-base">⚡</span> 24-Hour Response</div>
        <div className="flex items-center gap-2"><span className="text-brand-gold text-base">✓</span> No-Obligation Quote</div>
      </div>
    </div>
  );
}