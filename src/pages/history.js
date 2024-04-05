import { useState } from "react";

import RentedTable from "../components/History/rentedTable";
import LentTable from "../components/History/lentTable";

/**
 * renders the rent and lent view with buttons to swich the view
 * @param {*} props 
 * @returns 
 */
const History = (props) => {

    //set useState to swich the view
    const [flip, setFlip] = useState(true);

    return (
        <div className="flex flex-col  md:items-center justify-center md:px-20">
            <div className="flex items-center justify-center space-x-6 m-2">
                <div className={`shadow rounded p-1 border-2  cursor-pointer ${flip ? 'border-grey-300 bg-emerald-200' : 'border-grey-200'}`} onClick={e => setFlip(true)}>
                    Rented
                </div>
                <div className={`shadow rounded p-1 border-2 cursor-pointer ${!flip ? 'border-grey-300 bg-emerald-200' : 'border-grey-200'}`} onClick={e => setFlip(false)}>
                    Lent
                </div>
            </div>
            {flip ? <RentedTable /> : <LentTable />}
        </div>
    )
}

export default History;