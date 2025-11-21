import GContainer from "../Share/GContainer"
import GImage from "../Share/GImage"
import GText from "../Share/GText"
import { FaPlus, FaMinus } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { addToCart, decreaseQuantity, removeFromCart } from "@/lib/redux/slice/cartSlice"

interface Props {
  id: number
  description: string
  price: number
  quantity: number
  image: string
  title: string
}

export const SingleCartItem = ({ id, description, price, quantity, image, title }: Props) => {
  const dispatch = useDispatch()
  const shippingFee = price * 0.05

  return (
    <GContainer className="flex flex-col gap-5 md:flex-row justify-between border-b-2 border-gray-400 pb-5">
      <GContainer className="flex gap-5">
        <GImage width={70} height={20} className="w-[70px] h-[70px] md:w-[150px] md:h-[150px]"  alt="item" src={image} />
        <GContainer className="flex flex-col gap-2 py-0 md:py-5">
          <GText weight="bold">{title}</GText>
          <GText className="hidden md:block">{description}</GText>
          <GText>Price: US ${(price * quantity).toFixed(2)}</GText>
          <GText>Shipping fee: US ${shippingFee.toFixed(2)}</GText>
        </GContainer>
      </GContainer>

      <GContainer className="flex flex-row md:flex-col justify-between md:justify-center items-center md:gap-10">
        <GText
          color="BbSixten"
          className="underline cursor-pointer"
          onClick={() => dispatch(removeFromCart(id))}
        >
          Remove
        </GText>

        <GContainer className="flex justify-center items-center gap-5">
          <GContainer
            className="bg-white rounded-full p-1 cursor-pointer"
            onClick={() => dispatch(decreaseQuantity(id))}
          >
            <FaMinus />
          </GContainer>

          <GText>{quantity}</GText>

          <GContainer
            className="bg-white rounded-full p-1 cursor-pointer"
            onClick={() =>
              dispatch(addToCart({ id, description, price, title, image }))
            }
          >
            <FaPlus />
          </GContainer>
        </GContainer>
      </GContainer>
    </GContainer>
  )
}
