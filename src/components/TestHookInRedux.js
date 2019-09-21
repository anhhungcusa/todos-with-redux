import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { createSelector } from 'reselect';
const getFilter = state => { console.log('select');  return state.visibilityFilter}
const selectFilter = createSelector(getFilter, visibilityFilter => visibilityFilter)
export const Test = () => {
    const [count, setCount] = React.useState(1)

    const visibilityFilter = useSelector(selectFilter, shallowEqual);
    React.useEffect(() => {
        console.log(visibilityFilter);
    })
    return <div>
        Content: <br/>
        Filter: {visibilityFilter} <br/>
        <button onClick={() => setCount(count+1)}>increase {count}</button>
    </div>
}