import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div>

      <h1>Users Page</h1>

      <p>
        <Link to="/user/1">Usuário 1</Link>
      </p>
      <p>
        <Link to="/user/2">Usuário 2</Link>
      </p>
      <p>
        <Link to="/user/3">Usuário 3</Link>
      </p>
    </div>
  );
};

export default Users;
