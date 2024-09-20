import { Link } from "react-router-dom";

export default function Reports() {
  return (
    <div>
      <h1>Reports</h1>
      <p>Componente reports</p>
      <button>
        <Link to="/">Return</Link>
      </button>
    </div>
  );
}