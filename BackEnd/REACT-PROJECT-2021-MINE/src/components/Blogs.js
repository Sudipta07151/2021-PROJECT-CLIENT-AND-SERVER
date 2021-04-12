import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight'


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
                    <Button
                        type="submit"
                        color="secondary"
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