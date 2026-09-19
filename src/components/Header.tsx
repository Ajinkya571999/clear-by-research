"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  return (
    <header className="w-full bg-brand-light border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/phd-thesis-guidance-and-research-support" className="flex items-center gap-3">
              <img 
                src="/favcon.png" 
                alt="Clearby Research Logo" 
                className="w-10 h-10 object-contain rounded-sm" 
              />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-brand-purple leading-none">Clearby Research</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
            <Link 
              href="/" 
              className={`transition relative py-2 ${pathname === '/' ? 'text-brand-purple font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-gold' : 'hover:text-brand-purple'}`}
            >
              Home
            </Link>
            
            <Link 
              href="/about" 
              className={`transition relative py-2 ${isActive('/about') ? 'text-brand-purple font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-gold' : 'hover:text-brand-purple'}`}
            >
              About
            </Link>
            
            {/* PhD Dropdown Menu (Multi-Column Layout) */}
            <div className="relative group py-4">
              <Link 
                href="/services" 
                className={`transition flex items-center gap-1.5 ${isActive('/services') ? 'text-brand-purple font-semibold' : 'hover:text-brand-purple'}`}
              >
                PhD 
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] bg-white border border-gray-200 shadow-2xl rounded-sm p-6 hidden group-hover:grid grid-cols-4 gap-6 z-50">
                
                {/* Column 1: Research Planning */}
                <div className="flex flex-col space-y-2.5">
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider mb-1">Research Planning</span>
                  <Link href="/services/phd-topic-consultation" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Topic Consultation
                  </Link>
                  <Link href="/services/thesis-problem-statement" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Thesis Problem Statement Identification
                  </Link>
                  <Link href="/services/research-proposal-development" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Research Proposal Development
                  </Link>
                  <Link href="/services/research-concept-paper" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    Research Concept Paper Writing Guidance
                  </Link>
                  <Link href="/services/systematic-literature-review" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    Systematic Literature Review Consultation
                  </Link>
                </div>

                {/* Column 2: Research Development */}
                <div className="flex flex-col space-y-2.5">
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider mb-1">Research Development</span>
                  <Link href="/services/literature-review-writing-service" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Literature Review Assistance
                  </Link>
                  <Link href="/services/research-methodology-consultation" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Research Methodology Consultation
                  </Link>
                  <Link href="/services/research-paper-questionnaire-designing" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Research Questionnaire Design
                  </Link>
                </div>

                {/* Column 3: Research Execution */}
                <div className="flex flex-col space-y-2.5">
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider mb-1">Research Execution</span>
                  <Link href="/services/software-implementation-help-for-phd-research" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Research Software Implementation Help
                  </Link>
                  <Link href="/services/phd-thesis-data-analysis-service" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Thesis Data Analysis Consultation
                  </Link>
                </div>

                {/* Column 4: Thesis */}
                <div className="flex flex-col space-y-2.5">
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider mb-1">Thesis</span>
                  <Link href="/services/phd-thesis-writing-services" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Thesis Development and Consultation
                  </Link>
                  <Link href="/services/phd-thesis-editing-&-proofreading-services" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Thesis Editing and Proofreading
                  </Link>
                  <Link href="/services/dissertation-correction-services" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    Dissertation Correction Work
                  </Link>
                  <Link href="/services/phd-thesis-defence-preparation" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Thesis Defence Preparation
                  </Link>
                </div>

              </div>
            </div>

            {/* Master's Dropdown Menu */}
            <div className="relative group py-4">
              <Link href="/services" className="hover:text-brand-purple transition flex items-center gap-1.5">
                Master's 
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[580px] bg-white border border-gray-200 shadow-2xl rounded-sm p-6 hidden group-hover:grid grid-cols-2 gap-6 z-50">
                
                {/* Column 1: Dissertation Support */}
                <div className="flex flex-col space-y-2.5">
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider mb-1">Dissertation Support</span>
                  <Link href="/services/dissertation-topic-consultation" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    Master's Dissertation Topic Consultation
                  </Link>
                  <Link href="/services/masters-proposal-development" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Research Proposal Development
                  </Link>
                  <Link href="/services/masters-literature-review" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Literature Review Assistance
                  </Link>
                  <Link href="/services/masters-research-methodology-consultation" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Research Methodology Consultation
                  </Link>
                  <Link href="/services/masters-questionnaire-design" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Research Questionnaire Design
                  </Link>
                </div>

                {/* Column 2: Writing & Defense */}
                <div className="flex flex-col space-y-2.5">
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider mb-1">Writing &amp; Defense</span>
                  <Link href="/services/masters-dissertation-data-analysis" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Thesis Data Analysis Consultation
                  </Link>
                  <Link href="/services/masters-dissertation-writing" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    MBA and Master's Dissertation Assistance
                  </Link>
                  <Link href="/services/masters-thesis-editing-proofreading" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Thesis Editing and Proofreading
                  </Link>
                  <Link href="/services/masters-dissertation-correction" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    Dissertation Correction Work
                  </Link>
                  <Link href="/services/masters-thesis-defence-preparation" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Thesis Defence Preparation
                  </Link>
                </div>

              </div>
            </div>

            {/* Other Services Dropdown Menu */}
            <div className="relative group py-4">
              <Link href="/services" className="hover:text-brand-purple transition flex items-center gap-1.5">
                Other Services 
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              
              <div className="absolute top-full right-0 w-[900px] bg-white border border-gray-200 shadow-2xl rounded-sm p-6 hidden group-hover:grid grid-cols-4 gap-6 z-50">
                
                {/* Column 1: Research & Publication */}
                <div className="flex flex-col space-y-2.5">
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider mb-1">Research &amp; Publication</span>
                  <Link href="/services/research-concept-paper" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    Research Concept Paper Writing Guidance
                  </Link>
                  <Link href="/services/thesis-problem-statement" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Thesis Problem Statement Identification
                  </Link>
                  <Link href="/services/literature-review-writing-service" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Literature Review Assistance
                  </Link>
                  <Link href="/services/research-paper-writing-support" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Research Paper Assistance in India
                  </Link>
                  <Link href="/services/journal-publication-support" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    Journal Publication Support Services in India
                  </Link>
                  <Link href="/services/plagiarism-check-removal-services" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    Thesis Plagiarism Check and Removal
                  </Link>
                  <Link href="/services/systematic-literature-review" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    Systematic Literature Review Consultation
                  </Link>
                </div>

                {/* Column 2: Data Analysis */}
                <div className="flex flex-col space-y-2.5">
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider mb-1">Data Analysis</span>
                  <Link href="/services/spss-data-analysis-service" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    SPSS Data Analysis in India
                  </Link>
                  <Link href="/services/nvivo-qualitative-analysis-service" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    NVivo Qualitative Analysis in India
                  </Link>
                  <Link href="/services/amos-sem-analysis-service" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    AMOS SEM Analysis in India
                  </Link>
                  <Link href="/services/stata-data-analysis-service" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    STATA Data Analysis in India
                  </Link>
                  <Link href="/services/smart-pls-data-analysis" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    SmartPLS Analysis in India
                  </Link>
                </div>

                {/* Column 3: Implementation / Simulation */}
                <div className="flex flex-col space-y-2.5">
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider mb-1">Implementation</span>
                  <Link href="/services/python-implementation-service" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    Python Implementation for PhD and Research in India
                  </Link>
                  <Link href="/services/matlab-simulation-service" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    MATLAB Simulation for PhD and Research in India
                  </Link>
                  <Link href="/services/ns2-ns3-network-simulation-service" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    NS2 and NS3 Network Simulation in India
                  </Link>
                  <Link href="/services/ansys-simulation-service" className="text-xs text-gray-700 hover:text-gray-900 hover:text-brand-purple transition leading-snug">
                    ANSYS Simulation Service for PhD and Research in India
                  </Link>
                  <Link href="/services/java-implementation-service" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    JAVA Implementation for PhD and Research in India
                  </Link>
                  <Link href="/services/cadence-vlsi-implementation-service" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    Cadence VLSI Design and Simulation in India
                  </Link>
                  <Link href="/services/cloudsim-cloud-simulation-service" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    CloudSim Simulation in India
                  </Link>
                </div>

                {/* Column 4: Academic Support */}
                <div className="flex flex-col space-y-2.5">
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider mb-1">Academic Support</span>
                  <Link href="/services/statement-of-purpose-writing-service" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Statement of Purpose
                  </Link>
                  <Link href="/services/assignment-writing-service-india" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Assignment Writing in India
                  </Link>
                  <Link href="/services/phd-thesis-editing-&-proofreading-services" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Thesis Editing and Proofreading
                  </Link>
                  <Link href="/services/plagiarism-check-removal-services" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    Thesis Plagiarism Check and Removal
                  </Link>
                  <Link href="/services/phd-thesis-&-dissertation-correction-service" className="text-xs text-gray-700 hover:text-brand-purple transition leading-snug">
                    PhD Thesis and Dissertation Correction in India
                  </Link>
                </div>

              </div>
            </div>

            <Link 
              href="/blog" 
              className={`transition relative py-2 ${isActive('/blog') ? 'text-brand-purple font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-gold' : 'hover:text-brand-purple'}`}
            >
              Blog
            </Link>

            <Link 
              href="/contact" 
              className={`transition relative py-2 ${isActive('/contact') ? 'text-brand-purple font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-gold' : 'hover:text-brand-purple'}`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/contact" 
              className="bg-brand-purple text-white px-6 py-2.5 text-sm font-semibold hover:bg-opacity-90 transition rounded-sm shadow-sm"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}