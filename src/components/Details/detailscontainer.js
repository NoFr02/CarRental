
/**
 * This renders the Detailview of a car
 * @param {*} props 
 * @returns 
 */
const DetailsContainer = (props) => {

    return (
        <div className='p-6 mt-5 w-full rounded shadow-lg md:flex md:flex-col md:w-80 md:min-w-min'>
            <div className="shadow my-1">
                <img className="object-left " src={props.car.href} alt="Bild von Auto" width="100px" height="100px" />
                <div className="flex items-center my-3 py-1 border-b-4 border-emerald-200 font-semibold">{props.car.brand} {props.car.carmodel}</div>
                <div className="flex items-center my-3 py-1 border-b-4 border-emerald-200">Power: {props.car.horsepower} PS</div>
                <div className="flex items-center my-3 py-1 border-b-4 border-emerald-200">Kilometers: {props.car.kilometers} km</div>
                <div className="flex items-center my-3 py-1 border-b-4 border-emerald-200">Doors: {props.car.doors}</div>
                <div className="flex items-center my-3 py-1 border-b-4 border-emerald-200">Weight: {props.car.weight} kg</div>
                <div className="flex items-center my-3 py-1 border-b-4 border-emerald-200">Price: {props.car.price} €</div>
                <div className="flex items-center my-3 py-1 border-b-4 border-emerald-200">{props.car.description}</div>
            </div>
            <input className="w-full md:w-min cursor-pointer bg-emerald-200 p-2 my-1 hover:bg-emerald-500 rounded" type="button" value="Rent Car" onClick={e=>{props.setOpenRent(true)}}></input>
        </div>
    )
}

export default DetailsContainer;