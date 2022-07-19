import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAuthData } from "../models/IAuthData";

export const appAPI = createApi({
    reducerPath: 'appAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000'
    }),
    endpoints: (build) => ({
        userAuth: build.mutation({
            query: (authData: IAuthData) => ({
                url: '/auth/sign-in',
                method: 'POST',
                body: authData,
            })
        }),
        getDocuments: build.query({
            query: () => ({
                url: '/documents',
            })
        })
    })
})