import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { TextField } from '@mui/material';

function PantryEditPage() {

    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();
    const editPantry = useSelector(store => store.editPantry);


    // MAY NOT NEED THIS USE EFFECT
    useEffect(() => {
        dispatch({ type: 'GET_EDIT_PANTRY', payload: id })
    }, [id])

// MAY NOT NEED THIS USEEFFECT
    const theChange = (event, property) => {
        dispatch({
            type: 'EDIT_PANTRY',
            payload: { property: property, value: event.target.value }
        })
    }
const theSubmit = (event) => {
    event.preventDefault();
console.log('submit clicked');
    dispatch({ type: 'UPDATE_PANTRY', payload: editPantry })
    //dispatch({ type: 'CLEAR_PANTRY' });
    history.push('/pantry')

}



    return (
        <>
        <h1>Edit Pantry Entry</h1>
            <form action="submit" onSubmit={theSubmit} >
                <TextField
                    label="Picture URL"
                    type="text"
                    value={editPantry.image}
                    onChange={(event) => theChange(event, 'image')}
                />
                <TextField
                    label="new edible name"
                    type="text"
                    value={editPantry.edible}
                    onChange={(event) => theChange(event, 'edible')}
                />
                <TextField
                    label="description"
                    type="text"
                    value={editPantry.description}
                    onChange={(event) => theChange(event, 'description')}
                />
                <TextField
                    label="season"
                    type="text"
                    value={editPantry.season}
                    onChange={(event) => theChange(event, 'season')}
                />
                <TextField
                    label="location"
                    type="text"
                    value={editPantry.location}
                    onChange={(event) => theChange(event, 'location')}
                />


                <button className='btn' type="submit">Update Entry</button>
            </form>
        </>
    )
}
export default PantryEditPage;