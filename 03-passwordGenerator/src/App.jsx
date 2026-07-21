import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [lenght, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRaf = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*({<~`|][})";
    }

    for (let i = 0; i < lenght; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [lenght, numberAllowed, charAllowed, setPassword]);

  const copyPasswordClipBord = useCallback(() => {
    passwordRaf.current?.select();
    passwordRaf.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [lenght, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-3xl mx-auto shadow-lg rounded-xl px-6 py-5 my-8 text-orange-500 bg-gray-800 border border-gray-700 transition-all duration-300">
        <h1 className="text-white text-center text-xl sm:text-2xl md:text-3xl mt-4 mb-7 tracking-wide drop-shadow-md">
          password generator
        </h1>
        <div className="flex rounded-lg shadow mb-4 bg-gray-900 text-black text-base sm:text-xl md:text-2xl p-2 border border-gray-600 focus-within:border-orange-400 transition-colors duration-300">
          <input
            type="text"
            value={password}
            className="text-orange-400 outline-none w-full py-1 px-3 bg-transparent tracking-widest font-mono"
            placeholder="Password"
            readOnly
            ref={passwordRaf}
          />
          <button
            onClick={copyPasswordClipBord}
            className="outline-none bg-blue-700 hover:bg-blue-500 active:scale-95 active:bg-blue-800 px-3 sm:px-4 rounded-lg shrink-0 text-white text-sm sm:text-base cursor-copy transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/40 font-semibold"
          >
            copy
          </button>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-y-3 gap-x-2 text-sm">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={lenght}
              className="cursor-pointer w-full sm:w-auto accent-orange-500"
              onChange={(e) => {
                setLenght(e.target.value);
              }}
            />
            <label className="text-lg sm:text-xl md:text-2xl whitespace-nowrap text-orange-400">
              lenght: {lenght}
            </label>
          </div>
          <div className="flex items-center gap-x-1.5 text-lg sm:text-xl md:text-2xl">
            <input
              className="ml-0 sm:ml-5 accent-orange-500 w-4 h-4 cursor-pointer"
              type="checkbox"
              defaultValue={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label
              htmlFor="numberInput"
              className="cursor-pointer hover:text-orange-300 transition-colors duration-200"
            >
              Number
            </label>
          </div>
          <div className="flex items-center gap-x-1.5 text-lg sm:text-xl md:text-2xl">
            <input
              className="ml-0 sm:ml-5 accent-orange-500 w-4 h-4 cursor-pointer"
              type="checkbox"
              defaultValue={charAllowed}
              id="CharacterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label
              htmlFor="CharacterInput"
              className="cursor-pointer hover:text-orange-300 transition-colors duration-200"
            >
              Character
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
