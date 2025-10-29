'use client'
import GContainer from '@/componemts/Share/GContainer'
import GText from '@/componemts/Share/GText'
import { SlBasket } from 'react-icons/sl'
import GButton from '@/componemts/Share/GButton'
import BestDetail from './BestDetail'
import { Gategories } from './Getegories'

/**
 * @since October 2025
 * @author NSHIMIYUMUKIZA Erneste
 * @see {@link https://portfolio-ten-azure-76.vercel.app/} - Author's website
 */
const Section = () => {
   

    return (
        <GContainer className="px-2 flex">
            <Gategories/>
            <GContainer className=' w-full'>
                <GContainer className="bg-[#2C3333] w-full h-[534px]">
                    <div className="relative px-16 pt-16 space-y-4 left-12 ">
                        <GText
                            dimension="extra-large"
                            color="white"
                            weight="bold"
                        >
                            BEST DETAILS
                        </GText>
                        <GText color="black">
                            Mid-Range gaming pc - intel 17 14700kf mx turbo
                        </GText>
                        <GButton icon={<SlBasket />}>Buy now</GButton>
                    </div>
                    <div className="absolute right-0 buton-0">
                        <img
                            className="w-[740px] h-[329px]"
                            src="/image/toyota.png"
                            alt=""
                        />
                    </div>
                </GContainer>
                <GContainer>
                    <BestDetail />
                </GContainer>
            </GContainer>
        </GContainer>
    )
}

export default Section
