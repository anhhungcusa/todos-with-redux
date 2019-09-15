import { counterTypes } from '../constant/actionTypes';

/** couter action */
const INCREMENT = {
    type: counterTypes.INCREMENT
}
const DECREMENT = {
    type: counterTypes.DECREMENT
}

function changeDynamicValue(value) {
    return {
        type: counterTypes.ChangeDynamicValue,
        value
    }
}
export { INCREMENT, DECREMENT, changeDynamicValue };
