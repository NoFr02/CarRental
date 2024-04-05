/**
 * Renders the datepicker for renting a car
 * @param {*} props 
 * @returns 
 */
const RentModal = (props) => {

    /**
     * handles the submit of a date and opens confirmationcomponent
     * @param {*} e 
     */
    const handleSubmit = (e) => {
        e.preventDefault()

        props.setShowConfirmation(true)
        props.setOpenRent(false)
        props.setOpenDetails(false)

    }
    return (
        <>
            <div id="AddModal" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-min bg-white p-6 overflow-y-scroll max-h-full rounded shadow-lg z-10">
                <div className="text-2xl mb-4">Select Date</div>
                <form onSubmit={handleSubmit}>
                    <div className="pt-5 ">
                        <div className="flex items-center my-3 py-1 border-b-4 border-emerald-200">
                            <input type="date" className="px-1 outline-none" placeholder="Rentdate" value={props.date} onChange={(e) => { props.setDate(e.target.value) }} required />
                        </div>
                        <div className="flex items-center justify-center space-x-4">
                            <input className="cursor-pointer p-2 bg-emerald-300 rounded" type="submit" value="Set Date" />
                            <input className="cursor-pointer p-2 bg-red-300 rounded" type="button" onClick={e => { props.setOpenRent(false) }} value="Cancel" />
                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}

export default RentModal;