/*Exercício 1: Parâmetros de Rotas

Utilizar parâmetros de rotas para exibir detalhes dinâmicos.

Crie um componente UserDetail.jsx que exiba detalhes de um usuário com base em um parâmetro de rota (por exemplo, userId).
No App.jsx, defina uma rota dinâmica para o componente UserDetail.jsx utilizando um parâmetro de rota.
No UserDetail.jsx, utilize o hook useParams para acessar o parâmetro de rota e exibir as informações correspondentes.*/

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserDetail from "./component/UserDetail";

export default function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <h2>Escolha o usuário:</h2>
      <Router>
        <button>
          <Link to="/user/1"> User 1 </Link>
        </button>
        <button>
          <Link to="/user/2"> User 2 </Link>
        </button>
        <button>
          <Link to="/user/3"> User 3 </Link>
        </button>
        <Routes>
          <Route path="/" element={<h1>Informações aqui</h1>} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </Router>
    </div>
  );
}
