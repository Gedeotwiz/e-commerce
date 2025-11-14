import { configureStore } from '@reduxjs/toolkit'
import selectedReducer from './slice/selectedSlice'
import cartReducer from './slice/cartSlice'
import { categoryApi } from './category/categotyApi'

export const store = configureStore({
    reducer: {
        selected: selectedReducer,
        cart: cartReducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(categoryApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
