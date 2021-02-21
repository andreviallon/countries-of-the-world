import Head from 'next/head'

export const getStaticProps = async () => {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await res.json();

    return {
        props: { countries: data }
    }
}

const Country = ({ countries }) => {
    return (
        <>
            <Head>
                <title>Countries Details</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Country Details</h1>
        </>
    )
}

export default Country
