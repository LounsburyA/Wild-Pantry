import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { Card, CardMedia, CardContent } from '@mui/material';

function JournalItem({ item }) {
    useEffect(() => {
        dispatch({ type: 'FETCH_JOURNAL' });
    }, []);
    const dispatch = useDispatch();
    const history = useHistory();

    const toEdit = () => {
        //dispatch to send item to 
        dispatch({ type: 'SEND_ITEM', payload: item })
        history.push(`/editform/${item.id}`)
    }

    let cardStyle={
        display: 'block',
        width: "80vw",
        backgroundColor: '#e6e2d3'
    }


    //displays user pantry edible info
    return (
        
        <>
        
            <div className='card'>
                <Card  style={cardStyle} raise={true}>
                    <CardMedia
                        component="img"
                        image={item.image} />
                    
                    <CardContent><strong>Name: </strong> {item.item_name} </CardContent>
                    <CardContent><strong>Description:</strong>  {item.description} </CardContent>
                    <CardContent><strong>Season:</strong>  {item.season} </CardContent>
                    <CardContent><strong>Location:</strong>  {item.location} </CardContent>
                    <div className='centerBtn'>
                    <button onClick={(event) => dispatch({ type: 'DELETE_ENTRY', payload: item.id })}
                        className='btn'>Delete</button>
                    <button onClick={toEdit} className='btn'>Edit</button>
                    </div>
            </Card>
            </div>
        </>
    )
}
export default JournalItem;