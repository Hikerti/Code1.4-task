import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Data} from "../../interfaces/MainInterface.ts";

export const postersCountAPI = createApi({
    reducerPath: 'postersCountApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
    endpoints: (builder) => ({
        getPostersCount: builder.query<Data[], number>({
            query: (count) => `posts/${count}`
        })
    })
})

export const {useGetPostersCountQuery}  = postersCountAPI;