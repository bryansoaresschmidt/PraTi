import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./component/Overview";
import Dashboard from "./component/Dashboard";
import Settings from "./component/Settings";
import Reports from "./component/Reports";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Router>
    </div>
  );
}
