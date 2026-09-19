"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-purple text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Clearby Research</h3>
            <p className="text-sm text-gray-300 mb-6">
              E-Clearby Research Consulting is a premier academic advisory firm.
            </p>
            <address className="text-sm text-gray-300 not-italic mb-4 leading-relaxed">
              VJ Indilife Sus-Pashan Road,<br />
              Vardayani Society, Sutarwadi,<br />
              Pashan Pune, Maharashtra 411021
            </address>
            <p className="text-sm text-gray-300 mb-2">contact@clearbyresearch.com</p>
            <p className="text-sm text-gray-300 mb-6">+91-7020112146</p>
           <div className="flex gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/clearbyresearch/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 text-white/70 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/19QAdaiSpy/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 text-white/70 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/clearbyresearch?stkn=MWZxNGVvdDZoNHV6Zw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 text-white/70 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-lg font-serif mb-6 border-b border-white/20 pb-2">Services</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/services" className="hover:text-brand-gold transition-colors">PhD</Link></li>
              <li><Link href="/services" className="hover:text-brand-gold transition-colors">Master&apos;s</Link></li>
              <li><Link href="/services" className="hover:text-brand-gold transition-colors">Research Publication</Link></li>
              <li><Link href="/services" className="hover:text-brand-gold transition-colors">Data Analysis</Link></li>
              <li><Link href="/services" className="hover:text-brand-gold transition-colors">Implementation / Simulation</Link></li>
              <li><Link href="/services" className="hover:text-brand-gold transition-colors">Academic Support</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-lg font-serif mb-6 border-b border-white/20 pb-2">Company</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-brand-gold transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-6 text-center md:text-left">
            <p>© 2026 E-Clearby Research Consulting Pvt. Ltd. All rights reserved.</p>
            <p>
              Developed by E-Clearby Research Consulting Pvt. Ltd. and managed by{" "}
              <a 
                href="https://www.clearbyservices.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-gold hover:underline font-medium"
              >
                Clear by Services
              </a>
            </p>
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:text-brand-gold transition-colors">Disclaimer</Link>
            <Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}