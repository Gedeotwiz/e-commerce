import GContainer from "../Share/GContainer"
import { ShopingCart } from "./ShopingCart"
import { Footer } from "../Home/Footer"
import { Summary } from "./Summary"

export const Shop = () =>{
    return (
        <>
           <GContainer className="bg-[#395B64] w-full h-[77px] rounded-b-4xl"/>
           <GContainer className="p-10">
             <ShopingCart/>
             <GContainer>
                <Summary/>
             </GContainer>
           </GContainer>
           <Footer/>
        </>
    )
}