'use client'
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION - Split Layout */}
      <section className="relative h-[90vh] md:h-screen flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Side: Brand Content */}
        <div className="w-full md:w-[45%] bg-[#1A1C1E] flex flex-col justify-center px-8 md:px-16 py-20 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Minimalist Arch Icon */}
            <div className="mb-12">
               <img src="/apple-touch-icon.png" alt="Arch Icon" className="w-20 h-auto opacity-90" />
            </div>

            <h1 className="text-white text-4xl md:text-5xl font-serif tracking-widest uppercase leading-tight mb-6">
              Arches <br /> Hayatt
            </h1>
            
            <p className="text-gray-400 text-sm md:text-base max-w-sm mb-10 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>

            <button className="bg-brand-copper text-white px-8 py-3 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-opacity-80 transition-all w-fit">
              View Our Portfolio
            </button>
          </motion.div>
          
          {/* Decorative Arch line in background */}
          <div className="absolute bottom-0 right-0 w-32 h-64 border-t border-l border-white/5 rounded-tl-full pointer-events-none" />
        </div>

        {/* Right Side: Architectural Image */}
        <div className="w-full md:w-[55%] relative group">
          <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-all duration-700" />
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
            alt="Modern Architecture" 
            className="h-full w-full object-cover"
          />
          
          {/* Floating Circle Button (from design) */}
          <div className="absolute bottom-8 right-8 z-20">
            <div className="w-16 h-16 bg-brand-copper rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer hover:scale-110 transition-transform">
              <span className="text-xl">✕</span>
            </div>
          </div>
        </div>
      </section>

      {/* SUB-NAV / PHILOSOPHY */}
      <section className="bg-[#F9F7F2] py-12 px-8 flex justify-center border-b border-brand-concrete">
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
           <span className="text-brand-charcoal cursor-pointer">Projects</span>
           <span className="hover:text-brand-copper cursor-pointer">About Us</span>
           <span className="hover:text-brand-copper cursor-pointer">Services</span>
           <span className="hover:text-brand-copper cursor-pointer">Contact</span>
        </div>
      </section>
    </main>
  );
}
