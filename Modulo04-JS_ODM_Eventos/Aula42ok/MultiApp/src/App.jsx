import { useState, useEffect } from "react";
import LanguageTranslator from "./components/LanguageTranslator";
import { createGlobalStyle } from "styled-components";
import MovieSearchEngine from "./components/MovieSearchEngine";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function App() {
  return (
    <>
    <GlobalStyle />
    <LanguageTranslator />
    <MovieSearchEngine />
    </>
  )
}

export default App;
