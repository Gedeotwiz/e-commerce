import GContainer from "../Share/GContainer"
import { ShopingCart } from "./ShopingCart"
import { Footer } from "../Home/Footer"
import { Summary } from "./Summary"
import { PaymentMethod } from "./PaymentMethod"

export const Shop = () =>{
    return (
        <>
           <GContainer className="bg-[#395B64] w-full h-[77px] rounded-b-4xl"/>
           <GContainer className="p-4 md:p-10 flex flex-col gap-5 md:flex-row justify-between">
             <ShopingCart/>
             <GContainer className="flex flex-col gap-5 md:gap-10">
                <Summary/>
                <PaymentMethod/>
             </GContainer>
           </GContainer>
           <Footer/>
        </>
    )
}