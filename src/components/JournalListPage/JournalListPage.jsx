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

    return (
        <>
        <div className="container">
            <h1>Your Pantry</h1>
            <ul>{journal.map(item=>(
                <JournalItem key={item.id}
                item ={item}
            />))}
                
            </ul>
        </div>
        </>
    )
}
export default JournalListPage;
