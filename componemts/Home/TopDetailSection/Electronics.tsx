import GContainer from '@/componemts/Share/GContainer'
import GImage from '@/componemts/Share/GImage'
import GText from '@/componemts/Share/GText'
import { FaCartPlus } from 'react-icons/fa6'

/**
 * @since October 2025
 * @author NSHIMIYUMUKIZA Erneste <nshimiyumukizaerneste1@gmail.com>
 * @see {@link :https://portfolio-ten-azure-76.vercel.app/} - Author's website
 */

const electronics = [
    { image: '/elcimage/phone.png', title: 'SAMSUNG GALAXY', price: '$812' },
    { image: '/elcimage/watch.png', title: 'SMART WATCH', price: '$299' },
    { image: '/elcimage/camera.png', title: 'DIGITAL CAMERA', price: '$650' },
]

const Electronics = () => {
    return (
        <GContainer className="bg-[#E6EDED] py-6">
            <GText
                color="black"
                dimension="semi-large"
                weight="medium"
                className="font-semibold text-2xl px-6"
            >
                Electronics:
            </GText>
            <GContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {electronics.map((electronic, index) => (
                    <GContainer
                        key={index}
                        className="bg-white rounded-lg p-4 shadow hover:shadow-md transition duration-300"
                    >
                        <GContainer className="flex justify-end">
                            <GText
                                color="white"
                                className="h-10 w-10 p-1.5 rounded-full text-white bg-[#2C3333] border flex justify-end items-center"
                            >
                                -10%
                            </GText>
                        </GContainer>

                        <GImage
                            src={electronic.image}
                            alt={electronic.title}
                            className="w-full h-48 object-contain mb-4"
                            width={224}
                            height={215}
                        />
                        <GText className="font-semibold text-lg mb-2">
                            {electronic.title}
                        </GText>
                        <GImage
                            width={137}
                            height={25}
                            src="/elcimage/star.png"
                            alt="rating"
                            className="w-20 mb-3"
                        />
                        <GContainer className="flex items-center justify-between">
                            <GText className="font-bold text-[#333]">
                                {electronic.price}
                            </GText>
                            <FaCartPlus className="text-[#0D9488] text-xl cursor-pointer hover:scale-110 transition-transform" />
                        </GContainer>
                    </GContainer>
                ))}
            </GContainer>
        </GContainer>
    )
}

export default Electronics
