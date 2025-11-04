'use client'
import React, { useState } from 'react'
import GImage from '../Share/GImage'
import GContainer from '../Share/GContainer'
import GText from '../Share/GText'
import { AuthButton } from './AuthButton'
import { InputPassword } from '../Share/Input/InputPassword'
import { Input } from '../Share/Input/Input'
import { Title } from './Title'
import { useRouter } from 'next/navigation'
import { notification } from 'antd'

/**
 * @since October 2025
 * @author NSHIMIYUMUKIZA Erneste
 * @see {@link https://portfolio-ten-azure-76.vercel.app/} - Author's website
 */

export default function LoginPage() {
    const [loading, setLoading] = useState(false)
    const [api, contextHolder] = notification.useNotification()
    const router = useRouter()

    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev: any) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async () => {
        if (!formData.email || !formData.password) {
            api.open({
                message: 'Missing Fields',
                description: 'Please fill in both email and password.',
                type: 'warning',
            })
            return
        }

        setLoading(true)
        try {
            await new Promise((res) => setTimeout(res, 2000))
            api.open({
                message: 'Login successful!',
                description: 'Now you have access to buy products.',
                type: 'success',
            })
            router.push('/products')
        } finally {
            setLoading(false)
        }
    }

    return (
        <GContainer className="min-h-screen md:flex bg-[#EAF6F6] relative">
            {contextHolder}

            <GContainer className="relative w-full flex flex-1 items-center justify-between py-12 md:py-0 overflow-hidden">
                <GContainer className="w-full md:w-2/3 px-6 md:px-0 flex justify-center">
                    <GContainer className="relative z-10 w-full max-w-md">
                        <Title name="Login Here" />

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

                            <GContainer className="relative">
                                <InputPassword
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </GContainer>

                            <GText
                                className="text-end underline cursor-pointer"
                                onClick={() =>
                                    router.push(
                                        '/authentication/forgotpassword'
                                    )
                                }
                            >
                                Forgot password?
                            </GText>

                            <GContainer className="flex justify-center items-center">
                                <AuthButton
                                    name="Login"
                                    onClick={handleSubmit}
                                    isLoading={loading}
                                />
                            </GContainer>

                            <GContainer className="flex items-center justify-center mt-4 gap-2 text-sm text-[#2E4F4F]">
                                <span>Or login with</span>
                                <GImage
                                    width={24}
                                    height={24}
                                    src="/authimage/Google.png"
                                    alt="Google Login"
                                    className="cursor-pointer hover:scale-105 transition"
                                />
                            </GContainer>
                        </form>

                        <GText className="text-sm text-[#708090] mt-6 text-center">
                            New to AlpherShopping?{' '}
                            <a
                                href="/authentication/register"
                                className="text-[#2E4F4F] font-medium hover:underline"
                            >
                                Register
                            </a>
                        </GText>
                    </GContainer>
                </GContainer>

                <GContainer className="hidden md:block bg-[#2E4F4F] w-[300px] h-screen" />
            </GContainer>

            <GContainer className="hidden md:flex items-center h-screen w-[800px] justify-center bg-[#2E4F4F] p-8 md:p-0 skew-x-[-15deg] absolute right-30">
                <GImage
                    width={500}
                    height={400}
                    src="/authimage/register.png"
                    className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] object-contain"
                    alt="Login Illustration"
                />
            </GContainer>
        </GContainer>
    )
}
