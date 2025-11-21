"use client";

import GButton from "@/componemts/Share/GButton";
import { useSearchParams, useRouter } from "next/navigation";
import GContainer from "../Share/GContainer";
import { useVerifyEmailQuery } from "@/lib/redux/slice/apiSlice/auth/query";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const { data, isLoading, isError } = useVerifyEmailQuery(token!, {
    skip: !token, 
  });

  let message = "Verifying...";

  if (!token) message = "Invalid verification link!";
  if (isLoading) message = "Verifying...";
  if (data) message = "🎉 Email verified successfully!";
  if (isError) message = "Invalid or expired verification link";

  const handleClick = () =>{
    if(!data){
      return message = 'Your email not verified'
    }else{
      router.push("/authentication/login")
    }
  }

  return (
    <div className="w-full bg-[#EAF6F6] h-screen flex items-center justify-center text-2xl">
      <GContainer className="flex flex-col justify-center items-center gap-10">
        {message}

        <GButton onClick={handleClick}>
          SIGN IN
        </GButton>
      </GContainer>
    </div>
  );
}
