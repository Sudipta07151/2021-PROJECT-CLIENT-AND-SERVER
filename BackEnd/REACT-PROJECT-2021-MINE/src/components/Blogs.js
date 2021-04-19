import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    field1: {
        marginTop: 10,
        marginBottom: 20,
        display: 'block',
    },
    field2: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
    },
    formControl: {
        display: 'flex',
    }
})

const Blogs = () => {
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [postError, setPostError] = useState(false);
    const classes = useStyles();
    const getValPostTitle = (e) => {
        setPostTitle(e.target.value);
    }
    const getValPostBody = (e) => {
        setPostBody(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setPostError(false);
        setTitleError(false);
        if (postTitle === '')
            setTitleError(true)
        if (postBody === '')
            setPostError(true)
        if (postTitle && postBody) {
            setPostTitle('');
            setPostBody('');
        }
    }
    const [state, setState] = React.useState({
        art: false,
        education: false,
        technical: false,
        other: false
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { art, education, technical, other } = state;


    return (
        <div>
            <Container>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField
                        onChange={getValPostTitle}
                        value={postTitle}
                        label="Blog Title"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        className={classes.field1}
                        multiline
                        rows={2}
                        error={titleError}
                    />
                    <TextField
                        onChange={getValPostBody}
                        value={postBody}
                        label="Post"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        className={classes.field2}
                        multiline
                        rows={20}
                        error={postError}
                    />
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">SELECT TAGS</FormLabel>
                        <FormGroup className={classes.formGroup}>
                            <Grid container>
                                <Grid itms xs={12} md={2}>
                                    <FormControlLabel
                                        control={<Checkbox checked={art} onChange={handleChange} name="art" />}
                                        label="art"
                                    />
                                </Grid>
                                <Grid itms xs={12} md={2}>
                                    <FormControlLabel
                                        control={<Checkbox checked={education} onChange={handleChange} name="education" />}
                                        label="education"
                                    />
                                </Grid>
                                <Grid itms xs={12} md={2}>
                                    <FormControlLabel
                                        control={<Checkbox checked={technical} onChange={handleChange} name="technical" />}
                                        label="technical"
                                    />
                                </Grid>
                                <Grid itms xs={12} md={2}>
                                    <FormControlLabel
                                        control={<Checkbox checked={other} onChange={handleChange} name="other" />}
                                        label="other"
                                    />
                                </Grid>
                            </Grid>
                        </FormGroup>
                    </FormControl>
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        endIcon={<ArrowRightIcon />}
                    >
                        Submit Post
                    </Button>

                </form>
            </Container>
        </div >
    )
}

export default Blogs;