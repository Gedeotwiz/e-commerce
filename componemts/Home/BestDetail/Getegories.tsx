import GContainer from '@/componemts/Share/GContainer'
import { FiAlignJustify } from 'react-icons/fi'
import { FaAngleRight } from 'react-icons/fa'
import GText from '@/componemts/Share/GText'
import GImage from '@/componemts/Share/GImage'

export const Gategories = () => {
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
        <GContainer className=" hidden md:block w-[306px] h-[1074px] bg-[#E7F6F2] shadow-sm">
            <GContainer className="hidden not-visited:bg-[#395B64] md:flex items-center px-4 text-white pt-3 pb-2">
                <FiAlignJustify size={16} />
                <GText
                    color="white"
                    className="px-2 font-semibold text-sm tracking-wide"
                >
                    ALL CATEGORIES
                </GText>
            </GContainer>

            <GContainer className="mt-3 space-y-2 px-3 pb-3">
                {categories.map((cat, index) => (
                    <GContainer
                        key={index}
                        className=" hidden w-full md:flex items-center justify-between cursor-pointer hover:bg-[#D9F3EC] transition-colors rounded-lg px-2 py-1"
                    >
                        <GContainer className="flex items-center space-x-3">
                            <GImage
                                width={6}
                                height={6}
                                src={cat.img}
                                alt={cat.title}
                            />
                            <GText className="text-[#1E1E1E] text-sm font-medium">
                                {cat.title}
                            </GText>
                        </GContainer>
                        <FaAngleRight size={14} className="text-gray-500" />
                    </GContainer>
                ))}
            </GContainer>
        </GContainer>
    )
}
