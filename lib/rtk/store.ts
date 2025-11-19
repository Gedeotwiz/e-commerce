import { configureStore } from '@reduxjs/toolkit'
import selectedReducer from './slice/selectedSlice'
import cartReducer from './slice/cartSlice'
import { allApi } from './api/api'

export const store = configureStore({
    reducer: {
        selected: selectedReducer,
        cart: cartReducer,
        [allApi.reducerPath]: allApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(allApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
