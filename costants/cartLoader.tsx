'use client'

import { ReactNode, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadCartFromStorage } from '@/lib/redux/slice/cartSlice'

export function CartLoader({ children }: { children: ReactNode }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCartFromStorage())
  }, [dispatch])

  return <>{children}</>
}
