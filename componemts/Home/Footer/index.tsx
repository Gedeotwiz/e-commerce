import GContainer from '@/componemts/Share/GContainer'
import { Subscribe } from './Subscribe'
import { Contributor } from './contributor'
import { FooterLinks } from './Links'

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

export const Footer = () => {
    return (
        <GContainer>
            <Subscribe />
            <FooterLinks />
            <Contributor />
        </GContainer>
    )
}
