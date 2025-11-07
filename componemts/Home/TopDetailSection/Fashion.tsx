'use client'
import GButton from '@/componemts/Share/GButton'
import GContainer from '@/componemts/Share/GContainer'
import GImage from '@/componemts/Share/GImage'
import GText from '@/componemts/Share/GText'
import { FaCartPlus } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { addToCart } from '@/lib/rtk/slice/cartSlice'


/**
 * @since October 2025
 * @author NSHIMIYUMUKIZA Erneste <nshimiyumukizaerneste1@gmail.com>
 * @see {@link :https://portfolio-ten-azure-76.vercel.app/} - Author's website
 */

const Fashion = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const fashions = [
        {
            id: 1,
            image: '/fashionimage/fashion1.png',
            price: '$812',
            title: 'Luxury Dress',
            description: 'Beautiful designer dress with modern fit.',
        },
        {
            id: 2,
            image: '/fashionimage/fashion2.png',
            price: '$620',
            title: 'Classic Coat',
            description: 'Warm and stylish winter coat.',
        },
        {
            id: 3,
            image: '/fashionimage/fashion3.png',
            price: '$499',
            title: 'Elegant Shoes',
            description: 'High-quality leather shoes.',
        },
        {
            id: 4,
            image: '/fashionimage/fashion4.png',
            price: '$950',
            title: 'Fashion Bag',
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
        <GContainer className="p-6 bg-[#F8FAFC]">
            <GText
                color="black"
                dimension="large"
                weight="semibold"
                className="mb-6"
            >
                Fashion:
            </GText>

            <GContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {fashions.map((fashion, index) => (
                    <GContainer
                        key={index}
                        className="bg-white rounded-2xl w-[307px] md:w-[407px] h-auto md:h-[408px]  shadow-md hover:shadow-lg transition duration-300 p-4 flex flex-col justify-center items-center"
                    >
                        <GImage
                            width={307}
                            height={407}
                            src={fashion.image}
                            alt={`Fashion item ${index + 1}`}
                            className="w-[280px] h-[290px] md:w-[307px] md:h-[407px]"
                        />

                        <GContainer className="flex flex-col items-center">
                            <GText className="font-bold text-lg mb-2">
                                {fashion.price}
                            </GText>
                            <GButton
                                className="px-4 py-2 w-full sm:w-auto text-white bg-[#0D9488] hover:bg-[#0B7B72] transition rounded-full flex items-center justify-center"
                                icon={<FaCartPlus />}
                                onClick={()=>handleAddToCart(fashion)}
                            >
                                Buy Now
                            </GButton>
                        </GContainer>
                    </GContainer>
                ))}
            </GContainer>
        </GContainer>
    )
}

export default Fashion
