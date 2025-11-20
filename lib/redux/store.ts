import { configureStore } from '@reduxjs/toolkit'
import selectedReducer from './slice/selectedSlice'
import cartReducer from './slice/cartSlice'
import { baseApi } from './slice/apiSlice/baseApi'

export const store = configureStore({
    reducer: {
        selected: selectedReducer,
        cart: cartReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
