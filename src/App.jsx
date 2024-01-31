import React from 'react';
import './App.css';
import { AppRoutes } from "./Routes.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getTodos } from './api.jsx';

export const App = () => {

  const[currentTodo, setcurrentTodo] = useState(null);

  const [todos, setTodos] = useState([
    { id: 1, text: 'Создать проект React' },
    { id: 2, text: 'Подготовить данные нашего списка задач' },
  ]);

  useEffect(() => {
    getTodos().then((todos) => { setTodos(todos.todos)});
  }, []);

  return (
    <div className="App">
      {currentTodo ? (<div className="currentTasks">Текущая задача: {currentTodo.text}</div>) : null}
      <div className="Container">
        <div className="containerNav">
        <h3 className="title">Навигация</h3>
        <Link className="link" to="/">Задачи</Link>
        <Link className="link" to="/add">Добавить задачу</Link>
        <Link className="link" to="/about">О проекте</Link>
        </div>
      </div>
      <div>
        <AppRoutes 
        todos={todos} 
        setTodos={setTodos}
        setcurrentTodo={setcurrentTodo}
        /> 
      </div>
    </div>
  )
}
