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
            <Grid container justifyContent="center">
            <div className='formJournal'>
                <form noValidate autoComplete='off' onSubmit={addEdible} className='form' >

                    <div className='formDiv'>
                        <TextField
                            label="Picture URL"
                            variant='outlined'
                            type="text"
                            value={newPicture}
                            onChange={(event) => setNewPicture(event.target.value)}

                        />
                    </div>

                    <div className='formDiv'>
                        <TextField
                            label="new edible name"
                            variant='outlined'
                            type="text"
                            value={newEdible}
                            onChange={(event) => setNewEdible(event.target.value)}

                        />

                    </div>

                    <div className='formDiv'>
                        <TextField
                            label="description"
                            variant='outlined'
                            type="text"
                            value={newDescription}
                            onChange={(event) => setNewDescription(event.target.value)}

                        />
                    </div>

                    <div className='formDiv'>
                        <TextField
                            label="season"
                            variant='outlined'
                            type="text"
                            value={newSeason}
                            onChange={(event) => setNewSeason(event.target.value)}

                        />
                    </div>

                    <div className='formDiv'>
                        <TextField
                            variant='outlined'
                            label="location"
                            type="text"
                            value={newLocation}
                            onChange={(event) => setNewLocation(event.target.value)}

                        />
                    </div>
                    <div className="navPantry">
                    <button type="submit" className='btn'>Add Item</button>
                    </div>

                </form>
                </div>
            </Grid>


            <div className="navPantry">
                <button onClick={toPantry} className='btn'>The Pantry</button>
            </div>
        </>
    )
}
export default EdibleFormPage;