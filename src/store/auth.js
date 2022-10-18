import { createSlice } from "@reduxjs/toolkit";




const isAuthState = { isAuth: false };
const authSlice = createSlice({
    name: 'auth',
    initialState: isAuthState,
    reducers: {
        login(state) {
            state.isAuth = true;
        },
        logout(state) {
            state.isAuth = false;
        },
    },
});
export const authActions = authSlice.actions;

export default authSlice;