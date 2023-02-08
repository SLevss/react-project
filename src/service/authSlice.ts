import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    /* V.R.
    authenticated: false
    */
    userName: ''
};
const authSlice = createSlice({
    initialState: initialState,
    name: "auth",
    reducers: {
        /* V.R.
        login: (state) => {
            if(!state.authenticated) {
                state.authenticated = true;
            }
        */
        login: (state, data) => {
            if(state.userName.length == 0 ) {
                state.userName = data.payload;
            }
        },

        logout: (state) => {
            if(state.userName.length != 0) {
                state.userName = '';
            }

        }

    }

})
export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;