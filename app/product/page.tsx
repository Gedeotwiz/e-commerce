
import { Product } from '@/componemts/Product'
import GContainer from '@/componemts/Share/GContainer'

export default function ProductPage() {
    return (
        <GContainer className={`w-full bg-[#E7F6F2] h-screen`}>
            <Product/>
        </GContainer>
    )
}
