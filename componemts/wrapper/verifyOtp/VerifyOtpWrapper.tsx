'use client'
import { Suspense } from "react";
import VerifyOtpClient from "./VerifyOtpClient";

export default function VerifyOtpWarpperWrapper() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <VerifyOtpClient />
        </Suspense>
    );
}
