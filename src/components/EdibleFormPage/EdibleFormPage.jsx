import { useState } from 'react';
import { useDispatch } from 'react-redux';


function EdibleFormPage() {
    const [newPicture, setNewPicture] = useState('');
    const [newEdible, setNewEdible] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newSeason, setNewSeason] = useState('')
    const [newLocation, setNewLocation] = useState('')

    const dispatch = useDispatch();

    const addEdible = (event) => {
        event.preventDefault();
        dispatch({
            type: 'POST_EDIBLE', payload:
                { image: newPicture, edible: newEdible, description: newDescription, season: newSeason, location: newLocation }
        })
        setNewPicture(''); setNewEdible(''); setNewDescription(''); setNewSeason(''); setNewLocation('');
    }
    return (
        <>
            <form onSubmit={addEdible}>
                <input
                    placeholder="Picture URL"
                    type="text"
                    value={newPicture}
                    onChange={(event) => setNewPicture(event.target.value)}
                />
                <input
                    placeholder="new edible name"
                    type="text"
                    value={newEdible}
                    onChange={(event) => setNewEdible(event.target.value)}
                />
                <input
                    placeholder="description"
                    type="text"
                    value={newDescription}
                    onChange={(event) => setNewDescription(event.target.value)}
                />
                <input
                    placeholder="season"
                    type="text"
                    value={newSeason}
                    onChange={(event) => setNewSeason(event.target.value)}
                />
                <input
                    placeholder="location"
                    type="text"
                    value={newLocation}
                    onChange={(event) => setNewLocation(event.target.value)}
                />


                <button type="submit">Add Item</button>
            </form>
        </>
    )
}
export default EdibleFormPage;