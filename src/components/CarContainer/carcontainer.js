import Car from './car';

/**
 * Renders a List of cars
 * @param {*} props 
 * @returns 
 */
const CarContainer = (props)=>{

    //maps the array of Cars and creates a <Car/> for each
    const carMap = props.cars.map(car=>{
        return <Car key={car._id} car={car}/>
    })

    return(
        <div className='max-h-full md:h-full border-2 md:w-full m-2 overflow-y-scroll'>
            {carMap}
        </div>
    )
}

export default CarContainer;