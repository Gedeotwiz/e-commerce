'use client'

import React, { useState, ChangeEvent } from 'react'
import GImage from '../Share/GImage'
import GContainer from '../Share/GContainer'
import GText from '../Share/GText'
import { InputPassword } from '../Share/Input/InputPassword'
import { Input } from '../Share/Input/Input'
import { Title } from './Title'
import { AuthButton } from './AuthButton'
import { notification } from 'antd'
import { useRegisterUserMutation } from '@/lib/rtk/api/api'

/**
 * @since October 2025
 * @author NSHIMIYUMUKIZA Erneste
 * @see {@link https://portfolio-ten-azure-76.vercel.app/} - Author's website
 */

export default function RegisterPage() {
    const [api, contextHolder] = notification.useNotification()
    const [loading, setLoading] = useState(false)
    const [regiserUser,{isLoading:isRegistering}] = useRegisterUserMutation()
    const [formData, setFormData] = useState({
        names: '',
        email: '',
        phone: '',
        address: '',
        password: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async () => {
        if (
            !formData.names ||
            !formData.email ||
            !formData.phone ||
            !formData.address ||
            !formData.password
        ) {
            api.open({
                message: 'Missing Fields',
                description: 'Please fill in both fields.',
                type: 'warning',
            })
            return
        }

    
        try {
                setLoading(true)
                const res = await regiserUser(formData).unwrap();
            api.open({
                message: 'Login successful!',
                description: 'Now you have access to buy products.',
                type: 'success',
            })
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
                        <Title name="Register Here" />

                        <form className="space-y-5">
                            <GContainer>
                                <Input
                                    name="names"
                                    type="text"
                                    placeholder="Name"
                                    value={formData.names}
                                    onChange={handleChange}
                                />
                            </GContainer>

                            <GContainer>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </GContainer>

                            <GContainer>
                                <Input
                                    name="phone"
                                    type="text"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </GContainer>

                            <GContainer>
                                <Input
                                    name="address"
                                    type="text"
                                    placeholder="Address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </GContainer>

                            <GContainer className="relative">
                                <InputPassword
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </GContainer>

                            <GContainer className="flex justify-center items-center">
                                <AuthButton
                                    name="Verify Email"
                                    onClick={handleSubmit}
                                    isLoading={loading}
                                />
                            </GContainer>
                        </form>

                        <GText className="text-sm text-[#708090] mt-5 text-center">
                            Already have an account?{' '}
                            <a
                                href="/authentication/login"
                                className="text-[#2E4F4F] font-medium hover:underline"
                            >
                                Login
                            </a>
                        </GText>
                    </GContainer>
                </GContainer>
                <GContainer className="hidden md:block bg-[#2E4F4F] w-[300px] h-screen" />
            </GContainer>

            <GContainer className=" hidden md:flex flex-1 items-center justify-center bg-[#2E4F4F] p-8 md:p-0 skew-x-[-15deg] absolute right-30 h-screen w-[800px]">
                <GImage
                    width={500}
                    height={400}
                    src="/authimage/register.png"
                    className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] object-contain"
                    alt="Register Illustration"
                />
            </GContainer>
        </GContainer>
    )
}
