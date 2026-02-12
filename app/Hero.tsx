export default function Hero() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center px-4 -mt-16">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-6">
          Lorem ipsum dolor sit amet
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-8">
          officiis adipiscing duo
          <br />
          <span className="italic">andorem odio, reprehending vitia.</span>
        </h2>
        <button className="border border-gray-900 text-gray-900 px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-gray-900 hover:text-white transition-all duration-300">
          VIEW OUR PORTFOLIO
        </button>
      </div>
    </section>
  )
}
