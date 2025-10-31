import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {UserState} from "../../type/state/user.type.ts";

const initialState: UserState = {
    name: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        clearUser: (state) => {
            state.name = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
