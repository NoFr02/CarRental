import axios from "../../axiosURL";
import { useState } from "react";
import useAlert from "../../utils/AlertPopUp/useAlert";
import { variants } from "../Alert/variant";

/**
 * Component that renders the form for register a new user
 * @param {*} props 
 * @returns 
 */
const Register = (props) => {
    
    //set constants for using and PopUp 
    const {setAlert} = useAlert()

    //setting useStates
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [postcode, setPostcode] = useState("")
    const [country, setCountry] = useState("")

    /**
     * Handles the signupevent and sends the APICall
     * @param {*} e 
     */
    const onSignup = (e) => {
        e.preventDefault()

        axios.post("/signup", { firstname, lastname, street, postcode, city, country, phone, email, password }, { withCredentials: true })
            .then((res) => {
                setAlert(res.data, variants.success)
                props.setFlip(true)
            }).catch(err => {
                setAlert(res.response.data, variants.error)
                console.log(err)
            })
    }


    return (
        <div className="bg-white p-6 mt-5 rounded shadow-lg">
            <div className="text-2xl">Signup</div>
            <form onSubmit={onSignup}>
                <div className="pt-5">
                    <div className="flex items-center my-3 py-1 border-b-4 border-emerald-200">
                        <input type="text" className="px-1 outline-none" placeholder="Enter your first name" value={firstname} onChange={(e) => { setFirstName(e.target.value) }} required />
                    </div>
                    <div className="flex items-center my-3 py-1 border-b-4 border-emerald-200">
                        <input type="text" className="px-1 outline-none" placeholder="Enter your last name" value={lastname} onChange={(e) => { setLastName(e.target.value) }} required />
                    </div>
                    <div className="flex items-center my-3 py-1 border-b-4 border-emerald-200">
                        <input type="text" className="px-1 outline-none" placeholder="Enter your street" value={street} onChange={(e) => { setStreet(e.target.value) }} required />
                    </div>
                    <div className="flex items-center my-3 py-1 border-b-4 border-emerald-200">
                        <input type="text" className="px-1 outline-none" placeholder="Enter your postcode" value={postcode} onChange={(e) => { setPostcode(e.target.value) }} required />
                    </div>
                    <div className="flex items-center my-3 py-1 border-b-4 border-emerald-200">
                        <input type="text" className="px-1 outline-none" placeholder="Enter your city" value={city} onChange={(e) => { setCity(e.target.value) }} required />
                    </div>
                    <div className="flex items-center my-3 py-1 border-b-4 border-emerald-200">
                        <input type="text" className="px-1 outline-none" placeholder="Enter your country" value={country} onChange={(e) => { setCountry(e.target.value) }} required />
                    </div>
                    <div className="flex items-center my-3 py-1 border-b-4 border-emerald-200">
                        <input type="tel" className="px-1 outline-none" placeholder="Enter your phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} required />
                    </div>
                    <div className="flex items-center my-3 py-1 border-b-4 border-emerald-200">
                        <input type="text" className="px-1 outline-none" placeholder="Enter your email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                    </div>
                    <div className="flex items-center my-3 py-1 border-b-4 border-emerald-200">
                        <input type="password" className="px-1 outline-none" placeholder="Enter your password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                    </div>
                    <div className="p-2 max-w-min bg-emerald-300 rounded">
                        <input className="cursor-pointer" type="submit" value="Submit" />
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Register;