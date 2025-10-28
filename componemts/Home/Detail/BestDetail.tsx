"use client"
import GButton from '@/componemts/Share/GButton'
import GContainer from '@/componemts/Share/GContainer'
import GText from '@/componemts/Share/GText'
import { SlBasket } from 'react-icons/sl'

/**
 * @since October 2025
 * @author NSHIMIYUMUKIZA Erneste
 * @see {@link https://portfolio-ten-azure-76.vercel.app/} - Author's website
 */

const BestDetail = () => {
    return (
        <GContainer className="flex space-x-2">
            <GContainer className="space-y-2 h-[503px]">
                <GContainer className="flex items-center bg-[#E7F6F2] p-2 w-2xl h-[227px]">
                    <GContainer className="">
                        <GText dimension="extra-large" weight="bold">
                            BEST DETAILS
                        </GText>
                        <GText color="black" className="w-[230px] h-[93px]">
                            Mid-Range pc-intel 1714700kf Max Turb 5.60 GHZ
                        </GText>
                    </GContainer>
                    <GContainer>
                        <img
                            className="w-[266px] h-[179px]"
                            src="/image/iphone.png"
                            alt="image"
                        />
                    </GContainer>
                </GContainer>
                <GContainer className="w-2xl bg-[#A5C9CA] flex">
                    <img
                        className="w-[145px] h-[252px]"
                        src="/image/smartphone.png"
                        alt="image"
                    />
                    <GContainer className="pt-14">
                        <GText dimension="extra-large" weight="bold">
                            BEST DETAILS
                        </GText>
                        <GText
                            className="pt-3 pb-2 w-[230px]"
                            color="black"
                            weight="normal"
                        >
                            Mid-Range Gaming PC-itel 1714700kf 560 GHZ
                        </GText>
                        <GButton className="mt-6" icon={<SlBasket />}>
                            Buy Now
                        </GButton>
                    </GContainer>
                </GContainer>
            </GContainer>

            <GContainer className="bg-[#A5C9CA] w-[393px] h-[490px] p-3 rounded-lg">
                <GText className="mb-4" dimension="extra-large" weight="bold">
                    BEST DETAILS
                </GText>
                <GText className="w-60">
                    Mid-Range Gaming PC- 1714700KF Max Turbo 5.60 GHz
                </GText>

                <img
                    className="w-[395px] h-[311px]"
                    src="/image/shoe.png"
                    alt="image"
                />
            </GContainer>
        </GContainer>
    )
}

export default BestDetail
