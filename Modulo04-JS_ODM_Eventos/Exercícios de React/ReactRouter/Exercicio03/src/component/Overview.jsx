import { Link } from "react-router-dom";

export default function Overview() {
  return (
    <div>
      <button>
        <Link to="/">Return</Link>
      </button>
      <h1>Overview</h1>
      <p>Componente overview</p>
    </div>
  );
}