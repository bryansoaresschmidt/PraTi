// Aqui definimos o que vamos renderizar de fato
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

const author = {
  name: 'Bryan',
  link: 'https://github.com/bryansoaresschmidt'
}

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer name={author.name} link={author.link}/>
    </>
  )
}

export default App
