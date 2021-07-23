import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    inputValue: ""
}

const widgetSlice = createSlice({
    name: "widget",
    initialState,

    reducers: {
        inputChange(state, action) {
           state.inputValue = action.payload
        }
    }
})

export const { inputChange } = widgetSlice.actions;

export default widgetSlice;