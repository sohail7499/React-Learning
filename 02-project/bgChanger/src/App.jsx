import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-3 rounded-full">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-2 rounded-full shadow-lg text-white cursor-pointer"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-2 rounded-full shadow-lg text-black cursor-pointer"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-2 rounded-full shadow-lg text-white cursor-pointer"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("gray")}
              className="outline-none px-4 py-2 rounded-full shadow-lg text-white cursor-pointer"
              style={{ backgroundColor: "grey" }}
            >
              grey
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-2 rounded-full shadow-lg text-white cursor-pointer"
              style={{ backgroundColor: "orange" }}
            >
              orange
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-2 rounded-full shadow-lg text-white cursor-pointer"
              style={{ backgroundColor: "black" }}
            >
              black
            </button>
            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-2 rounded-full shadow-lg text-white cursor-pointer"
              style={{ backgroundColor: "olive" }}
            >
              olive
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-2 rounded-full shadow-lg text-white cursor-pointer"
              style={{ backgroundColor: "purple" }}
            >
              purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
