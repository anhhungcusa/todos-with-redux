import React from 'react';
import { Button } from './Button';

export const TodoItem = React.memo(
    ({id, title, isCompleted, removeTodo, togglerTodo}) => {
    console.log(`todoitem ${title}  render`)
    const handleRemoveTodo = () => removeTodo(id);
    const handleToggler = () => togglerTodo();
    return (
        <li className={`item ${isCompleted && 'completed'}`}>
            <p>{title}</p>
            <Button onClick={handleRemoveTodo} >toggler</Button>
            <Button onClick={handleToggler} >remove</Button>
        </li>
    )
}
)
