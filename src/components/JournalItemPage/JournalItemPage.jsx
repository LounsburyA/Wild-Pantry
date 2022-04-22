import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';


function JournalItem({ item }) {
    useEffect(() => {
        dispatch({ type: 'FETCH_JOURNAL' });
    }, []);
    const dispatch = useDispatch();
    const history = useHistory();

    const toEdit = () => {
        history.push(`/editform`)
    }




    //displays user pantry edible info
    return (
        <div>
            <>
                <img src={item.image} />
                <div>{item.item_name}</div>
                <div>{item.description}</div>
                <div>{item.season}</div>
                <div>{item.location}</div>
                <button onClick={(event) => dispatch({ type: 'DELETE_ENTRY', payload: item.id })}
                >Delete</button>
                <button onClick ={toEdit}>Edit</button>
            </>
        </div>
    )
}
export default JournalItem;