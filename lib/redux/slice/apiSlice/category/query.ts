import { baseApi } from "../baseApi";
import { CategoryResponse } from "@/lib/types/components/integration";

export const categoryQueryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryResponse, void>({
      query: () => "/category",
    }),

    getSubcategories: builder.query<CategoryResponse, string>({
      query: (parentId) => `/category/sub-category/${parentId}`,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetSubcategoriesQuery } = categoryQueryApi;
