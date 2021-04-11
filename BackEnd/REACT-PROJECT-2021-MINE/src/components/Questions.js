import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '250ch',
        },
        button: {
            margin: theme.spacing(1),
        },
    },
    textField: {
        margin: theme.spacing(2),
    }
}));

const Questions = (props) => {
    const classes = useStyles();
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0);
    if (num !== props.number) {
        setNum(props.number);
    }
    useEffect(() => {
        if (num > 0) {
            setList([...Array(props.number).keys()].map(number => {
                return (
                    <TextField
                        key={number}
                        required
                        id="outlined-required"
                        label={`set option ${number + 1}`}
                        variant="outlined"
                        color="secondary"
                        fullWidth={true}
                        className={classes.textField}
                    />
                )
            }));
        }
    }, [num]);

    return (
        <div id="Questions">
            {num == 0 ? null : list}
            {num == 0 ? null : <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
            >
            </Button>}
        </div>
    )
}

export default Questions;