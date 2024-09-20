/*Exercício 4: Redirecionamento

Implementar redirecionamentos no React Router.

Crie um componente NotFound.jsx para exibir uma mensagem de erro quando a rota não for encontrada.
No App.jsx, defina uma rota que redirecione para a página NotFound.jsx quando uma rota inválida for acessada.
Crie um componente ProtectedRoute.jsx que redirecione para a página de login se o usuário não estiver autenticado.*/

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import NotFound from "./component/NotFound";
import Login from "./component/Login";
import Home from "./component/Home";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
    const [auth, setAuth] = useState(false);

    const handleLogin = () => {
        setAuth(true);
    };
    const handleLogout = () => {
        setAuth(false);
    };

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login onLogin={handleLogin} />} />
                    <Route path="/home" element={
                        <ProtectedRoute isAuthenticated={auth}>
                            <Home onLogout={handleLogout}/>
                        </ProtectedRoute>
                        } />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
