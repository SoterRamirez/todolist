import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { Modal } from "../Modal";

function AppUI() {
    const {
            error,
            loading,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

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
            {!!openModal && (
                <Modal>
                    <h1>Crear TODO</h1>
                    <input type="text" placeholder="Escribe tu TODO" />
                    <button>Crear</button>
                    <button onClick={() => setOpenModal(false)}>Cancelar</button>
                </Modal>
            )}
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
    }

export { AppUI };
