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
    const user = useSelector((store) => store.user);
    const history = useHistory();

    const toPantry = () =>{
        history.push('/pantry')
    }

    const toJournalForm = ()=>{
        history.push('/journalform')
    }

    return (
        <>
        <div className="container">
            <h1 className="formTitle"><span>{user.username}'s Journal</span></h1>
            <ul>{journal.map(item=>(
                <JournalItem key={item.id}
                item ={item}
            />))}
                
            </ul>
        </div>
        <button onClick = {toPantry} className='btn'>The Pantry</button>
        <button onClick = {toJournalForm} className='btn'>Make Journal Entry</button>
        </>
    )
}
export default JournalListPage;
