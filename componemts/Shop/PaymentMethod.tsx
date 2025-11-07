import GContainer from "../Share/GContainer"
import GImage from "../Share/GImage"
import GText from "../Share/GText"
import Mtn from "@/public/image/payment/mtn.png"
import Aitel from "@/public/image/payment/airtel.png"
import Mastercard from "@/public/image/payment/mastercard-r.png"
import Visa from "@/public/image/payment/visa.jpeg"
import Discover from "@/public/image/payment/discover.jpeg"
import Paypar from "@/public/image/payment/paypar.png"

export const PaymentMethod = () =>{
    const methods = [
        {label:'discover',image:Discover},
        {label:'mtn',image:Mtn},
        {label:'visa',image:Visa},
        {label:'aitel',image:Aitel},
        {label:'master',image:Mastercard},
        {label:'paypar',image:Paypar}
    ]
    return (
        <GContainer className=" w-full md:w-[524px] bg-[#A5C9CA] p-5 md:p-10 flex flex-col gap-5">
            <GContainer className="flex flex-col gap-5">
                <GText weight="bold" dimension="semi-large">Pay with</GText>
                <GContainer className="grid grid-cols-3 gap-5 px-4">
                    {methods.map((method)=>(
                          <GImage width={70} height={50} key={method.label} src={method.image} alt="pay"/>
                    ))}
                </GContainer>
            </GContainer>
            <GContainer className="flex flex-col gap-2">
                <GText weight="bold" dimension="semi-large">Buyer protection</GText>
                <GText>Get full refund if the item is not as described or if is not delivered</GText>
            </GContainer>
        </GContainer>
    )
}