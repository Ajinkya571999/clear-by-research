import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="font-sans bg-[#FBFBFC] text-[#3B3843] min-h-screen flex items-center justify-center p-5 overflow-x-hidden">
      <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-[60px] p-10">
        
        {/* Left Column: Content Area */}
        <div className="flex flex-col items-start text-left max-lg:items-center max-lg:text-center max-lg:order-2">
          {/* Success Circle Icon */}
          <div className="w-[54px] h-[54px] border-[2.5px] border-[#2A1454] rounded-full flex items-center justify-center text-[#2A1454] mb-8">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-[3]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
          </div>
          
          <h1 className="font-serif text-5xl lg:text-[64px] font-extrabold text-[#2A1454] leading-[1.15] mb-5 tracking-tight">
            Thank You!
          </h1>
          <p className="text-xl font-bold text-[#1A0D36] mb-6">
            Your submission has-been received.
          </p>
          
          {/* Divider Accent Line */}
          <div className="w-[40px] h-[2px] bg-[#C5BFD4] mb-8 max-lg:mx-auto"></div>
          
          <p className="text-base leading-[1.7] text-[#55525E] max-w-[440px] mb-10">
            We appreciate you taking the time to connect with us. Our team will review your request and get back to you shortly.
          </p>
          
          <Link href="/" className="inline-flex items-center gap-3 bg-[#2A1454] text-white no-underline px-8 py-4 rounded-[6px] font-semibold text-[15px] transition-all duration-250 ease-in-out shadow-[0_4px_14px_rgba(42,20,84,0.15)] hover:bg-[#1F0E3E] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(42,20,84,0.25)] group">
            Back to Home 
            <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] transition-transform duration-200 ease-in-out group-hover:translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
            </svg>
          </Link>
        </div>

        {/* Right Column: Avatar Asset */}
        <div className="flex justify-center items-center relative w-full max-lg:order-1">
          <img 
            src="https://static.wixstatic.com/media/480369_4752063d40794106867e015ff4a26119~mv2.png/v1/fill/w_251,h_377,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/480369_4752063d40794106867e015ff4a26119~mv2.png" 
            alt="Submission Successful" 
            className="w-full max-w-[520px] max-lg:max-w-[280px] h-auto object-contain drop-shadow-[0px_10px_20px_rgba(0,0,0,0.02)] animate-[fadeInRight_0.8s_cubic-bezier(0.16,1,0.3,1)]"
          />
        </div>

      </div>
    </div>
  );
}