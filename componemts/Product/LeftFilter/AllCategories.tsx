'use client'
import { Gategories } from "@/componemts/Home/BestDetail/Getegories"
import GContainer from "@/componemts/Share/GContainer"
import GText from "@/componemts/Share/GText"
import { useState } from "react"

export const AllCategories = () =>{
    const [isVisible,setIsVisible] = useState(false)

    const handleVisible = () =>{
        setIsVisible(true)
    }
    return (
        <GContainer>
            <GContainer className=" mx-5 p-2 border-2 border-black rounded-md">
              <GText onClick={handleVisible}>ALL CATEGORIES</GText>
            </GContainer>
            {isVisible && (<Gategories/>)}
        </GContainer>
    )
}