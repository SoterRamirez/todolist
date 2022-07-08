import React from "react";
import './TodoCounter.css';

function TodoCounter ({ completed, total }) {
    return(
        <h2 className="TodoCounter">
            Has completado { completed } de { total } ToDo`s
        </h2>
    );
}

export { TodoCounter };