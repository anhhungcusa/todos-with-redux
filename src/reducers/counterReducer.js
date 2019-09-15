import { counterTypes } from "../constant/actionTypes";

export default function counterReducer(state = {count: 0}, action) {
    switch (action.type) {
        case counterTypes.INCREMENT:
            return { count: state.count + 1 }
        case counterTypes.DECREMENT:
            return { count: state.count - 1 }
        case counterTypes.ChangeDynamicValue:
            return { count: state.count + action.value }
        default:
            return state
    }
}