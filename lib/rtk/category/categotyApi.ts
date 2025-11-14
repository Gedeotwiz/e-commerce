
interface Category {
  _id: string;
  name: string;
  image: string;
  parentCategory: string | null;
  subcategories?: Category[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface CategoryResponse {
  message: string;
  payload: Category[];
}

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryResponse, void>({
      query: () => "/category",
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;

