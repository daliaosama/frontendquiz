import "./App.css";
import { createContext, useState } from "react";
import Main from "./components/Main/Main";
export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");
  
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Main></Main>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
