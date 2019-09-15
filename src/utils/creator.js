import uuid from 'uuid';
const createDefaultTodo = (title) => (
    {
        id: uuid(),
        title,
        isCompleted: false
    }
)

const getTodoByID = todos => todoId => ({...todos.find(todo => todo.id === todoId)}); 
const getTodIndexByID = todos => todoId => todos.findIndex(todo => todo.id === todoId); 

export { createDefaultTodo, getTodoByID, getTodIndexByID }