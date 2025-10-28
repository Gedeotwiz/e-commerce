import GContainer from '../Share/GContainer'
import { HelloSection } from './HelloSection.tsx'
import { Heading } from './Nav/heading'

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

export const HomePage = () => {
    return (
        <GContainer>
            <Heading />
            <HelloSection />
        </GContainer>
    )
}
