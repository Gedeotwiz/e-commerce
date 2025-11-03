'use client'
import { useState } from 'react'
import GImage from '../Share/GImage'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import GContainer from '../Share/GContainer'
import GText from '../Share/GText'
import GButton from '../Share/GButton'

/**
 * @since October 2025
 * @author NSHIMIYUMUKIZA Erneste
 * @see {@link https://portfolio-ten-azure-76.vercel.app/} - Author's website
 */

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <GContainer className="min-h-screen md:flex">
            <GContainer className="relative flex flex-1 items-center justify-center bg-[#EAF6F6] px-6 py-12 md:py-0 overflow-hidden">
                <GContainer className="relative z-10 w-full max-w-md">
                    <GText className="text-3xl md:text-4xl font-semibold text-[#2E4F4F] mb-8 text-center md:text-left">
                        Login Here
                    </GText>

                    <form className="space-y-6">
                        <GContainer>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-transparent border-b border-[#2E4F4F] outline-none py-2 text-[#2E4F4F] placeholder-[#708090] text-sm sm:text-base"
                            />
                        </GContainer>

                      <GContainer className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                className="w-full bg-transparent border-b border-[#2E4F4F] outline-none py-2 text-[#2E4F4F] placeholder-[#708090] text-sm sm:text-base"
                            />
                            <GButton
                                
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-2 top-2 text-[#2E4F4F]"
                            >
                                {showPassword ? (
                                    <FaEyeSlash size={18} />
                                ) : (
                                    <FaEye size={18} />
                                )}
                            </GButton>
                        </GContainer>

                        <GButton
                           
                            className="bg-[#2E4F4F] text-white py-2 px-6 rounded-full w-full mt-2 text-sm sm:text-base font-medium hover:opacity-90 transition"
                        >
                            Login
                        </GButton>

                        <GContainer className=" flex items-center justify-center mt-4 gap-2 text-sm text-[#2E4F4F]">
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
                        New to AlpherShoping?{' '}
                        <a
                            href="/register"
                            className="text-[#2E4F4F] font-medium hover:underline"
                        >
                            Register
                        </a>
                    </GText>
                </GContainer>
            </GContainer>

            <GContainer className="hidden md:flex items-center justify-center bg-[#2E4F4F] p-8 md:p-0 skew-x-[-15deg]">
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
