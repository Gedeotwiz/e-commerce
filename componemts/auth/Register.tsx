'use client'
import { useState } from 'react'
import GImage from '../Share/GImage'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

/**
 * @since October 2025
 * @author NSHIMIYUMUKIZA Erneste
 * @see {@link https://portfolio-ten-azure-76.vercel.app/} - Author's website
 */

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="relative flex flex-1 items-center justify-center bg-[#EAF6F6] px-6 py-12 md:py-0 overflow-hidden">
               
                <div className="relative z-10 w-full max-w-md">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#2E4F4F] mb-8 text-center md:text-left">
                        Register Here
                    </h2>

                    <form className="space-y-5">
                        {['Name', 'Email', 'Phone', 'Address'].map((field) => (
                            <div key={field}>
                                <input
                                    type={field === 'Email' ? 'email' : 'text'}
                                    placeholder={field}
                                    className="w-full bg-transparent border-b border-[#2E4F4F] outline-none py-2 text-[#2E4F4F] placeholder-[#708090] text-sm sm:text-base"
                                />
                            </div>
                        ))}

                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                className="w-full bg-transparent border-b border-[#2E4F4F] outline-none py-2 text-[#2E4F4F] placeholder-[#708090] text-sm sm:text-base"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-2 top-2 text-[#2E4F4F]"
                            >
                                {showPassword ? (
                                    <FaEyeSlash size={18} />
                                ) : (
                                    <FaEye size={18} />
                                )}
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="bg-[#2E4F4F] text-white py-2 px-6 rounded-full w-full mt-6 text-sm sm:text-base font-medium hover:opacity-90 transition"
                        >
                            Verify email
                        </button>
                    </form>

                    <p className="text-sm text-[#708090] mt-5 text-center">
                        Already have an account?{' '}
                        <a
                            href="/login"
                            className="text-[#2E4F4F] font-medium hover:underline"
                        >
                            Login
                        </a>
                    </p>
                </div>
            </div>
            <div className=" hidden md:flex flex-1 items-center justify-center bg-[#2E4F4F] p-8 md:p-0 skew-x-[-15deg]">

                <GImage
                    width={500}
                    height={400}
                    src="/authimage/register.png"
                    className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] object-contain"
                    alt="Register Illustration"
                />
            </div>
        </div>
    )
}
