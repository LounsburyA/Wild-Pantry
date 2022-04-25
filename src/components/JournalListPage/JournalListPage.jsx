import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import JournalItem from "../JournalItemPage/JournalItemPage";

function JournalListPage() {
    useEffect(() => {
        dispatch({ type: 'FETCH_JOURNAL' });
    }, []);
    const dispatch = useDispatch();
    const journal = useSelector(store => store.journal)
    const history = useHistory();

    const toPantry = () =>{
        history.push('/edible')
    }

    const toJournalForm = ()=>{
        history.push('/journalform')
    }

    return (
        <>
        <div className="container">
            <h1>Your Journal</h1>
            <ul>{journal.map(item=>(
                <JournalItem key={item.id}
                item ={item}
            />))}
                
            </ul>
        </div>
        <button onClick = {toPantry}>The Pantry</button>
        <button onClick = {toJournalForm}>Add to Your Pantry</button>
        </>
    )
}
export default JournalListPage;
