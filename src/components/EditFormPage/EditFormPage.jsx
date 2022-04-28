import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { TextField, Grid} from '@mui/material';
import { lightBlue } from '@mui/material/colors';


function EditUserForm() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();
    const editJournal = useSelector(store => store.editJournal);
    const user = useSelector(store => store.user)


    
    useEffect(() => {
        dispatch({ type: 'GET_EDIT_JOURNAL', payload: id })
    }, [id])

    const handleChange = (event, property) => {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: property, value: event.target.value }
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit clicked');
        dispatch({ type: 'UPDATE_ENTRY', payload: editJournal })
        dispatch({ type: 'CLEAR_EDIT' });
        history.push('/journal')

    }


    console.log(editJournal, 'this is what we are looking for');
    return (
        <>
            <h1 className="formTitle"> <span>Edit {user.username}'s Journal Entry </span></h1>
            <Grid container justifyContent= "center">
            <div className='formJournal'>
            <form  noValidate autoComplete= "off"onSubmit={handleSubmit} className ='Form'>


                <div className='formDiv'>
                    <TextField
                        label="Picture URL"
                        type="text"
                        value={editJournal.image}
                        onChange={(event) => handleChange(event, 'image')}
                       // style={{backgroundColor: "lightBlue", color: "orange"}}
                    />
                </div>

                <div className='formDiv'>
                    <TextField
                        label="new edible name"
                        type="text"
                        value={editJournal.item_name}
                        onChange={(event) => handleChange(event, 'item_name')}
                    />
                </div>

                <div className='formDiv'>
                    <TextField
                        label="description"
                        type="text"
                        value={editJournal.description}
                        onChange={(event) => handleChange(event, 'description')}
                    />
                </div>

                <div className='formDiv'>
                    <TextField
                        label="season"
                        type="text"
                        value={editJournal.season}
                        onChange={(event) => handleChange(event, 'season')}
                    />
                </div>

                <div className='formDiv'>
                    <TextField
                        label="location"
                        type="text"
                        value={editJournal.location}
                        onChange={(event) => handleChange(event, 'location')}
                    />
                </div>
                <div className="navPantry">
                <button className='btn' type="submit">Update Entry </button>
                </div>
            </form>
            </div>
            </Grid>
        </>
    )
}
export default EditUserForm;