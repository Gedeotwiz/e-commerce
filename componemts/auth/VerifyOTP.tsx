'use client'
import GButton from '../Share/GButton'
import GContainer from '../Share/GContainer'
import GImage from '../Share/GImage'
import GText from '../Share/GText'

/**
 * @since October 2025
 * @author NSHIMIYUMUKIZA Erneste
 * @see {@link https://portfolio-ten-azure-76.vercel.app/} - Author's website
 */

export default function VErifyOTP() {
    return (
        <GContainer className="min-h-screen flex flex-col md:flex-row">
            <GContainer className="relative flex flex-1 items-center justify-center bg-[#EAF6F6] px-6 py-12 md:py-0 overflow-hidden">
                <GContainer className="relative z-10 w-full max-w-md">
                    <GText className="text-3xl md:text-4xl font-semibold text-[#2E4F4F] mb-8 text-center md:text-left">
                        Verfy OTP
                    </GText>

                    <form className="space-y-6">
                        <GContainer>
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                className="w-full bg-transparent border-b border-[#2E4F4F] outline-none py-2 text-[#2E4F4F] placeholder-[#708090] text-sm sm:text-base"
                            />
                        </GContainer>

                        <GButton
                          
                            className="bg-[#2E4F4F] text-white py-2 px-6 rounded-full w-full mt-2 text-sm sm:text-base font-medium hover:opacity-90 transition"
                        >
                            Verify
                        </GButton>

                        <GText className="flex items-center justify-center mt-4 gap-2 text-lg text-[#2E4F4F]">
                            Send OTP
                        </GText>
                    </form>
                </GContainer>
            </GContainer>

            <GContainer className=" hidden md:flex flex-1 items-center justify-center bg-[#2E4F4F] p-8 md:p-0 skew-x-[-15deg]">
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
