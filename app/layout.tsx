import './globals.css'
import { Inter, Cormorant_Garamond } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '600'],
  variable: '--font-cormorant' 
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans bg-white overflow-x-hidden`}>
        {/* Tightened Header */}
        <header className="w-full bg-white pt-4 pb-2 px-10 border-b border-gray-50">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <img src="/apple-touch-icon.png" alt="Icon" className="h-6 w-auto mb-1 opacity-80" />
            <div className="flex flex-col items-center w-full relative">
              <nav className="flex gap-6 mb-2">
                {['Projects', 'About Us', 'Services', 'Contact'].map((item) => (
                  <a key={item} href="#" className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 hover:text-brand-copper transition-all">
                    {item}
                  </a>
                ))}
              </nav>
              <h1 className="text-lg md:text-xl tracking-[0.7em] font-light uppercase text-brand-charcoal pt-2 w-full text-center border-t border-gray-100">
                Arches Hayatt
              </h1>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}

