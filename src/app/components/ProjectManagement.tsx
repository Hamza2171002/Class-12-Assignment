import React from 'react';

const ProjectManagement = () => {
  return (
    <section className="py-20 px-4 sm:px-10 md:px-20 lg:px-40 bg-white">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Row: Text and Image */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
          {/* Left Section: Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Project Management
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg">
              Get Started →
            </button>
          </div>

          {/* Right Section: Placeholder Box */}
          <div className="md:w-1/2">
            <div className="w-full h-64 md:h-80 bg-blue-200 rounded-lg"></div>
          </div>
        </div>

        {/* Bottom Row: Circular Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Section: Circular Image */}
          <div className="md:w-1/2 flex justify-center pr-6">
          <img
                    src="/Work Together Image.png"
                    alt="Center Icon"
                    className="w-[410px] h-[261px]"
                  />
          </div>

          {/* Right Section: Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Work together
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With Whitespace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg">
              Try it now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectManagement;
