import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    small: {
        fontSize: 12,
        backgroundColor: '#f44336',
        color: '#fff',
        marginRight: '10px',
        borderRadius: '0',
        border: '2px solid #FFF',
        '&:hover': {
            backgroundColor: '#e53935'
        }
    },
    large: {
        fontSize: 15,
        backgroundColor: '#f44336',
        borderRadius: '0',
        border: '2px solid #FFF',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#e53935'
        }
    }
});

const Logout = () => {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)');
    return (
        <React.Fragment>
            <Button variant="contained"
                className={matches ? classes.small : classes.large}
                endIcon={<ExitToAppIcon fontSize="small" />}
                href={'/auth/google'}
            >
                Logout
            </Button>
        </React.Fragment>
    )
}

export default Logout;