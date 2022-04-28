import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import EdibleItem from "../EdibleItemPage/EdibleItemPage";

function EdibleListPage() {
    useEffect(() => {
        dispatch({ type: 'FETCH_EDIBLE' });
    }, []);
    const dispatch = useDispatch();
    const edible = useSelector(store => store.edible)
    const user = useSelector(store => store.user);
    const history = useHistory();

    const toPantryForm = () => {
        history.push('/edibleform')
    }

    const toJournalForm = () => {
        history.push('/journalform')
    }
    const toJournal = () => {
        history.push('/journal')
    }



    return (
        <>
            <div className="container">
                <h1 className="formTitle"><span>Wild Pantry</span></h1>
                <div>{edible.map(item => (
                    <EdibleItem key={item.id}
                        item={item}
                    />))}
                </div>
            </div>
            <div className="navPantry">
                {user.clearance > 2 ?
                    <button onClick={toPantryForm} className='btn'>Add to Pantry</button> : ''}

                <button onClick={toJournalForm} className='btn'> Make Journal Entry</button>

                <button onClick={toJournal} className='btn'>{user.username}'s' Journal</button>
            </div>
        </>
    )
}
export default EdibleListPage;
