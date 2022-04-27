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

    const toJournal = () => {
        history.push('/journal')
    }
    const toPantry = () => {
        history.push('/pantry')
    }

    return (
        <>
            <h1 className='formtitle'>Make a Journal Entry</h1>
            <form noValidate autoComplete='off' onSubmit={addEdible}>
                <TextField
                    label="Picture URL"
                    type="text"
                    value={newPicture}
                    onChange={(event) => setNewPicture(event.target.value)}
                />
                <TextField
                    label="new edible name"
                    type="text"
                    value={newEdible}
                    onChange={(event) => setNewEdible(event.target.value)}
                />
                <TextField
                    label="description"
                    type="text"
                    value={newDescription}
                    onChange={(event) => setNewDescription(event.target.value)}
                />
                <TextField
                    label="season"
                    type="text"
                    value={newSeason}
                    onChange={(event) => setNewSeason(event.target.value)}
                />
                <TextField
                    label="location"
                    type="text"
                    value={newLocation}
                    onChange={(event) => setNewLocation(event.target.value)}
                />


                <button className='btn' type="submit">Add Item</button>
            </form>
            <button className='btn' onClick={toPantry}>The Pantry</button>
            <button className='btn' onClick={toJournal}>Your Pantry</button>
        </>
    )
}
export default JournalFormPage;