import React from 'react';
import notFound from '../assets/404.jpg';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    image: {
        width: '100%',
        position: 'absolute',
        left: '50',
        transform: 'translate(-50 %, -50 %)',
    },
    outer: {
        backgroundColor: '#fcba03',
        height: '100vh'
    }
})

const NotFound = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Paper variant="outlined" className={classes.outer}>
                <img src={notFound} className={classes.image} />
            </Paper>
        </React.Fragment>
    );
}

export default NotFound;