import React from "react";

function Skills() {
  const skills = [
    { emoji: "🌐", name: "HTML", type: "Markup" },
    { emoji: "💅", name: "CSS", type: "Styling" },
    { emoji: "🟨", name: "JS", type: "Language" },
    { emoji: "⚛️", name: "REACT", type: "Frontend" },
    { emoji: "🎨", name: "TAILWIND CSS", type: "Styling" },
    { emoji: "🐙", name: "Git", type: "Tool" },
  ];

  const cardClass =
    "bg-gray-700 h-32 w-28 rounded-lg border border-gray-600 flex flex-col items-center justify-center gap-2 hover:border-orange-500 hover:scale-110 transition-all duration-300 cursor-pointer";

  return (
    <>
      <div className="bg-gray-800 py-20 flex justify-center flex-col items-center">
        <p className="text-orange-500 tracking-widest text-sm mb-2">
          WHAT I KNOW
        </p>
        <h1 className="text-white text-4xl font-bold mb-10">My Skill's</h1>
       <div className="flex flex-wrap gap-6 justify-center px-4">
          {skills.map((skills) => (
            <div key={skills.name} className={cardClass}>
              <span className="text-3xl">{skills.emoji}</span>
              <p className="text-white font-medium">{skills.name}</p>
              <p className="text-gray-400 text-xs">{skills.type}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
