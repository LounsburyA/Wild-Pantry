import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import EdibleItem from "../EdibleItemPage/EdibleItemPage";
import { Container, Grid } from "@mui/material";

function EdibleListPage() {
    useEffect(() => {
        dispatch({ type: 'FETCH_EDIBLE' });
    }, []);
    const dispatch = useDispatch();
    const edible = useSelector(store => store.edible)
    const user = useSelector(store => store.user);
    const history = useHistory();

    // navigation buttons at bottom of page for routing to applicable pages
    const toPantryForm = () => {
        history.push('/edibleform')
    }

    const toJournalForm = () => {
        history.push('/journalform')
    }
    const toJournal = () => {
        history.push('/journal')
    }


// lists out the information on the Pantry page
    return (
     
        <>
            <h1 className="formTitle"><span>The Pantry </span></h1>
            <h2></h2>

            <div>
                <Container >
                    <Grid container spacing={2} direction="column" alignItems="center" justify="center">

                        {edible.map(item => (
                            <Grid key={item.id} item xs={10} sm={10} md={10} lg={10}>
                                < EdibleItem item={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
            <div className="navPantry">
                {user.clearance > 2 ?
                    <button onClick={toPantryForm} className='btn'>Add to Pantry</button> : ''}

                <button onClick={toJournalForm} className='btn'> Journal Entry</button>

                <button onClick={toJournal} className='btn'>Your Journal</button>
            </div>
        </>
    )
}
export default EdibleListPage;

//item xs={6} sm={4} md={3} lg={3}
