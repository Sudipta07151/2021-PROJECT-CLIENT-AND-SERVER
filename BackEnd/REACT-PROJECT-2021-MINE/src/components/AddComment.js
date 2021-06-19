import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addComment } from '../actions/index';

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

const AddComment = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        {
            setValue(event.target.value);
        }
    };

    const resetBox = (e) => {
        setValue('');
        e.target.value = '';
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            console.log(value);
            props.addComment(props.postID, value)
            setValue('');
        }
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
                id="standard-multiline-flexible"
                label="Add Comment"
                multiline
                rowsMax={4}
                value={value}
                onChange={handleChange}
                required
            />
            <Button className={classes.margin} variant="outlined" type="submit">COMMENT</Button>
            <Button className={classes.margin} variant="outlined"
                onClick={resetBox}
            >
                CANCEL</Button>
        </form>
    );
}

const mapStateToProps = (state) => {
    return {
        hey: 'hey'
    }
}

export default connect(mapStateToProps, { addComment })(AddComment);