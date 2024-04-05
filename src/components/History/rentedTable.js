import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCars } from "../../utils/carReducer";
import { loadRented } from "../../utils/rentedReducer";
import HistoryTable from "./historyTable";

/**
 * Renders the history of cars which were rented by a user
 * @param {*} props 
 * @returns 
 */
const RentedTable = (props) => {
    
    //load dipatch to call reducer
    const dispatch = useDispatch();

    //load the cars and rented entries from reducer
    const cars = useSelector(state => state.carReducer.cars)
    const rented = useSelector(state => state.rentedReducer.rented)
    useEffect(() => {
        dispatch(loadCars())
        dispatch(loadRented())
    }, [])
 
    //creates a list for each rented entry with car and rents
    const rentedMap = rented.map((rent) => {
        let car = cars.find((car) => {
            return car._id === rent._id
        })
        return (
            <HistoryTable key={car._id} car={car} rented={rent.rented} />
        )
    })

    return (
        <div className="max-h-full md:h-full border-2 md:w-full m-2 p-2 overflow-y-scroll">
            {rentedMap}
        </div>
    )
}

export default RentedTable;