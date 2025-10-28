'use client'
import GContainer from '@/componemts/Share/GContainer'
import ClientHeroSectionSlides from './Slide'

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

export const WelcomeText = () => {
    return (
        <GContainer className="flex flex-col w-full justify-center gap-6 pl-0 md:pl-20 absolute top-1/2 md:top-auto md:bottom-10 -translate-y-1/2 md:translate-y-0">
            <ClientHeroSectionSlides />
        </GContainer>
    )
}
