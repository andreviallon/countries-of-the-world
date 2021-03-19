import { useState, useEffect } from 'react'
import { Container, Grid, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Country } from '../models/Country'
import CountryProperty from '../components/CountryProperty'
import CountryProperties from '../components/CountryProperties'
import formatPop from '../utils/formatPopulation'

const useStyles = makeStyles({
    image: {
        width: '100%',
        objectFit: 'cover'
    },
    bold: {
        fontWeight: 500,
        marginRight: '0.2rem'
    }
});

interface CountryDetails {
    country: Country;
}


const CountryDetails: React.FC<CountryDetails> = ({ country }) => {
    const classes = useStyles();

    const [languages, setLanguages] = useState([]);
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        for (const language of country.languages) {
            setLanguages([...languages, language.name]);
        }

        for (const currency of country.currencies) {
            setCurrencies([...currencies, currency.name]);
        }
    }, [country]);

    return (
        <Container maxWidth="lg">
            <Box mb={2}>
                <Typography variant="h4" component="h1" className={classes.bold}>{country.name}</Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item sm={12} md={6}>
                    <Box mr={4}>
                        <img className={classes.image} src={country.flag} />
                    </Box>
                </Grid>
                <Grid item sm={12} md={6}>
                    <CountryProperty property='Native name' value={country.nativeName} />
                    <CountryProperty property='Population' value={formatPop(country.population)} />
                    <CountryProperty property='Region' value={country.region} />
                    <CountryProperty property='Sub Region' value={country.subregion} />
                    <CountryProperty property='Capital' value={country.capital} />
                    <CountryProperties property='Top Level Domain' values={country.topLevelDomain} />
                    <CountryProperties property='Currencies' values={currencies} />
                    <CountryProperties property='Languages' values={languages} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default CountryDetails
