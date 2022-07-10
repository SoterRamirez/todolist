import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";

function AppUI() {
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoContext.Consumer>
                {({ error, loading, searchedTodos, completeTodo, deleteTodo}) => (
                    <TodoList >
                        {error && <p>Tenemos un error...</p>}
                        {loading && <p>Estamos cargando, no desesperes...</p>}
                        {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}

                        {searchedTodos.map((todo) => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                        ))}
                    </TodoList>
                    )}
            </TodoContext.Consumer>

            <CreateTodoButton />
        </React.Fragment>
    );
    }

export { AppUI };
