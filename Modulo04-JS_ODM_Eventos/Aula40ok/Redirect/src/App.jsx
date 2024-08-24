import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route 
            path='/home' 
            element={
              <ProtectedRoute isLoggedIn={false}>
                <Home />
              </ProtectedRoute>}/>
        </Routes>
      </Router>
    <ProtectedRoute />
    </>
  )
}

export default App
