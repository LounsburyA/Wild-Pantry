import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'


function EditUserForm() {

    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();
    const editJournal = useSelector(store => store.editJournal);


    // MAY NOT NEED THIS USEEFFECT
    useEffect(() => {
        dispatch({ type: 'GET_EDIT_JOURNAL', payload: id })
    }, [id])

// MAY NOT NEED THIS USEEFFECT
    const handleChange = (event, property) => {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: property, value: event.target.value }
        })
    }
const handleSubmit = (event) => {
    event.preventDefault();
console.log('submit clicked');
    dispatch({ type: 'UPDATE_ENTRY', payload: editJournal })
    //dispatch({ type: 'CLEAR_EDIT' });
    history.push('/journal')

}


console.log(editJournal,    'this is what we are looking for');
    return (
        <>
            <form action="submit" onSubmit={handleSubmit}>
                <input
                    placeholder="Picture URL"
                    type="text"
                    value={editJournal.image}
                    onChange={(event) => handleChange(event, 'image')}
                />
                <input
                    placeholder="new edible name"
                    type="text"
                    value={editJournal.item_name}
                    onChange={(event) => handleChange(event, 'item_name')}
                />
                <input
                    placeholder="description"
                    type="text"
                    value={editJournal.description}
                    onChange={(event) => handleChange(event, 'description')}
                />
                <input
                    placeholder="season"
                    type="text"
                    value={editJournal.season}
                    onChange={(event) => handleChange(event, 'season')}
                />
                <input
                    placeholder="location"
                    type="text"
                    value={editJournal.location}
                    onChange={(event) => handleChange(event, 'location')}
                />


                <input type="submit"/>
            </form>
        </>
    )
}
export default EditUserForm;