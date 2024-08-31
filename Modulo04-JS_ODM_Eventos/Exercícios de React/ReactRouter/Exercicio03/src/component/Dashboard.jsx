import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Escolha um link</p>

      <li>
        <Link to="/overview">Overview</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
      <li>
        <Link to="/reports">Report</Link>
      </li>
    </div>
  );
}
