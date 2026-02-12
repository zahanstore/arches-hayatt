'use client'
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="relative h-[85vh] flex flex-col md:flex-row overflow-hidden">
        
        {/* LEFT PANEL: The Dark Void */}
        <div className="w-full md:w-[45%] bg-[#121416] flex flex-col justify-center px-12 md:px-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Subtle Large Arch Overlay */}
            <div className="mb-10">
               <img src="/apple-touch-icon.png" alt="Arch" className="w-24 h-auto opacity-40 brightness-150" />
            </div>

            <h2 className="text-white text-4xl md:text-5xl font-serif tracking-[0.2em] uppercase leading-[1.2] mb-8">
              Arches <br /> 
              <span className="opacity-90">Hayatt</span>
            </h2>
            
            <p className="text-gray-500 text-xs md:text-sm max-w-xs mb-10 leading-relaxed tracking-wide">
              Crafting architectural narratives that balance structural permanence with the fluid rhythm of life.
            </p>

            <button className="border border-brand-copper/50 text-brand-copper px-10 py-3 text-[9px] uppercase tracking-[0.4em] font-bold hover:bg-brand-copper hover:text-white transition-all duration-500 w-fit">
              View Our Portfolio
            </button>
          </motion.div>
        </div>

        {/* RIGHT PANEL: The Feature Image */}
        <div className="w-full md:w-[55%] relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
            alt="Villa Exterior" 
            className="h-full w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 scale-105"
          />
          
          {/* Floating Copper Action Button */}
          <div className="absolute bottom-10 right-10 z-20">
            <div className="w-14 h-14 bg-brand-copper/90 rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer hover:rotate-90 transition-transform duration-500">
              <span className="text-xl font-light">✕</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER BAR (Matches Design Image) */}
      <div className="w-full bg-[#E5E0D8] py-8 flex justify-center gap-16 border-t border-white/10">
          {['Projects', 'About Us', 'Services', 'Contact'].map((item) => (
            <span key={item} className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-600 cursor-pointer hover:text-brand-charcoal">
              {item}
            </span>
          ))}
      </div>
    </main>
  );
}

