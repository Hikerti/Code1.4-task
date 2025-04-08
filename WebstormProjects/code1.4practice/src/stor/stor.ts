import { configureStore } from '@reduxjs/toolkit';
import {postersAPI} from "./API/postersAPI.ts";
import {postersCountAPI} from "./API/postetsCountAPI.ts";

export const store = configureStore({
    reducer: {
        [postersAPI.reducerPath]: postersAPI.reducer,
        [postersCountAPI.reducerPath]: postersCountAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postersAPI.middleware, postersCountAPI.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;