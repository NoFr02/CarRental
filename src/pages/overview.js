import SidePanel from '../components/SidePanel/sidepanel'
import CarContainer from '../components/CarContainer/carcontainer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadCars } from '../utils/carReducer';

/**
 * This page renders the overview of all active cars and offers filterfunctions
 * @param {*} props 
 * @returns 
 */
const Overview = (props) => {

    //load dispatch to call reducer
    const dispatch = useDispatch();

    //load cars and tags from reducer
    const cars = useSelector((state) => { return state.carReducer.cars });
    const tags = useSelector((state) => {return state.carReducer.tags})
    
    useEffect(() => {
        dispatch(loadCars())
    }, [])

    return (
        <div className='container md:flex md:basis-full'>
            <SidePanel tags={tags}/>
            <CarContainer cars={cars}/>
        </div>
    )
}

export default Overview;