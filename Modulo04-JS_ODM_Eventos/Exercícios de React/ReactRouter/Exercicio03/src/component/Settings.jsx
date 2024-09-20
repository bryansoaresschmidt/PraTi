import { Link } from "react-router-dom";

export default function Settings() {
  return (
    <div>
      <h1>Settings</h1>
      <p>Componente settings</p>
      <button>
        <Link to="/">Return</Link>
      </button>
    </div>
  );
}