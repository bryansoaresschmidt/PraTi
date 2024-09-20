/*Exercício 2: Navegação Programática

Implementar navegação programática usando o React Router.

Crie um componente Login.jsx com um formulário de login simples.
No Login.jsx, após a submissão do formulário, redirecione o usuário para a página Profile.jsx utilizando o hook useHistory.
Crie um componente Profile.jsx para exibir informações do perfil do usuário após o login.*/

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Profile from "./component/Profile";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}