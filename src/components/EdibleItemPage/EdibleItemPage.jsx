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
        //pre mui addition code


        // <div className='container'>

        //     <>
        //         <img src={item.image} height="200px" />
        //         <div>Name: {item.edible}</div>
        //         <div>Description: {item.description}</div>
        //         <div>Season: {item.season}</div>
        //         <div>Location: {item.location}</div>
        //             {user.clearance > 2 ?
        //         <button onClick={(event) => dispatch({ type: 'DELETE_EDIBLE', payload: item.id })}
        //         className='btn'>Delete</button>: ''}
        //         {user.clearance > 2 ?
        //         <button onClick={toEditPantry} className='btn'>Edit</button>:''}
        //     </>
        // </div>
        <>
            <div className='card'>
                <Card style={cardStyle} raised={true}>
                    <CardMedia
                        component="img"
                        image={item.image}

                    />
                    <CardContent>Name:  {item.edible} </CardContent>
                    <CardContent>Description:  {item.description} </CardContent>
                    <CardContent>Season:  {item.season} </CardContent>
                    <CardContent>Location:  {item.location} </CardContent>
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




