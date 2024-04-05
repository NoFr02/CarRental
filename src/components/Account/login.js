import { useState } from "react"
import axios from "../../axiosURL";
import { useNavigate } from "react-router-dom";
import useAlert from "../../utils/AlertPopUp/useAlert";
import { variants } from "../Alert/variant";

/**
 * This Component renders the form for the login
 * @param {*} props 
 * @returns 
 */
const Login = (props) => {

    //set constants for Navigation and PopUp use
    const navigate = useNavigate()
    const { setAlert } = useAlert();

    //set some useStates
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    /**
     * Handles the LoginEvent and sends the APIRequest
     * @param {Object} e 
     */
    const onLogin = (e) => {
        e.preventDefault()

        axios.post("/login", { email, password }, { withCredentials: true })
            .then((res) => {
                setAlert(res.data, variants.success);
                navigate('/');
            }).catch(err => {
                setAlert(err.response.data, variants.error)
                console.log(err)
            })
    }

    return (
        <div className="bg-white p-6 mt-5 rounded shadow-lg">
            <div className="text-2xl">Login</div>
            <form onSubmit={onLogin}>
                <div className="pt-5">
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
        </div >
    )
}

export default Login;