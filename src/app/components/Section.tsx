import React from 'react'

const Section = () => {
  return (
    <section className="bg-[#043873] text-white py-20 px-4 sm:px-10 md:px-20 lg:px-40">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Use as Extension
          </h1>
          <p className="text-lg text-gray-300 mb-8">
          Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.

          </p>
          <button className="bg-[#007BFF] hover:bg-[#0056b3] text-white font-medium py-3 px-8 rounded-lg">
            let's Go →
          </button>
        </div>

        {/* Right Section: Placeholder Box */}
        <div className="md:w-1/2">
          <div className="w-full h-64 md:h-80 bg-[#ADC8FF] rounded-lg"></div>
        </div>
        </div>
    </section>
  )
}

export default Section
