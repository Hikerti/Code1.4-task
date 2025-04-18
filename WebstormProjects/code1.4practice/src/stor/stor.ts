import { configureStore } from '@reduxjs/toolkit';
import {postersAPI} from "./API/postersAPI.ts";
import {postersCountAPI} from "./API/postetsCountAPI.ts";
import { postersAPIPost } from './API/postersAPIPost.ts';
import {postersIndexAPI} from "./API/postersAPIIndex.ts";

export const store = configureStore({
    reducer: {
        [postersAPI.reducerPath]: postersAPI.reducer,
        [postersCountAPI.reducerPath]: postersCountAPI.reducer,
        [postersAPIPost.reducerPath]: postersAPIPost.reducer,
        [postersIndexAPI.reducerPath]: postersIndexAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postersAPI.middleware, postersCountAPI.middleware,
            postersAPIPost.middleware, postersIndexAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;