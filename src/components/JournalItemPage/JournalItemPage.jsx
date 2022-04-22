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
        //dispatch to send item to 
        dispatch({type: 'SEND_ITEM', payload: item})
        history.push(`/editform/${item.id}`)
    }




    //displays user pantry edible info
    return (
        <div>
            <>
                <img src={item.image} />
                <div>Name: {item.item_name}</div>
                <div>Description: {item.description}</div>
                <div>Season: {item.season}</div>
                <div>Location: {item.location}</div>
                <button onClick={(event) => dispatch({ type: 'DELETE_ENTRY', payload: item.id })}
                >Delete</button>
                <button onClick ={toEdit}>Edit</button>
            </>
        </div>
    )
}
export default JournalItem;