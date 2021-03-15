import React, { useState, useEffect } from 'react'
import { makeStyles, createStyles, TextField } from '@material-ui/core';
import { useDebounce } from '../customHooks/useDebounce';

const useStyles = makeStyles(() =>
    createStyles({
        input: {
            width: '100%'
        }
    })
)

const Search = ({ onSearch }) => {
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState('');
    const debouncedSearchTerm = useDebounce(searchValue, 500);

    useEffect(() => {
        onSearch(searchValue);
    },[debouncedSearchTerm]);

    const handleChange = event => setSearchValue(event.target.value);

    return (
        <TextField className={classes.input} label="Search for a country" variant="filled" value={searchValue} onChange={handleChange} />
    )
}

export default Search
