import Head from 'next/head'
import CountryList from '../components/CountryList'

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
      <CountryList countries={countries} />
    </>
  )
}

export default Home
