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
        }),
        createDocument: build.mutation({
            query: (document) => ({
                url: '/documents/create',
                method: 'POST',
                body: document,
            })
        }),
        downloadDocument: build.query({
            query: (filename: string) => ({
                url: '/documents/download/' + filename,
            })
        }),
        getClients: build.query({
            query: () => ({
                url: '/clients',
            })
        }),
        createCourse: build.mutation({
            query: (course) => ({
                url: '/courses/create',
                method: 'POST',
                body: course,
            })
        }),
        getCourses: build.query({
            query: () => ({
                url: '/courses',
            })
        }),
    })
})