import Link from "next/link";

export default function AboutPage() {
  const coreValues = [
    { title: "Expertise", desc: "Advanced PhD-level consultants specializing in diverse methodologies.", icon: "🎓" },
    { title: "Confidentiality", desc: "Strict non-disclosure protocols to protect your intellectual property.", icon: "🔒" },
    { title: "Integrity", desc: "Upholding the highest ethical standards in academic consultancy.", icon: "⚖️" },
    { title: "Timely Delivery", desc: "Strict adherence to academic deadlines and project milestones.", icon: "⏱️" },
  ];

  const facultyList = [
    {
      name: "Dr. Sarah Jenkins",
      title: "PhD in Quantitative Analysis, Stanford University",
      experience: "14+ Years Academic Experience",
      specs: ["Qualitative Research Design", "Literature Synthesis & Analysis", "Theoretical Framework Development"],
    },
    {
      name: "Dr. Robert Chen",
      title: "PhD in Methodology Design, Oxford University",
      experience: "12+ Years Research Experience",
      specs: ["Mixed-Methods Integration", "Longitudinal Study Design", "Ethical Compliance Review"],
    },
    {
      name: "Dr. Elena Rossi",
      title: "PhD in Literature Review, Harvard University",
      experience: "15+ Years Editorial Experience",
      specs: ["Systematic Review Protocols", "Critical Discourse Analysis", "Narrative Synthesis"],
    },
  ];

  return (
    <div className="w-full flex flex-col bg-brand-light text-brand-dark">
      
      {/* 1. HEADER & INTRO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
          <Link href="/" className="hover:text-brand-purple">HOME</Link> <span className="text-brand-gold">›</span> <span className="text-brand-purple">ABOUT US</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-purple mb-6">
          About E-Clearby Research
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-5xl">
          In the world of academia, research is the foundation upon which knowledge is built and innovations are forged. However, the path to successful research — especially at advanced levels such as PhDs — can be an arduous and intricate journey. This is where E-Clearby Research Consulting Pvt. Ltd. emerges as a beacon of expertise and support, dedicated to guiding scholars toward academic excellence. As trusted PhD Topics Consultants, we help you select a research direction that is original and achievable; through expert guidance in Thesis Writing, we support you in structuring and strengthening your own work chapter by chapter; and with our Dissertation Editing and Proofreading services, we refine your writing for clarity, consistency, and academic polish. Explore how E-Clearby Research Consulting Pvt. Ltd. can be your trusted partner at every stage of your research journey.
        </p>
      </section>

      {/* 2. OUR FOUNDING VISION SECTION */}
      <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="border-l-4 border-brand-gold pl-4 mb-6">
              <span className="text-[10px] font-bold text-brand-gold tracking-widest uppercase block mb-1">A LEGACY OF SCHOLARLY SUPPORT</span>
              <h2 className="text-3xl font-serif font-bold text-brand-purple">Our Founding Vision</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              E-Clearby Research was established in response to the growing isolation felt by doctoral candidates in an increasingly fragmented academic landscape. We recognized that while the pursuit of a PhD is a solitary endeavor, the infrastructure of research should never be.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Our journey began with a small circle of senior academics who shared a singular goal: to provide the bridge between raw data and profound insight. Today, that vision has expanded into a premier consultancy that serves hundreds of scholars across various continents, maintaining the same personal touch and rigorous standards that defined our inception.
            </p>
            <blockquote className="border-l-2 border-brand-purple/40 pl-4 italic text-xs text-gray-700 font-serif leading-relaxed">
              "Intellectual progress is the result of shared dedication. We don't just facilitate research; we nurture the next generation of global thought leaders."
            </blockquote>
          </div>
          <div className="w-full h-[450px] bg-gray-300 rounded-sm shadow-md overflow-hidden flex items-center justify-center relative">
            {/* Library interior photo placeholder */}
                        <div className="bg-white p-4 border border-gray-200 shadow-sm rounded-sm">
            <img 
              src="Vision.png" 
                alt="Clearby Research Vision" 
            />
          </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT E-CLEARBY RESEARCH CONSULTING PVT LTD (Wall Graphic Section) */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-brand-light">
       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white p-4 border border-gray-200 shadow-sm rounded-sm">
            <div className="bg-white p-4 border border-gray-200 shadow-sm rounded-sm">
            <img 
              src="About.png" 
              alt="Clearby Research About" 
            />
          </div>
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-brand-purple mb-6">
              About E-Clearby Research Consulting Pvt Ltd
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              In the world of academia, research is the foundation upon which knowledge is built and innovations are forged. However, the path to successful research — especially at advanced levels such as PhDs — can be an arduous and intricate journey. This is where E-Clearby Research Consulting Pvt. Ltd. emerges as a beacon of expertise and support, dedicated to guiding scholars toward academic excellence.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              As trusted PhD Topics Consultants, we help you select a research direction that is original and achievable; through expert guidance in Thesis Writing, we support you in structuring and strengthening your own work chapter by chapter; and with our Dissertation Editing and Proofreading services, we refine your writing for clarity, consistency, and academic polish. Explore how E-Clearby Research Consulting Pvt. Ltd. can be your trusted partner at every stage of your research journey.
            </p>
          </div>
        </div>
      </section>

      {/* 4. OUR PROMISES & RESEARCH ETHICS COMMITMENT */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-brand-purple mb-2">Our Promises & Research Ethics Commitment</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-sm text-gray-700">
            <div className="border-b border-gray-200 pb-4">
              <p className="font-bold text-brand-purple mb-1">1. Academic Integrity is Non-Negotiable:</p>
              <p className="text-xs text-gray-600">All guidance maintains university plagiarism standards. No shortcuts, no academic dishonesty.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <p className="font-bold text-brand-purple mb-1">2. You Maintain Full Authorship:</p>
              <p className="text-xs text-gray-600">You write your thesis; we provide feedback. We never write for you or submit in your name.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <p className="font-bold text-brand-purple mb-1">3. Our Role is Advisory Only:</p>
              <p className="text-xs text-gray-600">We guide your thinking, not replace it. We coach you to do better work, not do it for you.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <p className="font-bold text-brand-purple mb-1">4. Transparent Process:</p>
              <p className="text-xs text-gray-600">Clear expectations from day one. What we will and won't do, spelled out.</p>
            </div>
            <div>
              <p className="font-bold text-brand-purple mb-1">5. University Compliance:</p>
              <p className="text-xs text-gray-600">We follow all university guidelines. Our services don't violate academic policies.</p>
            </div>
          </div>
          <div className="bg-white p-4 border border-gray-200 shadow-sm rounded-sm">
            <img 
              src="Promises.png" 
              alt="Clearby Research Promises" 
            />
          </div>
        </div>
      </section>

      {/* 5. OUR CORE VALUES */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-purple mb-2">Our Core Values</h2>
          <div className="w-20 h-0.5 bg-brand-gold mx-auto mt-3"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1: Expertise */}
          <div className="bg-white p-8 border border-gray-200 rounded-sm shadow-sm text-left flex flex-col justify-start">
            <div className="mb-6 text-brand-purple">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 01-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.005 11.5c.355 0 .707-.02 1.058-.06M12 20.904v-9.415m0 0a55.405 55.405 0 017.005-2.887M17 15a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-brand-purple mb-3">Expertise</h3>
            <p className="text-xs text-gray-600 leading-relaxed">Advanced PhD-level consultants specializing in diverse methodologies.</p>
          </div>

          {/* Card 2: Confidentiality */}
          <div className="bg-white p-8 border border-gray-200 rounded-sm shadow-sm text-left flex flex-col justify-start">
            <div className="mb-6 text-brand-purple">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-brand-purple mb-3">Confidentiality</h3>
            <p className="text-xs text-gray-600 leading-relaxed">Strict non-disclosure protocols to protect your intellectual property.</p>
          </div>

          {/* Card 3: Integrity */}
          <div className="bg-white p-8 border border-gray-200 rounded-sm shadow-sm text-left flex flex-col justify-start">
            <div className="mb-6 text-brand-purple">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.255a15.932 15.932 0 01-9.031 1.77 15.932 15.932 0 01-9.031-1.77c-.483-.227-.711-.756-.59-1.255L5.25 4.97m13.5 0a48.39 48.39 0 00-13.5 0"></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-brand-purple mb-3">Integrity</h3>
            <p className="text-xs text-gray-600 leading-relaxed">Upholding the highest ethical standards in academic consultancy.</p>
          </div>

          {/* Card 4: Timely Delivery */}
          <div className="bg-white p-8 border border-gray-200 rounded-sm shadow-sm text-left flex flex-col justify-start">
            <div className="mb-6 text-brand-purple">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-brand-purple mb-3">Timely Delivery</h3>
            <p className="text-xs text-gray-600 leading-relaxed">Strict adherence to academic deadlines and project milestones.</p>
          </div>

        </div>
      </section>

      {/* 6. ELITE RESEARCH FACULTY */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-purple mb-3">Elite Research Faculty</h2>
          <div className="w-20 h-0.5 bg-brand-gold mx-auto mb-4"></div>
          <p className="text-gray-600 text-xs md:text-sm max-w-2xl mx-auto">
            Our consultants are not just advisors; they are seasoned researchers, peer-reviewers, and academic pioneers with decades of cumulative experience in the ivory tower.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {facultyList.map((fac, idx) => (
            <div key={idx} className="bg-brand-light p-8 border border-gray-200 rounded-sm text-center shadow-sm">
              <div className="w-20 h-20 bg-white border border-brand-gold/30 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden shadow-sm">
                <img 
                  src="/Faculty.png" 
                  alt="Faculty" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-purple mb-1">{fac.name}</h3>
              <p className="text-xs text-brand-gold font-bold mb-3">{fac.title}</p>
              <p className="text-xs text-gray-500 mb-6 font-medium">{fac.experience}</p>
              
              <div className="border-t border-gray-200 pt-4 text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Credentials:</p>
                <p className="text-xs text-gray-700 mb-3 font-medium">{fac.title}</p>
                
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Specializations:</p>
                <ul className="space-y-1 text-xs text-gray-700">
                  {fac.specs.map((s, i) => <li key={i}>✓ {s}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FINAL BOTTOM CTA BANNER */}
      <section className="w-full py-20 bg-brand-light border-t border-gray-200 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-purple mb-4">
            Ready to start your research journey?
          </h2>
          <p className="text-gray-600 text-xs md:text-sm mb-8 leading-relaxed">
            Whether you are at the proposal stage or finalizing your dissertation, our experts are ready to provide the guidance you need to succeed.
          </p>
          <a 
            href="/contact" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-brand-purple text-white font-bold py-3.5 px-8 rounded-sm hover:bg-opacity-90 transition inline-block text-xs uppercase tracking-wider shadow-md mb-4"
          >
            Book Your Initial Consultation
          </a>
          <div className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
            Confidential • Professional • Academic-Focused
          </div>
        </div>
      </section>

    </div>
  );
}