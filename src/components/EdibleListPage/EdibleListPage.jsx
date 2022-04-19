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

    return (
        <>
        <div className="container">
            <h1>Wild Pantry</h1>
            <ul>{edible.map(item=>(
                <EdibleItem key={item.id}
                item ={item}
            />))}
                
            </ul>
        </div>
        </>
    )
}
export default EdibleListPage;
