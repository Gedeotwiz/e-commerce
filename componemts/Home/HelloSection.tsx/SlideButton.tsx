'use client'

import GContainer from '@/componemts/Share/GContainer'

interface props {
    onPress: () => void
    active: boolean
}

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

export const SlideButton = ({ onPress, active }: props) => {
    return (
        <GContainer
            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                active
                    ? 'bg-[#395B64] border-[#395B64] scale-110'
                    : 'border-[#395B64] hover:bg-[#395B64]/30'
            }`}
            onClick={onPress}
        />
    )
}
