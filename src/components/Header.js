import React from 'react';

import { Button } from './Button';
import { TodoInput } from './TodoInput';

export const Header = ({togglerAllTodo, addTodo}) => {

    return (
        <header className='header'>
            <h1>Todos</h1>
            <Button onClick={togglerAllTodo}>toggler all</Button>
            <TodoInput addTodo={addTodo}/>
        </header>
    )
}