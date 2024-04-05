import { useNavigate } from "react-router-dom";

/**
 * Renders the view of one Car
 * @param {*} props 
 * @returns 
 */
const Car = (props) => {

    //set constant for Navigation
    const navigate = useNavigate();

    return (
        <div className='flex flex-row m-1 p-1 h-20 shadow justify-between' onClick={(e) => navigate(`/details/${props.car._id}`)}>
            <img className="object-left" src={props.car.href} alt="Bild von Auto" width="75px" height="75px" />
            <div>{props.car.brand} {props.car.carmodel}</div>
            <div className="">{props.car.price} €/day</div>
        </div>
    )
}

export default Car;