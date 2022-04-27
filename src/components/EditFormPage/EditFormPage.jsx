import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { TextField } from '@mui/material';


function EditUserForm() {

    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();
    const editJournal = useSelector(store => store.editJournal);
    const user = useSelector(store => store.user)


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
    dispatch({ type: 'CLEAR_EDIT' });
    history.push('/journal')

}


console.log(editJournal,    'this is what we are looking for');
    return (
        <>
        <h1>Edit {user.username}'s Journal Entry </h1>
            <form action="submit" onSubmit={handleSubmit}>
                <TextField
                    label="Picture URL"
                    type="text"
                    value={editJournal.image}
                    onChange={(event) => handleChange(event, 'image')}
                />
                <TextField
                    label="new edible name"
                    type="text"
                    value={editJournal.item_name}
                    onChange={(event) => handleChange(event, 'item_name')}
                />
                <TextField
                    label="description"
                    type="text"
                    value={editJournal.description}
                    onChange={(event) => handleChange(event, 'description')}
                />
                <TextField
                    label="season"
                    type="text"
                    value={editJournal.season}
                    onChange={(event) => handleChange(event, 'season')}
                />
                <TextField
                    label="location"
                    type="text"
                    value={editJournal.location}
                    onChange={(event) => handleChange(event, 'location')}
                />


                <button className='btn' type="submit">Update Entry </button>
            </form>
        </>
    )
}
export default EditUserForm;