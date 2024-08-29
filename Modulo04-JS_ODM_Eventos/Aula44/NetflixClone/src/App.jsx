import FormComp from "./component/FormComp"
import { createGlobalStyle } from "styled-components"
import Header from "./component/Header"
import Footer from './component/Footer'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
  }
`

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <FormComp />
      <Footer />
    </>
  )
}

export default App
