import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';



function EdibleItem({ item }) {
    useEffect(() => {
        dispatch({ type: 'FETCH_EDIBLE' });
    }, []);
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);
    
// displays info for edibles in main pantry
    return (
        <div>

            <>
                <img src={item.image} height ="200px"/>
                <div>Name:{item.edible}</div>
                <div>Description:{item.description}</div>
                <div>Season:{item.season}</div>
                <div>Location:{item.location}</div>
                <button>Edit</button>
                <button onClick={(event) => dispatch({ type: 'DELETE_EDIBLE', payload: item.id })}
                >Delete</button>
            </>
        </div>
    )
}
export default EdibleItem;


// {user.id === edible.user_id ?

