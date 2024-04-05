//Quelle: vgl. https://dev.to/jeffreythecoder/set-up-react-global-alert-popup-in-10mins-36l3

import { createContext, useState } from 'react';

//define some constants
const ALERT_TIME = 4000;
const initialState = {
  text: '',
  type: '',
};

//a context for alertState
const AlertContext = createContext({
  ...initialState,
  setAlert: () => {},
});

/**
 * renders a Provider which is in track over the AlertContext-state
 * @param {*} param0 
 * @returns 
 */
export const AlertProvider = ({ children }) => {
  const [text, setText] = useState('');
  const [type, setType] = useState('');

  const setAlert = (text, type) => {
    setText(text);
    setType(type);

    setTimeout(() => {
      setText('');
      setType('');
    }, ALERT_TIME);
  };

  return (
    <AlertContext.Provider
      value={{
        text,
        type,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;