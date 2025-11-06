import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SelectedState {
    selectedItem: any | null
}

const initialState: SelectedState = {
    selectedItem: null,
}

const selectedSlice = createSlice({
    name: 'selected',
    initialState,
    reducers: {
        setSelectedItem: (state, action: PayloadAction<any>) => {
            state.selectedItem = action.payload
        },
        clearSelectedItem: (state) => {
            state.selectedItem = null
        },
    },
})

export const { setSelectedItem, clearSelectedItem } = selectedSlice.actions
export default selectedSlice.reducer
