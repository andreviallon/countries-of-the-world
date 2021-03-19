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

interface CountryProperty {
    property: string;
    value: string;
}


const CountryProperty: React.FC<CountryProperty> = ({ property, value }) => {
    const classes = useStyles();

    return (
        <Box mb={2}>
            <Typography variant="subtitle1" component="p" className={classes.value}>
                <span className={classes.bold}>{property}:</span>{value}
            </Typography>
        </Box>
    )
}

export default CountryProperty
