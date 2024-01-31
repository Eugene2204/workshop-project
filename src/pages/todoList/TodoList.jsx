import styles from './TodoList.module.css';
import { deletTodo } from './../../api.jsx';
import { Search } from '../../components/Search/Search.jsx';

export const TodoList = ({todos, setTodos, setcurrentTodo}) => {

  const hendleTodoClick = (todo) => {
    setcurrentTodo(todo);
  }
  
  const deletTodoList = async ({id}) => {
    const delTodos = await deletTodo({id});
    setTodos(delTodos.todos);
  }

    return (
      <div className={styles.todoList}>
      <Search />
        <h2 className={styles.titleTodoList}>Список задач</h2>
        <ul className={styles.todoListItems}>
          {todos.map((todo) => {
     return <li className={styles.addedTask} onClick={() => hendleTodoClick(todo)} key={todo.id}>{todo.text} 
              <button className={styles.buttonDelet} onClick={() => deletTodoList({id:todo.id})}>Удалить</button>
            </li>
          })}
        </ul>
      </div>
    )};
