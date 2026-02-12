'use client'

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="pt-32 bg-brand-sandstone min-h-screen">
      {/* --- VISION SECTION --- */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Architectural Graphic Element */}
            <div className="aspect-[4/5] bg-brand-concrete relative overflow-hidden rounded-t-full border border-brand-concrete">
               <div className="absolute inset-0 flex items-center justify-center text-brand-charcoal/10 text-9xl font-serif italic">
                 H
               </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-brand-copper rounded-full opacity-20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-brand-copper uppercase tracking-[0.3em] text-sm font-bold mb-6">Our Story</h2>
            <h1 className="text-5xl font-serif mb-8 leading-tight">
              Bridging the gap between <br />
              <span className="italic">Permanence and Presence.</span>
            </h1>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Arches Hayatt was founded on a simple realization: the most beautiful buildings are those that adapt to the rhythm of the people inside them.
              </p>
              <p>
                The **Arch** represents our commitment to the history of architecture—strength, geometry, and timelessness. **Hayatt** represents the pulse of life—movement, light, and the way a space feels on a Tuesday afternoon.
              </p>
              <p>
                We don't just design structures; we curate the backdrop for your life's most meaningful moments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- THE THREE PILLARS --- */}
      <section className="bg-brand-charcoal py-24 px-6 text-brand-sandstone">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="border-l border-brand-copper/30 pl-8">
            <span className="text-brand-copper font-serif italic text-4xl mb-4 block">01</span>
            <h3 className="uppercase tracking-widest text-sm mb-4 font-bold">Structural Integrity</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We build for the long-term, using materials that age with grace and engineering that ensures safety for generations.
            </p>
          </div>
          <div className="border-l border-brand-copper/30 pl-8">
            <span className="text-brand-copper font-serif italic text-4xl mb-4 block">02</span>
            <h3 className="uppercase tracking-widest text-sm mb-4 font-bold">Biophilic Flow</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every project prioritizes natural light, airflow, and a seamless connection to the surrounding environment.
            </p>
          </div>
          <div className="border-l border-brand-copper/30 pl-8">
            <span className="text-brand-copper font-serif italic text-4xl mb-4 block">03</span>
            <h3 className="uppercase tracking-widest text-sm mb-4 font-bold">The Human Scale</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              No matter how grand the project, we never lose sight of the individual. Our spaces are designed to be touched, lived in, and loved.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
