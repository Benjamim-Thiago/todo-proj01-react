import styles from './Tasks.module.css'
import { ItemTask } from './ItemTask';
import { PlusCircle } from 'phosphor-react';
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';

export interface Todo {
  id: number;
  description: string;
  concluded: boolean;
}
export function Tasks() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [description, setDescription] = useState('')
  const [concluded, setConcluded] = useState(false)

  function handlerAdd(event: FormEvent) {
    event.preventDefault()
   
    if(description.length === 0) {
      return alert('Preencha o nome da tarefa.')
    }

    if(todos.find((todo) => todo.description === description)) {
      setDescription('')
      return alert('Tarefa já foi adicionada')
    }

    const newTodo: Todo = {
      id: todos.length + 1,
      description: description,
      concluded: false,
    };

    setTodos([...todos, newTodo]);
    setDescription('')
    setConcluded(false)     
  }

  function handlerChecked(item: Todo) {
    const updateTodos = todos.map((value) => {
      if(value.id === item.id) {
        const result = !item.concluded
        setConcluded(result)
        return { ...value, concluded: result };
      }
      return value;
    });

    setTodos(updateTodos)    
  }
  function handleAddChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setDescription(event.target.value);
  }

  function handleAddInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function handlerDeleteTask(taskToDelete: Todo) {
    const todosWithoutDeletedOne = todos.filter(item => {
      return item !== taskToDelete;
    })

    setTodos(todosWithoutDeletedOne);
  }

  return (
    <>
      <form onSubmit={handlerAdd} className={styles.form}>
        <input type="text" className={styles.input} 
          name='description' 
          placeholder='Adicione uma nova tarefa' 
          value={description}
          onChange={handleAddChange}
          onInvalid={handleAddInvalid}
        />
          
        <button className={styles.button}>Criar <PlusCircle size={32} /></button>
      </form>

      <div className={styles.tasks}>
        <div className={styles.info}>
          <div className={styles.created}>
            <div className={styles.taskCreated}>
              Tarefas Criadas
            </div>
            <div className={styles.taskCreatedCounter}>
              <span className={styles.counterCreated}>{todos.length}</span>
            </div>
          </div>
          <div className={styles.done}>
            <div className={styles.taskDone}>
              Concluídas
            </div>
            <div className={styles.TaskCounterDone}>
              <span className={styles.counterDone}>
                  {todos.filter((todo) => todo.concluded === true).length} de {todos.length}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.list}>
        {todos.map(item => {
          return (
            <ItemTask 
              key={item.id} 
              content={item} 
              onChecked={handlerChecked}
              onDeleteComment={handlerDeleteTask}/>
          )
        })}
        </div>
      </div>
    </>
  )
}