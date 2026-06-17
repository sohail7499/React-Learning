import { useState } from "react";
import { ThemeContext } from "./components/Context";
import ThemeButton from "./components/ThemeBtn";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider
        value={{ theme, setTheme }}
      >
        <ThemeButton />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
