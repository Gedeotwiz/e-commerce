'use client'
import { Suspense } from "react";
import ResentPasswordClient from "./ResentPasswordClient";

export default function ResentPasswordWrapper() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ResentPasswordClient />
        </Suspense>
    );
}
