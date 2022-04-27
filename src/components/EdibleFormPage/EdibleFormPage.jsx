import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { TextField, Container, Grid } from '@mui/material';




function EdibleFormPage() {
    const [newPicture, setNewPicture] = useState('');
    const [newEdible, setNewEdible] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newSeason, setNewSeason] = useState('')
    const [newLocation, setNewLocation] = useState('')

    const dispatch = useDispatch();
    const history = useHistory();

    const addEdible = (event) => {
        event.preventDefault();
        dispatch({
            type: 'POST_EDIBLE', payload:
                { image: newPicture, edible: newEdible, description: newDescription, season: newSeason, location: newLocation }
        })
        setNewPicture(''); setNewEdible(''); setNewDescription(''); setNewSeason(''); setNewLocation('');
    }

    const toPantry = () => {
        history.push('/pantry')
    }



    return (
        <>
            <h1 className='formTitle'><span>Add to the Pantry</span></h1>

            <form noValidate autoComplete='off' onSubmit={addEdible} className='form' >
                <TextField
                    label="Picture URL"
                    variant='outlined'
                    type="text"
                    value={newPicture}
                    onChange={(event) => setNewPicture(event.target.value)}
                    className='textfield'
                />

                <TextField
                    label="new edible name"
                    variant='outlined'
                    type="text"
                    value={newEdible}
                    onChange={(event) => setNewEdible(event.target.value)}
                    className='form'
                />

                <TextField
                    label="description"
                    variant='outlined'
                    type="text"
                    value={newDescription}
                    onChange={(event) => setNewDescription(event.target.value)}
                    className='form'
                />
                <TextField
                    label="season"
                    variant='outlined'
                    type="text"
                    value={newSeason}
                    onChange={(event) => setNewSeason(event.target.value)}
                    className='form'
                />
                <TextField
                    variant='outlined'
                    label="location"
                    type="text"
                    value={newLocation}
                    onChange={(event) => setNewLocation(event.target.value)}
                    className='form'
                />
                <button type="submit" className='btn'>Add Item</button>
            </form>




            <button onClick={toPantry} className='btn'>The Pantry</button>

        </>
    )
}
export default EdibleFormPage;