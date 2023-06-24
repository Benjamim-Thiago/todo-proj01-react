import { Trash } from "phosphor-react"
import styles from './ItemTask.module.css'
import { Todo } from "./Tasks";

interface itemProps {
  content: Todo;
  onDeleteComment: (item: Todo) => void;
  onChecked: (item: Todo) => void;
}
export function ItemTask({content, onChecked, onDeleteComment}: itemProps) {
  return (
    <>
      <div className={styles.itemTask}>
        <input type='checkbox' className={styles.checkbox} checked={content.concluded} onChange={() =>onChecked(content)}/>
        <p className={styles.itemText}>{content.description}</p>
        <button className={styles.trash} onClick={() => onDeleteComment(content)}>
          <Trash size={24} />
        </button>
      </div>
    </>
  )
}