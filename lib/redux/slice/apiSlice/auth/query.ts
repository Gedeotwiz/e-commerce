import { IAPIResponse } from "@/lib/types/components/integration";
import { baseApi } from "../baseApi";

export const categoryQueryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    verifyEmail: builder.query<IAPIResponse<null>, string>({
      query: (token) => `/auth/verify-email?token=${token}`,
    }),
  }),
});

export const { useVerifyEmailQuery } = categoryQueryApi;
