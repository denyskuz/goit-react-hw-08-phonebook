import React from 'react'
import { func } from 'prop-types';
import classes from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/slice';
const Filter = () => {
    const dispatch = useDispatch();
    const setFilterValue = e => {
        dispatch(setFilter(e.currentTarget.value.toUpperCase()));
    };
    return (
        <div className={classes.container}>
            <p  className={classes.title }>Filter contact</p>
            <input
                className={classes.input}
                name="search"
                placeholder="Search ..."
                onChange={setFilterValue}
            />
        </div>
    )
    
}
Filter.propsTypes = {
    onHandleFilter: func.isRequired
}
export default Filter;