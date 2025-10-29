'use client'

import GContainer from '@/componemts/Share/GContainer'
import { WelcomeText } from './WelcomwText'

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

export const HelloSection = () => {
    return (
        <GContainer className="bg-[#E7F6F2] flex flex-col-reverse md:flex-row justify-end items-end md:items-center py-5 h-screen relative">
            <WelcomeText />
            <GContainer className="w-[200px] md:w-[400px] h-[300px] md:h-[556px] bg-gradient-to-b from-[#395B64] to-[#E7F6F2]" />
        </GContainer>
    )
}
