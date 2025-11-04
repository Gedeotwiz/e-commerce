'use client'
import React, { useState, ChangeEvent } from 'react'
import { AuthButton } from './AuthButton'
import GContainer from '../Share/GContainer'
import GImage from '../Share/GImage'
import GText from '../Share/GText'
import { Title } from './Title'
import { Input } from '../Share/Input/Input'
import { useRouter } from 'next/navigation'
import { notification } from 'antd'

/**
 * @since October 2025
 * @author NSHIMIYUMUKIZA Erneste
 * @see {@link https://portfolio-ten-azure-76.vercel.app/} - Author's website
 */

export default function VErifyOTP() {
    const [loading, setLoading] = useState(false)
    const [api, contextHolder] = notification.useNotification()
    const router = useRouter()

    const [formData, setFormData] = useState({
        otp: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async () => {
        if (!formData.otp) {
            api.open({
                message: 'Missing Fields',
                description: 'Please otp is required.',
                type: 'warning',
            })
            return
        }

        setLoading(true)
        try {
            await new Promise((res) => setTimeout(res, 2000))
            api.open({
                message: 'Otp verfication successful!',
                description: 'Now you have access to to change your password.',
                type: 'success',
            })
            router.push('/authentication/resentpassword')
        } finally {
            setLoading(false)
        }
    }
    return (
        <GContainer className="min-h-screen w-full flex flex-col md:flex-row bg-[#EAF6F6]">
            {contextHolder}
            <GContainer className="relative w-full flex flex-1 items-center justify-between py-12 md:py-0 overflow-hidden">
                <GContainer className=" w-full md:w-2/3 px-6 md:px-0 flex justify-center">
                    <GContainer className="relative z-10 w-full max-w-md">
                        <Title name="Verfy OTP" />

                        <form className="space-y-6">
                            <GContainer>
                                <Input
                                    name="otp"
                                    type="otp"
                                    placeholder="Enter otp:"
                                    value={formData.otp}
                                    onChange={handleChange}
                                />
                            </GContainer>

                            <GContainer className="flex justify-center items-center">
                                <AuthButton
                                    name="Verfy email"
                                    onClick={handleSubmit}
                                    isLoading={loading}
                                />
                            </GContainer>

                            <GText className="flex items-center justify-center mt-4 gap-2 text-lg text-[#2E4F4F]">
                                Verfy
                            </GText>
                        </form>
                    </GContainer>
                </GContainer>
                <GContainer className="hidden md:block bg-[#2E4F4F] w-[300px] h-screen" />
            </GContainer>

            <GContainer className=" hidden md:flex flex-1 items-center justify-center bg-[#2E4F4F] p-8 md:p-0 skew-x-[-15deg] absolute right-30 h-screen w-[800px]">
                <GImage
                    width={529}
                    height={614}
                    src="/authimage/otp.png"
                    className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] object-contain"
                    alt="Login Illustration"
                />
            </GContainer>
        </GContainer>
    )
}
