import { HomePage } from '@/componemts/Home'
import GButton from '@/componemts/Share/GButton'
import GContainer from '@/componemts/Share/GContainer'
import GText from '@/componemts/Share/GText'
import { Colors } from '@/contants/colors'

export default function Home() {
    return (
        <GContainer className={`w-full bg-[#E7F6F2] h-screen`}>
            <HomePage/>
        </GContainer>
    )
}
