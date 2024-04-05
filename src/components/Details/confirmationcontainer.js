import axios from '../../axiosURL'
import useAlert from "../../utils/AlertPopUp/useAlert";
import { variants } from "../Alert/variant";

/**
 * Renders the Confirmationscreen to confirm a booking
 * @param {*} props 
 * @returns 
 */
const ConfirmationContainer = (props) => {

    //set constant for using PopUp
    const { setAlert } = useAlert()

    /**
     * handles the booking of a car and the API Call
     * @param {*} e 
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/carrental/rent', {
            rentalId: props.car._id,
            date: new Date(props.date).getTime(),
            price: props.car.price
        }, { withCredentials: true })
            .then(res => {
                setAlert(res.data, variants.success)
                props.setOpenRent(false);
                props.setShowConfirmation(false)
                props.setOpenDetails(true)
            })
            .catch(err => {
                setAlert(err.response.data, variants.error);
                console.log(err);
            });

    }

    return (
        <div className="bg-white p-6 mt-5 rounded shadow-lg">
            <div className="text-2xl text-center">Confirm the reservation</div>
            <form onSubmit={handleSubmit}>
                <div className="pt-5">
                    <div className="flex flex-col items-center justify-center space-y-1 p-2">
                        Do you really want to book the following car?
                        <div className="font-semibold">{props.car.brand} {props.car.carmodel}</div>
                        <div className="font-semibold">Date: {new Date(props.date).toLocaleDateString("us-EN")}</div>
                        <div className="font-semibold">Price: {props.car.price} €</div>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                        <input className="cursor-pointer p-2 bg-emerald-300 rounded" type="submit" value="Confirm" />
                        <input className="cursor-pointer p-2 bg-red-300 rounded" type="button" onClick={e => { props.setShowConfirmation(false); props.setOpenDetails(true); props.setOpenRent(true) }} value="Other Date" />
                    </div>
                </div>
            </form>
        </div >
    )

}

export default ConfirmationContainer;