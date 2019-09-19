import { actionTypes } from '../constant/actionTypes';
import { createDefaultTodo } from '../utils/creator';
import { getTodoIndexById } from '../selectors/selectors';

const initialState = {
    allIds: [],
    byIds: {}
};

export default function todos(state = initialState, action) {
    // debugger
    switch (action.type) {
        case actionTypes.ADD_TODO:
            const newTodo = createDefaultTodo(action.title)
            return {
                allIds: [newTodo.id, ...state.allIds],
                byIds: {...state.byIds, [newTodo.id]: newTodo}
            };

        case actionTypes.REMOVE_TODO:
            const todoIndex = getTodoIndexById(state, action.todoId);
            const newAllIds = [...state.allIds];
            newAllIds.splice(todoIndex, 1);
            const newByids = {...state.byIds};
            delete newByids[action.todoId];
            return {
                allIds: newAllIds,
                byIds: newByids
            };

        case actionTypes.TOGGLER_TODO:
        {
            const { byIds } = state;
            const { todoId } = action;
            return {
                ...state,
                byIds: {
                    ...byIds,
                    [todoId]: {
                        ...byIds[todoId],
                        isCompleted: !byIds[todoId].isCompleted
                    }
                }
            };
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



