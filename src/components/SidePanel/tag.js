/**
 * renders the Tags which can be selected
 * @param {*} props 
 * @returns 
 */
const Tag = (props) =>{
    return(
        <div className='flex justify-between px-2'>
            <label>{props.tag}</label>
            <input type="checkbox" className='relative right-6 md:right-0' name="tagsCheckboxes" value={props.tag} onChange={props.handleChangeRadio}></input>
        </div>
        
    )
}

export default Tag;