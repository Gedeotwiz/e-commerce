import GContainer from "@/componemts/Share/GContainer"
import GText from "@/componemts/Share/GText"
import { AllCategories } from "./AllCategories"

export const LeftFilter = () =>{
    return(
        <GContainer className="w-[350px]">
            <AllCategories/>
        </GContainer>
    )
}