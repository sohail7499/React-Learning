import React from "react";

function Contect() {
  const contectCard =
    "bg-gray-900 border border-gray-600 rounded-xl p-4 flex items-center gap-3 hover:border-orange-500 hover:scale-105 transition-all duration-300 mt-4 w-72";

  return (
    <>
      <div className="bg-gray-800 py-20 flex flex-col justify-center items-center">
        <p className="text-orange-500 tracking-widest text-sm mb-2">
          GET IN TUCH
        </p>
        <h1 className="text-white text-4xl font-bold mb-10">Contact Me</h1>
        <p className="text-white opacity-35 mb-2 text-center px-4">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
       <div className="flex flex-col md:flex-row gap-10 mt-6 mb-10 px-4">
          <div>
            <h2 className="font-bold text-white text-2xl mb-10">
              Let's Talk! 👋
            </h2>
            <div className={contectCard}>
              <span>📧</span>
              <div>
                <p className="text-gray-400 text-xs">EMAIL</p>
                <p className="text-white text-sm">khan@example.com</p>
              </div>
            </div>
            <div className={contectCard}>
              <span>📍</span>
              <div>
                <p className="text-gray-400 text-xs">Location</p>
                <p className="text-white text-sm">India</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-white text-2xl mb-10">
              Find Me On! 🚀
            </h2>
            <div className={contectCard}>
              <span>🐙</span>
              <div>
                <p className="text-gray-400 text-xs">github</p>
                <p className="text-white text-sm">khan@example.com</p>
              </div>
            </div>

            <div className={contectCard}>
              <span>💼</span>
              <div>
                <p className="text-gray-400 text-xs">LINKEDIN</p>
                <p className="text-white text-sm">khan@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contect;
