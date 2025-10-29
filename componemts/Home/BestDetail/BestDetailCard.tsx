'use client'
import GButton from '@/componemts/Share/GButton'
import GContainer from '@/componemts/Share/GContainer'
import GImage from '@/componemts/Share/GImage'
import GText from '@/componemts/Share/GText'
import { SlBasket } from 'react-icons/sl'
import Iphone from '@/public/image/iphone.png'
import SmatPhone from '@/public/image/smartphone.png'
import Shoe from '@/public/image/shoe.png'

/**
 * @since October 2025
 * @author NSHIMIYUMUKIZA Erneste
 * @see {@link https://portfolio-ten-azure-76.vercel.app/} - Author's website
 */

export const BestDetailCards = () => {
    return (
        <GContainer className="flex justify-between px-0 md:px-20 pt-10">
            <GContainer className="space-y-2 h-auto md:h-[503px] w-full md:w-2/3">
                <GContainer className="flex flex-col-reverse md:flex-row justify-between items-center bg-[#E7F6F2] p-5 w-full h-auto md:h-[227px] rounded-lg">
                    <GContainer className="pl-0 md:pl-5">
                        <GText dimension="extra-large" weight="bold">
                            BEST DETAILS
                        </GText>
                        <GText
                            dimension="large"
                            color="black"
                            className=" w-full md:w-[230px] h-[93px]"
                        >
                            Mid-Range pc-intel 1714700kf Max Turb 5.60 GHZ
                        </GText>
                    </GContainer>
                    <GContainer>
                        <GImage
                            width={266}
                            height={179}
                            src={Iphone}
                            alt="image"
                        />
                    </GContainer>
                </GContainer>
                <GContainer className=" hidden md:block w-full bg-[#A5C9CA] md:flex flex-row rounded-lg pl-5">
                    <GImage
                        width={145}
                        height={252}
                        src={SmatPhone}
                        alt="image"
                    />
                    <GContainer className="pt-8">
                        <GText dimension="extra-large" weight="bold">
                            BEST DETAILS
                        </GText>
                        <GText
                            className="pt-3 pb-2 w-[230px]"
                            color="black"
                            weight="normal"
                            dimension="large"
                        >
                            Mid-Range Gaming PC-itel 1714700kf 560 GHZ
                        </GText>
                        <GButton type="primary" icon={<SlBasket />}>
                            Buy Now
                        </GButton>
                    </GContainer>
                </GContainer>
            </GContainer>

            <GContainer className="hidden md:block bg-[#A5C9CA] w-[393px] h-[490px] p-5 rounded-lg">
                <GText className="mb-4" dimension="extra-large" weight="bold">
                    BEST DETAILS
                </GText>
                <GText dimension="large" className="w-60">
                    Mid-Range Gaming PC- 1714700KF Max Turbo 5.60 GHz
                </GText>

                <GImage width={395} height={311} src={Shoe} alt="image" />
            </GContainer>
        </GContainer>
    )
}
