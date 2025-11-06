import GContainer from "../Share/GContainer"
import GImage from "../Share/GImage";
import GText from "../Share/GText"
import { FaPlus,FaMinus } from "react-icons/fa";
import ImageP from "@/public/image/iphone-x.png"

interface props{
    description:string,
    price:number,
    shippingFee:number
}

export const SingleCartItem = ({description,price,shippingFee}:props) =>{
    return (
        <GContainer className="flex justify-between border-b-2 border-gray-400 pb-5">
            <GContainer className="flex">
                <GImage 
                  width={150}
                  height={150}
                  alt="item"
                  src={ImageP}
                />
                <GContainer className="flex flex-col gap-2 py-5">
                    <GText>{description}</GText>
                    <GText>US ${price}</GText>
                    <GText>shipping fee:US ${shippingFee}</GText>
                </GContainer>
            </GContainer>
            <GContainer className="flex flex-col justify-center items-center gap-10">
                <GText color="BbSixten" className="underline">Remove</GText>
                <GContainer className="flex justify-center items-center gap-5">
                   <GContainer className="bg-white rounded-full p-1"><FaMinus/></GContainer>
                   <GText>1</GText>
                   <GContainer className="bg-white rounded-full p-1"><FaPlus/></GContainer>
                </GContainer>
            </GContainer>
        </GContainer>
    )
}