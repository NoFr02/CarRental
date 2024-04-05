import { createReducer, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "../axiosURL";

//load rented entries for user
export const loadRented = createAsyncThunk("rented/loadRented", async () => {
    const res = await axios.get("/carrental/rented/", { withCredentials: true })
    return res.data;
})

const initialState = {
    rented: []
}

//creates the reducer which offers the state
const rentedReducer = createReducer(initialState, (builder) => {
    builder.addCase(loadRented.fulfilled, (state, action) => {
        return {
            ...state,
            rented: action.payload
        }
    });
});

export default rentedReducer;