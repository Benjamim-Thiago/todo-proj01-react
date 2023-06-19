import { Header } from './components/header/Header';

import styles from './App.module.css'

import './global.css'

import { Tasks } from './components/tasks/Tasks';

function App() {
  return (
    <div className={styles.todo}>
        <Header />
        <div className={styles.form}>
          <input type="text" className={styles.input} />
          <button className={styles.button}>+</button>
        </div>
        <Tasks />
    </div>
  )
}

export default App
