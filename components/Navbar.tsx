import Link from 'next/link'
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
        },
        titleContainer: {
            display: 'flex'
        },
        link: {
            color: 'inherit',
            textDecoration: 'none'
        }
    })
)

const Navbar = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.navbar}>
                <div className={classes.titleContainer}>
                    <Link href={'/'}>
                        <a className={classes.link}>
                            <Typography variant="h6" color="inherit">Countries of the world</Typography>
                        </a>
                    </Link>
                </div>
            </AppBar>
        </div>
    );
}

export default Navbar
