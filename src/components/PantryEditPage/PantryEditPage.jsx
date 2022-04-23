import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'


function PantryEditPage() {

    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();
    const editPantry = useSelector(store => store.editPantry);


    // MAY NOT NEED THIS USEEFFECT
    useEffect(() => {
        dispatch({ type: 'GET_EDIT_PANTRY', payload: id })
    }, [id])

// MAY NOT NEED THIS USEEFFECT
    const handleChange = (event, property) => {
        dispatch({
            type: 'EDIT_PANTRYCHANGE',
            payload: { property: property, value: event.target.value }
        })
    }
const handleSubmit = (event) => {
    event.preventDefault();
console.log('submit clicked');
    dispatch({ type: 'UPDATE_PANTRY', payload: editPantry })
    dispatch({ type: 'CLEAR_PANTRYEDIT' });
   // history.push('/journal')

}



    return (
        <>
            <form action="submit" onSubmit={handleSubmit}>
                <input
                    placeholder="Picture URL"
                    type="text"
                    value={editPantry.image}
                    onChange={(event) => handleChange(event, 'image')}
                />
                <input
                    placeholder="new edible name"
                    type="text"
                    value={editPantry.edible}
                    onChange={(event) => handleChange(event, 'edible')}
                />
                <input
                    placeholder="description"
                    type="text"
                    value={editPantry.description}
                    onChange={(event) => handleChange(event, 'description')}
                />
                <input
                    placeholder="season"
                    type="text"
                    value={editPantry.season}
                    onChange={(event) => handleChange(event, 'season')}
                />
                <input
                    placeholder="location"
                    type="text"
                    value={editPantry.location}
                    onChange={(event) => handleChange(event, 'location')}
                />


                <input type="submit"/>
            </form>
        </>
    )
}
export default PantryEditPage;