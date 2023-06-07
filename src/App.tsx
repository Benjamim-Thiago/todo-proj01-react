import { Header } from './components/header/Header';

import styles from './App.module.css'

import './global.css'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.add}>
        <input type="text" className={styles.input} />
        <button className={styles.button}>+</button>
      </div>
    </div>
  )
}

export default App
