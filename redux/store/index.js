import { createStore } from "redux";
import {INCREMENT, DECREMENT} from "../constants/number";

const indexReducer = (state = {counter: 0}, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                counter: state.counter - 1
            }
        default:
            return state;
    }    
}

const store = createStore(indexReducer);

export default store;