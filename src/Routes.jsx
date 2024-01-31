import { Routes, Route } from 'react-router-dom';
import { AboutPage } from './pages/About/About.jsx';
import { TodoList } from './pages/todoList/TodoList.jsx';
import { AddTodoPage } from "./pages/TodoPage/AddTodoPage.jsx";

export const AppRoutes = ({todos, setTodos, setcurrentTodo}) => {
    return (
        <Routes>
            <Route path='/' element={<TodoList 
              todos={todos} 
              setTodos={setTodos}
              setcurrentTodo={setcurrentTodo}
            ></TodoList>}></Route>
            <Route path='/about' element={<AboutPage></AboutPage>}></Route>
            <Route path='/add' element={<AddTodoPage 
              setTodos={setTodos}
            ></AddTodoPage>}></Route>
        </Routes>
    )
};