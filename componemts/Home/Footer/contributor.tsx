import GContainer from '@/componemts/Share/GContainer'
import GText from '@/componemts/Share/GText'

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

export const Contributor = () => {
    return (
        <GContainer className="flex flex-col md:flex-row justify-center items-center gap-2 py-3 bg-[#A5C9CA]">
            <GText>© 2025 Developed by Team</GText>
            <GText color="red">Gedeon & Erneste</GText>
        </GContainer>
    )
}
