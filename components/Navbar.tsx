import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
    createStyles({
        navbar: {
            flexGrow: 1,
            height: '70px',
            display: 'flex',
            justifyContent: 'center',
            padding: '0 2rem',
            position: 'fixed',
            top: 0
        }
    })
)

const Navbar = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.navbar}>
                <Typography variant="h6" color="inherit">Countries of the world</Typography>
            </AppBar>
        </div>
    );
}

export default Navbar
