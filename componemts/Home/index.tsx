import GContainer from "../Share/GContainer"
import Secotion from "./body/Secotion"
import { Heading } from "./Nav/heading"


export const HomePage = () => {
    return (
        <GContainer className="bg-[#E7F6F2]">
            <Heading/>
            <Secotion />
        </GContainer>
    )
}
