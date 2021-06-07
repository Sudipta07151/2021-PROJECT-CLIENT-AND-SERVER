import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    button: {
        maxWidth: '50px',
        maxHeight: '50px',
        fontSize: '10px'
    },
}));



const LendBorrowBtn = (props) => {
    console.log(props)
    const classes = useStyles();
    return (
        <ButtonGroup disableElevation variant="contained" color="secondary" className={classes.button}>
            <Button>Rent Book</Button>
        </ButtonGroup>
    );
}

export default LendBorrowBtn;