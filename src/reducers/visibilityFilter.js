import { todoFilters } from "../constant/todoFilters";
import { actionTypes } from "../constant/actionTypes";


export default function visibilityFilter(state = todoFilters.SHOW_ALL, action) {
    switch (action.type) {
        case actionTypes.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}