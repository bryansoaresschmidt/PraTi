import "./App.css";
import Title from "./components/Title";
import WindowSize from "./components/WindowSize";
import PersistentCounter from "./components/PersistentCounter";
import RealTimeClock from "./components/RealTimeClock";
import ToggleText from "./components/ToggleText";
import LimitedCounter from "./components/LimitedCounter";

function App() {
  return (
    <>
      <Title />
      <WindowSize />
      <PersistentCounter />
      <RealTimeClock />
      <ToggleText />
      <LimitedCounter />
    </>
  );
}

export default App;
