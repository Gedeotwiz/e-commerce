'use client'
import { Gategories } from '@/componemts/Home/BestDetail/Getegories'
import GContainer from '@/componemts/Share/GContainer'
import GText from '@/componemts/Share/GText'
import { useState } from 'react'
import { CgMenuMotion } from 'react-icons/cg'
import { RiArrowDropDownLine } from 'react-icons/ri'

export const AllCategories = () => {
    const [isVisible, setIsVisible] = useState(false)

    const handleVisible = () => {
        setIsVisible((prev) => !prev)
    }
    return (
        <GContainer>
            <GContainer className=" flex justify-around items-center mx-5 p-2 border-2 border-black rounded-md">
                <CgMenuMotion />
                <GText>ALL CATEGORIES</GText>
                <RiArrowDropDownLine onClick={handleVisible} />
            </GContainer>
            {isVisible && <Gategories />}
        </GContainer>
    )
}
