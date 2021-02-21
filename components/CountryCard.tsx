import Image from 'next/image'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    cardContent: {
        padding: 0
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover'
    },
    bold: {
        fontWeight: 500,
        marginLeft: '0.2rem'
    }
});

const CountryCard = ({ country }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent className={classes.cardContent}>
                    <img className={classes.image} src={country.flag} />
                    <Box p={1}>
                        <Typography gutterBottom variant="h6" component="h2">
                            {country.name}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="p">
                            Population:
                            <Typography className={classes.bold} variant="subtitle1" component="span">
                                {country.population}
                            </Typography>
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="p">
                            Region:
                            <Typography className={classes.bold} variant="subtitle1" component="span">
                                {country.region}
                            </Typography>
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="p">
                            Capital:
                            <Typography className={classes.bold} variant="subtitle1" component="span">
                                {country.capital}
                            </Typography>
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default CountryCard
