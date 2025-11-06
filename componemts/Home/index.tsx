'use client'
import GContainer from '../Share/GContainer'
import { Footer } from './Footer'
import { HelloSection } from './HelloSection.tsx'
import { Heading } from './Nav/heading'
import { BestDetail } from './BestDetail'
import TopDetails from './TopDetailSection'
import Fashion from './TopDetailSection/Fashion'

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

export const HomePage = () => {
    return (
        <GContainer className="overflow-y-scroll h-screen">
            <Heading />
            <HelloSection />
            <BestDetail />
            <TopDetails />
            <Fashion />
            <Footer />
        </GContainer>
    )
}
