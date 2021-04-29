import React from "react";
import { DECREMENT, INCREMENT } from "../../redux/constants/number"
import { useSelector, useDispatch } from "react-redux";

const House = props => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const increment = e => {
        dispatch({type: INCREMENT});
    }
    const decrement = e => {
        dispatch({type: DECREMENT});
    }
    return (
        <div style={{margin: "2rem"}}>            
            <button onClick={increment}>Increment</button> {'\u00A0'}        
            <button onClick={decrement}>Decrement</button>
            <p>{counter}</p>
        </div>    
    )
}
export default House;