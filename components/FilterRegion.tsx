import React, { useState, useEffect } from 'react'
import { createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import { filterRegionOptions } from '../models/FilterContinent';

const useStyles = makeStyles(() =>
    createStyles({
        form: {
            width: '100%'
        }
    })
)

const FilterRegion = ({ onFilterRegion }) => {
    const classes = useStyles();
    const [filterValue, setFilterValue] = useState(filterRegionOptions[0]);

    useEffect(() => {
        onFilterRegion(filterValue);
    }, [filterValue]);

    const handleChange = event => setFilterValue(event.target.value);

    return (
        <FormControl variant="filled" className={classes.form}>
            <InputLabel id="filter-region-label">Filter by region</InputLabel>
            <Select labelId="filter-region-label" id="filter-region" value={filterValue} onChange={handleChange}>
                {filterRegionOptions.map(filterRegionOption => (
                    <MenuItem key={filterRegionOption} value={filterRegionOption}>{filterRegionOption}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default FilterRegion
