'use client'
import GContainer from '@/componemts/Share/GContainer'
import GText from '@/componemts/Share/GText'
import { SlBasket } from 'react-icons/sl'
import GButton from '@/componemts/Share/GButton'
import { BestDetailCards } from './BestDetailCard'
import { Gategories } from './Getegories'
import GImage from '@/componemts/Share/GImage'
import toyota from '@/public/image/toyota.png'
import { CgMenuMotion } from "react-icons/cg";

/**
 * @since October 2025
 * @author NSHIMIYUMUKIZA Erneste
 * @see {@link https://portfolio-ten-azure-76.vercel.app/} - Author's website
 */
export const BestDetail = () => {
    return (
        <GContainer className="px-2 flex bg-white">
             <GContainer className=" hidden md:block w-[306px] h-[1074px] bg-[#E7F6F2] shadow-sm">
            <GContainer className="hidden not-visited:bg-[#395B64] md:flex items-center px-4 text-white pt-3 pb-2">
                <CgMenuMotion size={16} />
                <GText
                    color="white"
                    className="px-2 font-semibold text-sm tracking-wide"
                >
                    ALL CATEGORIES
                </GText>
            </GContainer>
            <Gategories />
            </GContainer>
            <GContainer className=" w-full">
                <GContainer className="bg-[#2C3333] w-full h-[354px] md:h-[534px] relative">
                    <GContainer className=" px-5 md:px-16 py-8 md:pt-16 space-y-4 left-12 ">
                        <GText
                            dimension="extra-large"
                            color="white"
                            weight="bold"
                        >
                            BEST DETAILS
                        </GText>
                        <GText dimension="large" color="white">
                            Mid-Range gaming pc - intel 17 14700kf mx turbo
                        </GText>
                        <GButton
                            icon={<SlBasket />}
                            type="primary"
                            className="w-[130px] sm:w-[180px"
                        >
                            Buy now
                        </GButton>
                    </GContainer>
                    <GContainer className="absolute right-0 buton-0">
                        <GImage width={740} height={329} src={toyota} alt="" />
                    </GContainer>
                </GContainer>
                <GContainer>
                    <BestDetailCards />
                </GContainer>
            </GContainer>
        </GContainer>
    )
}
