import React from "react";

const Customize = () => {
  return (
    <section className="bg-white text-gray-800 py-20 px-4 sm:px-10 md:px-20 lg:px-40">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-12">
      <div className="md:w-1/2">
          <div className="w-full h-72 md:h-80 bg-[#ADC8FF] rounded-lg"></div>
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Customise it
          to your needs
          </h1>
          <p className="text-lg text-gray-800 mb-8">
          Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.

          </p>
          <button className="bg-[#007BFF] hover:bg-[#0056b3] text-white font-medium py-3 px-8 rounded-lg">
            let&apos;s Go →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Customize;
