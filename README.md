<h1>Todo app</h1> 
<div>using:</div>
<ul>
    <li>redux</li>
    <li>react-redux</li>
    <li>react-thunk</li>
</ul>
``` test
    export default function todos(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            const newTodo = createDefaultTodo(action.title)
            return [newTodo, ...state];

        case actionTypes.REMOVE_TODO:
            const todoIndex = getTodIndexByID(state)(action.todoId);
            const newTodos = [...state];
            newTodos.splice(todoIndex, 1)
            return newTodos;
    
        case actionTypes.EDIT_TODO:
        {
            const todoIndex = getTodIndexByID(state)(action.todoId);
            const lastTodo = getTodoByID(state)(action.todoId);
            const newTodo = {
                ...lastTodo,
                title: action.title
            }
            const newTodos = [...state];
            newTodos.splice(todoIndex, 1, newTodo)
            return newTodos;
        }

        case actionTypes.TOGGLER_TODO:
        {
            const todoIndex = getTodIndexByID(state)(action.todoId);
            const lastTodo = getTodoByID(state)(action.todoId);
            const newTodo = {
                ...lastTodo,
                isCompleted: !lastTodo.isCompleted
            }
            const newTodos = [...state];
            newTodos.splice(todoIndex, 1, newTodo)
            return newTodos;
        }
        case actionTypes.TOGGLER_ALL_TODO: 
            const areALLMarked = state.every(todo => todo.isCompleted === true)
            return state.map(todo => (
                {
                    ...todo,
                    isCompleted: !areALLMarked
                }
            ));

        default:
            return state;
    }
} 
```
