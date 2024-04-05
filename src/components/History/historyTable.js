import Rented from "./rented"
import Car from "../CarContainer/car"

/**
 * Renders a car an its RentHistory
 * @param {*} props 
 * @returns 
 */
const HistoryTable = (props) =>{

    return(
        <div className="border-grey-300 border-2 my-2 shadow">
            <Car key={props.car._id} car={props.car}/>
            <Rented key={Math.random()} rented={props.rented} />
        </div>
        
    )
}

export default HistoryTable;