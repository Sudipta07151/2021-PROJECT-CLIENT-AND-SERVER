import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
    margin: {
        margin: theme.spacing(1),
    }
}));

const AddComment = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        {
            setValue(event.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            console.log(value);
            setValue('');
        }
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <div>
                <TextField
                    id="standard-multiline-flexible"
                    label="Add Comment"
                    multiline
                    rowsMax={4}
                    value={value}
                    onChange={handleChange}
                    required
                />
            </div>
            <Button className={classes.margin} variant="outlined">COMMENT</Button>
            <Button className={classes.margin} variant="outlined">CANCEL</Button>
        </form>
    );
}
export default AddComment;