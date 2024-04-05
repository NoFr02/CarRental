//Quelle: vgl. https://dev.to/jeffreythecoder/set-up-react-global-alert-popup-in-10mins-36l3

import { useContext } from 'react';
import AlertContext from './alertcontext';

//offers a hook which can open a PopUp
const useAlert = () => useContext(AlertContext);

export default useAlert;