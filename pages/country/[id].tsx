import Head from 'next/head'
import Link from 'next/link'
import Button from '@material-ui/core/Button'
import { Country } from '../../models/Country'
import ArrowBack from '@material-ui/icons/ArrowBack'
import { makeStyles, createStyles, Theme } from '@material-ui/core'

export const getStaticPaths = async () => {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const data = await res.json();

  return {
    paths: data.map(country => {
      return {
        params: { id: country.alpha3Code }
      }
    }),
    fallback: false
  }
}

export const getStaticProps = async ({ params: { id } }) => {
  const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
  const data = await res.json();

  return {
    props: { country: data }
  }
}

type Props = {
  country: Country;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        back: {
            fontSize: '1rem',
            marginRight: theme.spacing(1),
        }
    })
)

const CountryDetail: React.FC<Props> = ({ country }) => {
  const classes = useStyles();

  return (
      <>
        <Head>
          <title>Countries of the world | {country.name}</title>
				</Head>
        <div>
          <Link href={'/'}>
            <Button variant="outlined" disableElevation>
              <ArrowBack className={classes.back}/>Back
            </Button>
          </Link>
          <h3>{ country.name }</h3>
        </div>
      </>
  );
}

export default CountryDetail
