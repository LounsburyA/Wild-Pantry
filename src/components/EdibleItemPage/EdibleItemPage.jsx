import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';


function EdibleItem() {
    useEffect(() => {
        dispatch({ type: 'FETCH_EDIBLE' });
    }, []);
    const dispatch = useDispatch();
    const edible = useSelector(store => store.edible)
    console.log('edible', edible);

    return (
        <div>

            <ul>
                <img src= "images/morel1.jpeg"/>
                <li>{edible[0].edible}</li>
                <li>{edible[0].description}</li>
                <li>{edible[0].season}</li>
                <li>{edible[0].location}</li>

            </ul>
        </div>
    )
}
export default EdibleItem;