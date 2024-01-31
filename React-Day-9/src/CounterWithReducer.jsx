import React, { useReducer } from 'react'
import { counterReducer } from './counterReducer'

const initialState = { count: 0 };

function CounterWithReducer() {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    return (
        <div>
            <h2>Counter with useReducer</h2>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'incrementBy2' })}>+2</button>
        </div>
    )
}

export default CounterWithReducer