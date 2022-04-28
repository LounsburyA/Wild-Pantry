import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { TextField, Container, Grid } from '@mui/material';

function JournalFormPage() {
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
            type: 'POST_JOURNAL', payload:
                { image: newPicture, edible: newEdible, description: newDescription, season: newSeason, location: newLocation }
        })
        setNewPicture(''); setNewEdible(''); setNewDescription(''); setNewSeason(''); setNewLocation('');
    }
    const dummyData = () => {

        setNewEdible('Pheasants Back'); setNewDescription('Shelf mushroom with brown feathery appearance on its scaly cap');
        setNewSeason('Spring'); setNewLocation('Dakota County');
    }

    const toJournal = () => {
        history.push('/journal')
    }
    const toPantry = () => {
        history.push('/pantry')
    }

    return (
        <>
            <h1 className='formTitle'><span onClick={dummyData} >Journal Entry</span></h1>
           
                <Grid container justifyContent="center">
                <div className='formJournal'>
                    <form noValidate autoComplete='off' onSubmit={addEdible} >


                        <div className='formDiv'>
                            <TextField
                                label="Picture URL"
                                type="text"
                                value={newPicture}
                                onChange={(event) => setNewPicture(event.target.value)}
                            />
                        </div>

                        <div className='formDiv'>
                            <TextField
                                label="new edible name"
                                type="text"
                                value={newEdible}
                                onChange={(event) => setNewEdible(event.target.value)}
                            />
                        </div>

                        <div className='formDiv'>
                            <TextField
                                label="description"
                                type="text"
                                value={newDescription}
                                onChange={(event) => setNewDescription(event.target.value)}
                            />
                        </div>

                        <div className='formDiv'>
                            <TextField
                                label="season"
                                type="text"
                                value={newSeason}
                                onChange={(event) => setNewSeason(event.target.value)}
                            />
                        </div>

                        <div className='formDiv'>
                            <TextField
                                label="location"
                                type="text"
                                value={newLocation}
                                onChange={(event) => setNewLocation(event.target.value)}
                            />
                        </div>
                        <div className="navPantry">
                            <button className='btn' type="submit">Add Item</button>
                        </div>
                    </form>
                    </div>
                </Grid>
          
            <div className="navPantry">
                <button className='btn' onClick={toPantry}>The Pantry</button>
                <button className='btn' onClick={toJournal}>Your Journal</button>
            </div>
        </>
    )
}
export default JournalFormPage;