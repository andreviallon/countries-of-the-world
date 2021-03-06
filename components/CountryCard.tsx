import Link from 'next/link'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { Country } from '../models/Country'
import formatPop from '../utils/formatPopulation'

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
        objectFit: 'cover',
        boxShadow: '0 0 4px rgba(0, 0, 0, 0.5)'
    },
    bold: {
        fontWeight: 500,
        marginLeft: '0.2rem'
    }
});

interface CountryCard {
    country: Country;
}


const CountryCard: React.FC<CountryCard> = ({ country }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <img className={classes.image} src={country.flag} />
                <Box p={1} pt={1} pb={0}>
                    <Typography gutterBottom variant="h6" component="h2">
                        {country.name}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="p">
                        Population:
                        <Typography className={classes.bold} variant="subtitle1" component="span">
                            {country?.population ? formatPop(country.population) : 'Unknown'}
                        </Typography>
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="p">
                        Region:
                        <Typography className={classes.bold} variant="subtitle1" component="span">
                            {country.region ? country.region : 'Unknown'}
                        </Typography>
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="p">
                        Capital:
                        <Typography className={classes.bold} variant="subtitle1" component="span">
                            {country.capital ? country.capital : 'Unknown'}
                        </Typography>
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Link href={'/country/' + country.alpha3Code}>
                    <Button variant="contained" color="primary" disableElevation>Learn More</Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default CountryCard
