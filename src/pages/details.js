import DetailsContainer from "../components/Details/detailscontainer";
import RentModal from "../components/Details/rentmodal";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from '../axiosURL'
import ConfirmationContainer from "../components/Details/confirmationcontainer";

/**
 * this page renders the detail, datepicker and confirmation view
 * @param {*} props 
 * @returns 
 */
const Details = (props) => {

    //get car ID from URL
    const { carId } = useParams();

    //set some useStates
    const [openDetails, setOpenDetails] = useState(true)
    const [openRent, setOpenRent] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [date, setDate] = useState("");
    const [car, setCar] = useState("");

    //load one car on pageload
    useEffect(() => {
        getCar()
    }, [])

    /**
     * handles API-call to get one car by ID
     */
    const getCar = () => {
        axios.get(`/carrental/car/${carId}`, { withCredentials: true })
            .then((res) => {
                setCar(res.data)
            }).catch(err => console.log(err));
    }

    return (
        <div className="flex flex-col justify-center items-center">
            {openDetails && <DetailsContainer setOpenRent={setOpenRent} car={car} />}
            {openRent && <RentModal setOpenRent={setOpenRent} setShowConfirmation={setShowConfirmation} setOpenDetails={setOpenDetails} setDate={setDate} />}
            {showConfirmation && <ConfirmationContainer date={date} car={car} setShowConfirmation={setShowConfirmation} setOpenRent={setOpenRent} setOpenDetails={setOpenDetails} />}
        </div>

    )
}

export default Details;