import React, { useState } from 'react';

export const TodoInput = ({addTodo}) => {
    const [text, setText] = useState('');
    
    const handleChangeInput = (e) => {
        setText(e.target.value);
    }

    const resetInput = () => setText('');
    
    const handleKeyUp = (e) => {
        if(e.keyCode === 13 && text.trim() !== '' ) {
            addTodo(text);
            resetInput()
        }
    }


    return (
        <input 
            value={text}
            onChange={handleChangeInput}
            onKeyUp={handleKeyUp}
            placeholder='typing todo at here'
        />
    )
}