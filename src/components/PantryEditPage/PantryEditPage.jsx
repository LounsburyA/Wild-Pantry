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
    history.push('/edible')

}



    return (
        <>
            <form action="submit" onSubmit={theSubmit}>
                <input
                    placeholder="Picture URL"
                    type="text"
                    value={editPantry.image}
                    onChange={(event) => theChange(event, 'image')}
                />
                <input
                    placeholder="new edible name"
                    type="text"
                    value={editPantry.edible}
                    onChange={(event) => theChange(event, 'edible')}
                />
                <input
                    placeholder="description"
                    type="text"
                    value={editPantry.description}
                    onChange={(event) => theChange(event, 'description')}
                />
                <input
                    placeholder="season"
                    type="text"
                    value={editPantry.season}
                    onChange={(event) => theChange(event, 'season')}
                />
                <input
                    placeholder="location"
                    type="text"
                    value={editPantry.location}
                    onChange={(event) => theChange(event, 'location')}
                />


                <input type="submit"/>
            </form>
        </>
    )
}
export default PantryEditPage;