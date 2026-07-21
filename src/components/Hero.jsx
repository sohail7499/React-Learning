import React from "react";

function Hero() {
  return (
    <>
      <div className="bg-gray-800 min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-10">
        <div>
          <p className="text-orange-500 tracking-widest text-sm mb-4">
            HELLO, I'M
          </p>
          <h1 className="text-5xl text-white mb-3">Sohail Khan</h1>
          <p className="text-3xl font-bold text-blue-100 mb-4">
            Frontend Developer
          </p>
          <p className="text-white opacity-35 max-w-md mb-8">
            Fresh graduate passionate about building beautiful and responsive
            web applications using React and Tailwind CSS.
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg border border-amber-50 mr-5">
            View Project
          </button>
          <button className="text-white px-4 py-2 rounded-lg border border-amber-50">
            Contect me
          </button>
        </div>
        <div className="w-40 h-40 rounded-full border-4 border-orange-500 bg-gray-700 flex items-center justify-center">
          <span className="text-orange-500 text-5xl font-bold">SK</span>
        </div>
      </div>
    </>
  );
}

export default Hero;
