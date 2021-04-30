import React, { useRef } from "react";
import { useSelector, useDispatch} from "react-redux";
import { counterActions } from "../../store/counter"

const Active = props => {
    const numInput = useRef();
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const incrementCounter = e => {
        dispatch(counterActions.increment());
    }
    const decrementCounter = e => {
        dispatch(counterActions.decrement());
    }
    const addCounter = e => {
        dispatch(counterActions.increase({ amount: +numInput.current.value }));
    }
    const subtractCounter = e => {
        dispatch(counterActions.decrease({ amount: +numInput.current.value }));
    }
    return (
        <div style={{margin: "2rem"}}>
            <p>{counter}</p>
            <button onClick={ incrementCounter }>Increment</button> {'\u00A0'}
            <button onClick={decrementCounter}>Decrement</button>
            <br/>
            <button onClick={addCounter}>Add</button>{'\u00A0'}<button onClick={subtractCounter}>Subtract</button>{'\u00A0'}<input type="number" ref={ numInput }/>
        </div>
    )
}

export default Active;