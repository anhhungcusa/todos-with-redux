import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ allIds, byIds, removeTodo, togglerTodo, ...props}) => {
    console.log('todos-run')
    return (
        <ul>
            {allIds.map(id => <TodoItem key={byIds[id].id} {...byIds[id]} removeTodo={removeTodo} togglerTodo={togglerTodo} />)}
        </ul>
    )
}