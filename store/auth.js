import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: true,
    isAuthorized: false
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authorizeUser(state, action) {
            if (action.isGood) {
                state.isAuthorized = true;
            }
            else {
                state.isAuthorized = false;
            }

            if (!action.isEnter) {
                state.isLogin = false;
            }
            else {
                state.isLogin = true;
            }
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;
