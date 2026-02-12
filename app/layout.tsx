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
    <html lang="en" className="h-full">
      <body className={`${inter.variable} ${cormorant.variable} h-full bg-white flex flex-col overflow-hidden`}>
        {/* ULTRA-THIN HEADER */}
        <header className="w-full bg-white py-4 px-10 border-b border-gray-50 flex-none">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <img src="/apple-touch-icon.png" alt="Icon" className="h-5 w-auto mb-2 opacity-70" />
            <nav className="flex gap-8 mb-2">
              {['Projects', 'About Us', 'Services', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-[8px] uppercase tracking-[0.3em] font-bold text-gray-400 hover:text-brand-copper transition-all">
                  {item}
                </a>
              ))}
            </nav>
            <h1 className="text-sm tracking-[0.8em] font-light uppercase text-brand-charcoal pt-2 w-full text-center border-t border-gray-100">
              Arches Hayatt
            </h1>
          </div>
        </header>
        <main className="flex-grow overflow-hidden flex flex-col">
          {children}
        </main>
      </body>
    </html>
  )
}

