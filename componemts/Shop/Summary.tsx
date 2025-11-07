'use client'

import { AuthButton } from "../auth/AuthButton"
import GContainer from "../Share/GContainer"
import GText from "../Share/GText"
import { notification } from "antd"
import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/rtk/store"

export const Summary = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const [loading, setLoading] = React.useState(false)
  const [api, contextHolder] = notification.useNotification()


  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
 const shippingTotal = cartItems.reduce(
    (acc, item) => acc + item.price * 0.05, 
    0
  )
  const total = subtotal + shippingTotal

  const handleSubmit = async () => {
    setLoading(true)
    try {
      await new Promise((res) => setTimeout(res, 2000))
      api.open({
        message: 'Checkout successful!',
        description: 'We are checking your cart.',
        type: 'success',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <GContainer className="w-full md:w-[524px] bg-[#D9D9D9] md:bg-[#A5C9CA] p-5 md:p-10 flex flex-col gap-5">
      {contextHolder}
      <GText weight="bold" dimension="large">Summary</GText>

      <GContainer className="flex flex-col gap-3">
        <GContainer className="flex justify-between items-center">
          <GText>Subtotal</GText>
          <GText>US ${subtotal.toFixed(2)}</GText>
        </GContainer>

        <GContainer className="flex justify-between items-center">
          <GText>Shipping fee</GText>
          <GText>US ${shippingTotal.toFixed(2)}</GText>
        </GContainer>

        <GContainer className="flex justify-between items-center font-bold">
          <GText weight="bold">Total</GText>
          <GText>US ${total.toFixed(2)}</GText>
        </GContainer>
      </GContainer>

      <GContainer className="flex justify-center items-center">
        <AuthButton name="Checkout" onClick={handleSubmit} isLoading={loading} />
      </GContainer>
    </GContainer>
  )
}
