import Tag from './tag';

/**
 * Renders the list of all Tags
 * @param {*} props 
 * @returns 
 */
const TagBox = (props) => {

    /**
     * handles the change of a checkbox
     * @param {*} e 
     */
    const handleChangeRadio = (e) => {
        const tags = document.getElementsByName("tagsCheckboxes")
        let values = "";
        tags.forEach(tag => {
            if (tag.checked) {
                values += tag.value + ",";
            }
        })
        props.setTags(values)
    }

    //creates a list of <Tags/>
    const tagMap = props.tags.map((tag) => {
        return <Tag key={tag} tag={tag} handleChangeRadio={handleChangeRadio} />
    })

    return (
        <div className='flex flex-col my-4 p-2'>
            <div className='font-semibold'>
                Tags
            </div>
            {tagMap}
        </div>

    )
}

export default TagBox;