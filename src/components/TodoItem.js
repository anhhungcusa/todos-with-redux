import React from 'react';
import { Button } from './Button';

export const TodoItem = React.memo(
    function TodoItem({id, title, isCompleted, removeTodo, togglerTodo}) {
    // console.log(`todoitem ${title}  render`)
    const handleRemoveTodo = () => removeTodo(id);
    const handleToggler = () => togglerTodo(id);
    return (
        <li className={`item ${isCompleted && 'completed'} d-flex justify-center align-center`}>
            <div className='d-flex justify-between'>
            <p>{title}</p>
            <div className=''>
                <Button onClick={handleRemoveTodo} > remove</Button>
                <Button onClick={handleToggler} >toggler</Button>
            </div>
            </div>
        </li>
    )
}
)
