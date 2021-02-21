import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
    createStyles({
        navbar: {
            color: 'inherit',
            backgroundColor: 'white',
            flexGrow: 1,
            height: '70px',
            display: 'flex',
            justifyContent: 'center',
            padding: '0 2rem'
        }
    })
)

const Navbar = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.navbar}>
                <Typography variant="h6" color="inherit">Countries of the world</Typography>
            </AppBar>
        </div>
    );
}

export default Navbar
