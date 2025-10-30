

import GButton from '@/componemts/Share/GButton'
import GContainer from '@/componemts/Share/GContainer'
import GImage from '@/componemts/Share/GImage'
import GText from '@/componemts/Share/GText'
import { FaCartPlus } from 'react-icons/fa6'

/**
 * @since October 2025
 * @author NSHIMIYUMUKIZA Erneste <nshimiyumukizaerneste1@gmail.com>
 * @see {@link :https://portfolio-ten-azure-76.vercel.app/} - Author's website
 */

const Fashion = () => {
  const fashions = [
    {
      image: '/fashionimage/fashion1.png',
      price: '$812',
    },
    {
      image: '/fashionimage/fashion2.png',
      price: '$620',
    },
    {
      image: '/fashionimage/fashion3.png',
      price: '$499',
    },
    {
      image: '/fashionimage/fashion4.png',
      price: '$950',
    },
  ]

  return (
    <GContainer className="p-6 bg-[#F8FAFC]">
      <GText
        color="black"
        dimension="semi-large"
        weight="medium"
        className="font-semibold text-2xl mb-6"
      >
        Fashion:
      </GText>

      <GContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {fashions.map((fashion, index) => (
          <GContainer
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-4 flex flex-col justify-between"
          >
            <GImage
              width={407}
              height={407}
              src={fashion.image}
              alt={`Fashion item ${index + 1}`}
              className="w-full h-64 object-cover rounded-xl"
            />

            <GContainer className="mt-4 flex flex-col items-center">
              <GText className="font-bold text-lg mb-2">{fashion.price}</GText>
              <GButton
                className="px-4 py-2 w-full sm:w-auto text-white bg-[#0D9488] hover:bg-[#0B7B72] transition rounded-full flex items-center justify-center"
                icon={<FaCartPlus />}
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
