import { Link } from "react-router-dom";

export default function Settings() {
  return (
    <div>
      <button>
        <Link to="/">Return</Link>
      </button>
      <h1>Settings</h1>
      <p>Componente settings</p>
    </div>
  );
}