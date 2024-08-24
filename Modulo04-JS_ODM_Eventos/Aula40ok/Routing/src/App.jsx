import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom'
import { Home } from './components/Home'
import { Servicos } from './components/Servicos'
import { Sobre } from './components/Sobre'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <>
     <Router> {/* Vai envolver toda aplicação, e habilitar o hoteamento */}
      <Navigation />
      <Routes> {/* Garante que só uma rota seja renderizada por vez, uma lista de rotas */}
        <Route path='/' Component={Home}/>
        <Route path='/servicos' Component={Servicos}/> {/* Component: a gente só manda os componentes */}
        <Route path='/sobre' element={ <Navigate to='/'/> }> {/* Element: manda mais elementos do jsx, é mais amplo */}
        </Route>


      </Routes>
    </Router>
    </>
  )
}

export default App


// Roteamento é o processo de direcionar o usuário para outras telas