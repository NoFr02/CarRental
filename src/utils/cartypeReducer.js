import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axiosURL";

//loads every cartype
export const loadCartypes = createAsyncThunk("cartypes/loadCartypes", async () => {
    const res = await axios.get("/carrental/cartypes/", { withCredentials: true })
    return res.data;
})

const initialState = {
    cartypes: []
}

//creates the reducer which offers the state
const cartypeReducer = createReducer(initialState, (builder) => {
    builder.addCase(loadCartypes.fulfilled, (state, action) => {
        return {
            ...state,
            cartypes: action.payload
        }
    })
})

export default cartypeReducer;