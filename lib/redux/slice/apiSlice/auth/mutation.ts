import { baseApi } from "../baseApi";
import { IAPIResponse,CreateUserInput,LoginInput,ForgotInput, VerfyOtpInput, ResentPasswordInput } from "@/lib/types/components/integration";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<IAPIResponse<null>, CreateUserInput>({
      query: (body) => ({
        url: '/auth/register',
        method: "POST",
        body,
      }),
    }),
    login:builder.mutation<IAPIResponse<null>,LoginInput>({
      query:(body)=>({
       url:'/auth/login',
       method:'POST',
       body
      })
    }),
    forgotPassword:builder.mutation<IAPIResponse<null>,ForgotInput>({
      query:(body)=>({
        url:'/auth/forgot',
        method:'POST',
        body
      })
    }),
    verifyOtp:builder.mutation<IAPIResponse<null>,VerfyOtpInput>({
       query:(body)=>({
        url:'/auth/verfy',
        method:'POST',
        body
       })
    }),
    resetPassword:builder.mutation<IAPIResponse<null>,ResentPasswordInput>({
      query:(body)=>({
        url:'/auth/resent',
        method:'POST',
        body
      })
    })
  }),
});

export const { useRegisterUserMutation,useLoginMutation,useForgotPasswordMutation,useVerifyOtpMutation,useResetPasswordMutation } = authApi;
