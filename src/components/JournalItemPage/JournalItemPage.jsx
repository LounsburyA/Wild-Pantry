import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';


function JournalItem({item}) {
    useEffect(() => {
        dispatch({ type: 'FETCH_JOURNAL' });
    }, []);
    const dispatch = useDispatch();


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
export default JournalItem;