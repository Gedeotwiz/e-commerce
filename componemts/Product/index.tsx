import { Footer } from "../Home/Footer"
import { Heading } from "../Home/Nav/heading"
import GContainer from "../Share/GContainer"
import { AllProduct } from "./AllProduct"
import { LeftFilter } from "./LeftFilter"

export const Product = () =>{
    return (
        <GContainer>
            <Heading/>
            <GContainer className=" py-10 flex">
                <LeftFilter/>
                <AllProduct/>
            </GContainer>
            <Footer/>
        </GContainer>
    )
}