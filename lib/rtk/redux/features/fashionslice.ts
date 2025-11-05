import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedItem: null,
};

const fushionSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        setSelectedItem: (state , action) =>{
            state.selectedItem = action.payload;
        },
        clearSelectedItem:(state) =>{
            state.selectedItem = null;
        }
    }
})

export const {setSelectedItem ,clearSelectedItem} = fushionSlice.actions
export default fushionSlice.reducer;