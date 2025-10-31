import type {AuthState} from "../../type/state/auth.type.ts";
import {createSlice} from "@reduxjs/toolkit";
import {REDUX_STATE_NAME} from "../../enum/state.enum.ts";

const initialState: AuthState = {
    user: null,
    token: null,
}

const authSlice = createSlice({
    name: REDUX_STATE_NAME.AUTH,
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;