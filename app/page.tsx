import { HomePage } from '@/componemts/Home'
import GContainer from '@/componemts/Share/GContainer'

export default function Home() {
    return (
        <GContainer className={`w-full bg-[#E7F6F2] h-screen`}>
            <HomePage/>
        </GContainer>
    )
}
