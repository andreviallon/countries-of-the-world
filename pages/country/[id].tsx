export const getStaticPaths = async () => {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await res.json();

    const paths = data.map(country => {
        return {
            params: { id: country.name.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://restcountries.eu/rest/v2/' + id);
    const data = await res.json();

    return {
        props: { country: data }
    }
}

const CountryDetail = ({ country }) => {
    console.log('country', country);
    return (
        <>
            <h1>{country.name}</h1>
        </>
    );
}

export default CountryDetail;
