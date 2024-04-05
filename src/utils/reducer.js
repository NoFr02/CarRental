import cartypeReducer from "./cartypeReducer"
import carReducer from "./carReducer"
import rentedReducer from "./rentedReducer"
import { combineReducers } from "@reduxjs/toolkit"


//combines all reducers
export const rootReducer = combineReducers({cartypeReducer, carReducer, rentedReducer})