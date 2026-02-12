'use client'
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="w-full">
      {/* Forced Viewport Height Section */}
      <section className="relative flex flex-col md:flex-row w-full h-[calc(100vh-160px)] min-h-[500px] overflow-hidden">
        
        {/* LEFT: Text Panel */}
        <div className="w-full md:w-[45%] bg-[#121416] flex flex-col justify-center px-10 md:px-20 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10"
          >
            <img src="/apple-touch-icon.png" alt="Arch" className="w-16 h-auto mb-8 opacity-30 brightness-200" />
            
            <h2 className="text-white text-4xl md:text-6xl font-serif tracking-[0.1em] uppercase leading-tight mb-6">
              Arches <br /> 
              <span className="text-brand-copper italic font-light lowercase tracking-normal">Hayatt</span>
            </h2>
            
            <p className="text-gray-500 text-[11px] md:text-xs max-w-xs mb-10 leading-relaxed tracking-widest uppercase opacity-80">
              Architecture for life. <br /> Timeless structure meets modern rhythm.
            </p>

            <button className="border border-brand-copper text-brand-copper px-8 py-3 text-[9px] uppercase tracking-[0.4em] font-bold hover:bg-brand-copper hover:text-white transition-all duration-500">
              View Our Portfolio
            </button>
          </motion.div>
        </div>

        {/* RIGHT: Image Panel */}
        <div className="w-full md:w-[55%] relative h-full">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
            alt="Villa" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Floating Circle Button */}
          <div className="absolute bottom-8 right-8">
            <div className="w-14 h-14 bg-brand-copper rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer hover:scale-110 transition-transform">
              <span className="text-xl font-thin">✕</span>
            </div>
          </div>
        </div>
      </section>

      {/* BEIGE FOOTER BAR */}
      <div className="w-full bg-[#E5E0D8] py-8 flex justify-center gap-12 md:gap-24">
          {['Instagram', 'LinkedIn', 'Behance', 'Studio'].map((item) => (
            <span key={item} className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-500 cursor-pointer hover:text-brand-charcoal transition-colors">
              {item}
            </span>
          ))}
      </div>
    </main>
  );
}

