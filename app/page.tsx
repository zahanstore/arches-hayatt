'use client'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
      {/* Left Content Area */}
      <div className="w-full md:w-[45%] bg-[#121416] flex flex-col justify-center px-12 md:px-20 relative">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <img src="/apple-touch-icon.png" alt="Arch" className="w-24 h-auto mb-12 opacity-30 brightness-200" />
          
          <h2 className="text-white text-5xl font-serif tracking-widest uppercase leading-tight mb-4">
            Arches Hayatt
          </h2>
          
          <p className="text-gray-400 text-[10px] tracking-[0.1em] leading-relaxed max-w-xs mb-8">
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR.
          </p>

          <button className="bg-[#8B5E3C] text-white px-8 py-3 text-[10px] tracking-[0.3em] font-bold uppercase hover:brightness-110 transition-all">
            View Our Portfolio
          </button>
        </motion.div>
      </div>

      {/* Right Image Area */}
      <div className="w-full md:w-[55%] relative bg-gray-200">
        <img 
          src="https://images.unsplash.com/photo-1600607687940-4e2a09695d51?q=80&w=2070&auto=format&fit=crop" 
          alt="Architecture" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Floating Copper Button */}
        <div className="absolute bottom-10 right-10">
          <div className="w-16 h-16 bg-[#8B5E3C] rounded-full flex items-center justify-center text-white text-2xl shadow-2xl cursor-pointer hover:rotate-90 transition-all">
            ✕
          </div>
        </div>
      </div>

      {/* Bottom Beige Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-[#E5E0D8] py-8 flex justify-center gap-16 border-t border-black/5 md:h-20 items-center">
        {['Instagram', 'LinkedIn', 'Studio'].map((s) => (
          <span key={s} className="text-[10px] tracking-[0.3em] font-bold text-gray-600 uppercase cursor-pointer hover:text-black">
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

