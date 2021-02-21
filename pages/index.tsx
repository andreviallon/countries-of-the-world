import Head from 'next/head'
import CountryCard from '../components/CountryCard'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const data = await res.json();

  return {
    props: { countries: data }
  }
}

const Home = ({ countries }) => {
  return (
    <>
      <Head>
        <title>Countries of the world</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {countries && countries.map(country => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={country.name}>
              <CountryCard country={country} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Home
