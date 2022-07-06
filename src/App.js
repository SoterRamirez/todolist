import React from 'react';
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import './App.css';

const todos =[
  {id: 1, text: 'Hacer la compra', completed: false},
  {id: 2, text: 'Hacer el trabajo', completed: false},
  {id: 3, text: 'Hacer el examen', completed: true},
  {id: 4, text: 'Hacer el curso', completed: false},
  {id: 5, text: 'Hacer la comida', completed:true}
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
