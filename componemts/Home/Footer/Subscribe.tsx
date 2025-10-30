import GContainer from '@/componemts/Share/GContainer'
import GText from '@/componemts/Share/GText'
import { GrSend } from 'react-icons/gr'

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

export const Subscribe = () => {
    return (
        <GContainer className="px-5 gap-4 md:px-20 py-3 flex flex-col md:flex-row justify-between items-center bg-[#A5C9CA]">
            <GContainer className="flex justify-center items-center gap-4 md:gap-7">
                <GrSend size={34} />
                <GContainer>
                    <GText dimension="large" weight="bold">
                        Signup For Newsletter
                    </GText>
                    <GText>
                        We’ll never share your email address with a third-party.
                    </GText>
                </GContainer>
            </GContainer>
            <GContainer className="flex justify-between bg-white w-full md:w-[598px] pl-3">
                <input
                    placeholder="Your email address"
                    className="w-full pl-2 border-none outline-none focus:outline-none focus:ring-0"
                />
                <button className="bg-black text-white p-2 text-[12px]">
                    SUBSCRIBE
                </button>
            </GContainer>
        </GContainer>
    )
}
