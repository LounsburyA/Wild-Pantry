import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { Grid, TextField } from '@mui/material';

function PantryEditPage() {

    const dispatch = useDispatch();
    const { id } = useParams();
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
            <h1 className='formTitle'><span>Edit Pantry Entry</span></h1>
            <Grid container justifyContent="center">
                <form action="submit" onSubmit={theSubmit} >
                    <div className='formDiv'>
                        <TextField
                            label="Picture URL"
                            type="text"
                            value={editPantry.image}
                            onChange={(event) => theChange(event, 'image')}
                        />
                    </div>
                    <div className='formDiv'>
                        <TextField
                            label="new edible name"
                            type="text"
                            value={editPantry.edible}
                            onChange={(event) => theChange(event, 'edible')}
                        />
                    </div>

                    <div className='formDiv'>
                        <TextField
                            label="description"
                            type="text"
                            value={editPantry.description}
                            onChange={(event) => theChange(event, 'description')}
                        />
                    </div>

                    <div className='formDiv'>
                        <TextField
                            label="season"
                            type="text"
                            value={editPantry.season}
                            onChange={(event) => theChange(event, 'season')}
                        />
                    </div>

                    <div className='formDiv'>
                        <TextField
                            label="location"
                            type="text"
                            value={editPantry.location}
                            onChange={(event) => theChange(event, 'location')}
                        />
                    </div>

                    <button className='btn' type="submit">Update Entry</button>
                </form>
            </Grid>
        </>
    )
}
export default PantryEditPage;