'use client'
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-[calc(100vh-120px)]">
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row flex-grow overflow-hidden">
        
        {/* LEFT: Content Panel */}
        <div className="w-full md:w-[42%] bg-[#121416] flex flex-col justify-center px-10 md:px-16 py-16 relative">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src="/apple-touch-icon.png" alt="Arch" className="w-12 h-auto mb-6 opacity-20 brightness-200" />
            
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif tracking-[0.05em] uppercase leading-[1.1] mb-6">
              Arches <br /> 
              <span className="text-brand-copper italic font-light lowercase tracking-normal opacity-90">Hayatt</span>
            </h2>
            
            <p className="text-gray-500 text-[10px] md:text-[11px] max-w-[280px] mb-8 leading-relaxed tracking-[0.2em] uppercase">
              Building the horizon <br /> of modern existence.
            </p>

            <button className="border border-brand-copper/40 text-brand-copper px-8 py-3 text-[9px] uppercase tracking-[0.5em] font-bold hover:bg-brand-copper hover:text-white transition-all duration-500">
              Portfolio
            </button>
          </motion.div>
        </div>

        {/* RIGHT: Image Panel */}
        <div className="w-full md:w-[58%] relative min-h-[400px] md:min-h-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
            alt="Architecture" 
            className="absolute inset-0 w-full h-full object-cover grayscale-[10%]"
          />
          {/* Action Button */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-copper rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer hover:rotate-90 transition-all duration-500">
              <span className="text-xl md:text-2xl font-extralight">✕</span>
            </div>
          </div>
        </div>
      </section>

      {/* STRIP FOOTER */}
      <div className="w-full bg-[#E5E0D8] py-6 flex justify-center gap-8 md:gap-20 border-t border-white/5">
          {['Instagram', 'LinkedIn', 'Studio', 'Privacy'].map((item) => (
            <span key={item} className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] font-bold text-gray-500 cursor-pointer hover:text-brand-charcoal transition-colors">
              {item}
            </span>
          ))}
      </div>
    </main>
  );
}

