'use client'

import { useSearchParams } from "next/navigation";
import ResentPassword from "@/componemts/auth/ResentPassword";

export default function ResentPasswordClient() {
    const searchParams = useSearchParams();
    const email = searchParams.get("email");
    const otp = searchParams.get("otp");

    return <ResentPassword email={email} otp={otp} />;
}
