import React from "react";
import { makeStyles } from "@mui/styles"
import { BottomNavigation } from "@mui/material";
import { BottomNavigationAction } from "@mui/material";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
        backgroundColor: '#dbceb0 !important',
        position: 'fixed',
        bottom: 0
    }
})

// bottom navigation bar at bottom to route to frequently used pages
function BottomNav() {
    const classes = useStyles()
    const [value, setValue] = React.useState(0)

    return (
        <div>
            <BottomNavigation
                showLabels ={false}
                className={classes.root}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
            >



                <BottomNavigationAction
                    component={Link}
                    to='/pantry'
                    //label='Pantry'
                    icon={'Pantry'}
                />



                <BottomNavigationAction
                    component={Link}
                    to='/journalform'
                    //label='Journal Entry'
                    icon={'Journal Entry'}
                />




                <BottomNavigationAction
                    component={Link}
                    to='/journal'
                   // label='Journal'
                    icon={'Journal'}
                />



            </BottomNavigation>
        </div>
    )
}
export default BottomNav;