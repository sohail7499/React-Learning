import React from "react";

function Projects() {
  const project = [
    {
      emoji: "🔢",
      name: "BG Color Changer ",
      desc: "A Simple Counter With Increment, Dicrement And Reset",
      tag: ["React", "Tailwins Css"],
      github:
        "https://github.com/sohail7499/React-Learning/tree/main/02-project/bgChanger",
      live: "#",
    },
    {
      emoji: "🔑",
      name: "Currency Converter ",
      desc: "Convert currencies in real time using live exchange rates.",
      tag: ["React", "API"],
      github:
        "https://github.com/sohail7499/React-Learning/tree/main/02-project/bgChanger",
      live: "#",
    },
    {
      emoji: "💱",
      name: "BG Color Changer ",
      desc: "A Simple Counter With Increment, Dicrement And Reset",
      tag: ["React", "Tailwins Css"],
      github:
        "https://github.com/sohail7499/React-Learning/tree/main/02-project/bgChanger",
      live: "#",
    },
  ];

  const projectCard =
    "bg-gray-900 rounded-xl border border-gray-600 flex flex-col gap-3 p-5 w-72 hover:border-orange-500 hover:-translate-y-2 transition-all duration-300 cursor-pointer";

  return (
    <>
      <div className="bg-gray-800 py-20 flex flex-col justify-center items-center">
        <p className="text-orange-500 tracking-widest text-sm mb-2">
          WHAT I BUILT
        </p>
        <h1 className="text-white text-4xl font-bold mb-10">My Project</h1>
       <div className="flex flex-wrap gap-6 justify-center px-4">
          {project.map((item) => (
            <div key={project.name} className={projectCard}>
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <span className="text-3xl text-center">{item.emoji}</span>
                <p className="text-white font-medium">{item.name}</p>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>

              <div className="flex gap-2">
                {item.tag.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-700 text-orange-400 text-xs px-2 py-1 rounded-md border border-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href={item.live}
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg text-xs hover:bg-orange-400 text-center"
                >
                  Live
                </a>
                <a
                  href={item.github}
                  target="_blank"
                  className="border border-gray-500 text-white px-6 py-2 rounded-lg text-xs hover:border-orange-500 text-center"
                >
                  Github🐙
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
