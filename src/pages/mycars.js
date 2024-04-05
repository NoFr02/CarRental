import { useEffect, useState } from "react";
import AddCar from "../components/MyCars/addcar";
import CarContainer from "../components/CarContainer/carcontainer";
import { useDispatch, useSelector } from "react-redux";
import { loadOwnCars } from "../utils/carReducer";

/**
 * this page renders the view of the users cars and the addPopUp
 * @param {*} props 
 * @returns 
 */
const MyCars = (props) => {
    const [openAdd, setOpenAdd] = useState(false)

    //load dispatch to call reducer 
    const dispatch = useDispatch();

    //load the cars from the reducer
    const cars = useSelector((state) => { return state.carReducer.mycars });
    useEffect(() => {
        dispatch(loadOwnCars())
    }, [])

    return (
        <div className="flex flex-col  md:items-center justify-center md:px-20">
            <div className="flex flex-col items-center mx-3">
                <input onClick={e => { setOpenAdd(true) }} className="cursor-pointer bg-emerald-200 w-full p-2 m-1 hover:bg-emerald-500 rounded" type="button" value="Add a Car"></input>
            </div>
            <CarContainer cars={cars} />
            {openAdd && <AddCar setOpenAdd={setOpenAdd} />}
        </div>

    )
}

export default MyCars;