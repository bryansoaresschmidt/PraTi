import React from "react";
import { useParams, Link } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();

  const users = {
    1: { name: "JoãozinhoPROGamer69", email: "joaozinho.rei.delas@gmail.com" },
    2: { name: "Mariazinha", email: "mari.barbie.girl@gmail.com" },
    3: { name: "RogérioAmassador", email: "rogerio123456789@gmail.com" },
  };

  const user = users[id];

  return (
    <div>
      {user ? (
        <div>
          <p> Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>ID: {id}</p>
          <button>
            <Link to="/">Voltar</Link>
          </button>
        </div>
      ) : (
        <p>Usuário não encontrado</p>
      )}
    </div>
  );
}