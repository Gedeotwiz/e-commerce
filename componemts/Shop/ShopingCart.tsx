import GContainer from "../Share/GContainer"
import GText from "../Share/GText"
import { SingleCartItem } from "./SingleCartItem"

export const ShopingCart = () =>{
    const items = [
        {description:"Original unlocked Apple iphone X 4G Mobile phone 3Gb RAM",shippingFee:12.56,price:234},
        {description:"Original unlocked Apple iphone X 4G Mobile phone 3Gb RAM",shippingFee:41.7,price:300},
        {description:"Original unlocked Apple iphone X 4G Mobile phone 3Gb RAM",shippingFee:200,price:1000},
        {description:"Original unlocked Apple iphone X 4G Mobile phone 3Gb RAM",shippingFee:10.1,price:50.78}
    ]
    return (
        <GContainer className="w-2/3 flex flex-col gap-5">
            <GContainer className="w-full bg-[#A5C9CA] p-10">
                <GText weight="bold" dimension="large">Shopping Cart</GText>
            </GContainer>
            <GContainer className="w-full bg-[#A5C9CA] px-10 py-5 flex flex-col gap-10">
                {items.map((item,index)=>(
                  <SingleCartItem key={index} description={item.description} shippingFee={item.shippingFee} price={item.price}/>
                ))}
              
            </GContainer>
        </GContainer>
    )
}