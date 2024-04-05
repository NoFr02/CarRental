import { useEffect } from "react";
import { loadLent } from "../../utils/carReducer";
import { useDispatch, useSelector } from "react-redux";
import HistoryTable from "./historyTable";

/**
 * Renders the History of the cars which were lent by a user
 * @param {*} props 
 * @returns 
 */
const LentTable = (props) => {

    //load dispatch to make reducer call
    const dispatch = useDispatch();

    //load the cars from reducer
    const cars = useSelector(state => state.carReducer.lent)
    useEffect(() => {
        dispatch(loadLent())
    }, [])

    //creates a list of cars whith corresponding rents
    const lentMap = cars.map((lent) => {
        return (
            <HistoryTable key={lent._id} car={lent} rented={lent.rented} />
        )
    })
    return (
        <div className="max-h-full md:h-full border-2 md:w-full m-2 p-2 overflow-y-scroll">
            {lentMap}
        </div>
    )
}

export default LentTable;