'use client'
import { useEffect, useState } from 'react'
import GContainer from '@/componemts/Share/GContainer'
import GImage from '@/componemts/Share/GImage'
import Fist from '@/public/home/trim-car.png'
import Second from '@/public/home/clother.png'
import Third from '@/public/home/pngtree-home.png'
import GText from '@/componemts/Share/GText'
import GButton from '@/componemts/Share/GButton'
import { FaCartPlus } from 'react-icons/fa6'
import { SlideButton } from './SlideButton'

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

const items = [
    { image: Fist, title: 'Toyota Trim 2025' },
    { image: Second, title: 'New Clothes 2025' },
    { image: Third, title: 'Quality Home Furniture' },
]

const ClientHeroSectionSlides = () => {
    const [mounted, setMounted] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        setMounted(true)
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === items.length - 1 ? 0 : prev + 1
            )
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    if (!mounted) return null

    const currentItem = items[currentIndex]

    return (
        <GContainer className="relative w-full flex flex-col-reverse lg:flex-col justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
            <GContainer className="flex flex-col-reverse gap-10 sm:gap-8 lg:flex-row justify-between items-start relative">
                <GContainer className="flex flex-col gap-6 w-full sm:text-left lg:max-w-[50%]">
                    <GText
                        dimension="giant"
                        weight="bold"
                        className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    >
                        {currentItem.title}
                    </GText>
                    <GText
                        dimension="semi-large"
                        className="text-[#395B64] text-base sm:text-lg md:text-xl"
                    >
                        Mid-Range Gaming PC - Intel I7 14700KF Max Turbo 5.60
                        GHz
                    </GText>
                    <div className="flex justify-start sm:justify-start">
                        <GButton
                            icon={<FaCartPlus />}
                            type="primary"
                            className="w-[160px] sm:w-[180px"
                            size="large"
                        >
                            BUY NOW
                        </GButton>
                    </div>
                </GContainer>

                <GContainer className="hidden lg:flex justify-center items-start gap-4 absolute bottom-20 left-10">
                    {items.map((_, index) => (
                        <SlideButton
                            key={index}
                            onPress={() => setCurrentIndex(index)}
                            active={index === currentIndex}
                        />
                    ))}
                </GContainer>
                <GImage
                    src={currentItem.image}
                    alt={currentItem.title}
                    priority
                    className="xl:rounded-tl-full xl:rounded-bl-full w-[300px] sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1100px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px] 2xl:h-[650px] transition-all duration-500 ease-in-out object-contain"
                />
            </GContainer>
        </GContainer>
    )
}

export default ClientHeroSectionSlides
