import { AddTodoForm } from '../../components/addTodoForm/addTodoForm.jsx';
import './AddTodoPage.css';

export const AddTodoPage = ({ setTodos }) => {
  return (
    <div className="page">
      <h1>Страница добавления задачи</h1>
      <AddTodoForm setTodos={setTodos}/>
    </div>
  );
}
