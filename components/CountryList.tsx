import CountryCard from '../components/CountryCard'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Search from '../components/Search'
import { makeStyles, createStyles, Box, Typography } from '@material-ui/core'
import { Country } from '../models/Country'
import { useState, useEffect } from 'react'
import FilterRegion from './FilterRegion'
import { filterRegionOptions, filterRegionOptionEnum } from '../models/FilterContinent'

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
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredRegion, setFilteredRegion] = useState(filterRegionOptionEnum.NONE);
    const [filterCountries, setFilterCountries] = useState(countries)

    useEffect(() => {
        setCountryNames(countries.map((country: Country) => country.name));
        setFilterCountries(countries);
    }, []);

    const handleSearch = (searchQuery: string) => {
        setSearchQuery(searchQuery);
        filterCountry();
    }

    const handleFilterRegion = (filterRegionValue: filterRegionOptionEnum) => {
        setFilteredRegion(filterRegionValue);
        filterCountry();
    }

    const filterCountry = () => {
        const filteredByNames: string[] = countryNames.filter((country: string) => {
            return country.toLowerCase().includes(searchQuery.toLowerCase());
        });

        const filteredByRegion = filteredRegion === filterRegionOptionEnum.NONE ? filteredByNames : filterCountries.filter(country => country.region === filteredRegion.toString());

        // setFilterCountries(filterCountries.reduce((acc: Country[], country: Country) => {
        //     return filteredNames.find(name => name === country.name) ? [...acc, country] : acc;
        // }, []));
    }

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} md={9}>
                    <Box mb={2} className={classes.flexContainer}>
                        <Search onSearch={handleSearch} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box mb={2} className={classes.flexContainer}>
                        <FilterRegion onFilterRegion={handleFilterRegion} />
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
