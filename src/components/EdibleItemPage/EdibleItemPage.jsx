import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';


function EdibleItem({item}) {
    useEffect(() => {
        dispatch({ type: 'FETCH_EDIBLE' });
    }, []);
    const dispatch = useDispatch();
    const edible = useSelector(store => store.edible)
    console.log('edible', edible);

    return (
        <div>

            <ul>
                <img src={item.image}/>
                <li>{item.edible}</li>
                <li>{item.description}</li>
                <li>{item.season}</li>
                <li>{item.location}</li>

            </ul>
            <button>Edit</button>
            <button>Delete</button>

        </div>
    )
}
export default EdibleItem;