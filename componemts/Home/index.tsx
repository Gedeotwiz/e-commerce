import GContainer from '../Share/GContainer'
import Secotion from './Detail/Secotion'
import { Heading } from './Nav/heading'

export const HomePage = () => {
    return (
        <GContainer className="bg-[#E7F6F2]">
            <Heading />
            <Secotion />
        </GContainer>
    )
}
