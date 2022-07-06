import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
    const onComplet = () => {
        alert('Tarea: ' + props.text + ' completada');
    }
    const onDelate = () => {
        alert('Tarea: ' + props.text + ' eliminada');
    }
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
                onClick={onComplet}
            >
                √
            </span>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>
            <span
                className="Icon Icon-delete"
                onClick={onDelate}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem };
