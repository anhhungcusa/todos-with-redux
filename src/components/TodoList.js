import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, removeTodo, togglerTodo, ...props}) => {
    return (
        <ul>
            {todos.map(todo => <TodoItem key={todo.id} {...todo} removeTodo={removeTodo} togglerTodo={togglerTodo} />)}
        </ul>
    )
}