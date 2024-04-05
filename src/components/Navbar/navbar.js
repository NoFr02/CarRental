//Quelle: vgl. https://coderomayer.medium.com/building-a-responsive-navbar-with-dropdowns-in-react-using-tailwind-css-8891c2354279

import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logoCar from "../../assets/car-svgrepo-com.svg"

/**
 * Renders the navigationbar on top of the screen
 * @param {*} props 
 * @returns 
 */
const Navbar = (props) => {

    //load navigate to navigate to other routes
    const navigate = useNavigate()
    
    //set some useStates
    const [openNav, setOpenNav] = useState(false);
    const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);

    /**
     * handles the navpopup in mobile view
     */
    const toggleNav = () => {
        setOpenNav(!openNav);
        setOpenAvatarDropdown(false);
    };

    /**
     * handle the profile dropdown
     */
    const toggleAvatarDropdown = () => {
        setOpenAvatarDropdown(!openAvatarDropdown);
    };

    /**
     * renders the navElements
     * @returns 
     */
    const navList = () => {
        return (
            <>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    Offers
                </NavLink>
                <NavLink
                    to="/my_cars"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    My Cars
                </NavLink>
                <NavLink
                    to="/history"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    My History
                </NavLink>

            </>
        );
    };
    return (
        <header className="bg-slate-200 border-b-2 border-gray-200 font-DM">
            <div className="container mx-auto py-4 px-4 md:flex md:items-center md:justify-between">
                <div className="flex items-center justify-between">
                    <a href="#" className="text-2xl font-semibold text-gray-800">
                        <img className='w-15' src={logoCar} alt="" onClick={e => navigate('/')} />
                    </a>
                    <button
                        onClick={toggleNav}
                        className="block md:hidden border border-gray-600 p-2 rounded text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-300"
                    >
                        <svg
                            className={`w-6 h-6 ${openNav ? 'hidden' : 'block'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                        <svg
                            className={`w-6 h-6 ${openNav ? 'block' : 'hidden'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
                <nav className="hidden md:flex space-x-4">
                    {navList()}
                </nav>
                <div
                    className={`${openNav ? '' : 'hidden'
                        } mt-4  bg-slate-400 flex flex-col gap-4 p-6  rounded md:hidden`}
                >
                    {navList()}
                </div>
                <div onClick={toggleAvatarDropdown} className="relative py-1 transition-all duration-500 md:py-0">
                    <span className="cursor-pointer">Profile</span>
                    <div className={`absolute ${openAvatarDropdown ? 'block' : 'hidden'} bg-slate-300 rounded shadow-md mt-2 space-y-2`}>
                        <div className='p-4 flex flex-col '>
                            <NavLink to="/account">Login</NavLink>
                            <NavLink to="/logout">Logout</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;