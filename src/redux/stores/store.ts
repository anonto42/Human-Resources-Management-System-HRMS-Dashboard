import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/userSlice.ts";
import authSlice from "../reducers/authSlice.ts";

export const store = configureStore({
    reducer: {
        user: userSlice,
        auth: authSlice,
    },
});

// Types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
