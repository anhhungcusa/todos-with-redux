import React, {useState, useEffect} from 'react';
import { createStore } from 'redux';

import './App.css';
import rootReducers from './reducers/rootReducers';
import {  changeDynamicValue } from './actions/counterActions'
// import counterReducer from './reducers/counterReducer';
/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducers, window.STATE_FROM_SERVER, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 /* eslint-enable */

function App() {
    const [state, setState] = useState(null);
    useEffect(() => {
    
    }, [])
    const boundChangeDynamicValue = value => store.dispatch(changeDynamicValue(value));
    const handleClick = (value) => {
            boundChangeDynamicValue(value)
    }
    const unsubscribe = React.useCallback(store.subscribe(() => console.log(store.getState())), [])
    const handleUnsubscribe = () => {
        unsubscribe();
    }
    return (
        <div className="App">
            Count: {state ? state.count : 0}
            <button onClick={() => handleClick(1)}>increase</button>
            <button onClick={() => handleClick(-2)}>decrease</button>
            <button onClick={handleUnsubscribe}>unsubscribe</button>
        </div>
    );
}

export default App;

