'use client'

import GContainer from "@/componemts/Share/GContainer"
import VerifyEmailPage from "@/componemts/auth/VerfyEmail"
import { Suspense } from "react"

export default function VerfyPage() {
    return (
        <GContainer className="h-screen bg-[#EAF6F6] w-full flex justify-between items-center">
            <Suspense fallback={<div>Loading...</div>}>
                <VerifyEmailPage />
            </Suspense>
        </GContainer>
    )
}
