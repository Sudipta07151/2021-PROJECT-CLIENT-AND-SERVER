import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    small: {
        fontSize: 12,
        backgroundColor: '#ff8f00',
        color: '#fff',
        borderRadius: '0',
        border: '2px solid #FFF',
        marginRight: '10px',
        '&:hover': {
            backgroundColor: '#ef6c00'
        }
    },
    large: {
        fontSize: 15,
        backgroundColor: '#ff8f00',
        color: '#fff',
        borderRadius: '0',
        border: '2px solid #FFF',
        '&:hover': {
            backgroundColor: '#ef6c00'
        }
    }
});

const SignIn = () => {
    const history = useHistory();
    const handleToSignUp = () => {
        history.push('/SignIn');
    }
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)');
    return (
        <React.Fragment>
            <Button variant="contained"
                className={matches ? classes.small : classes.large}
                endIcon={<LockOpenIcon fontSize="small" />}
                onClick={handleToSignUp}
            // href={'/auth/google'}
            >
                SignIn
            </Button>
        </React.Fragment>
    )
}

export default SignIn;