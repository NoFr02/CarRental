import { createReducer, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "../axiosURL";

//load all cars from API
export const loadCars = createAsyncThunk("cars/loadCars", async () => {
    const res = await axios.get("/carrental/cars/", { withCredentials: true })
    return res.data;
})

//load all cars from user from API
export const loadOwnCars = createAsyncThunk("cars/loadOwnCars", async () => {
    const res = await axios.get("/carrental/owncars/", { withCredentials: true })
    return res.data;
})

//load all cars which were lent by user
export const loadLent = createAsyncThunk("cars/loadLent", async () => {
    const res = await axios.get("/carrental/lent/", { withCredentials: true })
    return res.data;
})

//loads refreshes the car based on the action
export const updateCars = createAction("cars/update")


const initialState = {
    cars: [],
    mycars: [],
    lent: [],
    tags: []
}

//creates the reducer which offers the state
const carReducer = createReducer(initialState, (builder) => {
    builder.addCase(loadCars.fulfilled, (state, action) => {

        const distinctTags = [...new Set(action.payload.flatMap(car => car.tags))]
        return {
            ...state,
            cars: action.payload,
            tags: distinctTags
        }
    }).addCase(loadLent.fulfilled, (state, action) => {
        return {
            ...state,
            lent: action.payload
        }
    }).addCase(loadOwnCars.fulfilled, (state, action) => {
        return {
            ...state,
            mycars: action.payload
        }
    }).addCase(updateCars, (state, action) => {
        return {
            ...state,
            cars: action.payload
        }
    })
})

export default carReducer;