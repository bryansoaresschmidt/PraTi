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
