//Quelle: vgl. https://dev.to/jeffreythecoder/set-up-react-global-alert-popup-in-10mins-36l3

import useAlert from "../../utils/AlertPopUp/useAlert";

/**
 * Renders the AlertPop up
 * @returns 
 */
const AlertPopup = () => {
  
  //get the params from eventHook 
  const { text, type } = useAlert();

  //decide if get rendered or not
  if (text && type) {

    return (
      <div
        className="absolute inset-x-0 top-0 z-10 m-3 rounded md:px-4"
        style={{
          background: type.mainColor,
          border: "0.1rem solid " + type.secondaryColor,
        }}
      >
        <div
          className="flex justify-center items-center w-20"
          style={{ background: type.secondaryColor }}
        >
          <span className="material-symbols-outlined symbol">{type.symbol}</span>{" "}
        </div>
        <div className="w-full m-3">
          <span className="text-base">{type.title}:</span>
          <span className=""> {text}</span>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default AlertPopup;