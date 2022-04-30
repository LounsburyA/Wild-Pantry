import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { Card, CardMedia, CardContent } from '@mui/material';






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
    let cardStyle = {
        display: 'block',
        width: "80vw",
        backgroundColor: '#e6e2d3'
    }

    // displays info for edibles in main pantry
    return (

        <>
            <div className='card'>
                <Card style={cardStyle} raised={true}>
                    <CardMedia
                        component="img"
                        image={item.image}

                    />
                    <CardContent><strong>Name:</strong>  {item.edible} </CardContent>
                    <CardContent><strong>Description:</strong>  {item.description} </CardContent>
                    <CardContent><strong>Season:</strong>  {item.season} </CardContent>
                    <CardContent><strong>Location:</strong>  {item.location} </CardContent>
                    <div className='centerBtn'>
                        {user.clearance > 2 ?
                            <button onClick={(event) => dispatch({ type: 'DELETE_EDIBLE', payload: item.id })}
                                className='btn'>Delete</button> : ''}
                        {user.clearance > 2 ?
                            <button onClick={toEditPantry} className='btn'>Edit</button> : ''}
                    </div>
                </Card>
            </div>
        </>
    )
}
export default EdibleItem;




