import TimerComponent from "./components/LifeCycle"
import Posts from "./components/Posts"
import UserProfile from "./components/User"
import styles from "./App.module.css"

function App() {

  return (
    <div className={styles.div}>
      <TimerComponent />
      <UserProfile />
      <Posts />
    </div>
  )
}

export default App
