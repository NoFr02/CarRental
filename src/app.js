import Navbar from './components/Navbar/navbar';
import { Outlet } from 'react-router-dom';
import AlertPopUp from './components/Alert/alertpopup';

/**
 * Renders the main component which renders every other component
 * @returns 
 */
const App = () => {
    return (
        <div className='h-screen w-screen md:flex md:flex-col'>
            <AlertPopUp />
            <Navbar />
            <Outlet />
        </div>
    )
}

export default App;