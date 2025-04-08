import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Data} from "../../interfaces/MainInterface.ts";

export const postersAPI = createApi({
    reducerPath: 'postersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
    endpoints: (builder) => ({
        getPosters: builder.query<Data[], void>({
            query: () => 'posts'
        })
    })
})

export const {useGetPostersQuery}  = postersAPI;