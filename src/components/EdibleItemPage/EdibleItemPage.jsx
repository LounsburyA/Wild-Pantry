import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';




function EdibleItem({ item }) {
    useEffect(() => {
        dispatch({ type: 'FETCH_EDIBLE' });
    }, []);
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(store => store.user);

    const toEditPantry = () => {
        dispatch({ type: 'SEND_EDIBLE', payload: item })
        history.push(`/editpantry/${item.id}`)
    }

    // displays info for edibles in main pantry
    return (
        <div>

            <>
                <img src={item.image} height="200px" />
                <div>Name:{item.edible}</div>
                <div>Description:{item.description}</div>
                <div>Season:{item.season}</div>
                <div>Location:{item.location}</div>
                    {user.clearance > 2 ?
                <button onClick={(event) => dispatch({ type: 'DELETE_EDIBLE', payload: item.id })}
                >Delete</button>: ''}
                {user.clearance > 2 ?
                <button onClick={toEditPantry}>Edit</button>:''}
            </>
        </div>
    )
}
export default EdibleItem;


// {user.id === edible.user_id ?

