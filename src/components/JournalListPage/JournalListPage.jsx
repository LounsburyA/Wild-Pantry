import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import JournalItem from "../JournalItemPage/JournalItemPage";
import { Container, Grid } from "@mui/material";
function JournalListPage() {
    useEffect(() => {
        dispatch({ type: 'FETCH_JOURNAL' });
    }, []);
    const dispatch = useDispatch();
    const journal = useSelector(store => store.journal)
    const user = useSelector((store) => store.user);
    const history = useHistory();

    const toPantry = () => {
        history.push('/pantry')
    }

    const toJournalForm = () => {
        history.push('/journalform')
    }

    return (
        // <>
        // <div className="container">
        //     <h1 className="formTitle"><span>{user.username}'s Journal</span></h1>
        //     <ul>{journal.map(item=>(
        //         <JournalItem key={item.id}
        //         item ={item}
        //     />))}

        //     </ul>
        // </div>
        // <button onClick = {toPantry} className='btn'>The Pantry</button>
        // <button onClick = {toJournalForm} className='btn'>Make Journal Entry</button>
        // </>

        <>
            <div>
                <Container >
                    <Grid container spacing={2} direction="column" alignItems="center" justify="center">

                        {journal.map(item => (
                            <Grid key={item.id} item xs={10} sm={10} md={10} lg={10}>
                                < JournalItem item={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
            <div className="navPantry">
                <button onClick={toPantry} className='btn'>The Pantry</button>
                <button onClick={toJournalForm} className='btn'>Make Journal Entry</button>
            </div>
        </>
    )
}
export default JournalListPage;
