import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: number
  title: string
  price: number
  image: string
  quantity: number
  description: string
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
      localStorage.setItem('cart', JSON.stringify(state.items))
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(item => item.id === action.payload)
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1
        } else {
          state.items = state.items.filter(item => item.id !== action.payload)
        }
      }
      localStorage.setItem('cart', JSON.stringify(state.items))
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      localStorage.setItem('cart', JSON.stringify(state.items))
    },

    clearCart: state => {
      state.items = []
      localStorage.setItem('cart', JSON.stringify(state.items))
    },

    loadCartFromStorage: state => {
      const stored = localStorage.getItem('cart')
      if (stored) state.items = JSON.parse(stored)
    },
  },
})

export const {
  addToCart,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  loadCartFromStorage,
} = cartSlice.actions

export default cartSlice.reducer
