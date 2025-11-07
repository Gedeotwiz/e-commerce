import { configureStore } from '@reduxjs/toolkit'
import selectedReducer from './slice/selectedSlice'
import cartReducer from './slice/cartSlice'

export const store = configureStore({
    reducer: {
        selected: selectedReducer,
        cart:cartReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
