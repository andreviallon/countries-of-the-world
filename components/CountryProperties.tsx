import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    bold: {
        fontWeight: 500,
        marginRight: '0.2rem'
    },
    value: {
        fontSize: '1.1rem'
    }
});

interface CountryProperties {
    property: string;
    values: string[];
}


const CountryProperties: React.FC<CountryProperties> = ({ property, values }) => {
    const classes = useStyles();

    return (
        <Box mb={2}>
            <Typography variant="subtitle1" component="p" className={classes.value}>
                <span className={classes.bold}>{property}:</span>
                {values.map(value => ( <span key={value}>{value}</span> ))}
            </Typography>
        </Box>
    )
}

export default CountryProperties
