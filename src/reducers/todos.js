import { actionTypes } from '../constant/actionTypes';
import { createDefaultTodo, getTodIndexByID, getTodoByID } from '../utils/creator';

const initialState = {
    allIds: [],
    byIds: {}
};

export default function todos(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case actionTypes.ADD_TODO:
            const newTodo = createDefaultTodo(action.title)
            return {
                allIds: [newTodo.id, ...state.allIds],
                byIds: {...state.byIds, [newTodo.id]: newTodo}
            };

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
            const areALLMarked = state.allIds.every(id => state.byIds[id].isCompleted === true);
            const newByIds = state.allIds.reduce((acc, curr) => {
                acc[curr] = {
                    ...state.byIds[curr],
                    isCompleted: !areALLMarked
                }
                return acc
            }, {})
            return {
                ...state,
                byIds: newByIds
            }

        default:
            return state;
    }
} 



