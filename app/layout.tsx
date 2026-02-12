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
        <header className="w-full bg-white pt-6 pb-4 px-10">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <img src="/apple-touch-icon.png" alt="Icon" className="h-7 w-auto mb-2 opacity-80" />
            <div className="flex flex-col items-center w-full relative">
              <nav className="flex gap-8 mb-3">
                {['Projects', 'About Us', 'Services', 'Contact'].map((item) => (
                  <a key={item} href="#" className="text-[9px] uppercase tracking-[0.25em] font-bold text-gray-400 hover:text-brand-copper transition-all">
                    {item}
                  </a>
                ))}
              </nav>
              <h1 className="text-xl tracking-[0.6em] font-light uppercase text-brand-charcoal border-t border-gray-100 pt-3 w-full text-center">
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

