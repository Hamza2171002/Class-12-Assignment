import React from 'react'

const WorkSection = () => {
  return (
    <section className="bg-[#043873] text-white py-20 px-4 sm:px-10 md:px-20 lg:px-40">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8">
        <div className="w-full text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          Your work, everywhere you are
          </h2>
          <p className="text-sm text-gray-300 mb-8">
          Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!

          </p>
          <button className="bg-[#007BFF] hover:bg-[#0056b3] text-white font-medium py-3 px-8 rounded-lg">
            Try Taskey →
          </button>
        </div>
        </div>
    </section>
  )
}

export default WorkSection
