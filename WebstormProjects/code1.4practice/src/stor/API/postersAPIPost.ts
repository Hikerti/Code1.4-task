import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {AdminFormPost} from "../../interfaces/MainInterface.ts";

export const postersAPIPost = createApi({
    reducerPath: 'postersApiPost',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
    endpoints: (builder) => ({
        createPoster: builder.mutation<AdminFormPost, Partial<AdminFormPost>>({
            query: (newPoster) => ({
                url: 'posts/create',
                method: 'POST',
                body: newPoster
            })
        })
    })
})

export const {useCreatePosterMutation}  = postersAPIPost;