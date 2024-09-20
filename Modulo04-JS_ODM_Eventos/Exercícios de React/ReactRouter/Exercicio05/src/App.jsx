/*Exercício 5: Guardas de Rotas

Implementar guardas de rotas para proteger rotas específicas.

Crie um contexto AuthContext.jsx para gerenciar o estado de autenticação do usuário.
Crie um componente PrivateRoute.jsx que utilize o contexto AuthContext para verificar se o usuário está autenticado antes de renderizar a rota.
Utilize o componente PrivateRoute.jsx para proteger rotas sensíveis, como o painel (Dashboard.jsx).*/

import React, { createContext, useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const AppContext = createContext();
function App() {
    return (
        <>
            <AppContext.Provider value={{ name, setName }}>
              
            </AppContext.Provider>
        </>
    );
}

export default App;
