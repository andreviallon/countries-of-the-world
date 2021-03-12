import CountryCard from '../components/CountryCard'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Search from '../components/Search'
import { makeStyles, createStyles, Box, Typography } from '@material-ui/core'
import { Country } from '../models/Country'
import { useState, useEffect } from 'react'

const useStyles = makeStyles(() =>
    createStyles({
        flexContainer: {
            display: 'flex'
        },
        noResults: {
            width: '100%',
            textAlign: 'center'
        }
    })
)

interface CountryList {
    countries: Country[];
}

const CountryList: React.FC<CountryList> = ({ countries }) => {
    const classes = useStyles();
    const [countryNames, setCountryNames] = useState([]);
    const [filterCountries, setFilterCountries] = useState(countries)

    useEffect(() => {
        setCountryNames(countries.map((country: Country) => country.name));
    }, []);

    const handleSearch = (searchQuery: string) => {
        const filteredNames: string[] = countryNames.filter((country: string) => {
            return country.toLowerCase().includes(searchQuery.toLowerCase());
        });

        setFilterCountries(countries.reduce((acc: Country[], country: Country) => {
            return filteredNames.find(name => name === country.name) ? [...acc, country] : acc;
        }, []));
    }

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box mb={3} className={classes.flexContainer}>
                        <Search onSearch={handleSearch} />
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {filterCountries.length
                    ? filterCountries.map(country => (
                        <Grid item xs={12} sm={6} md={4} key={country.name}>
                            <CountryCard country={country} />
                        </Grid>))
                    :   <Typography className={classes.noResults} variant="h6" component="span">
                            No countries found...
                        </Typography>
                }
            </Grid>
        </Container>
    )
}

export default CountryList
