'use client'

import { useSearchParams } from "next/navigation";
import VErifyOTP from "@/componemts/auth/VerifyOTP";

export default function VerifyOtpClient() {
    const searchParams = useSearchParams();
    const email = searchParams.get("email");

    return <VErifyOTP email={email} />;
}
