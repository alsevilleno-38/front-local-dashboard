import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    desc: "devOps"
}
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload.amount
        },
        decrease(state, action) {
            state.counter -= action.payload.amount
        },
        changeDesc(state, action) {
            state.desc += action.payload.info
        }
    }
})

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;