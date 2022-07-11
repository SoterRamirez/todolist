import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../../TodoContext';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onCancel = () => {
        setNewTodoValue('');
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form className="TodoForm" onSubmit={onSubmit}>
            <h2>Crear TODO</h2>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                type="text"
                placeholder="Escribe tu TODO"
                />
            <div className="TodoForm-buttonContainer">
                <button
                    type='submit'
                    className="TodoForm-button TodoForm-button-add"
                >
                    Crear
                </button>
                <button
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button-cancel"
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
}

export { TodoForm };