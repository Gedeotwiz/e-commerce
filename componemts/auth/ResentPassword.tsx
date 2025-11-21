'use client'
import React, { useState, ChangeEvent } from 'react'
import { AuthButton } from './AuthButton'
import GContainer from '../Share/GContainer'
import GImage from '../Share/GImage'
import GText from '../Share/GText'
import { Title } from './Title'
import { InputPassword } from '../Share/Input/InputPassword'
import { useRouter,useSearchParams } from 'next/navigation'
import { notification } from 'antd'
import { useResetPasswordMutation } from '@/lib/redux/slice/apiSlice/auth/mutation'

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

interface props {
    email: string | null
    otp: string | null
}

export default function ResentPassword({ email,otp }:props) {
    const [loading, setLoading] = useState(false)
    const [api, contextHolder] = notification.useNotification()
    const router = useRouter()

    const [resent]= useResetPasswordMutation()

      const [formData, setFormData] = useState({
        email: email || "",
        otp: otp || "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async () => {
        if (formData.newPassword !== formData.confirmPassword) {
            api.open({
                message: 'Missing Fields',
                description:
                    'Please your password and confrim password not macth.',
                type: 'warning',
            })
            return
        }

        setLoading(true)
        try {
           const res = await resent(formData).unwrap()
            api.open({
                message: 'Password successful changed!',
                description: 'Now you have to login using new password.',
                type: 'success',
            })
            router.push('/authentication/login')
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
                        <Title name="Resent Password" />

                        <form className="space-y-6">
                            <GContainer>
                                <InputPassword
                                    name="newPassword"
                                    placeholder="Password"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                />
                            </GContainer>

                            <GContainer>
                                <InputPassword
                                    name="confirmPassword"
                                    placeholder="confrim Password"
                                    value={formData.confirmPassword}
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
                                Change Password
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
                    src="/authimage/locker.png"
                    className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] object-contain"
                    alt="Login Illustration"
                />
            </GContainer>
        </GContainer>
    )
}
