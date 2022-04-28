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
        // <div>
        //     <>
        //         <img src={item.image} />
        //         <div>Name: {item.item_name}</div>
        //         <div>Description: {item.description}</div>
        //         <div>Season: {item.season}</div>
        //         <div>Location: {item.location}</div>
        //         <button onClick={(event) => dispatch({ type: 'DELETE_ENTRY', payload: item.id })}
        //         className='btn'>Delete</button>
        //         <button onClick ={toEdit} className='btn'>Edit</button>
        //     </>
        // </div>
        <>
            <div className='card'>
                <Card  style={cardStyle} raise={true}>
                    <CardMedia
                        component="img"
                        image={item.image} />
                    
                    <CardContent>Name:  {item.item_name} </CardContent>
                    <CardContent>Description:  {item.description} </CardContent>
                    <CardContent>Season:  {item.season} </CardContent>
                    <CardContent>Location:  {item.location} </CardContent>
                    <button onClick={(event) => dispatch({ type: 'DELETE_ENTRY', payload: item.id })}
                        className='btn'>Delete</button>
                    <button onClick={toEdit} className='btn'>Edit</button>
            </Card>
            </div>
        </>
    )
}
export default JournalItem;