'use client'
import GContainer from '@/componemts/Share/GContainer'
import GText from '@/componemts/Share/GText'
import { FiAlignJustify } from 'react-icons/fi'
import { FaAngleRight } from 'react-icons/fa'
import { Color } from 'antd/es/color-picker'
import GButton from '@/componemts/Share/GButton'

/**
 * @since October 2025
 * @author NSHIMIYUMUKIZA Erneste
 * @see {@link https://portfolio-ten-azure-76.vercel.app/} - Author's website
 */
const Section = () => {
    const categories = [
        { img: '/image/desktop.png', title: 'Computer & Office' },
        { img: '/image/heart.png', title: 'Health & Beauty' },
        { img: '/image/phone.png', title: 'Phones & Accessories' },
        { img: '/image/sport.png', title: 'Sports & Outdoors' },
        { img: '/image/home.png', title: 'Home & Furniture' },
        { img: '/image/fashion.png', title: 'Fashion & Arts' },
        { img: '/image/jewer.png', title: 'Jewelry & Watches' },
        { img: '/image/car.png', title: 'Cars & Motorbikes' },
    ]

    return (
        <GContainer className="px-2 flex">
            <GContainer className="w-[306px] h-[1074px] bg-[#E7F6F2] shadow-sm">
                <GContainer className="bg-[#395B64] flex items-center px-4 text-white pt-3 pb-2">
                    <FiAlignJustify size={16} />
                    <GText
                        color="#ffffff"
                        className="px-2 font-semibold text-sm tracking-wide"
                    >
                        ALL CATEGORIES
                    </GText>
                </GContainer>

                <GContainer className="mt-3 space-y-2 px-3 pb-3">
                    {categories.map((cat, index) => (
                        <div className="flex items-center justify-between cursor-pointer hover:bg-[#D9F3EC] transition-colors rounded-lg px-2 py-1">
                            <div className="flex items-center space-x-3">
                                <img
                                    src={cat.img}
                                    alt={cat.title}
                                    className="w-6 h-6"
                                />
                                <GText className="text-[#1E1E1E] text-sm font-medium">
                                    {cat.title}
                                </GText>
                            </div>
                            <FaAngleRight size={14} className="text-gray-500" />
                        </div>
                    ))}
                </GContainer>
            </GContainer>
            <GContainer>
                <GContainer className="bg-[#2C3333] w-[1074px] h-[534px]">
                    <div className="relative px-16 pt-16 space-y-4 left-12 ">
                        <GText
                            color="white"
                            weight="60px"
                            className="text-3xl text-white"
                        >
                            BEST DETAILS
                        </GText>
                        <GText className='text-gray-700'>
                            Mid-Range gaming pc - intel 17 14700kf mx turbo
                        </GText>
                        <GButton>Buy now</GButton>
                    </div>
                    <div className="absolute right-0 buton-0">
                        <img
                            className="w-[740px] h-[329px]"
                            src="/image/toyota.png"
                            alt=""
                        />
                    </div>
                </GContainer>
            </GContainer>
        </GContainer>
    )
}

export default Section
