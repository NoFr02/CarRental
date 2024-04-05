import { useState } from "react";

import Login from '../components/Account/login';
import Register from '../components/Account/register';

/**
 * This page hosts the login and register forms 
 * @param {*} props 
 * @returns 
 */
const Account = (props) => {

    //set flip useState
    const [flip, setFlip] = useState(true)

    //handles the change between login and register
    const onChangeFlip = () => {
        setFlip(!flip)
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            {
                flip ?
                    <Login /> :
                    <Register setFlip={setFlip}/>
            }
            {
                flip ?
                    <div className="p-2">Don't have an account? <label className="cursor-pointer hover:text-blue-300" onClick={onChangeFlip}>Sigup now</label></div> :
                    <div className="p-2">Already have an account? <label className="cursor-pointer hover:text-blue-300" onClick={onChangeFlip}>Login now</label></div>
            }

        </div>
    )
}

export default Account;