'use client'
import GContainer from "../Share/GContainer"
import GText from "../Share/GText"
import { SingleCartItem } from "./SingleCartItem"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/rtk/store"

export const ShopingCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)

  if (cartItems.length === 0) {
    return (
      <GContainer className=" w-full md:w-2/3 flex flex-col gap-5">
        <GText weight="bold" dimension="large">
          Your cart is empty
        </GText>
      </GContainer>
    )
  }

  return (
    <GContainer className="w-full md:w-2/3 flex flex-col gap-5">
      <GContainer className="w-full bg-[#A5C9CA] p-10">
        <GText weight="bold" dimension="large">
          Shopping Cart
        </GText>
      </GContainer>

      <GContainer className="w-full bg-[#A5C9CA] px-5 md:px-10 py-5 flex flex-col gap-10">
       {cartItems.map(item => (
  <SingleCartItem
    key={item.id}
    id={item.id}
    description={item.description}
    price={item.price}
    quantity={item.quantity}
    image={item.image}
    title={item.title}
  />
))}

      </GContainer>
    </GContainer>
  )
}
