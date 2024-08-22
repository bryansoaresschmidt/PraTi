import { useState, useContext, createContext } from 'react'

const PreferencesContext = createContext()

function App() {
  const [ pref, setPref ] = useState({theme: 'light', language: 'en'}) 

  const toggleTheme = () => {
    setPref(currTheme => ({
      ...currTheme,
      theme: currTheme.theme === 'light' ? 'dark' : 'light'}))
  }

  const changeLanguage = (language) => {
    setPref(currLang => ({
      ...currLang,
      language: language
    }))
  }

  return (
    <>
    <PreferencesContext.Provider value={{ pref, toggleTheme, changeLanguage }}>
      <div>
        <button onClick={toggleTheme}>Trocar tema</button>
        <Toolbar />
        <button onClick={() => changeLanguage('pt-br')}>PT-BR</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
      </div>
    </PreferencesContext.Provider>
    </>
  )
}

function Toolbar() {
  const { pref } = useContext(PreferencesContext)

  return (
    <div style={{
      background: pref.theme === 'dark' ? 'black' : 'white', 
      color: pref.theme === 'dark' ? 'white' : 'black'
    }}>
      Tema utilizado: {pref.theme}
      <br /> 
      Idioma: {pref.language}
    </div>
  )

}

export default App
