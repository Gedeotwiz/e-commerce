'use client'

import GContainer from '../Share/GContainer'
import { FaCartPlus } from 'react-icons/fa6'
import GImage from '../Share/GImage'
import GText from '../Share/GText'
import type { StaticImageData } from 'next/image'

interface props {
    title: string
    price: string
    image: string | StaticImageData
    onClick: () => void
}

export const ProductCard = ({ title, price, image, onClick }: props) => {
    return (
        <GContainer
            className=" w-[280px] md:w-[334px] bg-white rounded-md p-5"
            onClick={onClick}
        >
            <GContainer className="flex justify-end items-end">
                <FaCartPlus className="text-gray-500 text-xl cursor-pointer hover:scale-110 transition-transform" />
            </GContainer>
            <GImage width={249} height={166} src={image} alt="moto" />
            <GContainer className="flex flex-col gap-2">
                <GText dimension="semi-large" weight="bold">
                    {title}
                </GText>
                <GContainer className="flex justify-between items-center">
                    <GImage
                        width={137}
                        height={25}
                        src="/elcimage/star.png"
                        alt="rating"
                        className="w-20 mb-3"
                    />
                    <GText
                        weight="bold"
                        dimension="semi-large"
                        color="BbSixten"
                    >
                        ${price}
                    </GText>
                </GContainer>
            </GContainer>
        </GContainer>
    )
}
