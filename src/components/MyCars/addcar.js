import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { loadCartypes } from "../../utils/cartypeReducer";
import axios from "../../axiosURL";
import { loadOwnCars } from "../../utils/carReducer";
import useAlert from "../../utils/AlertPopUp/useAlert";
import { variants } from "../Alert/variant";

/**
 * Renders the form for adding a new car to a user
 * @param {*} props 
 * @returns 
 */
const AddCar = (props) => {

    //load dispatch to call reducer
    const dispatch = useDispatch()

    //load the alertHook to call PopUps
    const { setAlert } = useAlert()

    //set some useStates
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("")
    const [carmodel, setModel] = useState("")
    const [kilometers, setKilometers] = useState("")
    const [horsepower, setHorsepower] = useState("")
    const [weight, setWeight] = useState("")
    const [doors, setDoors] = useState("")
    const [description, setDescription] = useState("")
    const [href, setHref] = useState("")
    const [tags, setTags] = useState("")

    //load the cartypes from reducer
    const cartypes = useSelector((state) => { return state.cartypeReducer.cartypes });
    useEffect(() => {
        dispatch(loadCartypes());
    }, [])

    /**
     * Handle the submit of a new car and calls the API
     * @param {*} e 
     */
    const handleSubmit = (e) => {
        e.preventDefault()

        //make a list of the tags added to the car
        const trimmedTags = tags.split(",").map((tag) => tag.trim());

        axios.post("/carrental/rental", {
            cartype: document.getElementById("cartype").value,
            price: price,
            brand: brand,
            carmodel: carmodel,
            kilometers: kilometers,
            horsepower: horsepower,
            weight: weight,
            doors: doors,
            active: document.getElementById("isActive").checked,
            description: description,
            href: href,
            tags: trimmedTags
        }, { withCredentials: true })
            .then((res) => {
                setAlert(res.data, variants.success)
                dispatch(loadOwnCars())
                props.setOpenAdd(false);
            }).catch((err) => {
                setAlert(err.respones.data)
                console.log(err)
            })
    }

    //creates a list of options for the cartype-dropdown
    const cartypesMap = cartypes.map(e => { return <option key={e._id} value={e._id}>{e.cartype}</option> })

    return (
        <div id="AddModal" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-min bg-white p-6 overflow-y-scroll max-h-full rounded shadow-lg z-10">
            <div className="text-2xl mb-4">Add your Car</div>
            <form onSubmit={handleSubmit}>
                <div className="pt-5 ">
                    <select id="cartype" name="cartype" className="w-full p-1" required>
                        {cartypesMap}
                    </select>
                    <div className="flex items-center my-3 border-b-4 border-emerald-200">
                        <input type="number" min="0" step="0.01" className="px-1 outline-none" placeholder="price in €" value={price} onChange={(e) => { setPrice(e.target.value) }} required />
                    </div>
                    <div className="flex items-center my-3 border-b-4 border-emerald-200">
                        <input type="text" className="px-1 outline-none" placeholder="Enter the brand" value={brand} onChange={(e) => { setBrand(e.target.value) }} required />
                    </div>
                    <div className="flex items-center my-3 border-b-4 border-emerald-200">
                        <input type="text" className="px-1 outline-none" placeholder="Enter the carmodel" value={carmodel} onChange={(e) => { setModel(e.target.value) }} required />
                    </div>
                    <div className="flex items-center my-3 border-b-4 border-emerald-200">
                        <input type="number" min="0" step="1" className="px-1 outline-none" placeholder="kilometers" value={kilometers} onChange={(e) => { setKilometers(e.target.value) }} required />
                    </div>
                    <div className="flex items-center my-3 border-b-4 border-emerald-200">
                        <input type="number" min="0" step="1" className="px-1 outline-none" placeholder="horsepower" value={horsepower} onChange={(e) => { setHorsepower(e.target.value) }} required />
                    </div>
                    <div className="flex items-center my-3 border-b-4 border-emerald-200">
                        <input type="number" min="0" step="1" className="px-1 outline-none" placeholder="weight in kgs" value={weight} onChange={(e) => { setWeight(e.target.value) }} required />
                    </div>
                    <div className="flex items-center my-3 border-b-4 border-emerald-200">
                        <input type="number" min="0" step="1" className="px-1 outline-none" placeholder="number of doors" value={doors} onChange={(e) => { setDoors(e.target.value) }} required />
                    </div>
                    <div className="flex items-center my-3 border-b-4 border-emerald-200">
                        <input type="url" className="px-1 outline-none" placeholder="URL of an image" value={href} onChange={(e) => { setHref(e.target.value) }} required />
                    </div>
                    <div className="flex items-center my-3 border-b-4 border-emerald-200">
                        <input type="text" className="px-1 outline-none" placeholder="Tags ...,..." value={tags} onChange={(e) => { setTags(e.target.value) }} required />
                    </div>
                    <div className="flex items-center my-3 border-b-4 border-emerald-200">
                        <textarea type="text" className="px-1 outline-none overflow-visible" placeholder="short description" value={description} onChange={(e) => { setDescription(e.target.value) }} required />
                    </div>
                    <div className="flex items-center my-3">
                        <label className="px-2">Is active?</label>
                        <input id="isActive" type="checkbox" className="px-1 outline-none" defaultChecked />
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                        <input className="cursor-pointer p-2 bg-emerald-300 rounded" type="submit" value="Submit" />
                        <input className="cursor-pointer p-2 bg-red-300 rounded" type="button" onClick={e => { props.setOpenAdd(false) }} value="Cancel" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddCar;