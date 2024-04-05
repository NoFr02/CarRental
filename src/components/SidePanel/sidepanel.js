import { useDispatch, useSelector } from 'react-redux';
import { loadCartypes } from '../../utils/cartypeReducer';
import TagBox from './tagbox';
import { useEffect, useState } from 'react';
import axios from '../../axiosURL'
import { loadCars, updateCars } from '../../utils/carReducer';

/**
 * This is the Sidepanel which renders all the different filteroptions
 * @param {*} props 
 * @returns 
 */
const SidePanel = (props) => {

    const dispatch = useDispatch()

    //set states for different variables
    const [openFilter, setOpenFilter] = useState(false);
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState("");
    const cartypes = useSelector((state) => { return state.cartypeReducer.cartypes })

    //controlls the PopUp of the filters in mobilemode
    const toggleFilter = () => {
        setOpenFilter(!openFilter);
    }

    //make the api request if a filter gets changed
    const handleFilters = () => {
        let dateConverted = date;
        if (date !== "") {
            dateConverted = new Date(date).getTime();
        }

        axios.get(`/carrental/search?category=${category}&date=${dateConverted}&tags=${tags}`, { withCredentials: true })
            .then(res => {
                dispatch(updateCars(res.data))
            }).catch(err => console.log(err))
    }

    /**
     * Resets every filter
     */
    const handleReset = () => {
        //reset the States
        setDate("");
        setCategory("");
        setTags("");

        //reset the Dropddown
        document.getElementById("carttype-option-01").selected = true;

        //reset the Checkboxes
        const tags = document.getElementsByName("tagsCheckboxes")
        tags.forEach(tag => {
            tag.checked = false;
        })

        //reset the Datepicker
        document.getElementById("datepicker").value=""
    }

    //loads cartypes on first render
    useEffect(() => {
        dispatch(loadCartypes())
    }, [])

    //detects if filter gets changed
    useEffect(() => {
        if (date != "" || category != "" || tags != "") {
            handleFilters()
        }
        else {
            dispatch(loadCars())
        }

    }, [date, category, tags])

    //create a option for every cartype
    const cartypesMap = cartypes.map(e => { return <option key={e._id} value={e._id}>{e.cartype}</option> })

    return (
        <div className='block max-h-60 overflow-y-scroll min-w-max border-green-400 px-2 border-2 md:max-h-screen md:h-screen md:w-40 bg-emerald-200 items-center font-DM'>
            <div onClick={toggleFilter} className='block md:hidden text-center py-1 cursor-pointer md:cursor-default'>
                Filters
            </div>
            <div className='hidden md:block text-center py-1 cursor-pointer md:cursor-default'>
                Filters
            </div>
            <div className={`${openFilter ? 'block' : 'hidden'} md:block`}>
                <div className='flex flex-col my-1 px-2 space-y-2'>
                    <div className='font-semibold'>
                        Category
                    </div>
                    <select id="cartype" name="cartype" className="flex w-full p-1" onChange={e => setCategory(e.target.value)} required>
                        <option key="01" id="carttype-option-01" value="">All</option>
                        {cartypesMap}
                    </select>
                </div>
                <div className='container py-2'>
                    <div className='flex flex-col my-1 px-2 space-y-2'>
                        <label className='font-semibold'>Date</label>
                        <input id="datepicker" type='date' value={date} onChange={(e) => { setDate(e.target.value) }} />
                    </div>
                </div>
                <TagBox tags={props.tags} setTags={setTags} />
                <div className='md:flex flex-col items-center pb-1'>
                    <button className='bg-emerald-400 p-2 m-1 hover:bg-emerald-500 rounded' onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default SidePanel;