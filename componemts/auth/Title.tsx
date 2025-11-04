'use client'
import GText from '../Share/GText'

interface props {
    name: string
}

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

export const Title = ({ name }: props) => {
    return (
        <GText className="text-3xl md:text-4xl font-semibold text-[#2E4F4F] mb-8 text-center md:text-left">
            {name}
        </GText>
    )
}
