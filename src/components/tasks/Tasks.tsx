import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Tasks.module.css'

export function Tasks() {
  return (
    <>
      <div className={styles.tasks}>
        <div className={styles.info}>
          <div className={styles.created}>
            <div className={styles.taskCreated}>
              Tarefas Criadas
            </div>
            <div className={styles.taskCreatedCounter}>
              <span className={styles.counterCreated}>5</span>
            </div>
          </div>
          <div className={styles.done}>
            <div className={styles.taskDone}>
              Concluídas
            </div>
            <div className={styles.TaskCounterDone}>
              <span className={styles.counterDone}>2 de 5</span>
            </div>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.itemTask}>
            <input type='checkbox' className={styles.checkbox} />
            <p className={styles.itemText}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <button className={styles.trash}><Trash size={24} /></button>
          </div>
        </div>
      </div>
    </>
  )
}