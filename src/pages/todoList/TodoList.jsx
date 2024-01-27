import { useState, useEffect } from 'react';
import { AddTodoForm } from '../../components/addTodoForm/addTodoForm.jsx';
import styles from '../TodoList.module.css';
import { getTodos } from '../../api.jsx'


export const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Создать проект React' },
    { id: 2, text: 'Подготовить данные нашего списка задач' },
  ]);

  const deletTodoList = (id) => {
    setTodos(todos.filter((item) => item.id !==id));
  }
  

  useEffect(() => {
    getTodos().then((todos) => {console.log(todos) 
      setTodos(todos.todos)});
  }, []);



    return (
      <div className="todo-list">
        <h2 className={styles.titleTodoList}>Список задач</h2>
        <AddTodoForm todos={todos} setTodos={setTodos}/>
        <h3 className={styles.titleTextTodoList}>Задачи:</h3>
        <ul className={styles.todoListItems}>
          {todos.map((todo) => {
     return <li className={styles.addedTask} key={todo.id}>{todo.text} 
              <button className={styles.buttonDelet} onClick={() => deletTodoList(todo.id)}>Удалить</button>
            </li>
          })}
        </ul>
      </div>
    )}
