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
import { useForgotPasswordMutation } from '@/lib/redux/slice/apiSlice/auth/mutation'

/**
 * @since October 2025
 * @author NSHIMIYUMUKIZA Erneste
 * @see {@link https://portfolio-ten-azure-76.vercel.app/} - Author's website
 */

export default function ForgotPassword() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [api, contextHolder] = notification.useNotification()
    const [forgot] = useForgotPasswordMutation()

    const [formData, setFormData] = useState({
        email: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async () => {
        if (!formData.email) {
            api.open({
                message: 'Missing Fields',
                description: 'Please email is required',
                type: 'warning',
            })
            return
        }

        try {
            setLoading(true)
            const res = await forgot(formData).unwrap()
            console.log(res)
            api.open({
                message: res.message || 'Please check your email!',
                description:
                    'Now we are sending otp code on this email go in box of your email.',
                type: 'success',
            })
            router.push(`/authentication/verifyotp?email=${formData.email}`);
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
                        <Title name="Forgot Password" />
                        <form className="space-y-6">
                            <GContainer>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </GContainer>
                            <GContainer className="flex justify-center items-center">
                                <AuthButton
                                    name="Send"
                                    onClick={handleSubmit}
                                    isLoading={loading}
                                />
                            </GContainer>

                            <GText className="flex items-center justify-center mt-4 gap-2 text-lg text-[#2E4F4F]">
                                Rest Email
                            </GText>
                        </form>
                    </GContainer>
                </GContainer>
                <GContainer className="hidden md:block bg-[#2E4F4F] w-[300px] h-screen" />
            </GContainer>

            <GContainer className=" hidden md:flex flex-1 items-center justify-center bg-[#2E4F4F] p-8 md:p-0 skew-x-[-15deg] absolute right-30 h-screen w-[800px]">
                <GImage
                    width={531}
                    height={572}
                    src="/authimage/forgotimage.png"
                    className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] object-contain"
                    alt="Login Illustration"
                />
            </GContainer>
        </GContainer>
    )
}
