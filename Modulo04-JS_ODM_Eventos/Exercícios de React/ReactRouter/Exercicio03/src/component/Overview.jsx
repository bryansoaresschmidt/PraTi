import { Link } from "react-router-dom";

export default function Overview() {
  return (
    <div>
      <h1>Overview</h1>
      <p>Componente overview</p>
      <button>
        <Link to="/">Return</Link>
      </button>
    </div>
  );
}