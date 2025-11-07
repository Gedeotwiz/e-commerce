'use client'

import { store } from '@/lib/rtk/store'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { CartLoader } from '@/costants/cartLoader'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <CartLoader>{children}</CartLoader>
    </Provider>
  )
}
