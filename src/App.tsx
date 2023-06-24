import { Header } from './components/header/Header';
import { Tasks } from './components/tasks/Tasks';

import styles from './App.module.css'

import './global.css'
function App() {  
  return (
    <div className={styles.todo}>
        <Header />        
        <Tasks />
    </div>
  )
}

export default App
