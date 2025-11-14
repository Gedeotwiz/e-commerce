
import { CategoryResponse,Category } from "@/lib/types/components/integration";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryResponse, void>({
      query: () => "/category",
    }),
    getSubcategories: builder.query<CategoryResponse, string>({
      query: (parentId) => `/category/sub-category/${parentId}`,
    }),
    
    registerUser: builder.mutation<any, any>({
      query : (body) => ({
        // url:"/auth",
          url: "/auth/register",
        method: "POST",
        body,
      })
    })

  }),
});


export const { useGetCategoriesQuery,useGetSubcategoriesQuery,useRegisterUserMutation } = allApi;

