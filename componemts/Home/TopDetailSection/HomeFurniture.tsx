import GButton from '@/componemts/Share/GButton'
import GContainer from '@/componemts/Share/GContainer'
import GImage from '@/componemts/Share/GImage'
import GText from '@/componemts/Share/GText'
import { FaCartPlus } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { addToCart } from '@/lib/redux/slice/cartSlice'

/**
 * @since October 2025
 * @author NSHIMIYUMUKIZA Erneste <nshimiyumukizaerneste1@gmail.com>
 * @see {@link :https://portfolio-ten-azure-76.vercel.app/} - Author's website
 */

const HomeFurniture = () => {
    const dispatch = useDispatch()
   
    const chairs = [
        {
            id: 1,
            image: '/homefurimage/tablechair.png',
            title: 'Modern Table Chair',
            price: '$812',
            description: 'Trendy handbag for all occasions.',
        },
        {
            id: 2,
            image: '/homefurimage/chair.png',
            title: 'Comfort Chair',
            price: '$299',
            description: 'Trendy handbag for all occasions.',
        },
        {
            id: 3,
            image: '/homefurimage/chair.png',
            title: 'Office Chair',
            price: '$450',
            description: 'Trendy handbag for all occasions.',
        },
        {
            id: 4,
            image: '/homefurimage/chair.png',
            title: 'Gaming Chair',
            price: '$620',
            description: 'Trendy handbag for all occasions.',
        },
    ]

    const handleAddToCart = (item: any) => {
          dispatch(
            addToCart({
              id: item.id,
              title: item.title,
              price: Number(item.price.replace('$', '')), 
              image: item.image,
              description: item.description,
            })
          )
        }

    return (
        <GContainer className="bg-[#F8FAFC] py-10 px-4 sm:px-8 lg:px-16">
            <GContainer className="max-w-7xl mx-auto">
                <GText weight="semibold" dimension="large" className="mb-6">
                    Home & Furnitures:
                </GText>
                <GContainer className="flex flex-col lg:flex-row items-start gap-10">
                    <GContainer className="w-full lg:w-1/2">
                        <GImage
                            width={760}
                            height={760}
                            src="/homefurimage/sofya.png"
                            alt="Sofa Set"
                            className="w-full h-auto object-cover"
                        />
                    </GContainer>
                    <GContainer className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {chairs.map((chair, index) => (
                            <GContainer
                                key={index}
                                className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition duration-300 flex flex-col"
                            >
                                <GContainer className="flex justify-end mb-2">
                                    <GText
                                        color="white"
                                        className="h-10 w-10 rounded-full bg-[#2C3333] flex justify-center items-center text-xs font-semibold"
                                    >
                                        -10%
                                    </GText>
                                </GContainer>

                                <GImage
                                    width={257}
                                    height={193}
                                    src={chair.image}
                                    alt={chair.title}
                                    className="w-full h-48 sm:h-56 object-contain mb-3"
                                />

                                <GText className="font-semibold text-gray-800 text-base sm:text-lg mb-1">
                                    {chair.title}
                                </GText>

                                <GImage
                                    width={137}
                                    height={25}
                                    src="/elcimage/star.png"
                                    alt="rating"
                                    className="w-20 mb-3"
                                />

                                <GContainer className="flex justify-between items-center mt-auto">
                                    <GText className="font-bold text-gray-900 text-base sm:text-lg">
                                        {chair.price}
                                    </GText>
                                    <FaCartPlus onClick={()=>handleAddToCart(chair)} className="text-[#0D9488] text-xl cursor-pointer hover:scale-110 transition-transform" />
                                </GContainer>
                            </GContainer>
                        ))}
                    </GContainer>
                </GContainer>
            </GContainer>
        </GContainer>
    )
}

export default HomeFurniture
