
/**
 * Renders a view of the rents for a car
 * @param {*} props 
 * @returns 
 */
const Rented = (props) => {

    //makes a list of rententries
    const mapRented = props.rented.map((rent) => {
        let date = new Date(rent.date).toDateString();
        return (
            <div key={rent._id} className="flex justify-between space-x-2  md:grid md:grid-cols-3 p-2 px-10">
                <div>
                    {rent.name}
                </div>
                <div>
                    {new Date(date).toLocaleDateString("us-EN")}
                </div>
                <div className="flex-shrink-0">
                    {rent.price} €
                </div>
            </div>
        )
    })
    return (
        <div className="flex flex-col">
            {mapRented}
        </div>
    )
}

export default Rented;