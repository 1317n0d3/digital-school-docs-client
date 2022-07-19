import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAuthData } from "../models/IAuthData";
import { RootState } from "../store/store";

export const appAPI = createApi({
    reducerPath: 'appAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000',
        prepareHeaders: (headers, { getState }) => {
            const jwtToken = (getState() as RootState).authReducer.token;
            if (jwtToken) {
                headers.set('Authorization', `Bearer ${jwtToken}`);
            }
            return headers;
        }
    }),
    endpoints: (build) => ({
        userAuth: build.mutation({
            query: (authData: IAuthData) => ({
                url: '/auth/sign-in',
                method: 'POST',
                body: authData
            })
        }),
        getDocuments: build.query({
            query: () => ({
                url: '/documents/child',
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