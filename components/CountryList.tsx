import Head from 'next/head'
import CountryCard from '../components/CountryCard'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const CountryList = ({ countries }) => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                {countries && countries.map(country => (
                    <Grid item xs={12} sm={6} md={4} key={country.name}>
                        <CountryCard country={country} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default CountryList
