import { useState } from 'react';
import styles from '../AddTodoForm.module.css';

export const AddTodoForm = ({ todos, setTodos }) => {
const[ newTodoText, setNewTodoText ] = useState("")

const handleAddTodoClick = () => {
    if(!newTodoText) {
        return;
    }

    setTodos ([...todos, { text: newTodoText, id: Date.now()}]);

    setNewTodoText("");
}

    return (
        <div className={styles.container}>
            <div>
          <input className={styles.input} placeholder="Введите вашу задачу" value={newTodoText}
          onChange={(event) => {
              setNewTodoText(event.target.value);
          }}/>
          </div>
          <button className={styles.buttonAddTask} onClick={handleAddTodoClick}>Добавить задачу</button>   
        </div>
    )
} 