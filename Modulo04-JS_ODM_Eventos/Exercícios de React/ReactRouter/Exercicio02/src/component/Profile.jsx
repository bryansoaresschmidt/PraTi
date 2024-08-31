import { useLocation } from "react-router-dom";

export default function Profile() {
  const location = useLocation();

  const { name, email } = location.state || {};

  return (
    <div>
      <p>Nome: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}
