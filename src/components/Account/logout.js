import { useNavigate } from "react-router-dom";
import axios from '../../axiosURL'
import useAlert from "../../utils/AlertPopUp/useAlert";
import { variants } from "../Alert/variant";

/**
 * Component that renders the Logoutform
 * @param {*} props 
 * @returns 
 */
const Logout = (props) => {

    //set constants for Navigation and PopUp use
    const navigate = useNavigate();
    const { setAlert } = useAlert()

    /**
     * Handles the Logout and APICall
     * @param {*} e 
     */
    const onLogout = (e) => {
        e.preventDefault();

        axios.post('/logout', {}, { withCredentials: true })
            .then((res) => {
                setAlert(res.data, variants.success)
                navigate('/account');
                //reload the page to reset all user related variables
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            })
            .catch(err => {
                setAlert(err.response.data, variants.error)
                console.log(err)
            })
    }

    return (
        <div className="bg-white p-6 mt-5 rounded shadow-lg">
            <div className="text-2xl text-center">Do you really want to Logout?</div>
            <form onSubmit={onLogout}>
                <div className="pt-5">
                    <div className="flex items-center justify-center space-x-4">
                        <input className="cursor-pointer p-2 bg-emerald-300 rounded" type="submit" value="Yes" />
                        <input className="cursor-pointer p-2 bg-red-300 rounded" type="button" onClick={e => { navigate(-1) }} value="No" />
                    </div>
                </div>
            </form>
        </div >
    )
}

export default Logout;