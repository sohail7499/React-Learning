import { useContext } from "react";
import { ThemeContext } from "./Context";

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`flex justify-center items-center min-h-screen ${
          theme === "light" ? "bg-white" : "bg-gray-900"
        }`}
      >
        <button
          onClick={() => {
            setTheme((prev) => (prev === "light" ? "dark" : "light"));
          }}
          className={`mt-10 rounded-full px-6 py-4 text-2xl font-bold border-4 transition-all duration-300 ${
            theme === "light"
              ? "bg-white text-black border-black"
              : "bg-gray-800 text-white border-white"
          }`}
        >
          Current Theme: {theme}
        </button>
      </div>
    </>
  );
}

export default ThemeButton;
