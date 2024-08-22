// import MyChildren from "./components/Filho";
// import { MyProvider } from "./components/Contexto"
import { useState, createContext, useContext } from "react";

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* <MyProvider>
      <MyChildren />
    </MyProvider> */}

      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div>
          <ToolBar />
          <button onClick={toggleTheme}>Trocar Tema</button>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

function ToolBar() {
  const { theme } = useContext(ThemeContext);

  return ( 
  <div style={{background: theme === 'dark' ? 'gray' : 'white', color: theme === 'dark' ? 'white' : 'black'}}>
    Tema Utilizado - {theme}
  </div>
  )
}

export default App;
