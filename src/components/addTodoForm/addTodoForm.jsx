import { useState } from 'react';
import styles from './AddTodoForm.module.css';
import { postTodos } from './../../api.jsx';

export const AddTodoForm = ({ setTodos }) => {

const[ newTodoText, setNewTodoText ] = useState("");
const[isLoading, setIsLoading] = useState(false);
const[addTodoError, setAddTodoError] = useState(null);

const handleAddTodoClick = async () => {
    
try {
    if(!newTodoText) {
      return;
    };
      setIsLoading(true);

const newTodos = await postTodos(newTodoText);
      setIsLoading(false);
      setTodos (newTodos.todos);
      setNewTodoText("");
  } catch (error) {
      setAddTodoError(error.message);
      setIsLoading(false);
  }
};

    return (
        <>
        <div className={styles.container}>
          <div>
          <input className={styles.input} placeholder="Введите вашу задачу" value={newTodoText}
          onChange={(event) => {
              setNewTodoText(event.target.value);
          }}/>
          </div>
          <button className={styles.buttonAddTask} disabled={isLoading} onClick={handleAddTodoClick}>{isLoading ? 'Задача добавляется...' : 'Добавить задачу'}</button>
        </div>
        <p className={styles.todoError}>{addTodoError}</p>
        </>
    )
};
