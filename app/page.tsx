'use client'
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="flex-grow flex flex-col overflow-hidden">
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row flex-1 overflow-hidden">
        
        {/* LEFT: Text Panel */}
        <div className="w-full md:w-[40%] bg-[#121416] flex flex-col justify-center px-10 md:px-16 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {/* Very small, subtle arch icon */}
            <img src="/apple-touch-icon.png" alt="Arch" className="w-10 h-auto mb-6 opacity-20 brightness-200" />
            
            <h2 className="text-white text-4xl lg:text-5xl font-serif tracking-tight leading-[1.1] mb-6">
              Arches <br /> 
              <span className="text-brand-copper italic font-light lowercase tracking-normal">Hayatt</span>
            </h2>
            
            <p className="text-gray-500 text-[10px] max-w-[240px] mb-8 leading-relaxed tracking-[0.2em] uppercase">
              Building the horizon <br /> of modern existence.
            </p>

            <button className="border border-brand-copper/30 text-brand-copper px-6 py-2.5 text-[8px] uppercase tracking-[0.5em] font-bold hover:bg-brand-copper hover:text-white transition-all duration-700">
              Portfolio
            </button>
          </motion.div>
        </div>

        {/* RIGHT: Image Panel */}
        <div className="w-full md:w-[60%] relative">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
            alt="Architecture" 
            className="absolute inset-0 w-full h-full object-cover grayscale-[15%]"
          />
          {/* Floating Circle Button (matching the mockup) */}
          <div className="absolute bottom-8 right-8">
            <div className="w-12 h-12 bg-brand-copper/90 rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer hover:rotate-90 transition-all duration-500">
              <span className="text-xl font-extralight">✕</span>
            </div>
          </div>
        </div>
      </section>

      {/* STRIP FOOTER - FIXED TO BOTTOM */}
      <div className="w-full bg-[#E5E0D8] py-4 flex justify-center gap-12 border-t border-white/5 flex-none">
          {['Instagram', 'LinkedIn', 'Studio'].map((item) => (
            <span key={item} className="text-[8px] uppercase tracking-[0.4em] font-bold text-gray-500 cursor-pointer hover:text-brand-charcoal transition-colors">
              {item}
            </span>
          ))}
      </div>
    </div>
  );
}

