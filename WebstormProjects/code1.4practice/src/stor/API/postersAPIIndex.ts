import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {DataIndexFetch} from "../../interfaces/MainInterface.ts";

export const postersIndexAPI = createApi({
    reducerPath: 'postersIndexApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/posts/'}),
    endpoints: (builder) => ({
        getPostersIndex: builder.query<DataIndexFetch[], number>({
            query: (index) => `index/${index}`,
        })
    })
})

export const {useGetPostersIndexQuery}  = postersIndexAPI;