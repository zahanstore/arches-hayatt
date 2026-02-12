'use client'

import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20 px-6 bg-brand-sandstone min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl md:text-6xl font-serif mb-6"
        >
          Let’s build the <br /> <span className="italic">Horizon.</span>
        </motion.h1>
        <p className="text-gray-600 uppercase tracking-widest text-sm">Inquire about a project</p>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-brand-concrete">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-widest font-bold mb-2">Name</label>
              <input type="text" className="border-b border-brand-concrete py-2 focus:border-brand-copper outline-none transition-colors" />
            </div>
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-widest font-bold mb-2">Email</label>
              <input type="email" className="border-b border-brand-concrete py-2 focus:border-brand-copper outline-none transition-colors" />
            </div>
          </div>
          
          <div className="flex flex-col">
            <label className="text-xs uppercase tracking-widest font-bold mb-2">Project Type</label>
            <select className="border-b border-brand-concrete py-2 focus:border-brand-copper outline-none bg-transparent">
              <option>Residential</option>
              <option>Commercial</option>
              <option>Renovation</option>
              <option>Other</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-xs uppercase tracking-widest font-bold mb-2">Message</label>
            <textarea rows={4} className="border-b border-brand-concrete py-2 focus:border-brand-copper outline-none transition-colors resize-none" />
          </div>

          <button className="w-full bg-brand-charcoal text-brand-sandstone py-4 uppercase tracking-[0.3em] text-xs font-bold hover:bg-brand-copper transition-all">
            Submit Inquiry
          </button>
        </form>
      </div>

      <div className="mt-20 text-center space-y-2">
        <p className="text-sm font-bold uppercase tracking-widest">Studio Address</p>
        <p className="text-gray-500 font-serif">123 Architect's Row, Design District</p>
        <p className="text-brand-copper font-semibold">studio@archeshayatt.com</p>
      </div>
    </main>
  );
}

